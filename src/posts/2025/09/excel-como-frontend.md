---
lang: pt
langEnLink: ../excel-as-a-frontend
title: Excel como frontend
date: 2025-09-29
excerpt: Analisando a idéia de usar o Microsoft Excel como frontend de um sistema.
published: true
enableMermaid: false
tags:
- em português
- excel
- architecture
---

{% post_avif_img '2025_09_mr_burns_excellent.avif' '2025_09_mr_burns_excellent.jpg' 'Mr. Burns dos Simpsons dizendo Excelente' %}

As finanças pessoais e das empresas. Relatórios governamentais e gerenciais. Extratos de operações. Inventários. Projeções. Simulações. Listas de pessoas. 90% do PIB global. O que todas essas coisas têm em comum?

Todas elas passam pelo Excel.

Nos projetos em que trabalhei, uma das funcionalidades mais pedidas pelos clientes é exportar dados para o Excel, principalmente em setores de *back-office*, para que os analistas possam encontrar informações, produzir relatórios e calcular somas com maior facilidade. Não só *back-office* — profissionais de campo, atendentes e vendedores também usam essa ferramenta.

Alguns exemplos da vida real:

- Relatórios internos de transações de indivíduos;
- Relatórios de vendas agrupadas por parceiro de negócio;
- Um vendedor que precisa ver a lista de ofertas disponíveis para os clientes;
- Um economista que precisa das taxas de inflação dos últimos meses;
- Uma analista de RH que quer ver as horas trabalhadas dos funcionários;
- Um analista de investimento que necessita do histórico de valores de um ativo.

O Excel é uma ótima ferramenta para visualizar dados e é muito intuitiva, facilmente usada por qualquer pessoa.

Tendo em vista que ele muitas vezes é o formato final dos dados, surge a questão: ao invés de ter uma aplicação web, com backend e frontend, hospedagem, servidores e etc., não poderíamos fazer tudo direto pelo Excel? Seria mais fácil, não? Neste artigo, vamos explorar essa idéia.

## Conectando com fontes de dados externas

O Excel pode se conectar a fontes de dados externas e baixar dados delas. Existem várias integrações disponíveis, tais como:

- XMLs provenientes da internet
- Arquivos XML, CSV, TXT e XLSX
- Arquivos posicionais
- Bancos de dados, como SQL Server, PostgreSQL, MySQL
- Azure Blob Storage
- Endpoints HTTP
- E diversas outras.

Por exemplo, vamos criar um arquivo XML local com o seguinte conteúdo:

```xml
<ipcas_anuais>
<ipca><ano>2014</ano><valor>6,41%</valor></ipca>
<ipca><ano>2015</ano><valor>10,67%</valor></ipca>
<ipca><ano>2016</ano><valor>6,29%</valor></ipca>
<ipca><ano>2017</ano><valor>2,95%</valor></ipca>
<ipca><ano>2018</ano><valor>3,75%</valor></ipca>
<ipca><ano>2019</ano><valor>4,31%</valor></ipca>
<ipca><ano>2020</ano><valor>4,52%</valor></ipca>
<ipca><ano>2021</ano><valor>10,06%</valor></ipca>
<ipca><ano>2022</ano><valor>5,78%</valor></ipca>
<ipca><ano>2023</ano><valor>4,62%</valor></ipca>
<ipca><ano>2024</ano><valor>4,83%</valor></ipca>
</ipcas_anuais>
```

No Excel, vamos na aba **Dados**, depois clicar em **Nova Consulta** > **Do Arquivo** > **Do XML**, e então selecionar nosso arquivo.

{% post_img '2025_09_excel_import_xml_file_pt.png' 'Importar fonte de dados externa arquivo XML no Excel' %}

Após a importação, o resultado será como abaixo:

{% post_img '2025_09_excel_import_xml_file_result_pt.png' 'Resultado após importação de XML no Excel' %}

Sempre que quiser sincronizar os dados, basta ir na aba **Consulta** e clicar em **Atualizar**, e a tabela será atualizada com os dados remotos.

{% post_img '2025_09_excel_refresh_data_source_pt.png' 'Sincronização de fonte de dados externa no Excel' %}

## Vantagens

Fazer o Excel puxar dados remotos tem grandes vantagens.

Uma delas é que não precisamos gastar esforço, tempo e infraestrutura construindo um site para disponibilizar esses dados; basta prover uma planilha e a fonte de dados.

Até mesmo a segurança de acesso às informações já está resolvida:

- Se a fonte de dados for um arquivo remoto, basta controlar as permissões de acesso a esse arquivo.
- Se a fonte de dados for um banco de dados ou endpoint HTTP, pode-se passar uma credencial com permissões apenas para consultas autorizadas.

Outra vantagem é que uma vez baixados, os dados ficam disponíveis para uso mesmo sem conexão com a Internet.

Por fim, ter planilhas individuais confere aos usuários grande liberdade de trabalho, pois eles podem customizar, fazer rascunhos e experimentos nelas.

## Operações de escrita

Podemos usar o Excel para inserir, excluir e modificar dados remotos? Sim. O caminho para se fazer isso são os *UserForms* e as *macros*.

Os *UserForms* são janelas e formulários customizáveis para que o usuário insira informações. Já as *macros* são o código por trás, que valida entradas e é responsável por se conectar a servidores e bancos de dados.

{% post_img '2025_09_excel_userform.png' 'Userform no Excel' %}

{% image_caption 'Exemplo de userform no Excel.' %}

Deve-se ter em mente que sempre que for necessária uma mudança nessas integrações, os usuários terão de baixar versões atualizadas da planilha.

Recomendo os seguintes tutoriais de userforms: um do [Excel Easy](https://www.excel-easy.com/vba/userform.html) e outro da [Wise Owl Training](https://www.wiseowl.co.uk/vba-macros/guides/user-forms/vba-userform/).

## Conclusão

Acredito que o Excel é sim uma alternativa viável a páginas Web e programas desktop, principalmente em serviços internos de empresas. Para aplicações voltadas a consumidores finais, contudo, não é uma boa solução, pois a pessoa precisaria ter um computador com Excel instalado, além de o visual não ser atrativo; nesses casos, sites Web e aplicativos de celular são mais adequados.
