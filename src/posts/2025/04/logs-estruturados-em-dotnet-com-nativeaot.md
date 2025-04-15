---
lang: pt
langEnLink: ../structured-logging-in-dotnet-with-nativeaot
title: Logs estruturados em .NET com NativeAOT
date: 2025-04-15
excerpt: Veja como implementar logging estruturado em .NET com NativeAOT e trimming habilitados.
published: true
enableMermaid: false
tags:
- em português
- dotnet
---

NativeAOT e *trimming* são duas novas opções de compilação em .NET que surgiram nos últimos anos, proporcionando executáveis menores, mais rápidos e com menor consumo de memória RAM. Resumidamente, o NativeAOT compila direto para código nativo de máquina e o *trimming* remove trechos de código desnecessários.

Para aplicar essas opções, é necessário que todos os caminhos de código sejam analisáveis estaticamente, ou seja, **não pode haver uso de *reflection* na aplicação**, sob o risco de ter partes importantes removidas acidentalmente e haver comportamentos indesejáveis durante a execução.

A maioria das bibliotecas de logging atualmente (12/04/2025) trabalha com *reflection*, principalmente para suportar logs estruturados. Neste artigo, vamos ver como fazer um logger estruturado customizado, compatível com NativeAOT e *trimming*.

## Logs estruturados

Em um log estruturado, as mensagens ficam em uma estrutura de chaves-valores, como JSON ou XML. Esse formato permite que elas sejam facilmente processadas por bancos de dados e motores de logs.

Considere o exemplo abaixo:

```cs
string municipio = "Bento Gonçalves / RS";

PrevisaoTempo previsao = new(
    tempMin: 16,
    tempMax: 21,
    chuvaMm: 32.5,
    ventoKmh: 6);

using (logger.BeginScope("{@PrevisaoTempo}", previsao))
{
    logger.LogInformation(
        "Previsão do tempo para {Municipio} em {Data}",
        municipio, DateTime.Today);
}
```

Log estruturado em JSON:

```json
{
  "Timestamp":"2025-04-12T20:25:57.8532799Z",
  "Level": "Information",
  "Template":"Previsão do tempo para {Municipio} em {Data}",
  "Municipio":"Bento Gonçalves / RS",
  "Data":"2025-04-13",
  "@PrevisaoTempo": {
    "TemperaturaMinimaEmC": 16,
    "TemperaturaMaximaEmC": 21,
    "ChuvaEmMm": 32.5,
    "VentoEmKmH": 6
  }
}
```

Quando um parâmetro entre chaves tem arroba ('@') no início, trata-se de um objeto complexo e suas propriedades internas são lidas como chave-valor. Quando não há arroba, trata-se de um valor simples, como um número, um Guid ou uma string.

Os escopos são informações complementares ao log, que podem ser relevantes.

## Interface `ILogger` em .NET

O .NET moderno faz uso extensivo da interface `Microsoft.Extensions.Logging.ILogger`. Ela é descrita abaixo ([código-fonte](https://github.com/dotnet/runtime/blob/main/src/libraries/Microsoft.Extensions.Logging.Abstractions/src/ILogger.cs)):

```cs
namespace Microsoft.Extensions.Logging;

public interface ILogger
{
    void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter);

    bool IsEnabled(LogLevel logLevel);

    IDisposable? BeginScope<TState>(TState state) where TState : notnull;
}
```

Apesar de não estar explícito na interface, o `TState` quase sempre é um tipo que herda de `IReadOnlyList<KeyValuePair<string, object?>>`, isso é verificável pelo próprio código-fonte do .NET runtime: [classe LoggerExtensions](https://github.com/dotnet/runtime/blob/e220a94d842524b408c35b381fc326c4159005f0/src/libraries/Microsoft.Extensions.Logging.Abstractions/src/LoggerExtensions.cs#L486) e [classe FormattedLogValues](https://github.com/dotnet/runtime/blob/e220a94d842524b408c35b381fc326c4159005f0/src/libraries/Microsoft.Extensions.Logging.Abstractions/src/FormattedLogValues.cs#L16).

O `TState` contém pares de chave-valor, incluindo o template da mensagem e valores dos parâmetros. Isso vale tanto para o `TState` do método `Log` como do método `BeginScope`.

## Logger sem *reflection*

A questão aqui é como formatar uma mensagem de log de forma genérica e sem usar *reflection*.

Como solução, vamos fazer um log em JSON com o apoio de *source generators*. No `JsonSerializerContext` a ser usado no nosso logger, precisaremos incluir todos os tipos de objeto que possam vir como parâmetros de log.

### Considerações

1) Nosso logger implementará a interface `ILogger`.

2) Consideraremos que o `TState` sempre herda de `IReadOnlyList<KeyValuePair<string, object?>>`.

3) Filtraremos as mensagens para pegar apenas as relevantes, de modo a também diminuir a quantidade de tipos adicionados ao `JsonSerializerContext`. Isso é importante principalmente para projetos ASP\.NET.

4) Neste exemplo, a saída de log será no console.

5) Usaremos o formato [**CLEF**](https://clef-json.org/).

6) O `scopeProvider` é responsável por ler os escopos capturados. Usaremos a implementação padrão `LoggerExternalScopeProvider`.

### Código

No setup do HostBuilder / WebApplicationBuilder (Program.cs):

```cs
webAppBuilder.Logging
    .ClearProviders()
    .AddProvider(new ClefLoggerProvider());
```

