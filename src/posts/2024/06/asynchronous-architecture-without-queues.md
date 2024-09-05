---
lang: en
langPtLink: ../arquitetura-assincrona-sem-filas
title: Asynchronous architecture without queues
date: 2024-06-24
excerpt: Meet cheaper and more pratical alternatives to dedicated queues.
published: true
tags:
- in english
- architecture
- sql
- redis
- dotnet
---

{% asset_img '2024_06_fila_ingressos_paul_mccartney.jpg' 'People in a queue to buy tickets for Paul McCartney concert' %}

## Asynchronous architecture

A common strategy in complex systems is asynchronism, which is leaving heavier tasks running on background and getting a return from them only when they are finished. The idea is to deliver an immediate response to the user, allowing him / her to do other activities in the meanwhile. This approach exists both in programming languages, by the use of the `async / await` keywords, and in systems architectures, with an event or message oriented processing, through queues.

There are dedicated queue systems that are very popular today, among them, Apache Kafka, RabbitMQ, Azure Service Bus and Amazon SQS. They adopt partitions and consumer groups to deal with high volumes of messages received and processed in parallel, also taking care of concurrency and post-processing confirmation.

Despite the popularity of those tools, other lighter and more practical alternatives can be used in substitution, solving the same problems in a simpler and even cheaper way. Let's see them.

* [Messages in databases](#messages-in-databases)
* [Messages in distributed caches](#messages-in-distributed-caches)
* [Parallel threads](#parallel-threads)

## Messages in databases

Here, a database stores the messages. There is an application that inserts messages in the database (publisher) and another that reads them (consumer).

In this case, messages are persisted and there is no risk of losing them due to reinitializations. Both SQL and NoSQL databases can be used.

For example, we can have a SQL table that contains the messages:

```
| Id |      Status      | Content  |
|----|------------------|----------|
|  1 | Processed        |   msg1   |
|  2 | Processed        |   msg2   |
|  3 | ProcessingFailed |   msg3   |
|  4 | InProcess        |   msg4   |
|  5 | Waiting          |   msg5   |
|  6 | Waiting          |   msg6   |
```

The `Status` column describes which message already were processed and which are waiting. At least four status need to exist:

* Waiting processing
* In process
* Processing failed
* Processed

The *ProcessingFailed* status is very important, because it allows developers to analyse the failed messages for possible bugs at the processing, and to identify messages that come invalid or malformatted.

Here, if there is more than one simultaneous consumer, we must prepare against concurrency issues, to avoid that a message be processed more than once. The solution for this is a lock.

### Database locks

A lock (mutex) restrains access for only the transaction that detains this lock.

When a consumer goes to take the next message for processing, it should lock for reading, to block other consumers from taking this same message at the same time. If a consumer cannot open the lock, it is because another consumer arrived earlier, which means that it should wait until the lock is released.

During the locking, the message is retrieved and marked as *InProcess*, and after that, the reading is unlocked for other consumers.

This technique exists in many databases:

* **SQL Server**: `sp_getapplock` with `sp_releaseapplock`
* **PostgreSQL**: `pg_advisory_xact_lock()` with `SET LOCAL lock_timeout = '4s'`
* **MongoDB**: `db.coll.findAndModify()`

The code below is a SQL Server stored procedure that takes the next message to be consumed using an app lock.

```sql
CREATE OR ALTER PROCEDURE TakeMessageToProcess
    @status VARCHAR(30)
AS
BEGIN TRANSACTION
    DECLARE @res INT
    -- locking for reading
    EXEC @res = sp_getapplock                 
         @Resource = 'TAKE_MESSAGE_LOCK',
         @LockMode = 'Exclusive',
         @LockOwner = 'Transaction',
         @LockTimeout = 60000,
         @DbPrincipal = 'public';
    -- verifying that the lock was obtained
    IF @res NOT IN (0, 1)
    BEGIN
        RAISERROR ('Unable to get lock.', 16, 1)
    END 
    ELSE
    BEGIN    
      -- taking a message with the desired status
      DECLARE @msgId INT = (SELECT TOP 1 [Id] FROM [dbo].[Messages] WHERE [Status] = @status);
      -- marking message status as 'InProcess'
      UPDATE [dbo].[Messages] SET [Status] = 'InProcess' WHERE [Id] = @msgId;
      -- returning the message for consumer
      SELECT * FROM [dbo].[Messages] WHERE [Id] = @msgId;
      -- releasing the lock after reading
      EXEC @res = sp_releaseapplock 
           @Resource = 'TAKE_MESSAGE_LOCK',
           @DbPrincipal = 'public',
           @LockOwner = 'Transaction';
    END    
COMMIT
GO
```

The consumer must execute the SQL command:

```sql
EXECUTE TakeMessageToProcess @status = 'Waiting'
```

### Invocation

The database cannot proactively invoke a consumer, alerting it that there is a new message to be processed. Therefore, other triggers must be used, such as the consumer periodically checking for new messages; or cron jobs, that schedule the consumer for execution on certain times of the day.

## Messages in distributed caches

Distributed caches, like Redis, can store messages, holding them inside key-value pairs, queues, or other data structures.

This implementation can be considered a variation of the one above.

An advantage is that Redis already has native queues, saving development effort.

However, a disadvantage is that messages can be lost in case of a reinitialization of the cache, since there is no persistence (due to being a volatile storage).

Example of a queue using Redis commands:

```sh
# inserts at the end of the queue
LPUSH my_queue "Task1"

# inserts at the end of the queue
LPUSH my_queue "Task2"

# takes the head of the line: "Task1"
RPOP my_queue

# takes the head of the line: "Task2"
RPOP my_queue
```

### Distributed locks

Distributed caches can provide locks to prevent read concurrencies. Redis documentation details how to implement a distributed lock in a safe way and considering multiple consumers.

## Parallel threads

This option is very practical when you want to condense the processing in a single application - it produces and consumes the message internally, in separate threads.

The communication between production and consumption threads is through thread-safe concurrent queues, like channels, in .NET, or ConcurrentLinkedQueue, in Java. The consumption thread must run indefinitely in background, processing messages as they arrive in the queue.

Some real life scenarios in which this option may be appropriate:

* **User registration**: an API receives a call for user registration, which involves many substeps, such as identity verification, anti-fraud prevention and sending a confirmation email. These substeps may be light enough to not need to be run in a separate application.
* **Logs and metrics**: in most programs, logs and metrics are sent to their servers in background threads.

We must take into account that this processing implies higher CPU and RAM usage on the application and may compete with other tasks for resources. Solutions for that are vertical scaling (increase available CPU and RAM) and horizontal scaling (distribute the load among other instances).

### Practical example

The code below is an ASP.NET minimal API that uses channels to process messages, that are received on an HTTP endpoint and handled by a  `MyMessageProcessor`.

To run the program below:

1) Have the [.NET SDK](https://dotnet.microsoft.com/) installed on your machine
2) Create a minimal API project:

```sh
# command-line
mkdir MyChannelsAPI
cd ./MyChannelsAPI/
dotnet new web
```

3) Copy the code below and paste it in the `Program.cs` file
4) Run the project, `dotnet run`

