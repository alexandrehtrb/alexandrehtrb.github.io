---
lang: pt
langEnLink: ../asynchronous-architecture-without-queues
title: Arquitetura assíncrona sem filas
date: 2024-06-24
excerpt: Conheça alternativas mais práticas e baratas do que filas dedicadas.
published: true
tags:
- em português
- architecture
- sql
- redis
- dotnet
---

{% post_img '2024_06_fila_ingressos_paul_mccartney.jpg' 'Fila de pessoas para comprar ingresso para show do Paul McCartney' %}

## Arquitetura assíncrona

Uma estratégia comum em sistemas complexos é o assincronismo, que é deixar tarefas mais pesadas rodando em segundo plano e apenas quando elas forem acabadas receber um retorno delas. A idéia é entregar uma resposta mais imediata ao usuário, permitindo que ele possa fazer outras atividades enquanto isso. Essa abordagem existe tanto nas próprias linguagens de programação, por exemplo, através das palavras-chaves `async / await`, como também em arquitetura de sistemas, com um processamento orientado a mensagens ou eventos, através de filas.

Existem sistemas dedicados de filas que são muito populares atualmente, entre eles, o Apache Kafka, o RabbitMQ, o Azure Service Bus e o Amazon SQS. Eles adotam partições e grupos de consumo para lidar com altos volumes de mensagens recebidas e processadas em paralelo, preocupando-se também com concorrência de leitura e confirmação pós-processamento.

Apesar da popularidade dessas ferramentas, outras alternativas mais leves e práticas podem ser utilizadas em substituição, resolvendo os mesmos problemas de maneira mais simples e até mais barata. Vamos conhecê-las.

