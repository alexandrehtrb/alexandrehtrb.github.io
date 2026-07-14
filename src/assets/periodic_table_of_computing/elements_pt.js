// https://github.com/Bowserinator/Periodic-Table-JSON

var elements = [
{
  "ypos": 1,
  "xpos": 1,
  "number": 1,
  "name": "Git",
  "symbol": "Git",
  "category": "developer tool",
  "source": "https://git-scm.com/",
  "summary": "O Git é um sistema de controle de versões distribuído capaz de gerenciar versões de textos, códigos-fontes e dados. É usado principalmente por programadores que desenvolvem software colaborativamente, seja em empresas ou com a comunidade.<br/><br/>É gratuito e livre, sob a licença GPL-2.0.<br/><br/>O Git foi inicialmente projetado e desenvolvido por Linus Torvalds para o desenvolvimento do kernel Linux, mas foi difundido e adotado por muitos outros projetos. É o sistema de controle distribuído de versões mais popular, com quase 95% dos desenvolvedores dizendo que o usam como seu principal controle de versões, segundo uma pesquisa de 2022."
},
{
  "ypos": 1,
  "xpos": 18,
  "number": 2,
  "name": "IBM z/OS",
  "symbol": "Z",
  "category": "operating system",
  "source": "https://www.ibm.com/products/zos",
  "summary": "O IBM z/OS é um sistema operacional que roda em mainframes IBM Z, com arquiteturas s390x."
},
{
  "ypos": 2,
  "xpos": 1,
  "number": 3,
  "name": "Extensible Markup Language",
  "symbol": "Xml",
  "category": "structured data format",
  "source": "https://www.w3schools.com/xml/",
  "summary": "O XML (<i>Extensible Markup Language</i>) é uma linguagem de marcação e formato de arquivo para armazenamento, transmissão e reconstrução de dados. Ele define um conjunto de regras para codificação de documentos em um formato legível por humanos e máquinas.<br/><br/>As metas de design do formato focam em simplicidade, generalidade e usabilidade. É um formato em texto com suporte ao Unicode, atendendo diversos idiomas. Apesar do XML focar em documentos, ele é usado para representação de diversas estruturas de dados, como as usadas em serviços SOAP.<br/><br/>A linguagem de marcação se popularizou no Brasil na emissão de notas fiscais eletrônicas, simplificando a automatização, a troca e a validação das informações.<br/><br/>O XML também serviu de base para a criação de outras linguagens de marcação e de formatos de documentos, como o RSS, Atom, SVG e o XHTML."
},
{
  "ypos": 2,
  "xpos": 2,
  "number": 4,
  "name": "Hypertext Markup Language",
  "symbol": "Html",
  "category": "internet file format",
  "source": "https://www.d.umn.edu/~gshute/webdev/HTML/examples.html",
  "summary": "O HTML (<i>Hypertext Markup Language</i>) é uma linguagem de marcação para documentos a serem exibidos em um navegador de internet. Ele define o conteúdo e a estrutura das informações apresentadas no documento, muitas vezes, também auxiliado por tecnologias como o CSS (<i>Cascading Style Sheets</i>) e linguagens de programação, como o JavaScript.<br/><br/>Navegadores de internet recebem documentos HTML de um servidor Web, ou de um armazenamento local, e renderizam os documentos em páginas Web. O HTML descreve uma página Web de forma semântica e pode descrever também a sua aparência."
},
{
  "ypos": 2,
  "xpos": 13,
  "number": 5,
  "name": "Computação de alta performance",
  "symbol": "Hpc",
  "category": "type of computing",
  "source": "https://www.nvidia.com/en-us/glossary/high-performance-computing/",
  "summary": "Computação de alta performance, em inglês, <i>high-performance computing</i> (HPC), são sistemas caracterizados por processamento extremamente veloz, grande capacidade de memória e redes de alta performance, havendo a capacidade de processar em paralelo quantidades massivas de dados. Um supercomputador é um tipo de HPC que é altamente avançado e provê poder e velocidade computacionais imensas.<br/><br/>Nos últimos anos, HPC evoluiu de uma ferramenta focada em investigações científicas baseadas em simulações para um papel dual, de rodar simulações e aprendizado de máquina (ML, <i>machine learning</i>). Esse novo escopo para sistemas HPC ganhou força porque a combinação de simulações físicas e ML diminuiu o tempo para pesquisas científicas em áreas como modelagens climáticas, descobertas de medicamentos, dobras em proteínas e dinâmica dos fluidos."
},
{
  "ypos": 2,
  "xpos": 14,
  "number": 6,
  "name": "Structured Query Language",
  "symbol": "Sql",
  "category": "database system",
  "source": "https://en.wikipedia.org/wiki/SQL",
  "summary": "O SQL (Structured Query Language) é uma linguagem padronizada para armazenamento, manipulação e recuperação de dados em bancos de dados.<br/><br/>Surgida nos anos 1970, o SQL introduziu duas novas vantagens ante APIs de leitura e escrita mais antigas, como o ISAM e o VSAM. Primeiro, conseguia acessar vários registros com um único comando. Segundo, não precisava especificar como acessar um registro, isto é, com ou sem um índice.<br/><br/>O escopo do SQL inclui consulta de dados, manipulação (inserção, modificação e exclusão), definição (criação de esquemas e modificação), e controle de acesso. Apesar de o SQL ser uma linguagem declarativa, ele inclui elementos procedurais.<br/><br/>Existem vários sistemas de bancos de dados que são baseados em SQL, citando alguns: SQLite, Microsoft SQL Server, PostgreSQL, Oracle, DuckDB, SAP HANA, e muitos outros."
},
{
  "ypos": 2,
  "xpos": 15,
  "number": 7,
  "name": "vi improved",
  "symbol": "Vim",
  "category": "developer tool",
  "source": "https://www.vim.org/",
  "summary": "O Vim é um editor de texto altamente configurável, feito para criar e alterar de forma eficiente qualquer tipo de texto. Ele é incluso como <i>\"vi\"</i> na maioria dos sistemas UNIX e no Apple macOS."
},
{
  "ypos": 2,
  "xpos": 16,
  "number": 8,
  "name": "Notepad++",
  "symbol": "Npp",
  "category": "developer tool",
  "source": "https://notepad-plus-plus.org/",
  "summary": "O Notepad++ (às vezes chamado de npp ou NPP) é um editor de texto e código-fonte, para uso no Microsoft Windows. Ele suporta abas de edição, o que permite trabalhar com múltiplos arquivos abertos em uma única janela. O nome do programa vem do operador de incremento de números na linguagem C.<br/><br/>O Notepad++ é um software gratuito e livre, sob a licença GNU General Public License (GPL) 3.0."
},
{
  "ypos": 2,
  "xpos": 17,
  "number": 9,
  "name": "Visual Studio",
  "symbol": "Vs",
  "category": "developer tool",
  "source": "https://visualstudio.microsoft.com/",
  "summary": "O Visual Studio e o Visual Studio Code são IDEs da Microsoft. Suas funcionalidades incluem depuração de código (<i>debugging</i>), realce de sintaxe, autocompleção de código, pré-preenchimentos, refatoração automática e integração com o Git. Os usuários podem alterar o tema, atalhos de teclado e preferências, assim como instalar extensões que adicionam novas funcionalidades, incluindo o suporte a outras linguagens e frameworks.<br/><br/>O Visual Studio é código-fechado e funciona apenas no Windows, enquanto que o Visual Studio Code é código-aberto e roda em Windows, Linux e macOS."
},
{
  "ypos": 2,
  "xpos": 18,
  "number": 10,
  "name": "Apple iOS",
  "symbol": "I",
  "category": "operating system",
  "source": "https://www.apple.com/br/os/ios/",
  "summary": "O Apple iOS (anteriormente iPhone OS) é um sistema operacional criado pela Apple para sua linha de smartphones iPhone.<br/><br/>O iOS é baseado no macOS. Assim como ele, inclui componentes da microkernel Mach e do FreeBSD. Ele é um sistema operacional do tipo Unix."
},
{
  "ypos": 3,
  "xpos": 1,
  "number": 11,
  "name": "JS Object Notation",
  "symbol": "Json",
  "category": "structured data format",
  "source": "https://www.json.org/json-en.html",
  "summary": "JSON (<i>JavaScript Object Notation</i>) é um formato leve para intercâmbio de dados. Ele é fácil para a leitura e escrita por humanos, e é baseado em um subconjunto do JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. O JSON é um formato de texto que é completamente independente de uma linguagem de programação, apesar do nome se referir ao JavaScript.<br/><br/>O JSON é construído em duas estruturas de dados:<br/><br/>- Uma coleção de pares chave-valor. Nas linguagens de programação, essa coleção costuma ser mapeada como um objeto, registro, dicionário, tabela ou lista chaveada.<br/>- Uma lista ordenada de valores. Nas linguagens de programação, converte-se em um vetor, array, lista ou seqüência."
},
{
  "ypos": 3,
  "xpos": 2,
  "number": 12,
  "name": "Markdown",
  "symbol": "Md",
  "category": "internet file format",
  "source": "https://www.markdownguide.org/cheat-sheet/",
  "summary": "O Markdown é uma ferramenta de conversão de texto para HTML, feita para quem redige textos para a Web. Markdown permite escrever em um formato estruturado simples e que se converte para HTML válido.<br/><br/>Foi criado por John Gruber em 2004, hoje é uma das linguagens de marcação mais populares, sendo usada em blogs de internet, fóruns online e em redes sociais, como o Reddit e o Stack Overflow."
},
{
  "ypos": 3,
  "xpos": 13,
  "number": 13,
  "name": "UNIX shell",
  "symbol": "Sh",
  "category": "scripting language",
  "source": "https://swcarpentry.github.io/shell-novice/",
  "summary": "Um Unix shell provê uma linguagem de comando que pode ser usada interativamente ou para escrita de scripts para execução em um sistema operacional do tipo Unix. O usuário normalmente trabalha dentro de um shell Unix via um terminal, também conhecido como console ou prompt de comando; entretanto, acesso direto via conexões de hardware ou via Secure Shell (SSH) também são comuns para servidores.<br/><br/>O shell é um tipo de programa chamado interpretador. Ele opera em um ciclo: aceita um comando, interpreta o comando, executa o comando e aguarda que o usuário insira um novo comando. O shell exibe um <i>\"prompt\"</i>, para notificar o usuário que está pronto para aceitar comandos.<br/><br/>Em muitos sistemas, o sh é um link simbólico ou rígido a uma destas alternativas: Almquist shell (ash), Bourne-Again shell (bash), Korn shell (ksh) e Z shell (zsh)."
},
{
  "ypos": 3,
  "xpos": 14,
  "number": 14,
  "name": "Computação pessoal",
  "symbol": "Pc",
  "category": "type of computing",
  "source": "https://en.wikipedia.org/wiki/Personal_computer",
  "summary": "Um computador pessoal (PC, em inglês, <i>personal computer</i>) é um computador feito para uso individual. É utilizado para tarefas como processamento de textos, navegação na internet, correio eletrônico, reprodução de multimídia e jogos. Computadores pessoais são feitos para uso de uma pessoa comum, não necessariamente um expert em computação, como um administrador, empresa ou técnico. O uso não é compartilhado, como pode ser o caso em mainframes. Empresas e instituições que possuíam computadores nos anos 1960 tinham que escrever seus próprios programas para conseguirem fazer qualquer coisa útil em seus computadores. O termo \"computador de casa\" também tem sido usado, principalmente a partir do fim dos anos 1970 e década de 1980. O surgimento dos computadores pessoais e a subseqüente Revolução Digital afetou significativamente a vida das pessoas.<br/><br/>Em 1984, a Apple lançou o Macintosh, em um comercial durante o Super Bowl. O Macintosh foi o primeiro computador vendido em larga escala com navegação com mouse e interface gráfica WIMP (<i>Windows, Icons, Menus, and Pointers</i>; em português, Janelas, Ícones, Menus e Ponteiros). Desde o início da década de 1990, sistemas operacionais da Microsoft (primeiro o MS-DOS e depois o Windows) e CPUs baseadas em arquitetura Intel x86 – chamados de Wintel – têm dominado o mercado de computadores pessoais.<br/><br/>Atualmente, em 2026, smartphones podem também serem considerados um tipo de computador pessoal, em razão da quantidade de tarefas e programas que eles executam, e pela presença nas vidas das pessoas."
},
{
  "ypos": 3,
  "xpos": 15,
  "number": 15,
  "name": "MongoDB",
  "symbol": "Mn",
  "category": "database system",
  "source": "https://www.mongodb.com/",
  "summary": "MongoDB é um banco de dados NoSQL, orientado a documentos. Ao invés de armazenar registros em tabelas com colunas, o MongoDB armazena itens em formato BSON (uma versão modificada do JSON que permite campos com valores binários) dentro de coleções.<br/><br/>A primeira versão foi publicada em fevereiro de 2009 pela empresa 10gen (atualmente MongoDB Inc.).<br/><br/>O MongoDB suporta funcionalidades como sharding, replicação e transações ACID (a partir da versão 4.0)."
},
{
  "ypos": 3,
  "xpos": 16,
  "number": 16,
  "name": "Redis",
  "symbol": "Rd",
  "category": "database system",
  "source": "https://redis.io/",
  "summary": "O Redis, acrônimo em inglês de <i>Remote Dictionary Server</i>, Servidor de Dicionário Remoto, é um banco de dados NoSQL e que é volátil, ou seja, os dados permanecem na memória RAM apenas. Vários tipos de estruturas de dados podem ser armazenadas no Redis, como pares chave-valor, filas, listas, HyperLogLog, etc.<br/><br/>Por guardar os dados em memória RAM, o Redis oferece uma velocidade muito maior do que outros bancos de dados, ao custo da não-retenção em caso de crashes da aplicação ou desligamento do sistema. A principal aplicação do Redis é usá-lo como cache.<br/><br/>O projeto foi criado por Salvatore Sanfilippo, começando em 2009."
},
{
  "ypos": 3,
  "xpos": 17,
  "number": 17,
  "name": "IntelliJ IDEA",
  "symbol": "Ij",
  "category": "developer tool",
  "source": "https://www.jetbrains.com/idea/",
  "summary": "IntelliJ IDEA é um ambiente de desenvolvimento integrado (IDE) escrito em Java para o desenvolvimento de software de computador escrito em Java, Kotlin, Groovy e outras linguagens baseadas em JVM. Ele é desenvolvido pela JetBrains (anteriormente conhecido como IntelliJ) e está disponível como uma edição da comunidade com licença Apache 2 e em uma edição comercial proprietária. Ambos podem ser usados ​​para desenvolvimento comercial.<br/><br/>Em dezembro de 2014, a Google anunciou a versão 1.0 do Android Studio, uma IDE open-source para aplicativos Android, baseada na versão comunitária open-source do Intellij IDEA. Outras IDEs baseadas no IntelliJ são o AppCode, CLion, DataGrip, GoLand, PhpStorm, PyCharm, Rider, RubyMine, WebStorm, e o MPS."
},
{
  "ypos": 3,
  "xpos": 18,
  "number": 18,
  "name": "Microsoft Windows",
  "symbol": "W",
  "category": "operating system",
  "source": "https://www.microsoft.com/pt-br/windows/",
  "summary": "O Windows é um sistema operacional de código fechado desenvolvido pela Microsoft.<br/><br/>A primeira versão do Windows, Windows 1.0, foi lançada em 20 de novembro de 1985 como um sistema operacional com interface gráfica para o MS-DOS, como uma resposta ao crescente interesse do mercado em interfaces gráficas de usuário (GUIs, em inglês). O lançamento em 1990 do Windows 3.0 catapultou o seu sucesso no mercado.<br/><br/>O Windows continua como o sistema operacional de desktop mais popular do mundo, com 77% de fatia de mercado em maio de 2026, e o segundo sistema operacional mais popular do mundo, atrás apenas do Android, usado em smartphones."
},
{
  "ypos": 4,
  "xpos": 1,
  "number": 19,
  "name": "Arquivo plano",
  "symbol": "Flat",
  "category": "structured data format",
  "source": "https://evidence.dev/blog/what-is-a-flat-file",
  "summary": "Arquivos planos, em inglês, <i>flat files</i>, são arquivos em que registros e campos são delimitados por separadores ou por tamanhos pré-fixados. Arquivos CSV (em inglês, <i>comma-separated values</i>) são um tipo de arquivo plano.<br/><br/>Quando a delimitação é por tamanho pré-fixado de caractéres, são chamados de arquivos posicionais."
},
{
  "ypos": 4,
  "xpos": 2,
  "number": 20,
  "name": "Cascade Style Sheets",
  "symbol": "Css",
  "category": "internet file format",
  "source": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "summary": "O CSS, em inglês, <i>Cascade Style Sheets</i>, é uma linguagem para descrever a apresentação de documentos HTML ou XML, incluindo dialetos XML como SVG, MathML e XHTML. O CSS descreve como os elementos devem ser renderizados na tela, definindo suas côres, fontes, margens, tamanhos, e outros."
},
{
  "ypos": 4,
  "xpos": 3,
  "number": 21,
  "name": "COBOL",
  "symbol": "Cbl",
  "category": "programming language",
  "source": "https://www.ibm.com/think/topics/cobol",
  "summary": "COBOL, acrônimo em inglês para <i>Common business-oriented language</i>, é um linguagem de programação compilada e procedural de alto nível, feita para processamento de dados de negócios.<br/><br/>Um dos pontos fortes do COBOL é seu suporte a cálculos matemáticos precisos em números decimais fracionários, uma característica difícil de encontrar na maioria das linguagens de programação. Essa capacidade fez o COBOL se sobressair e ser utilizado por uma grande quantidade de instituições financeiras.<br/><br/>Apesar de o COBOL ser considerado um sistema legado, muitas organizações públicas e privadas continuam a usá-lo para rodar aplicações financeiras, administrativas e empresariais. Na realidade, códigos COBOL rodam mais de 40% de todos os sistemas bancários online.<br/><br/>Além disso, ele é responsável por 80% das transações de cartão de crédito em presença física, 95% de todos os caixas de autoatendimento e por sistemas que geram mais de 3 bilhões de dólares americanos por dia, quanto a fevereiro de 2026. Devido à sua estabilidade superior e poder de processamento, continua a ser parte fundamental de negócios e empresas."
},
{
  "ypos": 4,
  "xpos": 4,
  "number": 22,
  "name": "Fortran",
  "symbol": "F",
  "category": "programming language",
  "source": "https://fortran-lang.org/",
  "summary": "Fortran, acrônimo em inglês de <i>formula translation</i>, é uma linguagem de programação imperativa e compilada, desenhada para computação numérica e científica.<br/><br/>Foi desenvolvida inicialmente pela IBM com um manual de referências lançado em 1956; contudo, os primeiros compiladores só começaram a produzir códigos corretos dois anos depois. Programas Fortran têm sido escritos para aplicações científicas e de engenharia, como previsões climáticas, análise de elementos finitos, dinâmica de fluidos, física de plasmas, geofísica, física computacional, cristalografia e química computacional. É uma linguagem popular para computação de alta performance.<br/><br/>No início dos anos 1950, programação de computadores era um domínio exclusivo de um grupo pequeno de especialistas que escreviam em linguagem de máquina, um conjunto complexo e bagunçado de instruções. Programação era algo apenas para <i>experts</i> — quem era de fora não ousava adentrar nesse meio. E então veio o Fortran.<br/><br/>O Fortran democratizou a programação de computadores ao prover a cientistas, matemáticos e engenheiros a habilidade de inserir seus problemas diretamente em um computador sem depender de um programador para traduzir suas necessidades em código de máquina. O que antes era uma tarefa laborosa de converter uma lógica em milhares de linhas de código de máquina, agora poderia ser feito em apenas 47 linhas com Fortran.<br/><br/>O Fortran iniciou o processo de abstrair <i>software</i> do <i>hardware</i>. Antes dele, programas tinham que ser escritos em uma linguagem específica para cada computador específico, enquanto que um programa Fortran podia rodar em qualquer computador que possuísse um compilador Fortran."
},
{
  "ypos": 4,
  "xpos": 5,
  "number": 23,
  "name": "Assembly",
  "symbol": "Asm",
  "category": "programming language",
  "source": "https://en.wikipedia.org/wiki/Assembly_language",
  "summary": "A linguagem Assembly é uma representação de código de máquina em palavras legíveis por humanos. Cada instrução de código Assembly corresponde a uma instrução de código de máquina. Ela provê instruções compreensíveis por pessoas que mapeiam diretamente a zeros e uns de código binário. Por exemplo, ao invés de um humano escrever “1001000100”, ele pode escrever a instrução `add`. Ambos significam a mesma coisa, mas a linguagem Assembly é muito mais compreensível.<br/><br/>Como o Assembly depende de instruções de código de máquina, cada dialeto Assembly é específico a uma determinada arquitetura de processador, como x86 ou ARM.<br/><br/>A linguagem Assembly usa símbolos mnemônicos para representar instruções de baixo nível (<i>opcodes</i>), diretivas, registradores e <i>flags</i>. Muitas operações requerem um ou mais operandos para formarem uma instrução completa. A maioria dos <i>assemblers</i> (montadores, em português) permitem constantes nomeadas, registradores e etiquetas para localidades do programa e da memória, e podem calcular expressões para operandos. Assim, programadores não precisam se preocupar com cálculos tediosos e repetitivos e programas Assembly são muito mais legíveis do que código de máquina cru."
},
{
  "ypos": 4,
  "xpos": 6,
  "number": 24,
  "name": "Pascal",
  "symbol": "Pas",
  "category": "programming language",
  "source": "https://en.wikipedia.org/wiki/Pascal_(programming_language)",
  "summary": "Pascal é uma linguagem de programação imperativa e procedural, criada por Niklaus Wirth como uma linguagem pequena e eficiente, para encorajar boas práticas de programação usando programação estruturada e estruturas de dados. Recebeu o nome do matemático, filósofo e físico francês Blaise Pascal.<br/><br/>Pascal tornou-se muito popular nos anos 1970, notadamente no nascente mercado de minicomputadores. Compiladores também eram disponibilizados para microcomputadores, que começaram a se tornar populares no fim dos anos 1970. A linguagem era largamente ensinada em cursos de programação de universidades nos anos 1980 e também era parte de <i>softwares</i> comerciais na mesma época.<br/><br/>Uma derivação chamada Object Pascal, feita para programação orientada a objetos, foi desenvolvida em 1985. Ela foi usada pela Apple, em seus computadores Lisa e Macintosh, e pela Borland no fim dos anos 1980 e depois se tornou o <i>framework</i> Delphi na plataforma Microsoft Windows."
},
{
  "ypos": 4,
  "xpos": 7,
  "number": 25,
  "name": "C++",
  "symbol": "C++",
  "category": "programming language",
  "source": "https://en.wikipedia.org/wiki/C%2B%2B",
  "summary": "C++ é uma linguagem de programação de alto nível criada pelo cientista da computação dinamarquês Bjarne Stroustrup. Lançada em 1985 como uma extensão da linguagem C, adicionando funcionalidades de orientação a objetos (POO), desde então expandiu significativamente ao longo do tempo; na versão 1997/C++98, C++ adicionou funcionalidades de programação funcional, além de amenidades para manipulação de memória em baixo nível para sistemas como microcomputadores ou para sistemas operacionais como Linux e Windows, e depois mais funcionalidades como programação genérica (através de <i>templates</i>).<br/><br/>C++ geralmente é implementada como uma linguagem compilada, e muito vendedores provêm compiladores C++, incluindo a Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle e a IBM."
},
{
  "ypos": 4,
  "xpos": 8,
  "number": 26,
  "name": "Lisp",
  "symbol": "Lsp",
  "category": "programming language",
  "source": "https://lisp-lang.org/",
  "summary": "Lisp, acrônimo em inglês para <i>list processing</i>, é uma famílida de linguagens de programação com uma longa história e uma notação famosamente reconhecida pelo uso de parênteses. Originalmente criada no fim dos anos 1950 por John McCarthy, é a segunda linguagem de programação de alto nível ainda em amplo uso, atrás do Fortran.<br/><br/>Em um célebre artigo, McCarthy disse que estruturas elementares de dados poderiam ser completamente definidas como funções matemáticas, uma idéia inspirada na notação do cálculo lambda de Alonzo Church. Lisp rapidamente se tornou uma linguagem usada em pesquisas de inteligência artificial. Sendo uma das linguagens mais antigas, Lisp pioneirizou muitas idéias da ciência da computação, como estruturas de dados em árvores, gerenciamento automático de armazenamento, tipagem dinâmica, condicionais, funções de alta ordem, recursão, compilador <i>self-hosting</i>, e o <i>loop read-evaluate-print</i>."
},
{
  "ypos": 4,
  "xpos": 9,
  "number": 27,
  "name": "Elixir",
  "symbol": "Ex",
  "category": "programming language",
  "source": "https://elixir-lang.org/",
  "summary": "Elixir é uma linguagem de programação funcional e de alto nível, que roda na máquina virtual BEAM, usada na implementação da linguagem de programação Erlang. Elixir é construída em cima da Erlang e compartilha com ela as mesmas abstrações para o desenvolvimento de aplicações distribuídas e tolerantes a falhas.<br/><br/>O programador brasileiro José Valim criou a linguagem Elixir como um projeto de pesquisa e desenvolvimento na empresa Plataformatec. Suas ambições eram ter uma maior extensibilidade e produtividade na VM Erlang, mantendo ao mesmo tempo compatibilidade com o ecosistema.<br/><br/>Elixir é voltada para aplicações e sites de larga escala. Ela pega características de Ruby, Erlang e Clojure para ter uma linguagem de alta concorrência e baixa latência, para lidar com grandes volumes de dados. Elixir é usada em telecomunicações, <i>e-commerce</i> e finanças."
},
{
  "ypos": 4,
  "xpos": 10,
  "number": 28,
  "name": "Erlang",
  "symbol": "Erl",
  "category": "programming language",
  "source": "https://www.erlang.org/",
  "summary": "Erlang é uma linguagem de programação usada para construir sistemas escaláveis e em tempo real com exigências de alta disponibilidade. Ela é usada em telecomunicações, setor bancário, <i>e-commerce</i>, telefonia e mensagens instantâneas. O <i>runtime</i> do Erlang tem suporte nativo a concorrência, distribuição, tolerância a falhas e <i>hot swapping</i>, que é a troca de código antigo por novo sem a parada do sistema.<br/><br/>Era inicialmente um sistema proprietário dentro da Ericsson, desenvolvido por Joe Armstrong, Robert Virding e Mike Williams em 1986, mas depois liberado como <i>software</i> livre, gratuito e de código aberto em 1998. Erlang/OTP é mantido pela unidade de produtos Open Telecom Platform (OTP) dentro da Ericsson."
},
{
  "ypos": 4,
  "xpos": 11,
  "number": 29,
  "name": "Swift",
  "symbol": "Sw",
  "category": "programming language",
  "source": "https://www.swift.org/",
  "summary": "Swift é uma linguagem de programação compilada e de propósito geral, que foi criada por Chris Lattner e seu time em 2010 e depois continuada pela Apple para programação moderna em seus sistemas operacionais, como o macOS, iOS, watchOS, tvOS e outros. Foi anunciada na Apple Worldwide Developers Conference (WWDC) de 2014.<br/><br/>A Apple queria que o Swift suportasse muitos conceitos associados ao Objective-C, nomeadamente despacho dinâmico, <i>binding</i> adiado, programação extensível e funcionalidades similares, mas de uma maneira segura e que prevenisse <i>bugs</i>; o Swift fez escolhas de design para endereçar erros comuns de programação como desreferenciamento de ponteiros nulos e açúcar sintático para evitar a <i>pyramid of doom</i> (em inglês, pirâmide da perdição, é quando há muitos blocos de condicionais aninhados, parecendo uma pirâmide de indentação). Swift suporta o conceito de extensibilidade de protocolos, um sistema de extensões que pode ser aplicado a tipos, estruturas e classes, algo que a Apple promove como sendo uma mudança real em paradigmas de programação, chamado de \"programação orientada a protocolo\" (similar a <i>traits</i> e <i>type classes</i>)."
},
{
  "ypos": 4,
  "xpos": 12,
  "number": 30,
  "name": "JavaScript",
  "symbol": "Js",
  "category": "programming language",
  "source": "https://en.wikipedia.org/wiki/JavaScript",
  "summary": "JavaScript (JS) é uma linguagem de programação, muito usada em páginas Web, junto com o HTML e o CSS. Foi criada por Brendan Eich em 1995. Em números de 2025, JavaScript é a linguagem de programação mais popular no GitHub.<br/><br/>Navegadores de internet têm motores de JavaScript dedicados para a execução de código de cliente. Esses motores também são utilizados em alguns servidores e aplicativos em geral. O <i>runtime</i> mais popular de execução de JavaScript fora dos navegadores é o Node.js.<br/><br/>O JavaScript é uma linguagem de alto nível que segue a padronização ECMAScript. Ele tem tipagem dinâmica, orientação a objetos baseada em protótipos, e funções de primeira classe. É multi-paradigma, suportando estilos de programação funcional, orientada a eventos e imperativa."
},
{
  "ypos": 4,
  "xpos": 13,
  "number": 31,
  "name": "Arquivo em lotes",
  "symbol": "Bat",
  "category": "scripting language",
  "source": "https://en.wikibooks.org/wiki/Windows_Batch_Scripting",
  "summary": "Um arquivo em lotes (em inglês: <i>batch file</i>) é um arquivo de <i>script</i> para execução em sistemas operacionais DOS, OS/2 e Microsoft Windows. Ele consiste em um arquivo-texto com uma série de comandos a serem executados por um interpretador.<br/><br/>Quando o arquivo em lotes é executado, o programa <i>shell</i> (geralmente o COMMAND.COM ou o cmd.exe) lê o arquivo e executa os comandos um a um, normalmente linha por linha. Sistemas operacionais do tipo Unix, como o Linux e o macOS, têm um tipo similar de arquivo chamado <i>shell script</i>.<br/><br/>A extensão de arquivo .bat é usada no DOS e no Windows. O Windows NT e o OS/2 também aceitam a extensão de arquivo .cmd."
},
{
  "ypos": 4,
  "xpos": 14,
  "number": 32,
  "name": "Computação na nuvem",
  "symbol": "Cl",
  "category": "type of computing",
  "source": "https://en.wikipedia.org/wiki/Cloud_computing",
  "summary": "Computação em nuvem é a entrega sob demanda de recursos de TI através da Internet com cobranças por uso. Ao invés de comprar, ter e manter servidores físicos em centros de processamentos de dados (antigamente chamados de CPDs), uma pessoa pode adquirir serviços de TI como máquinas virtuais, armazenamento, bancos de dados e hospedagem, em um modelo de consumo por assinatura ou pré-pago.<br/><br/>A computação em nuvem mudou radicalmente o mercado de infraestrutura de TI a partir da década de 2010, pois permitiu aos desenvolvedores e empresas que publicassem com rapidez e facilidade seus serviços Web na Internet sem os tradicionais custos e tempo (CAPEX) para implantar uma infraestrutura física de computação."
},
{
  "ypos": 4,
  "xpos": 15,
  "number": 33,
  "name": "Mainframe",
  "symbol": "Mf",
  "category": "type of computing",
  "source": "https://en.wikipedia.org/wiki/Mainframe_computer",
  "summary": "Um computador <i>mainframe</i> é um computador usado principalmente por grandes organizações para sistemas críticos, como processamento de dados em massa para tarefas como censos, estatísticas de indústrias e comércio, planejamento de recursos empresariais (ERP), processamento de transações financeiras em larga escala, e controle de tráfego aéreo.<br/><br/>Os <i>mainframes</i> modernos são projetados com:<br/><br/>- Redundâncias internas de <i>hardware</i>, a fim de garantir alta confiabilidade e estabilidade;<br/>- Inúmeras portas de entrada e saída (I/O) para distribuir cargas de trabalho para computadores auxiliares;<br/>- Retrocompatibilidade com <i>softwares</i> antigos, por vezes escritos décadas atrás;<br/>- Altos níveis de utilização de <i>hardware</i>, CPU e RAM, através de virtualização, para permitir fluxo máximo de dados;<br/>- <i>Hot swapping</i> de <i>hardware</i>, i.e., troca de componentes como processadores e memória RAM, sem necessitar do desligamento da máquina.<br/><br/>A estabilidade e confiabilidade dos <i>mainframes</i> fazem com que essas máquinas rodem ininterruptamente por longos períodos de tempo, com o tempo médio entre falhas (MTBF, <i>mean time between failures</i>) medido em décadas. Eles são usados para aplicações em que pausas e interrupções seriam muito custosas ou até mesmo catastróficas."
},
{
  "ypos": 4,
  "xpos": 16,
  "number": 34,
  "name": "Microsoft Access",
  "symbol": "As",
  "category": "database system",
  "source": "https://en.wikipedia.org/wiki/Microsoft_Access",
  "summary": "O Microsoft Access é um sistema de gerenciamento de banco de dados (SGBD) da Microsoft que combina o Access Database Engine (ACE) com uma interface gráfica de usuário e ferramentas de desenvolvimento de <i>software</i>.<br/><br/>Os usuários podem criar tabelas, consultas, formulários e relatórios, e conectá-los entre si com macros. Usuários avançados podem usar VBA para manipular dados de qualquer fonte de dados com que o Access consiga interagir.<br/><br/>O conceito original do Access era para que usuários finais pudéssem acessar dados de quaisquer fontes de dados. Outras funcionalidades incluem a importação e exportação de dados para vários formatos incluindo Excel, Outlook, ASCII, dBase, Paradox, FoxPro, SQL Server e Oracle. Access é freqüentemente usados por pessoas baixando dados de bases empresariais para manipulação, análise e geração de relatórios locais."
},
{
  "ypos": 4,
  "xpos": 17,
  "number": 35,
  "name": "Xcode",
  "symbol": "Xc",
  "category": "developer tool",
  "source": "https://developer.apple.com/xcode/",
  "summary": "Xcode é uma suíte de ferramentas de desenvolvedor para construir aplicativos para dispositivos Apple. Ele inclui um ambiente de desenvolvimento integrado (IDE) homônima para o macOS, usada para desenvolver <i>software</i> para macOS, iOS, iPadOS, watchOS, tvOS e visionOS. Sua primeira versão foi lançada no final de 2003."
},
{
  "ypos": 4,
  "xpos": 18,
  "number": 36,
  "name": "Google Android",
  "symbol": "A",
  "category": "operating system",
  "source": "https://www.android.com/",
  "summary": "O Android é um sistema operacional de código aberto desenvolvido pela Google. O Android é baseado em uma versão modificada da <i>kernel</i> do Linux e outros <i>softwares</i> gratuitos e de código aberto, projetado principalmente para dispositivos móveis baseados em toque, como <i>smartphones</i> e <i>tablets</i>. Com a primeira versão lançada em 2008, o Android é o sistema operacional mais usado do mundo, tanto no universo dos <i>smartphones</i> como dos computadores em geral, em números de 2026.<br/><br/>O projeto central do Android é conhecido como Android Open Source Project (AOSP) e é <i>software</i> gratuito e de código aberto, sob licença Apache. Todavia, a maioria dos dispositivos roda uma versão proprietária do Android desenvolvida pela Google, que é regida sob licenças de código fechado e com <i>softwares</i> pré-instalados. Enquanto que o AOSP é gratuito, o nome e o logotipo \"Android\" são marcas registradas da Google, que restringe o uso da marca em produtos \"não-certificados\" pela empresa."
},
{
  "ypos": 5,
  "xpos": 1,
  "number": 37,
  "name": "Microsoft Excel",
  "symbol": "Xls",
  "category": "structured data format",
  "source": "https://en.wikipedia.org/wiki/Microsoft_Excel",
  "summary": "Microsoft Excel, ou simplesmente Excel, é um editor de planilhas desenvolvido pela Microsoft. Ele pode realizar cálculos e computações, fazer gráficos, tabelas pivô e tem uma linguagem de programação de macros chamada Visual Basic for Applications (VBA).<br/><br/>Planilhas Excel são organizadas em uma matriz de células arranjadas em linhas numeradas e colunas letradas, permitindo manipulações como operações aritméticas. Também tem um conjunto completo de funções que atendem a necessidades de estatística, engenharia e finanças. Além disso, pode mostrar dados em gráficos de linhas, colunas, pizzas e histogramas.<br/><br/>Com o Visual Basic for Applications, o usuário pode escrever funções customizadas para tratar dados e utilizar essas funções nas planilhas."
},
{
  "ypos": 5,
  "xpos": 2,
  "number": 38,
  "name": "Joint Photo. Experts Group",
  "symbol": "Jpg",
  "category": "internet file format",
  "source": "https://en.wikipedia.org/wiki/JPEG",
  "summary": "JPEG (sigla para <i>Joint Photographic Experts Group</i>) é um método usado para compressão de imagens digitais, principalmente as produzidas por fotografia digital. O grau de compressão é ajustável, permitindo uma calibração e balanceamento entre tamanho de armazenamento e qualidade da imagem. JPEG tipicamente alcança taxas de compressão de 10 para 1 com uma perda de qualidade que, embora perceptível, é considerada aceitável na maioria das vezes.<br/><br/>Desde sua introdução em 1992, o JPEG tem sido o padrão de compressão e o formato de imagens digitais mais usado no mundo, com dezenas de bilhões de imagens JPEG produzidas diariamente, em números de 2015."
},
{
  "ypos": 5,
  "xpos": 3,
  "number": 39,
  "name": "ABAP",
  "symbol": "Abap",
  "category": "programming language",
  "source": "https://www.geeksforgeeks.org/software-engineering/what-is-abap-a-brief-overview/",
  "summary": "ABAP (em inglês: <i>Advanced Business Application Programming</i>, Programação de Aplicação de Negócio Avançada, originalmente em alemão: <i>Allgemeiner Berichts-Aufbereitungs-Prozessor</i>, Processador de Preparação de Relatórios Gerais) é uma linguagem de programação de alto nível criada pela empresa de <i>software</i> alemã SAP SE.<br/><br/>Inicialmente era a linguagem de relatórios do SAP R/2, uma plataforma que permitia grandes corporações a construir aplicações de negócio em <i>mainframes</i> para gestão de materiais e contabilidade financeira.<br/><br/>ABAP é projetado para trabalhar com a suíte de <i>software</i> da SAP, permitindo que desenvolvedores criem relatórios customizados, melhorias e aplicações que se integrem a sistemas SAP."
},
{
  "ypos": 5,
  "xpos": 4,
  "number": 40,
  "name": "MATLAB",
  "symbol": "Mat",
  "category": "programming language",
  "source": "https://www.mathworks.com/products/matlab.html",
  "summary": "MATLAB, acrônimo em inglês de <i>Matrix Laboratory</i>, é uma linguagem de programação proprietária e multiparadigma, e também um ambiente de computação numérica, ambos desenvolvidos pela empresa MathWorks. O MATLAB permite multiplicações de matrizes, plotagem de funções e dados, implementação de algoritmos, criação de interfaces de usuários e interoperações com programas escritos em outras linguagens.<br/><br/>O MATLAB foi inventado pelo matemático e programador Cleve Moler. A idéia para o programa surgiu com base na sua tese de doutorado, nos anos 1960. Moler era professor de matemática na Universidade do Novo México e começou a desenvolver o MATLAB para seus alunos como um <i>hobby</i>. Ele desenvolveu a programação inicial de álgebra linear em 1967 junto com seu mentor de doutorado, George Forsythe. Isso foi seguido pelo código Fortran para cálculo de equações lineares, em 1971.<br/><br/>A primeira versão do MATLAB ficou pronta no final dos anos 1970. O <i>software</i> foi anunciado ao público pela primeira vez em fevereiro de 1979 na Escola Naval de Pós-Graduação, na Califórnia. Versões iniciais do MATLAB eram calculadoras simples de matrizes com 71 funções embutidas. Na época, o MATLAB era distribuído gratuitamente a universidades; Moler deixava cópias do programa nas universidades que ele visitava e o <i>software</i> ganhou tração nos departamentos de matemática das universidades americanas."
},
{
  "ypos": 5,
  "xpos": 5,
  "number": 41,
  "name": "C",
  "symbol": "C",
  "category": "programming language",
  "source": "https://www.c-language.org/",
  "summary": "C é uma linguagem de programação de propósito geral criada nos anos 1970 por Dennis Ritchie. Por <i>design</i>, C dá ao programador acesso quase direto a funcionalidades de uma arquitetura de CPU típica. A linguagem tem sido e continua sendo usada para implementar sistemas operacionais (principalmente <i>kernels</i>), <i>drivers</i> e <i>firmwares</i> de dispositivos. C é usada em computadores que vão desde os maiores supercomputadores aos menores microcontroladores e sistemas embarcados.<br/><br/>C é uma linguagem procedural imperativa com suporte a programação estruturada, variáveis nomeadas, recursão e tipagem forte e estática. Foi desenhada para ser compilada e prover acesso de baixo nível a memória RAM e instruções de máquina (código Assembly). Apesar disso, a linguagem foi concebida pensando em programação multiplataforma; um programa em C que segue a padronização e bibliotecas comuns pode ser compilado para uma ampla gama de plataformas e sistemas operacionais, com mínimas ou nenhuma mudança no código-fonte."
},
{
  "ypos": 5,
  "xpos": 6,
  "number": 42,
  "name": "Golang",
  "symbol": "Go",
  "category": "programming language",
  "source": "https://go.dev/",
  "summary": "Go é uma linguagem de programação de alto nível e de propósito geral, compilada e com tipagem forte e estática. É conhecida pela simplicidade de sua sintaxe e pela eficiência de desenvolvimento, através de um conjunto de bibliotecas auxiliares incluídas de fábrica, que atendem a maioria das necessidades dos projetos.<br/><br/>Foi concebida na Google em 2007 por Robert Griesemer, Rob Pike e Ken Thompson, e anunciada publicamente em novembro de 2009. É sintaticamente parecida com C, mas com <i>garbage collection</i>, tipagem estrutural e concorrência no estilo CSP (<i>Communicating Sequential Processes</i>)."
},
{
  "ypos": 5,
  "xpos": 7,
  "number": 43,
  "name": "Lua",
  "symbol": "Lua",
  "category": "programming language",
  "source": "https://www.lua.org/",
  "summary": "Lua é um linguagem de programação level, de alto nível e multiparadigma, projetada para ser acoplada a outras aplicações. A linguagem é multiplataforma, já que o interpretador dos <i>bytecodes</i> de Lua é escrito em ANSI C, de tal modo que esse interpretador pode ser facilmente embutido em outros programas, e de linguagens diferentes.<br/><br/>Ela foi criada em 1993 por Roberto Ierusalimschy, Luiz Henrique de Figueiredo e Waldemar Celes, membros do Grupo de Tecnologia em Computação Gráfica (Tecgraf) da Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio).<br/><br/>Lua foi desenhada para ser embarcada em outras aplicações e provê uma API em linguagem C para tal. Tanto código em linguagem C pode rodar dentro de um programa Lua, como <i>scripts</i> Lua podem rodar em um programa em C através de <i>interop</i>.<br/><br/>A linguagem é largamente usada na indústria de jogos, principalmente devido à sua facilidade de acoplamento, execução rápida e facilidade de aprendizado. Dentre os <i>games</i> populares que usam Lua, estão Roblox, Minecraft, Garry's Mod, World of Warcraft, Payday 2, Project Zomboid, Phantasy Star Online 2, Dota 2, Crysis, e muitos outros."
},
{
  "ypos": 5,
  "xpos": 8,
  "number": 44,
  "name": "OCaml",
  "symbol": "Ml",
  "category": "programming language",
  "source": "https://cs3110.github.io/textbook/cover.html",
  "summary": "Genealogicamente, OCaml vem de uma linhagem de linguagens de programação cujo avô é Lisp e inclui outras linguagens modernas como Clojure, F#, Haskell e Racket.<br/><br/>OCaml originou-se do trabalho feito por Robin Milner e seus colegas no Laboratório de Ciência da Computação de Edimburgo, na Escócia. Eles trabalhavam em provadores de teoremas no final dos anos 1970 e começo dos anos 1980. Tradicionalmente, provadores de teoremas eram implementados em linguagens como Lisp. Milner, entretanto, deparava-se com o problema de que os provadores de teoremas por vezes produziam provas incorretas e as acusavam como verdadeiras, então, ele procurou desenvolver uma linguagem que permitisse apenas a construção de provas válidas. ML, sigla para <i>Meta Language</i>, foi o resultado desse trabalho. O sistema de tipagem da ML foi cuidadosamente pensado para que apenas provas válidas pudéssem ser escritas nessa linguagem. Eventualmente, essa linguagem ML clássica evoluiu e se tornou uma linguagem de programação completa.<br/><br/>No início dos anos 1980, houve um cisma na comunidade ML com os franceses de um lado e os britânicos e americanos de outro. Os franceses então desenvolveram CAML, que mais tarde se tornou Objective CAML (OCaml), enquanto que os britânicos e americanos desenvolveram o Standard ML (SML). Os dois dialetos são muito parecidos. A Microsoft, por sua vez, desenvolveu sua própria variante do OCaml chamada F#, lançada em 2005."
},
{
  "ypos": 5,
  "xpos": 9,
  "number": 45,
  "name": "F#",
  "symbol": "F#",
  "category": "programming language",
  "source": "https://fsharp.org/",
  "summary": "F# (lê-se <i>F sharp</i>) é uma linguagem de programação funcional fortemente tipada. É baseada no OCaml e é uma linguagem do ecossistema .NET (lê-se <i>dotnet</i>).<br/><br/>F# é usada para computação e pesquisas científicas, modelagem financeira, precificação de derivativos, bioinformática, estatística, análise de dados e também para desenvolvimento de aplicações empresariais. Sendo uma linguagem .NET, ela pode interagir facilmente com códigos em C# e VB.NET, e usar pacotes NuGet."
},
{
  "ypos": 5,
  "xpos": 10,
  "number": 46,
  "name": "C#",
  "symbol": "C#",
  "category": "programming language",
  "source": "https://dotnet.microsoft.com/en-us/languages/csharp",
  "summary": "C# (lê-se <i>C sharp</i>) é uma linguagem de programação orientada a objetos e fortemente tipada, do ecossistema .NET (lê-se <i>dotnet</i>). Sua primeira versão foi lançada em julho de 2000, como parte do .NET Framework.<br/><br/>Os principais engenheiros desenhistas da linguagem foram Scott Wiltamuth, Peter Golde e Anders Hejlsberg da Microsoft. Antes de ser contratado pela Microsoft e criar o C#, Anders Hejlsberg foi o autor original do Turbo Pascal e o arquiteto-chefe do Delphi.<br/><br/>Em 2016, .NET tornou-se um <i>framework</i> de código-aberto e multiplataforma, inicialmente chamado de .NET Core à época. Com isso, C# e outras linguagens .NET agora podem rodar em Windows, Linux, macOS e outros sistemas operacionais.<br/><br/>C# é muito popular para o desenvolvimento de servidores ASP.NET, aplicações gráficas <i>desktop</i>, através de Windows Forms, WPF e Avalonia; e também por programas de <i>console</i>."
},
{
  "ypos": 5,
  "xpos": 11,
  "number": 47,
  "name": "Dart",
  "symbol": "Dart",
  "category": "programming language",
  "source": "https://dart.dev/",
  "summary": "Dart é uma linguagem de programação desenhada por Lars Bak e Kasper Lund, e desenvolvida pela Google. Ela pode ser usada para desenvolver aplicações web e <i>mobile</i>, assim como programas <i>desktop</i> e servidores <i>backend</i>.<br/><br/>Dart também provê a linguagem e o <i>runtime</i> por trás do Flutter, um <i>framework</i> para desenvolver aplicativos multiplataforma, voltados principalmente para Android e iOS."
},
{
  "ypos": 5,
  "xpos": 12,
  "number": 48,
  "name": "Personal Home Page",
  "symbol": "Php",
  "category": "programming language",
  "source": "https://www.php.net/",
  "summary": "PHP, sigla em inglês para <i>Personal Home Page</i>, é uma linguagem de programação gratuita e de código aberto, largamente usada para desenvolvimento web. Foi criada pelo programador dano-canadense Rasmus Lerdorf em 1993 e lançada em 1995. De acordo com a Web Technology Surveys, PHP é usada por 78,1% de todos os <i>websites</i>, incluindo sites de alto volume de tráfego, como o Facebook e a Wikipédia.<br/><br/>O código PHP é normalmente processado em um servidor web por um interpretador PHP implementado como um módulo, um <i>daemon</i> ou como um executável CGI (Common Gateway Interface). Em um servidor web, o resultado produzido por um código PHP pode formar o todo ou parte de uma resposta HTTP.<br/><br/>PHP também pode ser usada para tarefas de programação fora do contexto web, apesar de que esses usos são raros."
},
{
  "ypos": 5,
  "xpos": 13,
  "number": 49,
  "name": "Perl",
  "symbol": "Pl",
  "category": "scripting language",
  "source": "https://www.perl.org/",
  "summary": "Perl é uma linguagem de programação de alto nível, de propósito geral, interpretada e com tipagem dinâmica. Foi desenvolvida por Larry Wall em 1987 como um linguagem de <i>script</i> para o Unix, para facilitar o processamento de relatórios.<br/><br/>Perl toma para si idéias de outras linguagens de programação como C, UNIX shell, AWK e sed. Ele provê amenidades para o processamento de texto sem as limitações de tamanhos de campos que eram comuns em diversas ferramentas de linha de comando do Unix à época. Perl é uma linguagem altamente expressível: o código-fonte para um determinado algoritmo pode ser curto e altamente comprimível.<br/><br/>A linguagem se tornou popular em meados dos anos 1990 como um linguagem para <i>scripts</i> CGI, em parte devido às suas poderosas capacidades de expressões regulares e <i>parsing</i> de strings. Além de CGI, Perl 5 é usado para administração de sistemas, configuração de redes, finanças, bioinformática e outras aplicações, como interfaces gráficas de usuário (GUIs). Foi apelidado de \"canivete suíço serra elétrica das linguagens de <i>script</i>\", por sua flexibilidade e poder. Em 1998, recebeu o epíteto de \"durepóxi que mantém a Internet no lugar\", explicado tanto pelo seu uso ubíquo como cola que liga sistemas entre si, como também por sua suposta inelegância."
},
{
  "ypos": 5,
  "xpos": 14,
  "number": 50,
  "name": "AutoHotkey",
  "symbol": "Ahk",
  "category": "scripting language",
  "source": "https://www.autohotkey.com/",
  "summary": "AutoHotkey (AHK) é uma linguagem de <i>script</i> gratuita e de código-aberto para Microsoft Windows, pensada para prover atalhos de teclado (<i>hotkeys</i>, em inglês), criação de macros e automação de <i>software</i>, permitindo que usuários de qualquer nível de habilidade com computadores possam automatizar tarefas repetitivas em qualquer programa Windows. Ela pode facilmente estender ou modificar interfaces de usuário, por exemplo, substituindo os comandos de teclado do Windows pelos seus equivalentes do Emacs.<br/><br/>AutoHotkey foi lançada inicialmente por seu criador, Chris Mallet, em 2003; desde então, tornou-se um dos <i>softwares</i> mais comuns e recomendados para implementação de macros. O pacote de instalação inclui um arquivo de ajuda bem completo; uma documentação web também é disponibilizada."
},
{
  "ypos": 5,
  "xpos": 15,
  "number": 51,
  "name": "Micro-controlador",
  "symbol": "Mc",
  "category": "type of computing",
  "source": "https://en.wikipedia.org/wiki/Microcontroller",
  "summary": "Um microcontrolador (MCU) é um computador diminuto em um único circuito integrado, projetado para controlar tarefas em sistemas eletrônicos. Ele combina as funções de uma unidade central de processamento (CPU), memória, e interfaces de entrada e saída, tudo em um único <i>chip</i>.<br/><br/>Antes dos microcontroladores, circuitos lógicos eram feitos com portas lógicas, transistores e relés, resultando em grandes placas de circuito impresso. Se um circuito precisasse de uma modificação, muitas vezes necessitava de um novo <i>layout</i>, componentes e soldas. Quando os microcontroladores chegarem ao mercado, eles permitiram uma redução substancial em tamanho e volume dos circuitos eletrônicos, e aceleraram as linhas de produção, de tal modo que novos produtos podiam ser mais rapidamente projetados, produzidos e vendidos aos consumidores.<br/><br/>Existem muitas famílias de microcontroladores populares hoje em dia, entre elas: ESP8266, Arduino, Intel 8051, MSP430, TLCS-870, STM32, LPC2000 e RL78."
},
{
  "ypos": 5,
  "xpos": 16,
  "number": 52,
  "name": "Computação analógica",
  "symbol": "Ac",
  "category": "type of computing",
  "source": "https://www.quantamagazine.org/what-is-analog-computing-20240802/",
  "summary": "Computador analógico é um conjunto de dispositivos interconectados em que quantidades físicas continuamente variáveis, como potencial elétrico, pressão de fluidos ou movimento mecânico, são representadas em um modo análogo às quantidades correspondentes de um problema a ser resolvido. O sistema analógico é então ajustado de acordo com as condições iniciais e deixado a executar livremente. As respostas ao problema são obtidas através da medição das variáveis no modelo analógico.<br/><br/>Computadores analógicos podem ser feitos com componentes elétricos, mecânicos, magnéticos, químicos, radiológicos, térmicos, cinéticos, hidráulicos, pneumáticos, atômicos, moleculares, ópticos e fotoluminosos, combinados para modelar um problema específico, de modo a calcular valores e realizar ações. Eles podem ter muitas vantagens comparados a computadores digitais. Primeiro, a precisão dos valores é limitada à qualidade dos componentes e não ao tamanho de armazenamento em <i>bits</i> na memória digital, o que pode ser um problema para números de ponto flutuante; segundo, a resposta é praticamente instantânea, no caso de circuitos elétricos e ópticos; terceiro, proteção contra ciberataques; quarto, menor consumo energético, em alguns casos.<br/><br/>Dentre as desvantagens, estão o maior tamanho físico e a dificuldade de se fazer modificações. Também pode ser difícil reusar o computador analógico para outras tarefas.<br/><br/>Atualmente, em 2026, computadores analógicos estão sendo considerados como possíveis soluções para inteligência artificial e aprendizado de máquina."
},
{
  "ypos": 5,
  "xpos": 17,
  "number": 53,
  "name": "Eclipse IDE",
  "symbol": "Ec",
  "category": "developer tool",
  "source": "https://eclipseide.org/",
  "summary": "Eclipse é um ambiente integrado de desenvolvimento (IDE) usado em programação de computadores. Ele contém um espaço de trabalho e um sistema de extensão através de <i>plug-ins</i>, para customização do ambiente. É uma IDE popular para desenvolvimento Java.<br/><br/>O SDK do eclipse é <i>software</i> gratuito e de código aberto, sob a licença Eclipse Public License, que é todavia incompatível com a licença GNU General Public License."
},
{
  "ypos": 5,
  "xpos": 18,
  "number": 54,
  "name": "Linux",
  "symbol": "L",
  "category": "operating system",
  "source": "https://en.wikipedia.org/wiki/Linux",
  "summary": "Linux é uma família de sistemas operacionais tipo Unix, gratuitos e de código aberto, baseados no <i>kernel</i> Linux, cuja primeira versão foi lançada em 17 de setembro de 1991 por Linus Torvalds. Alguns membros dessa família são empacotados como distribuições (comumente chamadas de <i>distros</i>), que incluem a <i>kernel</i> junto com <i>softwares</i> e bibliotecas auxiliares desenvolvidos por terceiros, como GNU, Red Hat e X.Org, de modo a compôr um sistema operacional completo; porém, nem todos os sistemas operacionais baseados em Linux são <i>distros</i>, o Android sendo um exemplo. O Linux originalmente foi desenhado como sendo um clone do Unix e distribuído sob a licença GPL <i>copyleft</i>.<br/><br/>Existem milhares de distribuições Linux, muitas baseadas diretamente ou indiretamente em outras distribuições; algumas das <i>distros</i> mais populares são o Debian, Fedora, Linux Mint, Arch Linux e Ubuntu, sendo que também há distribuições comerciais, como Red Hat Enterprise Linux, SUSE Linux Enterprise e o ChromeOS. Distribuições Linux são freqüentemente usadas em servidores.<br/><br/>O Linux é um dos exemplos mais proemnientes de desenvolvimento de <i>software</i> gratuito e colaborativo. A <i>kernel</i> do Linux é considerada por muitos o maior projeto de código aberto existente. Originalmente desenvolvido para computadores pessoais de arquitetura x86, foi portado para mais plataformas do que qualquer outro sistema operacional e é usado em vários dispositivos incluindo computadores pessoais, estações de trabalho, <i>mainframes</i> e sistemas embarcados. Linux é o sistema operacional predominante para servidores e também é usado em todos dos 500 supercomputadores mais poderosos do mundo."
},
{
  "ypos": 6,
  "xpos": 1,
  "number": 55,
  "name": "YAML Ain’t Markup Language",
  "symbol": "Yml",
  "category": "structured data format",
  "source": "https://quickref.me/yaml.html",
  "summary": "YAML é um linguagem de serialização de dados e que é legível por humanos. É comumente usada em arquivos de configuração e em aplicações onde dados são armazenados e transmitidos.<br/><br/>É um subconjunto do JSON, usando pares chave-valor delimitados por dois-pontos. Aspas ao redor de textos são opcionais. O aninhamento de grupos de valores é indicado pelo número de espaços em branco precedentes."
},
{
  "ypos": 6,
  "xpos": 2,
  "number": 56,
  "name": "Graphics Interchange Format",
  "symbol": "Gif",
  "category": "internet file format",
  "source": "https://en.wikipedia.org/wiki/GIF",
  "summary": "GIF, sigla em inglês para <i>Graphics Interchange Format</i>, é um formato digital que suporta tanto imagens estáticas como animadas. Criado em 1987 pela CompuServe, o GIF foi desenhado para armazenar múltiplas imagens <i>bitmap</i> dentro de um único arquivo, para transmissão entre diferentes sistemas de computadores.<br/><br/>O formato ganhou muita popularidade com o advento da <i>World Wide Web</i> no início dos anos 1990, principalmente depois da introdução de GIFs animados em 1995. Essas animações, formadas pela combinação de múltiplos <i>frames</i> de imagens, tornaram-se um relevante elemento da cultura <i>online</i>, freqüentemente usadas em memes e como ferramentas de expressão em mídias sociais e aplicativos de mensagens.<br/><br/>Os dados armazenados em uma imagem GIF são sempre comprimidos através do algoritmo LZW. <i>Softwares</i> que implementavam o algoritmo LZW precisavam pagar uma taxa de licença de uso à empresa dona da patente do algoritmo (a Unisys), mas em 2004, todas as patentes proprietárias relacionadas à compressão usadas no GIF expiraram. Desde então, o GIF têm sido gratuito para todo e qualquer uso."
},
{
  "ypos": 9,
  "xpos": 3,
  "number": 57,
  "name": "RS-232",
  "symbol": "Sp",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/RS-232",
  "summary": "Em telecomunicações, RS-232 ou Recommended Standard 232 é um protocolo padronizado introduzido em 1960 para transmissão e comunicação serial de dados.<br/><br/>Portas seriais RS-232 eram antigamente parte comum em vários tipos de computadores. Computadores pessoais as usavam para conexões com <i>modems</i>, impressoras, <i>scanners</i>, <i>mouses</i>, armazenamento de dados, fontes de energia e outros dispositivos periféricos.<br/><br/>Comparado a outras interfaces mais modernas como RS-422, RS-485, USB e Ethernet, o RS-232 tem menor velocidade de transmissão, menor comprimento  máximo de cabo, maior oscilação de tensão elétrica, conectores maiores, impossibilidade de conexões multiponto e capacidade limitada a conexões <i>multidrop</i> (um mesmo barramento ligando vários dispositivos). Em computadores pessoais modernos, o USB tomou o lugar do RS-232. Porém, graças à sua simplicidade e ubiquidade no passado, interfaces RS-232 continuam sendo usadas – particularmente em máquinas industriais CNC, equipamentos de rede e instrumentos científicos nos quais uma conexão curta, ponto-a-ponto, lenta e cabeada é perfeitamente aceitável."
},
{
  "ypos": 9,
  "xpos": 4,
  "number": 58,
  "name": "PS/2",
  "symbol": "Mk",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/PS/2_port",
  "summary": "A porta PS/2 é um conector mini-DIN de 6 pinos usado para conectar teclados e <i>mouses</i> a computadores. O nome vem da série de computadores IBM Personal System/2, que introduziu o padrão em 1987. O conector de <i>mouse</i> PS/2 substituiu o conector anterior DE-9 RS-232 de <i>mouse</i> serial, enquanto que o conector de teclado PS/2 substituiu o conector DIN de 5 pinos / 180° presente em computadores IBM PC/AT.<br/><br/>As interfaces PS/2 de teclado e <i>mouse</i> são eletricamente similares e compartilham o mesmo protocolo de comunicação. Contudo, as portas geralmente têm usos exclusivos para cada um desses componentes, devido a esses dispositivos usarem conjuntos distintos de comandos e os <i>drivers</i> terem valores chumbados (<i>hard-coded</i>) de endereço de porta PS/2 (isto é, o teclado só funciona conectado à porta de teclado, o <i>mouse</i> só funciona conectado à porta de <i>mouse</i>). As portas de teclado normalmente são coloridas com a côr púrpura e as portas de <i>mouse</i> recebem a coloração verde."
},
{
  "ypos": 9,
  "xpos": 5,
  "number": 59,
  "name": "Peripheral Component Interconnect",
  "symbol": "Pci",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/PCI_Express",
  "summary": "PCI Express (em inglês: <i>Peripheral Component Interconnect Express</i>), abreviado oficialmente como PCIe, é um padrão de alta velocidade para conexão de componentes de <i>hardware</i> dentro de computadores. É desenhado para substituir padrões de barramento de extensão mais antigos como o PCI, PCI-X e AGP. Desenvolvidos e mantido pelo PCI-SIG (<i>PCI Special Interest Group</i>), PCIe é comumente usado para conectar placas de vídeo, áudio, de rede, portas USB e discos rígidos, estes últimos através do protocolo NVMe (<i>Non-Volatile Memory Express</i>), que é um tipo de interface PCIe.<br/><br/>Comparado a padrões anteriores, o PCIe suporta taxas de transferência mais rápidas, tem menos pinos, ocupa menos espaço físico e permite que dispositivos sejam adicionados e removidos com o computador em funcionamento (<i>hot swapping</i>). Também inclui melhor detecção de erros e funcionalidades mais novas como virtualização de E/S para computação avançada."
},
{
  "ypos": 9,
  "xpos": 6,
  "number": 60,
  "name": "Universal Serial Bus",
  "symbol": "Usb",
  "category": "physical protocol",
  "source": "https://www.britannica.com/technology/USB",
  "summary": "USB, sigla em inglês para <i>Universal Serial Bus</i>, é uma tecnologia empregada para conectar a computadores dispositivos periféricos tais como <i>mouses</i>, teclados, impressoras e <i>pen-drives</i>.</br></br>Introduzido em 1996, o padrão USB foi desenvolvido por um grupo de empresas estadunidenses, incluindo a IBM, a Intel e a Microsoft, visando haver um modo mais simples de conectar <i>hardware</i> externo a computadores pessoais (PCs). Antes da tecnologia USB, um PC tipicamente tinha uma ou duas portas seriais, uma porta paralela, portas para teclado e <i>mouse</i>, e em alguns casos, uma porta para <i>joystick</i>. As portas USB possibilitaram uma forma padronizada de se conectar um amplo espectro de dispositivos externos e ao mesmo tempo oferecer velocidades superiores de transmissão de dados, quando comparadas a outros padrões.</br></br>Desde então, a maioria dos dispositivos periféricos, como impressoras, <i>scanners</i> e teclados, adotaram o USB. O padrão inclusive levou ao desenvolvimento de novos dispositivos, como os <i>pen-drives</i>, que substituíram os disquetes."
},
{
  "ypos": 9,
  "xpos": 7,
  "number": 61,
  "name": "Bluetooth",
  "symbol": "Bt",
  "category": "physical protocol",
  "source": "https://www.bluetooth.com/",
  "summary": "Bluetooth é uma padrão de tecnologia sem fio e de curto alcance que é usado para envio de dados entre dispositivos, através de redes de áreas pessoais (PANs, em inglês). No seu modo mais comum, a potência de transmissão é limitada a 2,5 miliwatts, resultando em um alcance curto, de até 10 metros. Foi desenvolvido pela Ericsson, uma fabricante sueca de telefones móveis, em 1998.</br></br>A tecnologia apareceu primeiro em telefones celulares e computadores <i>desktop</i> no ano 2000 e se difundiu para impressoras e computadores portáteis (<i>laptops</i>) no ano seguinte. Ao fim da década, fones de ouvido Bluetooth tornaram-se ubíquos e a tecnologia foi incorporada a <i>smartphones</i>, televisores, relógios de pulso, óculos de sol e diversos outros produtos."
},
{
  "ypos": 9,
  "xpos": 8,
  "number": 62,
  "name": "Disquete",
  "symbol": "Dk",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/Floppy_disk",
  "summary": "Um disquete, em inglês também chamado de <i>floppy disk</i>, é um tipo de armazenamento de mídia digital em um disco de folha magnética fina e flexível, enclausurada em um invólucro de plástico para proteção e com um pedaço de tecido para remover partículas de poeira do disco em rotação. Disquetes guardam dados digitais que podem ser acessados e alterados inserindo o disquete em um <i>driver</i> apropriado em um computador. Os três tamanhos de disquete mais populares são o de 8 polegadas, 5¼ polegadas e 3½ polegadas.<br/><br/>Disquetes eram tão comuns no fim do século 20 que muitos programas de computador continuam havendo disquetes como ícones para a operação de salvar arquivos e dados em plena década de 2020, como uma forma de esqueumorfismo.<br/><br/>Em maio de 2016, o Escritório de Contabilidade do Governo dos EUA publicou um relatório indicando a necessidade de atualizar ou trocar sistemas de computador legados em agências federais. De acordo com o documento, velhos computadores IBM Series/1 rodando disquetes de 8 polegadas ainda eram utilizados para coordenar as funções operacionais das forças nucleares dos Estados Unidos. O governo planejou a migração de tecnologia até o fim do ano fiscal de 2017 e a migração foi concluída ao fim de junho de 2019.<br/><br/>O uso de disquetes no governo japonês terminou em 2024.<br/><br/>A frota de Boeing 747-400 da British Airways, até sua aposentadoria em 2020, usava disquetes de 3½ polegadas para carregar o <i>software</i> de aviônica."
},
{
  "ypos": 9,
  "xpos": 9,
  "number": 63,
  "name": "Compact Disc",
  "symbol": "Cd",
  "category": "physical protocol",
  "source": "https://musicproductionglossary.com/what-is-cd/",
  "summary": "Um disco compacto, popularmente conhecido como CD, é um formato de armazenamento de dados em discos ópticos, lançado em 1982, que rapidamente tornou-se o padrão para gravação de áudio digital e armazenamento de dados.<br/><br/>Desenvolvido através de uma parceira entre a Sony e a Philips, o CD de áudio revolucionou a indústria da música ao permitir armazenamento digital e reprodução de gravações de áudio usando uma nova tecnologia de laser capaz de ler e escrever dados.<br/><br/>O primeiro teste de gravação de um disco compacto foi em Hanover, na Alemanha, em agosto de 1982, contendo gravações de <i>Uma Sinfonia Alpina</i>, de Richard Strauss. Uma vez que os problemas de qualidade e de produção foram acertados, o primeiro disco de áudio comercial lançado ao público foi o álbum <i>52nd Street</i>, de Billy Joel, que chegou às lojas no Japão em outubro de 1982. A adoção inicial foi lenta, mas ao final dos anos 1980, o CD tornou-se o formato dominante para distribuição e reprodução de música, com a Sony e a Philips atuando juntas para reduzir o preço dos tocadores de CD.<br/><br/>A dimensão padrão de um CD é um disco de 120mm de diâmetro e 1,2mm de espessura, com capacidade de 700MB de dados ou 80 minutos de áudio estéreo não-comprimido. Isso foi um grande salto ante os discos de vinil, com um único disco sendo capaz de armazenar a mesma quantidade de música que 5 LPs. As cavidades e pistas fisicamente prensadas na camada de policarbonato representam dados binários a serem lidos por um laser de 780nm de comprimento de onda, enquanto que a correção de erros garante acurácia e precisão na gravação.<br/><br/>Desenvolvimentos subseqüentes como o CD-ROM expandiram a versatilidade do formato ao permitir 700MB de armazenamento de dados digitais de qualquer tipo, permitindo que programas de computador, imagens, documentos e arquivos pudéssem ser distribuídos em discos compactos. Apesar de o CD ter perdido popularidade com a ascensão do <i>streaming</i> e formatos digitais de alta resolução, seu impacto na história da música e inovação do armazenamento em mídias ópticas não podem ser ignorados. Para muitos, o CD de áudio ainda evoca nostalgia pela experiência táctil e física de interação com um álbum físico."
},
{
  "ypos": 9,
  "xpos": 10,
  "number": 64,
  "name": "Digital Versatile Disc",
  "symbol": "Dvd",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/DVD",
  "summary": "DVD, sigla em inglês para <i>Digital Video Disc</i> ou <i>Digital Versatile Disc</i>, é um formato de armazenamento de dados em discos ópticos. Foi inventado e desenvolvido em 1995 e lançado pela primeira vez em 1º de novembro de 1996, no Japão. A mídia pode armazenar qualquer tipo de dado digital e tem sido largamente usada para armazenar filmes, <i>softwares</i> e arquivos em geral. DVDs oferecem capacidade de armazenamento significativamente maior do que os discos compactos (CDs), apesar de terem as mesmas dimensões físicas. Um DVD padrão de camada simples pode armazenar até 4,7GB de dados, enquanto que um DVD de camada dupla pode armazenar até 8,5GB.<br/><br/>DVDs pré-gravados são produzidos em massa através de máquinas de moldagem que prensam dados no DVD. Tais discos são um forma de DVD-ROM porque os dados só podem ser lidos, e não escritos ou apagados. DVDs em branco graváveis (DVD-R e DVD+R) podem ser gravados com um gravador de DVD e funcionarem como um DVD-ROM. DVDs regraváveis (DVD-RW, DVD+RW e DVD-RAM) podem ser gravados e apagados múltiplas vezes."
},
{
  "ypos": 9,
  "xpos": 11,
  "number": 65,
  "name": "Blu-ray Disc",
  "symbol": "Bd",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/Blu-ray",
  "summary": "Blu-ray (Blu-ray Disc ou BD) é um formato de armazenamento de dados em discos ópticos, desenhado para substituir o formato DVD. Foi inventado e desenvolvido no início e meados dos anos 2000 e lançado ao público mundialmente em 20 de junho de 2006, capaz de armazenar várias horas de vídeo em alta resolução (HDTV 720p e 1080p). O caso de uso principal para Blu-ray é como mídia para vídeos como filmes e para distribuição de jogos de videogame, para PlayStation 3, PlayStation 4, Xbox One e Xbox Série X. O nome refere-se ao laser azul usado para ler o disco, que permite que os dados sejam armazenados em uma densidade maior do que comparado aos DVDs, que usam um laser vermelho  e com maior comprimento de onda. Essa densidade maior de dados resulta em maior capacidade de armazenamento.<br/><br/>O disco de policarbonato possui as mesmas dimensões que os discos de CD e DVD: 120mm de diâmetro e 1,2mm de espessura. Discos Blu-ray convencionais podem conter até 25GB por camada, sendo que discos de dupla camada (50GB) são o padrão da indústria para filmes. Existem também discos de tripla camada (100GB) e quádrupla camada (128GB) disponíveis em <i>drives</i> BDXL."
},
{
  "ypos": 9,
  "xpos": 12,
  "number": 66,
  "name": "Fita magnética",
  "symbol": "Mag",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/Magnetic-tape_data_storage",
  "summary": "Armazenamento em fita magnética é um sistema para guardar informações digitais. As primeiras fitas magnéticas foram lançadas na década de 1950 e continuam a ser aprimoradas e vendidas nos dias atuais.</br></br>Linear Tape-Open (LTO), também conhecido como formato <i>LTO Ultrium</i>, é um tipo de fita magnética usada para <i>backup</i>, arquivamento e transferência de dados. Foi originalmente desenvolvida no fim dos anos 1990 como um formato de domínio público, uma alternativa aos formatos proprietários de fita magnética disponíveis naquela época. Após sua introdução, o LTO rapidamente redefiniu o mercado e desde então tem sido o formato de fita magnética mais vendido. A última geração, LTO-10, especifica dois tipos de cartuchos com capacidade de 30TB ou 40TB cada.<br/><br/>Em contraste com outros formatos de armazenamento de dados, LTO oferece cartuchos removíveis de alta capacidade com um menor custo por TB e melhor estabilidade a longo prazo, mas o custo de um <i>drive</i> de leitura e gravação é alto. Em geral, LTO demanda muito menos energia elétrica por <i>terabyte</i> e inclui tecnologias embutidas de fábrica, como LTFS, WORM, criptografia e compressão."
},
{
  "ypos": 9,
  "xpos": 13,
  "number": 67,
  "name": "Internet discada",
  "symbol": "Du",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/Dial-up_Internet_access",
  "summary": "Uma conexão de internet discada é uma forma de acesso à Internet que usa a rede pública de telefonia comutada (RPTC) para estabelecer uma conexão a um provedor de internet através da discagem a um número de telefone em uma linha telefônica convencional. O computador ou terminal do usuário usa um <i>modem</i> para codificar e decodificar pacotes IP e convertê-los em sinais audíveis que são transmitidos pela linha telefônica.</br></br>Após a introdução de internet banda larga no final dos anos 1990, a internet discada tornou-se menos popular. Ainda é utilizada onde outras formas não são disponíveis ou onde o custo é inviável, como por exemplo em áreas rurais ou remotas.</br></br>Em dados de 2023, operadoras de telefonia ao redor do mundo estão em processo de descontinuamento de redes telefonia analógica e ISDN, efetuando a transição para redes de Voice over IP (VoIP) via Internet, através de redes DSL, <i>modems</i> cabeados ou fibra óptica, eliminando as despesas e complexidade de manter duas infraestruturas de conexão ao mesmo tempo, RPTC e de internet.</br></br>No modelo OSI, as conexões discadas pertencem à camada de enlace de dados (camada 2)."
},
{
  "ypos": 9,
  "xpos": 14,
  "number": 68,
  "name": "Ethernet",
  "symbol": "Eth",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/Ethernet",
  "summary": "Ethernet é uma tecnologia para criar redes cabeadas locais (LANs). Ela permite que dispositivos como computadores, roteadores, impressoras e videogames comuniquem-se entre si transmitindo dados através de cabos físicos como Cat5e, Cat6 e Cat7.</br></br>Ethernet provê uma maneira rápida, confiável e segura para transferir dados. Ao contrário do Wi-Fi, que usa ondas de rádio, Ethernet usa cabos de cobre para enviar sinais elétricos entre os dispositivos. Isso resulta em conexões mais estáveis, velocidades mais rápidas e menor latência, e é justamente por isso que o Ethernet é preferível para atividades como jogos <i>online</i>, <i>streaming</i> de vídeo e redes empresariais.</br></br>Foi introduzido aos mercados consumidores em 1980 e padronizado em 1983 com o ECMA-82, e logo em seguida como IEEE 802.3. Ao longo do tempo, o Ethernet tomou o lugar de outras tecnologias de redes locais cabeadas como o Token Ring, FDDI e ARCNET.</br></br>No modelo OSI, o Ethernet pertence à camada de enlace de dados (camada 2)."
},
{
  "ypos": 9,
  "xpos": 15,
  "number": 69,
  "name": "Wi-Fi",
  "symbol": "Wf",
  "category": "physical protocol",
  "source": "https://en.wikipedia.org/wiki/Wi-Fi",
  "summary": "Wi-Fi é uma família de protocolos de redes sem fio baseadas na família de padrões IEEE 802.11, que são comumente usados para redes locais de dispositivos e acesso à Internet, permitindo que aparelhos digitais troquem dados através de ondas de rádio. São as redes de computadores mais populares, usadas ao redor do mundo em redes domésticas e de escritórios para conexão à Internet e redes locais; são também usadas para prover acesso à Internet em locais públicos como cafeterias, restaurantes, hotéis, bibliotecas e aeroportos.</br></br>O alcance de um ponto de acesso é de cerca de 20 metros em um lugar fechado, enquanto que alguns pontos de acesso alcançam até 150 metros em espaços abertos. A cobertura pode ser pequena, se for em uma sala com paredes que bloqueiam sinais de rádio, ou tão grande quanto vários quilômetros quadrados, através de múltiplos pontos de acesso redundantes e com <i>roaming</i> permitido entre eles. Ao longo dos anos, a velocidade e eficiência espectral do Wi-Fi tem aumentado. Em números de 2025, algumas versões do Wi-Fi podem atingir velocidades de até 23 Gbit/s (gigabit por segundo).</br></br>No modelo OSI, o Wi-Fi pertence à camada de enlace de dados (camada 2)."
},
{
  "ypos": 9,
  "xpos": 16,
  "number": 70,
  "name": "LoRaWAN",
  "symbol": "Lrw",
  "category": "physical protocol",
  "source": "https://lora-alliance.org/",
  "summary": "LoRaWAN é um protocolo de rede de baixa potência e longo alcance (LPWAN) que conecta dispositivos operados a bateria à Internet. LoRaWAN utiliza a LoRa como camada física. LoRa é uma tecnologia de sinal de rádio similar ao Wi-Fi ou às redes de telefonia celular, enquanto que o LoRaWAN é o protocolo para conectar dispositivos de baixa potência distribuídos em longas distâncias, chegando a 15km em áreas rurais, fazendo dela uma tecnologia importante para a Internet das Coisas (IoT, em inglês). A tecnologia é usada principalmente em situações onde pequenas quantidades de dados precisam ser transmitidas esporadicamente de locais de difícil acesso, como em agricultura inteligente, monitoramento industrial e rastreio de bens. A LoRaWAN foi desenvolvida inicialmente pela empresa francesa Cycleo, que foi comprada pela Semtech em 2012, e o padrão agora é mantido pela LoRa Alliance.</br></br>No modelo OSI, a LoRaWAN pertence à camada de enlace de dados (camada 2)."
},
{
  "ypos": 9,
  "xpos": 17,
  "number": 71,
  "name": "InfiniBand",
  "symbol": "Ib",
  "category": "physical protocol",
  "source": "https://www.cudocompute.com/blog/hpc-networking-introduction-to-infiniband",
  "summary": "InfiniBand (IB) é uma tecnologia para redes de alta performance inicialmente desenvolvida para endereçar as limitações da Ethernet e fibras ópticas, de modo que foi criada com alta taxa de transferência, baixa latência e escalabilidade em mente.</br></br>InfiniBand oferece taxas de transmissão incrivelmente altas, com velocidades de até 400 Gbps e além, alcançadas através de avanços como a especificação Next Data Rate (NDR), que permite velocidades de 400 Gbps por canal de dados.</br></br>Além da velocidade do InfiniBand, ele também consegue latência ultra-baixa, inferior a um microssegundo. Esse atraso mínimo é importante em sistemas como computação de alta performance e transações financeiras, onde até os menores podem acarretar em prejuízos à performance geral.<br/><br/>InfiniBand é altamente escalável e pode conectar milhares de nós em um único <i>cluster</i>, sendo um ótimo candidato a usos como computação de alta performance (HPC), centros de processamento de dados e ambientes empresariais nos quais muitos sistemas complexos são interconectados.</br></br>No modelo OSI, o InfiniBand pertence à camada de enlace de dados (camada 2)."
},
{
  "ypos": 6,
  "xpos": 4,
  "number": 72,
  "name": "R",
  "symbol": "R",
  "category": "programming language",
  "source": "https://www.r-project.org/",
  "summary": "R é uma linguagem e ambiente para computação estatística e gráficos. É um projeto GNU e é parecida com a linguagem e ambiente S, que foram desenvolvidos por John Chamber e seus colegas nos Laboratórios Bell (que depois se tornaram AT&T e hoje são a Lucent Technologies).</br></br>R fornece uma vasta gama de ferramentas gráficas e estatísticas, como modelagem linear e não-linear, testes clássicos de estatística, análise de séries temporais, classificação, <i>clustering</i>, entre outras, e é altamente extensível.</br></br>Uma das maiores forças do R é a facilidade de geração de gráficos bonitos e de alta qualidade, incluindo símbolos matemáticos e fórmulas onde for necessário. Houve muito cuidado nas decisões de design padrão em gráficos, porém, o usuário pode customizá-los como quiser.</br></br>R é <i>software</i> livre e de código aberto regido sob a licença GNU General Public License da Free Software Foundation. Ele compila e roda em sistemas tipo UNIX, como FreeBSD, Linux e macOS, e também em Windows."
},
{
  "ypos": 6,
  "xpos": 5,
  "number": 73,
  "name": "Rust",
  "symbol": "Rs",
  "category": "programming language",
  "source": "https://en.wikipedia.org/wiki/Rust_(programming_language)",
  "summary": "Rust é uma linguagem de programação de propósito geral que enfatiza performance, tipagem segura, concorrência e segurança de memória. O programador Graydon Hoare criou Rust em 2006 enquanto trabalhava na Mozilla, que patrocinou oficialmente o projeto a partir de 2009. A primeira versão estável, Rust 1.0, foi publicada em maio de 2015.</br></br>Rust força segurança de memória (isto é, todas as referências apontam a uma região válida de memória) sem recorrer a uma <i>garbage collector</i> tradicional; ao invés disso, erros de acesso a memória e condições de corrida são prevenidas por um <i>borrow checker</i>, que rastreia em tempo de compilação os ciclos de vida das referências dos objetos."
},
{
  "ypos": 6,
  "xpos": 6,
  "number": 74,
  "name": "FoxPro",
  "symbol": "Fox",
  "category": "programming language",
  "source": "https://en.wikipedia.org/wiki/Visual_FoxPro",
  "summary": "FoxPro é uma linguagem de programação procedural, orientada a objetos, com tipagem dinâmica e focada em dados, e também um sistema de gerenciamento de banco de dados (SGBD), publicada originalmente pela Fox Software em 1984.</br></br>Visual FoxPro, seu sucessor, é uma linguagem de programação desenvolvida pela Microsoft, após fusão com a Fox Technologies em 1992.<br/><br/>Programas FoxPro incluem seus próprios bancos de dados embutidos, sendo uma opção interessante para fazer programas <i>desktop</i> e também alguns servidores <i>backend</i> simples. Eles podem também se comunicar com bancos de dados como Oracle, mySQL e MS SQL Server, através de conexões OLE DB."
},
{
  "ypos": 6,
  "xpos": 7,
  "number": 75,
  "name": "High-Level Shader Language",
  "symbol": "Hlsl",
  "category": "programming language",
  "source": "https://programming.muthu.co/posts/beginners-guide-to-hlsl/",
  "summary": "<i>High-Level Shading Language</i> (HLSL) é uma linguagem de programação desenvolvida pela Microsoft para escrever <i>shaders</i> (sombreadores, em inglês). <i>Shaders</i> são pequenos programas que rodam em uma unidade de processamento gráfico (GPU) para determinar como um objeto visual deve ser renderizado na tela. Eles controlam vários aspectos da renderização, incluindo iluminação, texturas e efeitos.<br/><br/>HLSL é especificamente desenhada para uso com o DirectX, a API para gráficos da Microsoft, fazendo dela uma ferramenta crucial para desenvolvedores de jogos e outros programadores de gráficos que trabalham no ecossistema DirectX. HLSL fornece uma interface relativamente de alto nível, abstraindo vários detalhes de baixo nível da GPU, e ao mesmo tempo oferecendo controle pormenorizado sobre o processo de renderização."
},
{
  "ypos": 6,
  "xpos": 8,
  "number": 76,
  "name": "Haskell",
  "symbol": "Hs",
  "category": "programming language",
  "source": "https://www.haskell.org/",
  "summary": "Haskell é uma linguagem de programação funcional pura, com tipagem forte e estática, de propósito geral, com inferência de tipos e avaliação preguiçosa. Haskell pioneirizou diversas idéias de linguagens de programação como classes de tipo para sobrecarregamento seguro de operadores e entrada e saída monádicas. Recebeu o nome do matemático Haskell Curry.<br/><br/>Após o lançamento do Miranda pela empresa Research Software Ltd. em 1985, o interesse em linguagens de programação funcional cresceu. Em 1987, mais de uma dúzia de linguagens funcionais puras existiam. Miranda era a mais usada, mas era <i>software</i> proprietário na época. Na Conferência de Linguagens de Programação Funcional e Arquitetura de Computadores (FPCA '87) em Portland, Oregon, havia um grande consenso que um comitê deveria ser formado para definir um padrão comum para essas linguagens. O propósito do comitê era consolidar as linguagens funcionais existentes em uma única comum para servir de base para pesquisas futuras de <i>design</i> de linguagens funcionais.<br/><br/>Haskell foi então desenvolvido por um comitê, tentando juntar as soluções disponibilizadas à época."
},
{
  "ypos": 6,
  "xpos": 9,
  "number": 77,
  "name": "Scala",
  "symbol": "Sc",
  "category": "programming language",
  "source": "https://www.scala-lang.org/",
  "summary": "Scala é uma linguagem de programação funcional e fortemente tipada do ecossistema Java.<br/><br/>Código-fonte Scala pode ser compilado a <i>bytecodes</i> JVM e rodar em uma máquina virtual Java (JVM). Ao rodar em uma JVM, Scala consegue interoperabilidade com o Java tal que bibliotecas escritas em ambas as linguagens podem ser referenciadas diretamente em código Scala ou Java. Tal como o Java, Scala é orientado a objetos e tem uma sintaxe de chaves parecida com a linguagem C. Ao contrário do Java, Scala tem várias funcionalidades de linguagens de programação funcional, como <i>currying</i>, imutabilidade, avaliação preguiçosa e combinação de padrões.<br/><br/>O desenho inicial do Scala começou em 2001 na Escola Politécnica Federal de Lausana, na Suíça, por Martin Odersky. Ela nasceu do trabalho prévio na linguagem Funnel, uma linguagem que combinava idéias de programação funcional e redes de Petri. Odersky anteriormente trabalhara no Generic Java e no javac, o compilador Java da Sun."
},
{
  "ypos": 6,
  "xpos": 10,
  "number": 78,
  "name": "Java",
  "symbol": "Java",
  "category": "programming language",
  "source": "https://www.java.com/",
  "summary": "Java é uma linguagem de programação de alto nível, propósito geral, de memória segura e orientada a objetos. Sua sintaxe é parecida com C e C++. Aplicativos Java geralmente são compilados a <i>bytecodes</i> que podem rodar em qualquer máquina virtual Java (JVM), independente da arquitetura do computador.<br/><br/>Java foi desenhada por James Gosling da Sun Microsystems. Foi lançada em maio de 1995 como um componente-chave da plataforma Java da Sun. As implementações originais dos compiladores, as máquinas virtuais e as bibliotecas Java foram lançadas sob licenças proprietárias da Sun. Em maio de 2007, conforme às especificações do Processo de Comunidade do Java, a Sun relicenciou a maioria das tecnologias Java sob a licença GPL-2.0. A implementação oficial de referência do Java é a OpenJDK JVM, que é <i>software</i> de código aberto e é a JVM padrão usada pela maioria dos desenvolvedores e distribuições Linux."
},
{
  "ypos": 6,
  "xpos": 11,
  "number": 79,
  "name": "Kotlin",
  "symbol": "Kt",
  "category": "programming language",
  "source": "https://kotlinlang.org/",
  "summary": "Kotlin é uma linguagem de programação fortemente tipada que foi lançada em 2016 pela JetBrains.<br/><br/>Tornou-se bastante popular por ser compatível com Java, uma das linguagens de programação mais populares, o que significa que código e bibliotecas Java podem ser usados em programas Kotlin.<br/><br/>O líder de desenvolvimento Andrey Breslav disse que Kotlin foi desenhada para ser uma linguagem melhor do que o Java e ao mesmo tempo interoperável com ele, permitindo que empresas façam uma migração gradual do Java para o Kotlin.<br/><br/>Kotlin é usado principalmente em aplicativos móveis para Android."
},
{
  "ypos": 6,
  "xpos": 12,
  "number": 80,
  "name": "TypeScript",
  "symbol": "Ts",
  "category": "programming language",
  "source": "https://www.typescriptlang.org/",
  "summary": "TypeScript (TS) é uma linguagem de programação de alto nível que adiciona tipagem estática e com anotações opcionais ao JavaScript, e transpilando para este. É voltada para desenvolver aplicativos grandes.<br/><br/>É desenvolvida pela Microsoft como <i>software</i> gratuito e de código aberto, sob a licença Apache 2.0. TypeScript pode ser usada para desenvolver aplicativos JavaScript tanto de cliente como de servidor, por exemplo, com React.js, Node.js, Deno ou Bun."
},
{
  "ypos": 6,
  "xpos": 13,
  "number": 81,
  "name": "VBScript",
  "symbol": "Vbs",
  "category": "scripting language",
  "source": "https://en.wikipedia.org/wiki/VBScript",
  "summary": "VBScript (<i>Microsoft Visual Basic Scripting Edition</i>) é uma linguagem de programação de <i>scripting</i> no Microsoft Windows usando Component Object Model (COM), baseada no Visual Basic clássico e Active Scripting. Era popular entre administradores de sistemas para gerenciar computadores e automatizar vários aspectos de ambientes, e vem instalado por padrão em todas as edições do Microsoft Windows desde o Windows 98 e no Windows Server desde o Windows NT 4.0 Option Pack.<br/><br/>Administração de sistemas não era o único caso de uso para o VBScript; ele foi originalmente concebido como a resposta da Microsoft ao JavaScript. Foi projetado para uso no navegador Microsoft Internet Explorer para rodar no lado do cliente junto com controles ActiveX, servidores de automação e <i>applets</i> Java."
},
{
  "ypos": 6,
  "xpos": 14,
  "number": 82,
  "name": "NullSoft Scriptable Install System",
  "symbol": "Nsis",
  "category": "scripting language",
  "source": "https://nsis.sourceforge.io/Main_Page",
  "summary": "NSIS (<i>Nullsoft Scriptable Install System</i>) é uma solução de código aberto largamente usada para a criação de instaladores de <i>software</i> no Windows. Originalmente criada pela Nullsoft, a empresa responsável pelo Winamp, essa ferramenta permite aos desenvolvedores gerarem pacotes de instalação leves, customizáveis e de alta performance.<br/><br/>Sendo a primeira experiência do usuário com o produto, um instalador confiável e estável é um importante componente de <i>softwares</i> de sucesso.<br/><br/>NSIS é baseado em <i>scripts</i> e permite criar lógica para lidar com as tarefas de instalação mais complexas. Muitos <i>plug-ins</i> e <i>scripts</i> estão disponíveis: é possível criar instaladores web, comunicar-se com o Windows, instalar e atualizar componentes compartilhados, entre outros."
},
{
  "ypos": 6,
  "xpos": 15,
  "number": 83,
  "name": "PowerShell",
  "symbol": "Ps",
  "category": "scripting language",
  "source": "https://learn.microsoft.com/en-us/powershell/scripting/overview",
  "summary": "PowerShell é uma solução multiplataforma para automação de tarefas composta por um <i>prompt</i> de comando, uma linguagem de programação e um <i>framework</i> de gerenciamento de configurações. Roda em Windows, Linux e macOS. Foi desenhado para administração e automação de sistemas. Ao contrário de maioria dos <i>shells</i> que somente aceitam e retornam textos, o PowerShell aceita e retorna objetos complexos, e pode chamar métodos do ecossistema .NET.</br></br>Lançado inicialmente pela Microsoft em 2006, PowerShell desde então evoluiu para uma poderosa ferramenta usada por profissionais de TI, desenvolvedores e administradores de sistemas ao redor do mundo. Sua habilidade para lidar com tarefas complexas, processos de automação repetitivos e gerenciar configurações de sistemas o torna indispensável na infraestrutura de TI moderna."
},
{
  "ypos": 6,
  "xpos": 16,
  "number": 84,
  "name": "Python",
  "symbol": "Py",
  "category": "scripting language",
  "source": "https://www.python.org/",
  "summary": "Python é uma linguagem de programação de alto nível, interpretada, com tipagem dinâmica e orientada a objetos. Ela é freqüentemente ensinada como uma linguagem de programação introdutória.<br/><br/>Foi concebida no fim dos anos 1980 por Guido van Rossum no Centrum Wiskunde & Informatica (CWI) na Holanda. Foi desenhada como uma sucessora à linguagem de programação ABC, que por sua vez foi inspirada no SETL."
},
{
  "ypos": 6,
  "xpos": 17,
  "number": 85,
  "name": "Computação quântica",
  "symbol": "Q",
  "category": "type of computing",
  "source": "https://en.wikipedia.org/wiki/Quantum_computing",
  "summary": "Um computador quântico é um computador real ou teórico que se aproveita de fenômenos quânticos como superposição e entrelaçamento.<br/><br/>A unidade básica de informação em computação quântica é o <i>qubit</i> (<i>bit</i> quântico), que tem a mesma função que o <i>bit</i> na computação digital. Porém, ao contrário do <i>bit</i> clássico, que só pode estar em um de dois estados possíveis, 0 e 1, ou seja, um valor binário, um <i>qubit</i> pode existir como uma combinação linear desses dois valores, conhecida como superposição quântica. Ao se medir um <i>qubit</i>, obtém-se um desses dois estados, de acordo com uma regra probabilística. Se um computador quântico manipula um <i>qubit</i> de uma certa maneira, efeitos de interferência de onda aumentam a probabilidade de um resultado de medição esperado. O <i>design</i> de algoritmos quânticos envolve criar procedimentos que permitam um computador quântico realizar essa amplificação.<br/><br/>Computadores quânticos ainda não são práticos para aplicações da vida real, em se tratando de 2026. A engenharia por trás de <i>qubits</i> de alta qualidade é complicada. Se o <i>qubit</i> físico não for adequadamente isolado do seu ambiente, ele sofre decoerência quântica, introduzindo ruído nos cálculos. Governos de várias nações têm investido pesado em pesquisas experimentais voltadas a desenvolver <i>qubits</i> escaláveis com maiores tempos de coerência e menores taxas de erro. Algumas implementações experimentais usam supercondutores, que isolam a corrente elétrica ao eliminar a resistência elétrica, e armadilhas de íons, que confinam uma partícula atômica usando campos eletromagnéticos. Pesquisadores dizem, e são amparados por seus colegas, que alguns dispositivos quânticos podem superar computadores clássicos em algumas tarefas específicas, uma marca que é chamada de vantagem quântica ou supremacia quântica. Essas tarefas não são necessariamente úteis para aplicações da vida real. Como resultado, as demonstrações atuais são melhor entendidas como marcos científicos do que evidências de emprego em larga escala em um futuro próximo. Em dezembro de 2024, o chip Willow da Google alcançou um nível de correção de erros abaixo do limiar, um marco significativo em 30 anos de pesquisa, enquanto que o investimento global em computação quântica chegou a 10 bilhões de dólares americanos em abril de 2025."
},
{
  "ypos": 6,
  "xpos": 18,
  "number": 86,
  "name": "Apple macOS",
  "symbol": "M",
  "category": "operating system",
  "source": "https://www.apple.com/br/os/macos/",
  "summary": "O Apple macOS, anteriormente chamado de Mac OS X, é um sistema operacional de código fechado e tipo Unix, derivado do OPENSTEP para Mach e FreeBSD, e que tem sido vendido e desenvolvido pela Apple desde 2001. É o sistema operacional padrão da linha de computadores Mac da Apple. Em números de abril de 2026, no mercado de computadores de mesa e portáteis, é o segundo sistema operacional mais usado, atrás do Microsoft Windows e à frente de todas as distribuições Linux, incluindo o ChromeOS e o SteamOS.<br/><br/>O Mac OS X sucedeu o Mac OS clássico, o sistema operacional primário para Macintosh de 1984 até 2001. Sua arquitetura subjacente vem do NeXTSTEP, resultado da aquisição da NeXT pela Apple, o que também trouxe Steve Jobs de volta à companhia. A primeira versão <i>desktop</i>, Mac OS X 10.0, foi lançada em 24 de março de 2001. Com a exceção do OS X Lion, todas as versões do Mac OS X a partir do Leopard têm a certificação UNIX 03. Todos os outros sistemas contemporâneos da Apple, como o iOS, iPadOS, watchOS, tvOS, audioOS e visionOS são derivados do macOS."
},
{
  "ypos": 7,
  "xpos": 1,
  "number": 87,
  "name": "Apache Parquet",
  "symbol": "Pqt",
  "category": "structured data format",
  "source": "https://parquet.apache.org/",
  "summary": "O Apache Parquet é um formato de arquivo orientado a colunas e de licença livre, projetado para armazenamento e leitura eficientes de dados. Ele tem alto nível de compressão e esquemas de codificação para lidar com dados complexos em massa, e é suportado por várias linguagens de programação e ferramentas de análise.<br/><br/>No Parquet, a compressão é coluna por coluna, o que possibilita esquemas de codificação distintos para texto e números. Essa estratégia deixa a porta aberta para novos e melhores esquemas de codificação que possam surgir no futuro.<br/><br/>Parquet suporta vários formatos de compressão: snappy, gzip, LZO, brotli, zstd e LZ4.<br/><br/>Ele tem habilitada por padrão uma codificação automática em dicionário para dados com baixa cardinalidade (isto é, baixo número de valores possíveis, no caso, até cem mil), o que resulta em alta taxa de compressão e acelera significativamente a taxa de processamento.<br/><br/>Parquet implementa um híbrido de empacotamento binário e <i>run-length encoding</i>, no qual a codificação escolhida é aquela que produz o melhor resultado de compressão. Essa estratégia funciona bem para certos tipos de dados em números inteiros e combina bem com codificações em dicionários."
},
{
  "ypos": 7,
  "xpos": 2,
  "number": 88,
  "name": "Scalable Vect. Graphics",
  "symbol": "Svg",
  "category": "internet file format",
  "source": "https://developer.mozilla.org/en-US/docs/Web/SVG",
  "summary": "O formato de arquivo SVG, em inglês, <i>Scalable Vector Graphics</i>, é um formato de imagens vetorial e baseado no XML, muito adequado para imagens escaláveis em duas dimensões (2D). O formato provê escalabilidade ilimitada, tal que os desenhos preservam um bom aspecto em quaisquer dimensões e em quaisquer meios; por exemplo, um logotipo em SVG pode ser usado tanto em uma página Web como em um <i>outdoor</i>. Comparado a formatos clássicos de imagem como JPEG e PNG, imagens vetorizadas em SVG podem ser renderizadas em qualquer tamanho sem perda de qualidade e podem facilmente terem seus textos internos editados, bastando editar o XML que as compõe, sem precisar de um editor gráfico.<br/><br/>O armazenamento em arquivo-texto também permite que arquivos SVG também sejam indexados e pesquisados em motores de busca da Internet.<br/><br/>No fim dos anos 1990, o World Wide Web Consortium (W3C) reconheceu a necessidade para um formato de imagem universal e fez uma chamada pública para propostas. O mundo da tecnologia respondeu com opções de <i>designers</i> e desenvolvedores de empresas influentes como Adobe, IBM, Microsoft, Boeing e Xerox.<br/><br/> Essas idéias confluíram no que eventualmente se tornou o formato de gráficos vetoriais escaláveis – o formato SVG. Hoje, SVGs possibilitam que <i>designers</i> tenham um formato de arquivo fácil de trabalhar e altamente acessível."
},
{
  "ypos": 10,
  "xpos": 3,
  "number": 89,
  "name": "Transmission Control Protocol",
  "symbol": "Tcp",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/Transmission_Control_Protocol",
  "summary": "TCP, sigla em inglês para <i>Transmission Control Protocol</i>, é um dos principais protocolos das redes TCP/IP. Enquanto o protocolo IP lida apenas com pacotes, o TCP estabelece entre as partes uma conexão, através da qual trafegam fluxos de dados. O TCP garante a entrega confirmada e ordenada de seus pacotes, que chegarão à outra parte da mesma forma em que foram enviados.<br/><br/>TCP é orientado a conexões, tal que o enviador e o recebedor primeiro precisam estabelecer uma conexão baseada em certos parâmetros combinados; eles fazem isso através de um aperto de mãos (<i>handshake</i>) em três vias. O servidor deve estar aberto (abertura passiva) para pedidos de conexão vindos de clientes antes que uma conexão seja propriamente estabelecida. O aperto de mãos em três vias (abertura ativa), retransmissão e detecção de erros dão confiabilidade à conexão, mas ao mesmo tempo, imbuem latência. Aplicações que não requerem um fluxo de dados confiável e ordenado podem recorrer então ao UDP (<i>User Datagram Protocol</i>), que possibilita enviar datagramas sem precisar de uma conexão, favorecendo velocidade ante confiabilidade. O TCP também é desenhado para evitar congestão de rede.</br></br>No modelo OSI, o TCP pertence à camada de transporte (camada 4)."
},
{
  "ypos": 10,
  "xpos": 4,
  "number": 90,
  "name": "User Datagram Protocol",
  "symbol": "Udp",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/User_Datagram_Protocol",
  "summary": "Em redes de computadores, o UDP, sigla em inglês para <i>User Datagram Protocol</i>, é um dos protocolos centrais para comunicação, usado para enviar datagramas para outras máquinas através do protocolo IP.<br/><br/>O UDP é um protocolo que não estabelece conexões, ou seja, as mensagens são enviadas sem precisar uma conexão entre as partes e o UDP se preocupa com confirmações de recebimento. É adequado para fins em que a verificação e correção de erros ou não são necessárias ou então são feitas pela aplicação; o UDP evita lidar com esses processamentos. Programas sensíveis a atrasos e lentidões muitas vezes optam pelo UDP porque perder pacotes é preferível a travar o processamento enquanto os espera, por exemplo, em um sistema de acompanhamento em tempo real.<br/><br/>Se o sistema precisa de correções de erros a nível de protocolo de transporte, então recomenda-se optar pelo <i>Transmission Control Protocol</i> (TCP) ou pelo <i>Stream Control Transmission Protocol</i> (SCTP), que são desenhados para esse propósito.</br></br>No modelo OSI, o UDP pertence à camada de transporte (camada 4)."
},
{
  "ypos": 10,
  "xpos": 5,
  "number": 91,
  "name": "Internet Protocol",
  "symbol": "Ip",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/Internet_Protocol",
  "summary": "O <i>Internet Protocol</i> (IP) é o protocolo de comunicações em redes IP. Ele é a base da internet e das redes de computadores modernas.<br/><br/>O protocolo faz o envio de pacotes IP de uma origem para um destino, cada qual com seu endereço IP; os endereços de origem e destino ficam marcados nos cabeçalhos dos pacotes. Um pacote é composto por um cabeçalho, que contém metadados, e pela seção de dados, que é o conteúdo propriamente dito. Com a extensão IPSec, o protocolo também provê autenticação e criptografia entre as partes.<br/><br/>O IP tem duas versões mais populares: o IPv4, mais antigo e mais popular; e o IPv6, mais novo, feito para permitir um número maior de endereços IP. Em abril de 2026, uma nova versão foi proposta: o IPv8.</br></br>No modelo OSI, o IP pertence à camada de rede (camada 3)."
},
{
  "ypos": 10,
  "xpos": 6,
  "number": 92,
  "name": "Network Time Protocol",
  "symbol": "Ntp",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/Network_Time_Protocol",
  "summary": "O <i>Network Time Protocol</i> (NTP) é um protocolo de rede para sincronização de relógios entre sistemas de computadores, através de redes baseadas em trocas de pacotes e com latências variáveis. Em operação desde 1985, o NTP é um dos protocolos de internet mais antigos em uso. NTP foi desenhado por David L. Mills da Universidade de Delaware.<br/><br/>NTP prevê a sincronização de computadores participantes com uma diferença de milissegundos em relação ao Tempo Universal Coordenado (UTC). Ele usa o algoritmo de intersecção, um versão modificada do algoritmo de Marzullo, para selecionar os servidores mais acurados e mitigar os efeitos de latências variáveis de rede. O NTP normalmente tem uma precisão de dezenas de milissegundos quando na internet pública, e pode alcançar precisão melhor do que um milissegundo em redes locais sob condições ideais.</br></br>No modelo OSI, o NTP pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 7,
  "number": 93,
  "name": "Virtual Private Network",
  "symbol": "Vpn",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/Virtual_private_network",
  "summary": "Uma rede privada virtual, sigla VPN em inglês, é uma rede sobreposta a outra, permitindo virtualização de rede e estendendo uma rede privada sobre outra geralmente pública, como a Internet, através de protocolos de criptografia e tunelamento.<br/><br/>Em uma explicação curta, pacotes de rede como IP, TCP e UDP são criptografados e colocados nas seções de dados de outros pacotes IP, TCP e UDP que trafegam em redes públicas. Os pacotes internos só podem ser descriptografados e lidos pelas terminações que pertencem à rede privada virtual; eles não podem ser descriptografados pelo dono da rede pública. A autenticação e troca de chaves normalmente é feita através do algoritmo Diffie-Hellman (DH).<br/><br/>O provedor da infraestrutura da rede pública ainda tem visibilidade das atividades do usuário, mas por meio de criptografia e obfuscação, reduz-se o risco de ataques externos bem-sucedidos de <i>sniffing</i> (em inglês, \"cheirada\").<br/><br/>VPNs são utilizadas por empresas para permitir que empregados e parceiros de negócio conectem-se às suas redes e máquinas de forma remota. Ela também são usadas por cidadãos de ditaduras e regimes autoritários para contornar bloqueios de internet gerais, às vezes estabelecidos por <i>firewalls</i> governamentais, e assim conseguir acesso a sites e aplicativos bloqueados.<br/><br/>Algumas das tecnologias mais populares para VPNs são o IPSec, L2TP, OpenVPN, WireGuard e DMVPN."
},
{
  "ypos": 10,
  "xpos": 8,
  "number": 94,
  "name": "Domain Name System",
  "symbol": "Dns",
  "category": "logic protocol",
  "source": "https://www.cloudflare.com/learning/dns/what-is-dns/",
  "summary": "<i>Domain Name System</i> (DNS) é a lista telefônica da internet. O DNS é responsável por converter nomes de domínio em endereços IP, para que navegadores e programas consigam carregar recursos da internet.<br/><br/>Por exemplo, o DNS converte um <i>hostname</i> como 'www.exemplo.com' em um endereço IP, como '192.168.1.1', que é então utilizado pelo sistema para troca de mensagens.</br></br>No modelo OSI, o DNS pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 9,
  "number": 95,
  "name": "Transport Layer Security",
  "symbol": "Tls",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/Transport_Layer_Security",
  "summary": "<i>Transport Layer Security</i> (TLS) é um protocolo criptográfico feito para prover segurança de comunicações em uma rede de computadores, como a internet. O protocolo é amplamente usado em programas como <i>e-mails</i>, mensagens instantâneas e voz por IP, porém, o uso no HTTPS é o mais conhecido pelo público.<br/><br/>O protocolo TLS visa fornecer segurança, privacidade, confidencialidade, integridade e autenticidade através de criptografia entre as partes, estabelecida, por exemplo, por meio de certificados. O TLS roda em cima de outros protocolos, como o TCP/IP, e ele mesmo é composto por duas camadas: o registro TLS e o aperto de mãos (<i>handshake</i>) TLS.<br/><br/>O protocolo é um padrão definido pela Internet Engineering Task Force (IETF) e sua primeira versão é de 1999, e a versão atual é a TLS 1.3, definida em agosto de 2018. O embrião do TLS foi o <i>Secure Sockets Layer</i> (SSL), que foi desenvolvido em meados dos anos 1990 pela Netscape Communications para implementar o protocolo HTTPS em seu navegador.</br></br>No modelo OSI, o TLS pertence à camada de apresentação (camada 6)."
},
{
  "ypos": 10,
  "xpos": 10,
  "number": 96,
  "name": "Internet Message Access Protocol",
  "symbol": "Imap",
  "category": "logic protocol",
  "source": "https://imap.org/",
  "summary": "<i>Internet Message Access Protocol</i> (IMAP) é um protocolo da internet usado por clientes de <i>e-mail</i> para baixar mensagens de um servidor, através de uma conexão TCP/IP.<br/><br/>O IMAP foi desenhado com o objetivo de permitir o gerenciamento de uma conta de <i>e-mail</i> por múltiplos clientes, de modo que as mensagens permanecem no servidor até que o usuário explicitamente as exclua. Servidores IMAP geralmente operam na porta 143. IMAP sobre SSL/TLS (IMAPS) opera na porta 993.<br/><br/>Praticamente todos os clientes modernos de <i>e-mail</i> suportam IMAP, que junto com o protocolo POP3 (<i>Post Office Protocol</i>), são os dois protocolos mais prevalentes para baixar <i>e-mails</i>.</br></br>No modelo OSI, o IMAP pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 11,
  "number": 97,
  "name": "Simple Mail Transfer Protocol",
  "symbol": "Smtp",
  "category": "logic protocol",
  "source": "https://www.cloudflare.com/learning/email-security/what-is-smtp/",
  "summary": "<i>Simple Mail Transfer Protocol</i> (SMTP) é um protocolo de internet para transmissão de correio eletrônico. Servidores de <i>e-mail</i> usam o SMTP para enviar e receber mensagens. Clientes de <i>e-mail</i> a nível de usuário normalmente usam SMTP apenas para enviar mensagens a um servidor, que as retransmite; esse servidor opera escutando nas porta 465 ou 587, de acordo com a RFC 8314.<br/><br/>O SMTP surgiu em 1980, formado a partir de conceitos implementados na ARPANET desde 1971. Desde então, foi atualizado, modificado e estendido várias vezes. A versão atual e mais usada do protocolo tem uma estrutura expansível, com várias extensões para autenticação, criptografia, transferência de dados binários e endereços de <i>e-mail</i> internacionalizados. Servidores SMTP comumente usam TCP na porta 25, quando se comunicando entre servidores, e 465 ou 587, quando é um cliente postando uma mensagem a um servidor.</br></br>No modelo OSI, o SMTP pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 12,
  "number": 98,
  "name": "Post Office Protocol",
  "symbol": "Pop",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/Post_Office_Protocol",
  "summary": "<i>Post Office Protocol</i> (POP) é um protocolo da internet usado por clientes de <i>e-mail</i> para baixar mensagens de um servidor. Atualmente, o POP versão 3 (POP3) é a versão mais comum.<br/><br/>O POP provê acesso via IP para que uma aplicação cliente acesse uma caixa de correio mantida em um servidor de <i>e-mail</i>. O protocolo suporta operações de listagem, baixa e exclusão de mensagens. Clientes POP3 conectam-se, baixam e salvam as mensagens em seus computadores, e elas são excluídas do servidor remoto. Esse <i>design</i> do POP foi motivado pela necessidade de usuários que tinham conexões de internet instáveis e temporárias, como internet discada, e queriam ler e manipular de forma <i>offline</i> as mensagens recebidas.<br/><br/>Clientes POP3 também têm a opção de deixar mensagens no servidor após baixá-las, e nesse modo de operação, os clientes baixarão apenas mensagens novas, que são identificadas através do comando UIDL (<i>unique-id list</i>).</br></br>No modelo OSI, o POP pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 13,
  "number": 99,
  "name": "File Transfer Protocol",
  "symbol": "Ftp",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/File_Transfer_Protocol",
  "summary": "<i>File Transfer Protocol</i> (FTP) é um protocolo padronizado de comunicações usado para transferir arquivos entre um servidor e um cliente, por meio de uma rede de computadores.<br/><br/>Usuários de FTP podem se autenticar através de um par usuário-senha em texto, ou então conectar-se anonimamente ao servidor, se este estiver configurado para permitir.<br/><br/>Durante uma transmissão FTP, existem quatro comandos de operações possíveis: “<i>send</i>”, “<i>get</i>”, “<i>change directory</i>” e “<i>transfer</i>”.<br/><br/>A transferência de arquivos pode ocorrer em três modos: em blocos, em fluxo e em compressão; neste último, o FTP usa o algoritmo Lempel-Ziv para comprimir os dados.</br></br>No modelo OSI, o FTP pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 14,
  "number": 100,
  "name": "Hypertext Transfer Protocol",
  "symbol": "Http",
  "category": "logic protocol",
  "source": "https://alexandrehtrb.github.io/posts/2024/03/http2-and-http3-explained/",
  "summary": "<i>Hypertext Transfer Protocol</i> (HTTP) é um protocolo usado para transmitir dados sob protocolos TCP ou UDP. Ele é a base das trocas de dados pela internet e permite baixar páginas HTML, imagens, vídeos e outros conteúdos. O HTTP opera em um modelo cliente-servidor, no qual o cliente faz uma requisição ao servidor e este responde àquele com os dados requisitados.<br/><br/>Mensagens HTTP são compostas por um conjunto de cabeçalhos opcionais, que são pares chave-valor de dados, e um corpo opcional. Mensagens de requisição especificam a versão do HTTP, um método (GET, POST, PUT, DELETE, PATCH, etc.) e um caminho. Mensagens de resposta contêm códigos de status, que indicam se a operação HTTP foi bem-sucedida ou não.</br></br>No modelo OSI, o HTTP pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 15,
  "number": 101,
  "name": "Message Queue Telemetry Transport",
  "symbol": "Mqtt",
  "category": "logic protocol",
  "source": "https://mqtt.org/",
  "summary": "<i>Message Queue Telemetry Transport</i> (MQTT) é um protocolo de comunicações leve, entre máquinas e em modelo de publicação-assinatura, para serviços de filas de mensagens. É voltado para conexões com dispositivos em locais remotos e com restrições de recursos, de energia ou com limites de banda de rede, como no caso de Internet das Coisas (IoT). Ele roda por cima de outro protocolo que provê conexões bi-direcionais, ordenadas e íntegras – geralmente, o TCP/IP.<br/><br/>Andy Stanford-Clark (da IBM) e Arlen Nipper (da Eurotech, Inc.) foram os autores da primeira versão do protocolo, em 1999. Era usado para monitorar oleodutos como parte de um sistema de controle industrial SCADA. O objetivo era ter um protocolo que era eficiente em termos de banda, leve e que usasse pouca energia da bateria, porque os dispositivos eram conectados via <i>link</i> de satélite, o que era extremamente caro naquela época.<br/><br/>O protocolo MQTT define duas entidades: um <i>broker</i> de mensagens e os clientes. O <i>broker</i> MQTT é um servidor que recebe mensagens de clientes que as postam e por sua vez, as repassa para outros clientes interessados. Um cliente MQTT é qualquer dispositivo, desde um microcontrolador até um servidor completo, que rode uma biblioteca MQTT e se conecte a um <i>broker</i> através de uma rede.<br/><br/>As informações são organizadas em uma hierarquia de tópicos. Quando um publicante tem um novo item de dados a ser distribuído, ele envia ao <i>broker</i> conectado uma mensagem com os dados. O <i>broker</i> então distribui a informação a todos os clientes que assinaram (estão ouvindo) aquele tópico. O publicante não precisa saber quais são os ouvintes ou onde eles estão; do mesmo modo, os ouvintes não sabem quem são os publicantes (a não ser que tal informação conste no conteúdo da mensagem).</br></br>No modelo OSI, o MQTT pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 16,
  "number": 102,
  "name": "BitTorrent",
  "symbol": "To",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/BitTorrent",
  "summary": "BitTorrent é um protocolo de comunicações para compartilhamento de arquivo ponto-a-ponto (P2P, em inglês, <i>peer-to-peer</i>), que permite que seus usuários distribuam arquivos de uma maneira descentralizada pela internet.<br/><br/>Para enviar ou receber arquivos, os usuários usam um cliente BitTorrent em seus computadores, clientes estes disponíveis para vários sistemas operacionais e plataformas, inclusive havendo um cliente oficial. Rastreadores BitTorrent fornecem uma lista de arquivos disponíveis para transferência e permitem ao cliente encontrar outros usuários (outros pontos), chamados de <i>seeds</i> (sementes, em inglês), que podem fornecer os arquivos desejados. <i>Downloads</i> através de BitTorrent muitas vezes são mais rápidos do que via HTTP ou FTP (<i>download</i> direto) pois não são restritos a um único servidor central, que pode limitar a taxa de transferência.<br/><br/>O programador Bram Cohen, aluno da Universidade de Buffalo, projetou o protocolo em abril de 2001 com a idéia de acelerar o <i>download</i> de arquivos ao possibilitar que fossem baixados de várias fontes ao mesmo tempo, cada uma fornecendo parte de um arquivo. Ele então liberou a primeira versão pública em 2 de julho de 2001.</br></br>No modelo OSI, o BitTorrent pertence à camada de aplicação (camada 7)."
},
{
  "ypos": 10,
  "xpos": 17,
  "number": 103,
  "name": "WebSockets",
  "symbol": "Ws",
  "category": "logic protocol",
  "source": "https://en.wikipedia.org/wiki/WebSocket",
  "summary": "Um WebSocket é um canal de comunicação bi-direcional construído em cima de uma conexão HTTP. Conexões HTTP tipicamente operam em um modelo requisição-resposta, mas o protocolo WebSocket possibilita uma comunicação bidirecional, com clientes e servidores enviando mensagens entre si quando quiserem, sem ordenamento pré-estabelecido.<br/><br/>WebSockets são empregados, por exemplo, em comunicações e atualizações em tempo real, e mensagens instantâneas.</br></br>No modelo OSI, os WebSockets pertencem à camada de aplicação (camada 7)."
},
{
  "ypos": 7,
  "xpos": 4,
  "number": 104,
  "name": "Julia",
  "symbol": "Jl",
  "category": "programming language",
  "source": "https://julialang.org/",
  "summary": "Julia é uma linguagem de programação de alto nível e de código aberto, desenvolvida por um grupo de 4 pessoas no MIT. Similar à linguagem de programação R, Julia é usada para computação científica, cálculos estatísticos e análise de dados.<br/><br/>Foi feita principalmente para facilitar o desenvolvimento de código, mas ao mesmo tempo, também tem execução muito mais rápida do que Python e R. Ela fornece suporte a tarefas complexas como computação em nuvem, concorrência e paralelismo, que são fundamentais na análise de grandes volumes de dados.<br/><br/>Julia herda conceitos de linguagens voltadas para matemática, mas também adota idéias de linguagens dinâmicas populares, como Perl, Python, Lua, Lisp e Ruby."
},
{
  "ypos": 7,
  "xpos": 5,
  "number": 105,
  "name": "Zig",
  "symbol": "Zig",
  "category": "programming language",
  "source": "https://ziglang.org",
  "summary": "Zig é uma linguagem de programação de sistemas idealizada para ser uma versão melhorada e de propósito geral à linguagem C. É livre e de código aberto, regida sob a licença MIT. Zig foi projetada por Andrew Kelley e anunciada pela primeira vez em 2016.<br/><br/>Características adotadas de linguagens modernas incluem execução de código em tempo de compilação (<i>comptime</i>), possibilitando metaprogramação, junto com diretivas de compilação que dão acesso a informações sobre tipos através de reflexão. Zig requer gerenciamento manual de memória. Também há suporte a programação de baixo nível, com <i>structs</i> empacotadas, números inteiros de largura arbitrária (i32, i64, u8, etc.) e múltiplos tipos de ponteiros."
},
{
  "ypos": 7,
  "xpos": 6,
  "number": 106,
  "name": "Visual Basic",
  "symbol": "Vb",
  "category": "programming language",
  "source": "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/aa232759(v=vs.60)",
  "summary": "Visual Basic (VB) é uma linguagem de programação inspirada no BASIC, lançada pela primeira vez em 1991, desenvolvida pela Microsoft para uso em Windows.<br/><br/>O Visual Basic foi muito inovador para sua época devido à sua IDE, com a qual era possível construir interfaces gráficas de usuário (GUIs) com componentes arrasta-e-solta (<i>drag-and-drop</i>) e programação orientada a eventos. Assim como BASIC foi pensada para ser uma linguagem fácil de aprender, a Microsoft queria o mesmo para o VB.<br/><br/>A última versão do Visual Basic clássico foi a 6 (VB6), lançada em 1998. Em 8 de abril de 2008, a Microsoft parou o suporte oficial à IDE do VB6, relegando a um status de legado.<br/><br/>VB permanece vivo no ecosistema .NET como VB.NET, e no Microsoft Office, como Visual Basic for Applications (VBA)."
},
{
  "ypos": 7,
  "xpos": 7,
  "number": 107,
  "name": "Linguagem Wolfram",
  "symbol": "Wl",
  "category": "programming language",
  "source": "https://www.wolfram.com/language/",
  "summary": "A linguagem Wolfram é uma linguagem de programação de alto nível, proprietária e multiparadigma, desenvolvida pela Wolfram Research. Ela é a linguagem do programa de computação de matemática simbólica Mathematica.<br/><br/>A linguagem Wolfram é usada para computação simbólica, álgebra exata e curação de múltiplos domínios de conhecimento. Ao contrário de outras linguagens de programação matemática, ela trata fórmulas, equações e código como estruturas de dados cruas, permitindo integrar, derivar e resolver equações matemáticas de forma exata, sem esforço e preservando a precisão e constantes irracionais, como pi.<br/><br/>Também vem embutida com repositórios de dados massivos do mundo real, abrangendo química, geografia, linguística e finanças."
},
{
  "ypos": 7,
  "xpos": 8,
  "number": 108,
  "name": "Ruby",
  "symbol": "Rb",
  "category": "programming language",
  "source": "https://www.ruby-lang.org/en/",
  "summary": "Ruby é uma linguagem interpretada, de alto nível, com tipagem dinâmica e de propósito geral; seu interpretador tem um <i>garbage collector</i> e compilação <i>just-in-time</i>. Ele suporta vários paradigmas de programação, como procedural, orientada a objetos e funcional.<br/><br/>De acordo com seu criador, Ruby foi influenciada por Perl, Smalltalk, Eiffel, Ada, BASIC e Lisp. O desenvolvimento da linguagem começou em meados dos anos 1990 por Yukihiro \"Matz\" Matsumoto, no Japão.<br/><br/>É muito popular devido ao <i>framework</i> Ruby on Rails."
},
{
  "ypos": 7,
  "xpos": 9,
  "number": 109,
  "name": "Scratch",
  "symbol": "Sb",
  "category": "educational language",
  "source": "https://scratch.mit.edu/",
  "summary": "Scratch é uma linguagem de programação educacional e gráfica, desenvolvida pelo grupo <i>Lifelong Kindergarten</i> no Laboratório de Mídia do MIT. No Scratch, você pode arrastar e combinar blocos de código para fazer vários tipos de programas, incluindo animações, estórias, instrumentos musicais e jogos. É quase como blocos de encaixe.<br/><br/>É usado em várias escolas como parte da grade curricular. É gratuita e crianças e adolescentes podem usá-la em casa ou em instituições de ensino.<br/><br/>Scratch possibilita que jovens aprendam conceitos de programação e criem projetos interativos sem precisarem aprender uma linguagem de programação baseada em texto. Não é necessário digitar rápido ou decorar códigos complexos para usar Scratch."
},
{
  "ypos": 7,
  "xpos": 10,
  "number": 110,
  "name": "Logo",
  "symbol": "Lgo",
  "category": "educational language",
  "source": "https://www.calormen.com/jslogo/",
  "summary": "Logo é uma linguagem de programação educacional, criada em 1967 por Wally Feurzeig, Seymour Papert e Cynthia Solomon. O nome foi cunhado por Feurzeig enquanto ele trabalhava na empresa Bolt, Beranek and Newman (atual RTX BBN Technologies) e deriva da palavra grega <i>logos</i>, que significa palavra ou idéia.<br/><br/>Sendo uma linguagem de propósito geral, Logo é conhecida pela sua tartaruga desenhista, com a qual comandos de movimento e desenhos produzem linhas e vetores gráficos na tela do computador.<br/><br/>Logo é uma linguagem multiparadigma e um dialeto do Lisp, uma linguagem de programação funcional."
},
{
  "ypos": 7,
  "xpos": 11,
  "number": 111,
  "name": "Ladder",
  "symbol": "Lad",
  "category": "hardware description language",
  "source": "https://ladderlogicworld.com/ladder-logic-basics/",
  "summary": "Lógica <i>ladder</i> era originalmente o método de escrever um documento com o <i>design</i> e construção de painéis de relés usados em sistemas de manufatura e controle de processos industriais. Cada dispositivo no painel de relés era representado por um símbolo no diagrama <i>ladder</i> com conexões entre os dispositvos mostrados. Além disso, outros itens externos ao painel, como bombas, aquecedores, entre outros, também eram incluídos no diagrama.<br/><br/>A lógica <i>ladder</i> evoluiu para uma linguagem de programação que representa um programa através de um diagrama gráfico, baseado em diagramas de circuito de lógica de relés. Lógica <i>ladder</i> é utilizada para desenvolver <i>softwares</i> para controladores lógico-programáveis (CLPs em português, PLCs em inglês) usados em sistemas de controle industrial. O nome vem da semelhança do diagrama a uma escada (<i>ladder</i>, em inglês), com dois trilhos verticais e uma série de degraus (trilhos horizontais) os conectando.<br/><br/>Alguns exemplos de automação industrial usando lógica <i>ladder</i> em CLPs são:<br/><br/>- Esteiras para manipulação de materiais.<br/>- Embalamento e arqueação de paletes.<br/>- Lubrificação de moinhos de bolas.<br/>- Esteiras para sistemas de logística e separação.<br/>- Dosagem e misturadoras de cimento.<br/>- Engarrafamento e etiquetamento de bebidas.<br/>- Controle de nível de moegas e tanques.<br/>- Controle de fluxo e pressão em líquidos e gases."
},
{
  "ypos": 7,
  "xpos": 12,
  "number": 112,
  "name": "Verilog",
  "symbol": "Vlg",
  "category": "hardware description language",
  "source": "https://en.wikipedia.org/wiki/Verilog",
  "summary": "Verilog é uma linguagem de descrição de <i>hardware</i> usada para descrever em forma de código sistemas e circuitos digitais. Foi desenvolvida pela empresa Gateway Design Automation em meados da década de 1980 e depois adquirida pela Cadence Design Systems.<br/><br/>Verilog é muito usada no <i>design</i> e verificação de sistemas digitais e de sinais mistos, incluindo tanto circuitos integrados de aplicação específica (ASICs, em inglês) e matrizes de portas programáveis em campo (FPGAs, em inglês). A linguagem descreve circuitos digitais hierarquicamente, começando com os elementos mais básicos, como porta lógicas e <i>flip-flops</i>, e construindo blocos funcionais mais complexos.<br/><br/>Quando o Verilog foi introduzido, em 1984, ele representou uma tremenda melhoria de produtividade para projetistas de circuitos, que já usavam <i>softwares</i> gráficos para esquemáticos e simulações de circuitos eletrônicos."
},
{
  "ypos": 7,
  "xpos": 13,
  "number": 113,
  "name": "VHDL",
  "symbol": "Vhd",
  "category": "hardware description language",
  "source": "https://en.wikipedia.org/wiki/VHDL",
  "summary": "VHDL (<i>VHSIC Hardware Description Language</i>) é uma linguagem de descrição de <i>hardware</i> que pode modelar o comportamento e estrutura de sistemas digitais em variados níveis de abstração, desde o nível de sistema até o nível de portas lógicas, para fins de <i>design</i>, documentação e verificação.<br/><br/>Em 1983, o VHDL foi desenvolvido originalmente sob pedido do Departamento de Defesa do Estados Unidos, para documentar o comportamento de circuitos integrados de aplicação específica (ASICs, em inglês) que companhias fornecedoras incluíam em seus equipamentos.<br/><br/>A idéia de poder simular os ASICs a partir de suas documentações era tão obviamente sedutora, que programas simuladores lógicos foram especialmente desenvolvidos para ler arquivos VHDL. O próximo passo era o desenvolvimento de ferramentas de síntese de lógica, que poderiam ler o VHDL e produzir uma definição da implementação física do circuito.<br/><br/>O Departamento de Defesa à época requeria que o máximo possível de sintaxe fosse baseada na linguagem Ada, para evitar reinventar conceitos que já haviam sido testados ao longo do desenvolvimento dessa linguagem, que era amplamente usada no meio militar. Assim, o VHDL empresta para si vários conceitos e sintaxes da linguagem Ada."
},
{
  "ypos": 7,
  "xpos": 14,
  "number": 114,
  "name": "brainfuck",
  "symbol": "Br",
  "category": "esoteric language",
  "source": "https://brainfuck.org/brainfuck.html",
  "summary": "Brainfuck foi inventada por Urban Müller em 1993, numa tentativa de fazer uma linguagem na qual ele conseguisse escrever o menor compilador possível para Amiga OS, versão 2.0. Ele conseguiu escrever um compilador em 240 bytes. A linguagem foi inspirada em FALSE, que tinha um compilador escrito em 1024 bytes. Müller nomeou a linguagem como <i>brainfuck</i> (com letra inicial minúscula, apesar de hoje em dia muitas vezes ser escrita com letra inicial maiúscula).<br/><br/>Pensada para ser extremamente minimalista, a linguagem consiste em apenas oito comandos simples, um ponteiro de dados e um ponteiro de instruções.<br/><br/>Brainfuck é um exemplo do chamado <i>atoleiro de Turing</i>: pode ser usado para escrever qualquer programa, mas não é prático para tal porque provê tão pouca abstração que os programas acabam sendo muitos longos ou complicados. Apesar de brainfuck ser Turing-completa, não foi feita para uso na vida real, mas para desafiar e entreter programadores."
},
{
  "ypos": 7,
  "xpos": 15,
  "number": 115,
  "name": "GolfScript",
  "symbol": "Gs",
  "category": "esoteric language",
  "source": "https://www.golfscript.com/golfscript/",
  "summary": "GolfScript é uma linguagem de programação esotérica e orientada a pilha, voltada para resolver problemas com o mínimo possível de caractéres — um tipo de desafio chamado de <i>code golf</i>. Também visa ser simples e fácil de escrever.<br/><br/>Por meio de símbolos que representam operações de alto nível, como mapeamentos, junções, tamanho de <i>arrays</i>, a linguagem consegue ser extremamente concisa. Por ser baseada em pilha, permite que funções e outras manipulações funcionem sem precisarem de variáveis explícitas, apesar de variáveis ainda sim existirem e serem úteis para manipulações mais complicadas na pilha.<br/><br/>GolfScript roda em cima da linguagem Ruby."
},
{
  "ypos": 7,
  "xpos": 16,
  "number": 116,
  "name": "Befunge",
  "symbol": "Bf",
  "category": "esoteric language",
  "source": "https://esolangs.org/wiki/Befunge",
  "summary": "Befunge é uma linguagem de programação esotérica bidimensional inventada em 1993 por Chris Pressey, com o objetivo de ser o mais difícil possível para compilar. O código é disposto em uma grade de duas dimensões contendo instruções (chamada de <i>playfield</i>) e a execução pode proceder em qualquer direção nessa grade.<br/><br/>A execução se inicia partindo do contador do programa (-93) ou do ponteiro de instruções (-98). Isso aponta para uma célula no <i>playfield</i>. O ponteiro de instruções tem inércia: ele viaja em qualquer uma das quatro direções cardinais e continua assim até que uma instrução mude essa direção. O ponteiro de instruções começa em uma localização determinada (o canto superior esquerdo do <i>playfield</i>) e inicialmente viaja para a direita. Conforme encontra instruções, ele as executa.<br/><br/>A palavra Befunge ganhou vida como um erro tipográfico da palavra <i>before</i>, digitada por Curtis Coleman às 4h da manhã em um sistema de chat BBS."
},
{
  "ypos": 7,
  "xpos": 17,
  "number": 117,
  "name": "ArnoldC",
  "symbol": "Arn",
  "category": "esoteric language",
  "source": "https://github.com/lhartikk/ArnoldC",
  "summary": "ArnoldC é uma linguagem de programação esotérica criada pelo programador finlandês Lauri Hartikka e que roda em cima da linguagem Scala. Os comandos e expressões da linguagem são frases famosas de personagens interpretados pelo ator austríaco Arnold Schwarzenegger em seus filmes, como <i>O Exterminador do Futuro</i> (1984), <i>O Predador</i> (1987) e <i>O Vingador do Futuro</i> (1990).<br/><br/>Exemplo de programa:<br/><br/>IT'S SHOWTIME<br/>TALK TO THE HAND \"hello world\"<br/>YOU HAVE BEEN TERMINATED"
},
{
  "ypos": 7,
  "xpos": 18,
  "number": 118,
  "name": "Malbolge",
  "symbol": "Mal",
  "category": "esoteric language",
  "source": "https://esolangs.org/wiki/Malbolge",
  "summary": "Malbolge é uma linguagem de programação esotérica e de domínio público, inventada por Ben Olmstead em 1998, nomeada a partir do oitavo círculo do inferno (o Malebolge) na obra <i>Divina Comédia</i>, de Dante Alighieri. Foi especificamente pensada para ser quase impossível de usar.<br/><br/>O efeito de uma instrução depende de onde ela está localizada na memória (mod 94, é claro), todas as instruções são automodificantes (de acordo com uma tabela de permutações) e tanto o código como os ponteiros de dados são incrementados após a execução de cada instrução, tornando difícil reutilizar qualquer código ou dado. Não há como inicializar a memória exceto através de 8 caractéres de instrução; não há operador LOAD ou STORE; e os únicos dois operadores de memória disponíveis (ambos) trabalham em trinário e são opacos. O único fluxo de controle é um <i>jump</i> computado e incondicional, o que é practicamente inútil já que não há modo óbvio de setar a memória com algo além dos 8 caractéres de instrução.<br/><br/>Malbolge era muito difícil de entender quando surgiu, levando dois anos para o primeiro programa ser criado. O próprio autor da linguagem já admitiu que nunca escreveu um programa Malbolge. O primeiro programa não foi escrito por um ser humano; foi gerado por um algoritmo de busca em feixe (<i>beam search algorithm</i>) escrito por Andrew Cooke e implementado em Lisp. Em 2020, Kamila Szewczyk publicou um interpretador Lisp escrito em Malbolge Unshackled."
},
{
  "ypos": 8,
  "xpos": 1,
  "number": 119,
  "name": "Whitespace",
  "symbol": " ",
  "category": "esoteric language",
  "source": "https://esolangs.org/wiki/Whitespace",
  "summary": "Whitespace, criada em 2002 por Edwin Brady e Chris Morris na Universidade de Durham, é uma linguagem de programação esotérica imperativa, baseada em pilha e que usa apenas caractéres de espaço em branco (espaço, tabulação e quebra de linha) como sintaxe. Todos os outros caractéres são ignorados. Whitespace teve um breve momento de fama quando foi postada no Slashdot em 1º de abril de 2003. A maioria das pessoas pensou que fosse uma piada de 1º de abril, mas não era.<br/><br/>Whitespace define um comando como uma seqüência de caractéres de espaço em branco. Por exemplo, [Tab][Space][Space][Space] realiza a soma aritmética dos dois elementos no topo da pilha. Um comando é escrito como um parâmetro de modificação de instrução (IMP, em inglês) seguido por uma operação e em seguida pelos parâmetros."
}
];