```cs
using System.Threading.Channels;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// creating the channel and the processor
var channel = Channel.CreateUnbounded<MyMessage>();
builder.Services.AddSingleton<ChannelWriter<MyMessage>>(channel.Writer);
builder.Services.AddSingleton<ChannelReader<MyMessage>>(channel.Reader);
builder.Services.AddSingleton<MyMessageProcessor>();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
// endpoint for receiving messages:
// GET /message?content=my_message_here
app.MapGet("/message",
    async
    (
        [FromQuery(Name = "content")] string? content,
        [FromServices] ILogger<MyMessage> logger,
        [FromServices] ChannelWriter<MyMessage> channelWriter
    ) => 
    {
        logger.LogInformation("Message received: {content}", content);
        await channelWriter.WriteAsync(new(content));
        return Results.Ok();
    });

// required to begin processing
var msgProcessor = app.Services.GetService<MyMessageProcessor>();
msgProcessor!.StartProcessing();

app.Run();

// message class
public sealed record MyMessage(string? Content);

// processor class
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

    public void StartProcessing()
    {
        // starts background thread
        // to process messages
        Task.Factory.StartNew(async () =>
        {
            await foreach (var msg in channelReader.ReadAllAsync())
            {
                await ProcessMessageAsync(msg);
            }
        }, TaskCreationOptions.LongRunning);
    }

    private async Task ProcessMessageAsync(MyMessage msg)
    {
        logger.LogInformation("Processing message: {content}", msg.Content);
        // operations here
        await Task.Delay(3000);
        logger.LogInformation("Message processed: {content}", msg.Content);
    }
}
```

To test, open a browser and go to the URL: `http://localhost:{port}/message?content=my_message_here`

<video controls="controls" src="/assets/img/posts/2024_06_dotnet_channels_en.mp4"></video>

## Criteria analysis

To decide if an asynchronous architecture suits your case, consider:

* Does the user need an immediate response?
* Does an individual message take a long time to process?
* Does an individual message use a lot of CPU and RAM to process?
* Can the messages be handled in batches (many at once)?
* Is the volume of messages expected to be high?

Many positive answers above indicate that it is adequate.

To choose which implementation to use, ask yourself:

* Does the processing need to be started immediately?
* Does the order of processing matter?
* Is there a priority of messages?
* Can there be more than one consumer at the same time?
* Would the eventual loss of a message be tolerable?
* If a message is lost, how to recover it?
* If a message is invalid or unprocessable, how to treat it?
* If a message was partially processed, would a retry cause troubles?

The questions above can help you to decide which asynchronous strategy is the best for your scenario.

## Sources and interesting reads

* [No Rio, fãs fazem fila para comprar ingressos do show de McCartney (11/04/2011)](https://g1.globo.com/pop-arte/noticia/2011/04/no-rio-fas-fazem-fila-para-comprar-ingressos-de-show-de-mccartney.html) (initial image)
* [Application Locks (or Mutexes) in SQL Server 2005](https://www.sqlteam.com/articles/application-locks-or-mutexes-in-sql-server-2005)
* [Application-level locking with Postgres advisory locks](https://aarniala.fi/blog/postgres-advisory-locks/)
* [Stack Overflow - Controlling duration of PostgreSQL lock waits](https://stackoverflow.com/a/20963803)
* [Locking Documents In Mongo](https://www.mongodb.com/community/forums/t/locking-documents-in-mongo/6865)
* [Redis glossary - Queue](https://redis.io/glossary/redis-queue/)
* [Redis - Distributed Locks](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/)
* [Using Channels In C# .NET](https://dotnetcoretutorials.com/using-channels-in-net-core-part-1-getting-started/)
* [.NET docs - Channels](https://learn.microsoft.com/en-us/dotnet/core/extensions/channels)
* [Java docs - ConcurrentLinkedQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedQueue.html)