* [Mensagens em bancos de dados](#mensagens-em-bancos-de-dados)
* [Mensagens em caches distribuídos](#mensagens-em-caches-distribuídos)
* [Threads paralelas](#threads-paralelas)

## Mensagens em bancos de dados

Aqui, um banco de dados guarda as mensagens. Há uma aplicação publicadora, que insere as mensagens no banco, e outra consumidora, que as lê.

Neste caso, as mensagens ficam persistidas e não correm risco de perdas por reinicializações. Tanto bancos SQL como NoSQL podem ser usados.

Como exemplo, podemos ter uma tabela em um banco de dados SQL que armazena as mensagens:

```
| Id |      Status      | Conteudo |
|----|------------------|----------|
|  1 | Processada       |   msg1   |
|  2 | Processada       |   msg2   |
|  3 | FalhaAoProcessar |   msg3   |
|  4 | EmProcessamento  |   msg4   |
|  5 | Aguardando       |   msg5   |
|  6 | Aguardando       |   msg6   |
```

A coluna `Status` serve como controle de quais mensagens já foram e quais ainda precisam ser processadas. Pelo menos quatro status devem existir:

* Aguardando processamento
* Em processamento
* Falha ao processar
* Processada

O status *FalhaAoProcessar* é muito importante, pois ele permite que os desenvolvedores analisem as mensagens com esse status a fim de identificar possíveis bugs de processamento e mensagens que vêm inválidas ou mal-formatadas.

Aqui, se houver mais de um consumidor simultâneo, devemos nos precaver contra concorrências de leitura, para evitar que uma mensagem seja processada mais de uma vez. A solução para isso é uma tranca.

### Tranca no banco de dados

Uma tranca (mutex) restringe um acesso enquanto uma rotina detiver a posse dessa tranca.

Quando um consumidor for pegar a próxima mensagem para processar, ele deve trancar para leitura, para impedir que outros consumidores peguem a mesma mensagem que ele ao mesmo tempo. Se não conseguiu abrir a tranca, é porque outro consumidor chegou antes, assim, deve esperar a tranca ser liberada.

Durante o trancamento, a mensagem é obtida e marcada como *EmProcessamento*, e após isso, é liberada a leitura por outros consumidores.

Essa técnica existe em vários bancos de dados:

* **SQL Server**: `sp_getapplock` com `sp_releaseapplock`
* **PostgreSQL**: `pg_advisory_xact_lock()` com `SET LOCAL lock_timeout = '4s'`
* **MongoDB**: `db.coll.findAndModify()`

O código abaixo é uma stored procedure em SQL Server que pega a próxima mensagem a ser lida usando uma tranca de aplicação (*app lock*).

```sql
CREATE OR ALTER PROCEDURE PegarMensagemParaProcessar
    @status VARCHAR(30)
AS
BEGIN TRANSACTION
    DECLARE @res INT
    -- trancando para leitura
    EXEC @res = sp_getapplock                 
         @Resource = 'TRANCA_PEGAR_MENSAGEM',
         @LockMode = 'Exclusive',
         @LockOwner = 'Transaction',
         @LockTimeout = 60000,
         @DbPrincipal = 'public';
    -- verifica se obteve a tranca
    IF @res NOT IN (0, 1)
    BEGIN
        RAISERROR ('Não foi possível trancar para leitura.', 16, 1)
    END 
    ELSE
    BEGIN    
      -- obtendo uma mensagem com o status que queremos
      DECLARE @msgId INT = (SELECT TOP 1 [Id] FROM [dbo].[Mensagens] WHERE [Status] = @status);
      -- marcando a mensagem com status 'EmProcessamento'
      UPDATE [dbo].[Mensagens] SET [Status] = 'EmProcessamento' WHERE [Id] = @msgId;
      -- retornando a mensagem para leitura
      SELECT * FROM [dbo].[Mensagens] WHERE [Id] = @msgId;
      -- liberando a tranca após leitura  
      EXEC @res = sp_releaseapplock 
           @Resource = 'TRANCA_PEGAR_MENSAGEM',
           @DbPrincipal = 'public',
           @LockOwner = 'Transaction';
    END    
COMMIT
GO
```

O consumidor deve executar o comando SQL:

```sql
EXECUTE PegarMensagemParaProcessar @status = 'Aguardando'
```

### Invocação

Não há como o banco de dados proativamente invocar um consumidor, alertando este que há uma nova mensagem a ser processada. Assim, outras formas de acionamento devem ser usadas, como o consumidor periodicamente verificar se há novas mensagens; ou então *cron jobs*, que agendam a execução do consumidor em certos horários do dia.

## Mensagens em caches distribuídos

Caches distribuídos, como o Redis, podem armazenar mensagens, que podem ficar dentro de pares chave-valor, filas e outras estruturas de dados.

Esta implementação pode ser considerada uma variação da apresentada acima.

Uma vantagem é que a implementação de filas vem de fábrica, poupando esforço de desenvolvimento.

Porém, como desvantagem, as mensagens podem ser perdidas em caso de reinicialização do cache, pois não há persistência (por ser um armazenamento volátil).

Exemplo de fila usando comandos do Redis:

```sh
# insere ao fim da fila
LPUSH minha_fila "Tarefa1"

# insere ao fim da fila
LPUSH minha_fila "Tarefa2"

# tira primeiro da fila: "Tarefa1"
RPOP minha_fila

# tira primeiro da fila: "Tarefa2"
RPOP minha_fila
```

### Trancas distribuídas

Caches distribuídos podem fornecer trancas para evitar concorrência de leitura. A documentação do Redis detalha como implementar uma tranca distribuída de forma segura e considerando múltiplos consumidores.

## Threads paralelas

Esta opção é muito prática quando se quer condensar o processamento em uma mesma aplicação - ela mesma produz e consome a mensagem internamente, em threads separadas.

A comunicação entre as threads de produção e consumo se dá através de filas concorrentes (thread-safe) no código, como os channels, em .NET, ou ConcurrentLinkedQueue, em Java. A thread de consumo deve rodar indefinidamente em plano de fundo, processando mensagens conforme elas chegam na fila.

Alguns cenários reais em que essa opção pode ser boa:

* **Cadastro de usuários**: uma API recebe uma chamada para cadastrar um usuário, sendo que diversas etapas são executadas, como verificação de identidade, prevenção anti-fraudes e envio de email de confirmação para o usuário. Essas etapas podem ser leves o suficiente para não necessitarem rodar em uma aplicação apartada.
* **Logs e métricas**: na maioria dos programas, o envio de logs e métricas se dá em threads em background.

Devemos levar em conta que esse processamento implica maior consumo de CPU e memória RAM na aplicação e pode competir com outras tarefas dela por esses recursos. Soluções para isso são escalabilidade vertical (aumentar CPU e RAM disponíveis) ou horizontal (distribuir a carga entre outras instâncias).

### Exemplo prático

O código abaixo é de uma Minimal API do ASP.NET que usa channels para processar mensagens, que são recebidas em um endpoint HTTP e repassadas para um `MyMessageProcessor`.

Para rodar o programa abaixo:

1) Ter o [.NET SDK](https://dotnet.microsoft.com/) instalado na máquina
2) Criar um projeto Minimal API:

```sh
# linha de comando
mkdir MinhaAPIChannels
cd ./MinhaAPIChannels/
dotnet new web
```

3) Copiar e colar o código abaixo no arquivo `Program.cs`
4) Rodar o projeto, `dotnet run`

