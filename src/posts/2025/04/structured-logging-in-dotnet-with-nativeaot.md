---
lang: en
langPtLink: ../logs-estruturados-em-dotnet-com-nativeaot
title: Structured logging in .NET with NativeAOT
date: 2025-04-15
excerpt: Check out how to implement structured logging in .NET with NativeAOT and trimming enabled.
published: true
enableMermaid: false
tags:
- in english
- dotnet
---

NativeAOT and trimming are two new .NET compiler options that came up over the last years, resulting in applications with smaller sizes, faster execution and lower memory usage. In a short explanation, NativeAOT compiles to native machine code and trimming removes unused code.

To apply these options, all code paths must be statically determinable, i.e., **the program cannot use reflection**, under the risk of having removed important parts of code and having undesirable behaviours during execution.

Currently, most logging libraries do use reflection, mainly to support structured logging. In this article, we will see how to make a custom structured logger, compatible with NativeAOT and trimming.

## Structured logging

In a structured log, messages are formatted in a key-value structure, like JSON or XML. This format allows easier processing by databases and logging engines.

Consider the code below:

```cs
string city = "Bento Gonçalves / RS";

WeatherForecast forecast = new(
    minTemp: 16,
    maxTemp: 21,
    rainMm: 32.5,
    windKph: 6);

using (logger.BeginScope("{@Forecast}", forecast))
{
    logger.LogInformation(
        "Weather forecast for {City} on {Date}",
        city, DateTime.Today);
}
```

JSON structured log:

```json
{
  "Timestamp": "2025-04-12T20:25:57.8532799Z",
  "Level": "Information",
  "Template": "Weather forecast for {City} on {Date}",
  "City": "Bento Gonçalves / RS",
  "Date": "2025-04-13",
  "@Forecast": {
    "MinTemperatureInC": 16,
    "MaxTemperatureInC": 21,
    "RainInMm": 32.5,
    "WindInKph": 6
  }
}
```

When a parameter between braces is prefixed with an '@' sign (*arroba*), it is treated as a complex object and its internal properties are read as key-value pairs. Without this sign, the parameter is treated as a simple value, like a number, a Guid or a string.

Scopes are complementary information, that may be relevant. 

## `ILogger` interface in .NET

Modern .NET makes extensive usage of the `Microsoft.Extensions.Logging.ILogger` interface ([source code](https://github.com/dotnet/runtime/blob/main/src/libraries/Microsoft.Extensions.Logging.Abstractions/src/ILogger.cs)):

```cs
namespace Microsoft.Extensions.Logging;

public interface ILogger
{
    void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter);

    bool IsEnabled(LogLevel logLevel);

    IDisposable? BeginScope<TState>(TState state) where TState : notnull;
}
```

Although not explicit in the interface, `TState` virtually always is a type inheriting from `IReadOnlyList<KeyValuePair<string, object?>>`, this is verifiable by looking at .NET runtime source code: [LoggerExtensions](https://github.com/dotnet/runtime/blob/e220a94d842524b408c35b381fc326c4159005f0/src/libraries/Microsoft.Extensions.Logging.Abstractions/src/LoggerExtensions.cs#L486) and [FormattedLogValues](https://github.com/dotnet/runtime/blob/e220a94d842524b408c35b381fc326c4159005f0/src/libraries/Microsoft.Extensions.Logging.Abstractions/src/FormattedLogValues.cs#L16) classes.

`TState` contains key-value pairs, including the message template and parameters' values. This is valid for both `Log` and `BeginScope` methods.

## Reflectionless logger

The question here is how to format a log message in a generic way and without resorting to reflection.

As a solution, we will make a JSON logger with the help of source generators. On the `JsonSerializerContext`, we'll need to include all types of object that may come as log parameters.

### Things to consider

1) Our logger will implement the `ILogger` interface.

2) We will consider that `TState` always inherits from `IReadOnlyList<KeyValuePair<string, object?>>`.

3) Let's filter messages to ignore the ones that are not relevant, and also to not need to include many object types on our `JsonSerializerContext`. This is important especially for ASP\.NET projects.

4) In this example, log lines will be printed on the console.

5) We'll use the [**CLEF**](https://clef-json.org/) format.

6) The `scopeProvider` is responsible for reading the captured scopes. We'll use the `LoggerExternalScopeProvider` default implementation.

### Code

On the HostBuilder / WebApplicationBuilder setup (Program.cs):

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

JsonSerializerContext:

```cs
[JsonSerializable(typeof(Dictionary<string, object?>))]
[JsonSerializable(typeof(double))]
[JsonSerializable(typeof(long))]
// add types here, like:
[JsonSerializable(typeof(WeatherForecast))]
// JSON options
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
    private static readonly string[] logsToIgnore = [
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

    private static bool FilterProperties(KeyValuePair<string, object?> kv) =>
        kv.Key != "{OriginalFormat}"
        && kv.Value != null
        && (kv.Value is string s ? !string.IsNullOrEmpty(s) : true);

    private static bool ShouldIgnoreLog(string? originalFormat) =>
        originalFormat is null || logsToIgnore.Any(originalFormat.StartsWith);

    public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
    {
        if (state is not IEnumerable<KeyValuePair<string, object?>> msgProps)
            return;

        string? originalFormat = (string?)msgProps.FirstOrDefault(kv => kv.Key == "{OriginalFormat}").Value;

        if (ShouldIgnoreLog(originalFormat))
            return;

        List<IEnumerable<KeyValuePair<string, object?>>>? scopes = new();
        scopeProvider?.ForEachScope((scope, st) =>
        {
            if (scope is IEnumerable<KeyValuePair<string, object?>> scopeItems)
            {
                scopes.Add(scopeItems.Where(FilterProperties));
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
            .Concat(msgProps.Where(FilterProperties))
            .Concat(scopes.SelectMany(x => x))
            // avoiding repeated keys
            .DistinctBy(kv => kv.Key)
            // removing null values for JSON
            .Where(x => x.Value is not null)
            .ToDictionary();

        try
        {
            WriteLogLine(msg);
        }
        catch (Exception jsonEx)
        {
            msg = standardProps
                .Append(new("WARNING", "Could not serialize original message to JSON."))
                .Append(new("JsonException", jsonEx.ToString()))
                // removing null values for JSON
                .Where(x => x.Value is not null)
                .ToDictionary();

            WriteLogLine(msg);
        }
    }

    // TODO: Use queue to avoid concurrency
    // Change output if you want: file, logging engine, etc.
    private void WriteLogLine(Dictionary<string, object?> msg)
    {
        string json = JsonSerializer.Serialize(msg, AppJsonSrcGenContext.Default.DictionaryStringObject);
        Console.WriteLine(json);
    }
}
```

The logger above works with NativeAOT and trimming enabled.

If there is any JSON serialization error, the catch clause formats a new log message without extra properties and scopes (that may be responsible for the error) and inserts the JsonException related to the problem.

### Example of generated log

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

## Sources and interesting reads

- [Microsoft Learn - .NET Native AOT Deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/)
- [Microsoft Learn - .NET Trimming options](https://learn.microsoft.com/en-us/dotnet/core/deploying/trimming/trimming-options)
- [Microsoft Learn - ASP.NET Core support for Native AOT](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/native-aot)
- [Message Templates](https://messagetemplates.org/)
- [Compact Log Event Format (CLEF)](https://clef-json.org/)
