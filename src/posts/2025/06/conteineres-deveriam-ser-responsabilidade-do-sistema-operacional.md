---
lang: pt
langEnLink: ../containers-should-be-an-operating-system-responsibility
title: Contêineres deveriam ser responsabilidade do sistema operacional
date: 2025-06-10
excerpt: Minha opinião sobre contêineres e uma proposta alternativa para implementação pelos sistemas operacionais.
published: true
enableMermaid: false
tags:
- em português
- architecture
- security
---

Não antes de 2018, pouco a pouco, nos dias de trabalho na empresa, meus colegas começaram a falar sobre Docker, uma tecnologia que preparava ambientes para rodar os programas nos servidores. Menos de dois anos depois, Docker tinha se tornado a regra e aplicações novas vinham com Dockerfile e arquivos YAML para Kubernetes.

Apesar de entender a finalidade de uso dos contêineres, parte de mim dizia que eram uma solução desnecessariamente pesada e que os problemas solucionados deveriam ser tratados pelos sistemas operacionais. Minha opinião permanece.

Neste artigo, abordarei os problemas resolvidos pelos contêineres, alternativas e uma proposta para ser implementada por sistemas operacionais.

## Começando pelo fim

Afinal de contas, por que usamos contêineres? A maioria absoluta das respostas é: "Porque preciso rodar minha aplicação na nuvem".

O Docker resolveu dois problemas: a preparação do ambiente e a segurança de execução.

A preparação do ambiente se dá porque as imagens dos contêineres vêm com o necessário para a execução do programa, que geralmente são o *runtime* da aplicação e pacotes relacionados. Isso pode ser complexo principalmente em ambientes Linux, pois há toda uma árvore de dependências que é sensível a mudanças e atualizações. Ter uma árvore de dependências rígida e reproduzível garante estabilidade, evitando que a aplicação pare de funcionar corretamente por incompatibilidade com alguma nova versão de um pacote.

A segurança de execução decorre de o contêiner ser um processo com volume de arquivos isolado, sem risco de invadir e infectar arquivos da máquina principal. O mapeamento de conexões de rede também é isolado.

### Preparação de ambiente, sem contêineres

Existem várias formas de se preparar um ambiente sem recorrer a contêineres.

Uma é realmente instalar as dependências necessárias na máquina.

Outra é compilação autocontida (*self-contained deployment*), em que o executável carrega consigo o *runtime* da linguagem e todas suas dependências. Assim, a máquina não precisa ter o *runtime* instalado.

Algumas linguagens oferecem compilação para código de máquina, chamada de AOT (*ahead-of-time compilation*), que faz com que o *runtime* não seja necessário e também reduz o número de dependências externas, além de oferecer maior performance e menor consumo de memória aos programas.

A base de uma imagem de contêiner Docker é a *user space*, que é o sistema operacional, menos sua *kernel*. São programas essenciais, bibliotecas, serviços em background e outros arquivos.

Carregar uma *user space* de sistema operacional para cada contêiner desperdiça memória RAM e disco rígido. A imagem Docker do Ubuntu, por exemplo, ocupa 188MB, o que é bastante. Existem imagens ultra-leves que deixam apenas o que é estritamente necessário; por exemplo, a imagem Alpine Linux ocupa apenas 5MB. Ainda assim, é um peso extra para cada aplicação.

As soluções acima mostram como mitigar o risco de uma árvore de dependências frágil.

### Segurança de execução, sem contêineres

Esse ponto é mais complicado. Aqui, queremos limitar o acesso do programa ao sistema de arquivos e à rede.

Na maioria dos sistemas operacionais, o controle de acesso ao sistema de arquivos é a nível de usuário. Para fazer com que um programa só possa acessar determinados arquivos e diretórios, é preciso criar um usuário (ou grupo de usuários) com essas regras e então fazer com que o programa seja sempre executado a partir desse usuário.

Já a restrição de comunicação de rede é feita via *firewall*, com controle de acesso a nível de usuários e programas.

## Proposta: Manifestos de execução

Uma sugestão para sistemas operacionais seria ter manifestos de execução, que definem claramente como um programa é executado e as permissões dele no sistema.

O manifesto de execução poderia ainda definir com quais dispositivos e periféricos o programa interage. Ou seja, poderia ser útil também para programas desktop, com interfaces gráficas.

Esse arquivo poderia ser assinado com um par de chaves pública-privada para garantia de autenticidade. Um *hash* verificaria se o executável corresponde ao esperado pelo manifesto.

```yml
manifestVersion: v1
author: myCompany
name: myApp
run: ./myapp
hash: <hash_do_executável> # opcional

allowedDirectories:
  - name: appDir
    path: ./**/ # todos os subdiretórios
    permission: read
  - name: sharedFolder
    path: \\EnvGeoServer\Repository\Tools\admin\
    permission: readWrite

allowedNetwork:
  - name: localhost
    direction: inbound
    ip: 127.0.0.1
    protocol: tcp
    port: 8080

allowedDevices:
  - mouse
  - keyboard
  - audioOut
  - display
```

## Fontes e leituras interessantes

- [Ivan Velichko - You Don't Need an Image To Run a Container](https://iximiuz.com/en/posts/you-dont-need-an-image-to-run-a-container/)
- [Stack Overflow - What is meant by shared kernel in Docker?](https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker)
- [AppContainer isolation - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation)
- [SuperUser - Restrict access to files by list of programs](https://superuser.com/questions/1238613/restrict-access-to-files-by-list-of-programs)
- [Stack Overflow - Prevent accessing files outside of given working directory](https://stackoverflow.com/questions/11345374/prevent-accessing-files-outside-of-given-working-directory)
- [The AndroidManifest.xml File | Android Developers](https://stuff.mit.edu/afs/sipb/project/android/docs/guide/topics/manifest/manifest-intro.html)
- [Wikipédia - Compilação AOT](https://pt.wikipedia.org/wiki/Compila%C3%A7%C3%A3o_AOT)