```cs
using System.Threading.Channels;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// criando o canal e o processador de mensagens
var channel = Channel.CreateUnbounded<MyMessage>();
builder.Services.AddSingleton<ChannelWriter<MyMessage>>(channel.Writer);
builder.Services.AddSingleton<ChannelReader<MyMessage>>(channel.Reader);
builder.Services.AddSingleton<MyMessageProcessor>();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
// endpoint de recebimento de mensagens:
// GET /message?content=minha_mensagem_aqui
app.MapGet("/message",
    async
    (
        [FromQuery(Name = "content")] string? content,
        [FromServices] ILogger<MyMessage> logger,
        [FromServices] ChannelWriter<MyMessage> channelWriter
    ) => 
    {
        logger.LogInformation("Mensagem recebida: {content}", content);
        await channelWriter.WriteAsync(new(content));
        return Results.Ok();
    });

// necessário para iniciar o processamento
var msgProcessor = app.Services.GetService<MyMessageProcessor>();
msgProcessor!.IniciarProcessamento();

app.Run();

// classe da mensagem
public sealed record MyMessage(string? Content);

// classe do processador
public sealed class MyMessageProcessor
{
    private readonly ILogger<MyMessageProcessor> logger;
    private readonly ChannelReader<MyMessage> channelReader;

    public MyMessageProcessor(ILogger<MyMessageProcessor> logger,
                              ChannelReader<MyMessage> channelReader)
    {
        this.logger = logger;
        this.channelReader = channelReader;
    }

    public void IniciarProcessamento()
    {
        // inicia thread em background 
        // para processar mensagens
        Task.Factory.StartNew(async () =>
        {
            await foreach (var msg in channelReader.ReadAllAsync())
            {
                await ProcessarMensagemAsync(msg);
            }
        }, TaskCreationOptions.LongRunning);
    }

    private async Task ProcessarMensagemAsync(MyMessage msg)
    {
        logger.LogInformation("Mensagem em processamento: {content}", msg.Content);
        // operações aqui
        await Task.Delay(3000);
        logger.LogInformation("Mensagem processada: {content}", msg.Content);
    }
}
```

Para testar, basta ir no navegador Web e acessar a URL `http://localhost:{porta}/message?content=minha_mensagem_aqui`

<video controls="controls" src="/assets/img/posts/2024_06_dotnet_channels_pt.mp4"></video>

## Critérios de análise

Para decidir se uma arquitetura assíncrona é recomendada para seu caso, considere:

* O usuário precisa receber uma resposta imediata?
* Uma mensagem individual demora muito tempo para processar?
* Uma mensagem individual gasta muita CPU e memória para processar?
* As mensagens podem ser processadas em lotes (várias juntas de uma vez)?
* O volume de mensagens é alto?

Várias respostas positivas acima indicam que ela é adequada.

Para escolher qual implementação usar, pergunte-se:

* O processamento precisa ser iniciado de imediato?
* A ordem de processamento importa?
* Existe prioridade de mensagens?
* Pode haver mais de um consumidor paralelo?
* A eventual perda de uma mensagem seria tolerável?
* Se uma mensagem for perdida, como recuperá-la?
* Se uma mensagem for inválida ou improcessável, como tratá-la?
* Se uma mensagem foi processada parcialmente, a retentativa causaria problemas?

As perguntas acima podem te ajudar a decidir qual estratégia de assincronia é a melhor para seu cenário.

## Fontes e links interessantes

* [No Rio, fãs fazem fila para comprar ingressos do show de McCartney (11/04/2011)](https://g1.globo.com/pop-arte/noticia/2011/04/no-rio-fas-fazem-fila-para-comprar-ingressos-de-show-de-mccartney.html) (imagem inicial)
* [Application Locks (or Mutexes) in SQL Server 2005](https://www.sqlteam.com/articles/application-locks-or-mutexes-in-sql-server-2005)
* [Application-level locking with Postgres advisory locks](https://aarniala.fi/blog/postgres-advisory-locks/)
* [Stack Overflow - Controlling duration of PostgreSQL lock waits](https://stackoverflow.com/a/20963803)
* [Locking Documents In Mongo](https://www.mongodb.com/community/forums/t/locking-documents-in-mongo/6865)
* [Glossário do Redis - Queue](https://redis.io/glossary/redis-queue/)
* [Documentação do Redis - Distributed Locks](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/)
* [.NET Core - Apresentando a classe Channel<T>](https://www.macoratti.net/20/12/net_chanel1.htm)
* [Documentação do .NET - Canais](https://learn.microsoft.com/pt-br/dotnet/core/extensions/channels)
* [Documentação do Java - ConcurrentLinkedQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedQueue.html)