Logger provider:

```cs
public sealed class ClefLoggerProvider : ILoggerProvider
{
    public ILogger CreateLogger(string categoryName) =>
        new ClefLogger(categoryName, new LoggerExternalScopeProvider());

    public void Dispose() { }
}
```

No JsonSerializerContext:

```cs
[JsonSerializable(typeof(Dictionary<string, object?>))]
[JsonSerializable(typeof(double))]
[JsonSerializable(typeof(long))]
// adicionar tipos aqui, por exemplo:
[JsonSerializable(typeof(PrevisaoTempo))]
// opções de JSON
[JsonSourceGenerationOptions(
    WriteIndented = false,
    PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull)]
public partial class AppJsonSrcGenContext : JsonSerializerContext
{
}
```

Logger:

```cs
public sealed class ClefLogger(
    string categoryName,
    IExternalScopeProvider? scopeProvider) : ILogger
{
    private static readonly string[] logsParaIgnorar = [
        "Request starting",
        "Executing",
        "Setting HTTP status code",
        "Executed",
        "Writing value",
        "Write content",
        "Sending file",
        "Request reached the end of the middleware pipeline without being handled by application code."
    ];

    public IDisposable? BeginScope<TState>(TState state)
        where TState : notnull =>
        scopeProvider?.Push(state) ?? default;

    public bool IsEnabled(LogLevel logLevel) => true;

    private static bool FiltrarPropriedades(KeyValuePair<string, object?> kv) =>
        kv.Key != "{OriginalFormat}"
        && kv.Value != null
        && (kv.Value is string s ? !string.IsNullOrEmpty(s) : true);

    private static bool DeveIgnorarLog(string? originalFormat) =>
        originalFormat is null || logsParaIgnorar.Any(originalFormat.StartsWith);

    public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
    {
        if (state is not IEnumerable<KeyValuePair<string, object?>> msgProps)
            return;

        string? originalFormat = (string?)msgProps.FirstOrDefault(kv => kv.Key == "{OriginalFormat}").Value;

        if (DeveIgnorarLog(originalFormat))
            return;

        List<IEnumerable<KeyValuePair<string, object?>>>? scopes = new();
        scopeProvider?.ForEachScope((scope, st) =>
        {
            if (scope is IEnumerable<KeyValuePair<string, object?>> scopeItems)
            {
                scopes.Add(scopeItems.Where(FiltrarPropriedades));
            }
        }, state);

        IEnumerable<KeyValuePair<string, object?>> standardProps =
        [
            new("@i", eventId.Name),
            new("@t", DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.fffffffZ")),
            new("@c", categoryName),
            new("@l", Enum.GetName(logLevel)),
            //new("@m", formatter(state, exception)),
            new("@mt", originalFormat),
            new("@x", exception?.ToString())
        ];

        var msg = standardProps
            .Concat(msgProps.Where(FiltrarPropriedades))
            .Concat(scopes.SelectMany(x => x))
            // evitando chaves repetidas
            .DistinctBy(kv => kv.Key)
            // remover nulos para JSON
            .Where(x => x.Value is not null)
            .ToDictionary();

        try
        {
            EscreverLinhaLog(msg);
        }
        catch (Exception jsonEx)
        {
            msg = standardProps
                .Append(new("AVISO", "Não foi possível serializar mensagem original em JSON."))
                .Append(new("JsonException", jsonEx.ToString()))
                // remover nulos para JSON
                .Where(x => x.Value is not null)
                .ToDictionary();

            EscreverLinhaLog(msg);
        }
    }

    // TODO: Usar fila para evitar concorrência
    // Mudar saída se quiser: arquivo, motor de logs, etc.
    private void EscreverLinhaLog(Dictionary<string, object?> msg)
    {
        string json = JsonSerializer.Serialize(msg, AppJsonSrcGenContext.Default.DictionaryStringObject);
        Console.WriteLine(json);
    }
}
```

O logger acima funciona com NativeAOT e *trimming* habilitados.

Se houver algum erro de serialização de JSON, o bloco catch formata uma nova mensagem de log sem as propriedades e escopos (possíveis causadores do erro) e coloca a JsonException relativa ao problema.

### Exemplo de log gerado

```json
{
  "@t": "2025-04-15T12:09:58.4990143Z",
  "@c": "Microsoft.AspNetCore.Hosting.Diagnostics",
  "@l": "Information",
  "@mt": "Request finished {Protocol} {Method} {Scheme}://{Host}{PathBase}{Path}{QueryString} - {StatusCode} {ContentLength} {ContentType} {ElapsedMilliseconds}ms",
  "ElapsedMilliseconds": 124.2172,
  "StatusCode": 201,
  "ContentType": "application/json; charset=utf-8",
  "Protocol": "HTTP/2",
  "Method": "POST",
  "Scheme": "https",
  "Host": "localhost:5001",
  "Path": "/",
  "RequestId": "0HNBS2ORC5B08:00000001",
  "RequestPath": "/"
}
```

## Fontes e links interessantes

- [Microsoft Learn - .NET Native AOT Deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/)
- [Microsoft Learn - .NET Trimming options](https://learn.microsoft.com/en-us/dotnet/core/deploying/trimming/trimming-options)
- [Microsoft Learn - ASP.NET Core support for Native AOT](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/native-aot)
- [Message Templates](https://messagetemplates.org/)
- [Compact Log Event Format (CLEF)](https://clef-json.org/)
