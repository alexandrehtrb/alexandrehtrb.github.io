---
lang: en
langPtLink: ../propriedades-especiais-em-projetos-dotnet
title: Special properties in .NET projects
date: 2024-12-17
excerpt: Learn how to customize your .NET project properties and improve performance and file size.
published: true
enableMermaid: false
tags:
- in english
- architecture
- dotnet
- cheatsheet
---

# .NET project files

Certain configurations in .NET project files can modify how a project is compiled, and the performance and size of published apps.

These configurations reside in .csproj (C#), .fsproj (F#) and .vbproj (VB\.NET) files; they can also be passed via command-line arguments, when running `dotnet run`, `dotnet build` and `dotnet publish`.

## In project files

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

## Via command-line arguments

```powershell
dotnet publish `
  --configuration Release `
  --self-contained true `
  --runtime "linux-x64" `
  -p:PublishSingleFile=true `
  --output "./out/"
```

# Properties

- [TargetFramework](#targetframework)
- [Nullable](#nullable)
- [ImplicitUsings](#implicitusings)
- [TreatWarningsAsErrors](#treatwarningsaserrors)
- [Configuration](#configuration)
- [SelfContained](#selfcontained)
- [PublishSingleFile](#publishsinglefile)
- [EnableCompressionInSingleFile](#enablecompressioninsinglefile)
- [PublishReadyToRun](#publishreadytorun)
- [Trimming](#trimming)
- [NativeAOT](#nativeaot)
- [Version](#version)
- [ApplicationIcon](#applicationicon)

## TargetFramework

Specifies which .NET versions your project should compile against. Usually, only one TFM (*target framework moniker*) is specified, but, if your project needs to support multiple .NET versions, you can specify a list of TFMs, separated by semi-colon (';').

```xml
<PropertyGroup>

  <!-- only one -->
  <TargetFramework>net8.0</TargetFramework>

  <!-- multiple. plural used. -->
  <TargetFrameworks>netstandard1.4;net40;net45</TargetFrameworks>

</PropertyGroup>
```

## Nullable

When present with the value true, warns whenever a variable that can be null is used in a place that doesn't accept null.

Consider the code below. There is a warning that a null value may be passed to the `int.Parse()` method, which does not accept null strings.

{% post_img '2024_12_nullable_warning.png' 'Possible null value warning' %}

There are four ways to solve this warning:

1) Modify the method signature. When a variable has a question mark after its type (`string?`), it means that it accepts null values; abscence of question mark (`string`) means only non-null values are accepted.

```cs
public int ConvertToInt(string numericString) =>
    int.Parse(numericString);
```

2) Protect your code against null values.

```cs
public int ConvertToInt(string? numericString)
{
    if (numericString == null)
        throw new ArgumentNullException(nameof(numericString));
    else
        return int.Parse(numericString);
}
```

3) Apply an exclamation mark. It indicates that the value is safe.

```cs
public int ConvertToInt(string? numericString) =>
    int.Parse(numericString!);
```

4) Disable nullable verification via preprocessor directive.

```cs
#nullable disable warnings

    public int ConvertToInt(string? numericString) =>
        int.Parse(numericString);

#nullable restore warnings
```

## ImplicitUsings

Implicitly adds to all code files (.cs, .fs, .vb) some commonly used namespaces, so they don't need to be declared.

The list of namespaces varies according to the project type.

For console apps and class libraries:

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
```

For Web projects, the ones above, plus:

```cs
using System.Net.Http.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
```

For Workers, the first list, and:

```cs
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
```

## TreatWarningsAsErrors

If there are any warnings in the project, the compilation will fail.

```xml
<PropertyGroup>
  <TreatWarningsAsErrors>True</TreatWarningsAsErrors>
</PropertyGroup>
```

This is an interesting option to improve code quality, as it forces developers to pay attention to warnings, which indicate possible weaknesses and problems. An example is combining this option with *Nullable*.

> **Author's comment**: this alone will not make your code better. The warnings can be circumvented, through `#pragma warning disable` or by ignoring nullability checks with exclamation marks (see above). A good quality code results from good programming practices and peer revisions.

## Configuration

Determines the compilation mode, Debug or Release.

In Debug mode, the compilation produces symbol files (.pdb) that are used by the IDE for debugging and to set breakpoints. Also, the code is not optimized by the compiler.

In Release mode, the compilation applies optimizations to the code and no symbol files are produced. When a program is compiled for deployment, Release config should be used.

This option is passed by flags.

## SelfContained

Embeds the .NET runtime in the published app. This means that the target machine (where the app will run) won't need to have it installed.

This option increases the app size (for having the .NET runtime inside).

## PublishSingleFile

Condenses the program and its DLLs into a single executable file, reducing the number of published files. This is interesting for portable programs.

*Interop DLLs in C/C++ are unaffected by this option and will appear in separate files.*

```xml
<PropertyGroup>
  <PublishSingleFile>True</PublishSingleFile>
</PropertyGroup>
```

## EnableCompressionInSingleFile

When used with the option above, compresses the condensed executable file, decreasing its size.

A side-effect is it makes the program initialization slower, because the content needs to be extracted before execution. (The extraction is in memory; no files are created.)

```xml
<PropertyGroup>
  <EnableCompressionInSingleFile>True</EnableCompressionInSingleFile>
</PropertyGroup>
```

## PublishReadyToRun

This is a special compiler optimization that makes the program startup faster, predicting how it will run in the target machine and replacing parts of intermediary code (IL, intermediate language) with native machine code. This is interesting for APIs, because they take less time to become operational.

This option increases the app size and the compilation takes a longer time (when publishing).

```xml
<PropertyGroup>
  <PublishReadyToRun>True</PublishReadyToRun>
</PropertyGroup>
```

## Trimming

Trims away unused parts of the code and of inner dependencies, greatly reducing the size of the published app.

**This option must be used carefully**, because it may remove important parts of the code and cause errors during execution. To avoid these problems, the compiler emits warnings on lines susceptible to removal, for the developer to find alternatives or mark the code to not be removed.

The trimming may be partial, only on specified assemblies; or full, over the entire app.

This is an extensive subject and requires a thorough read, so I recommend checking the [docs](https://learn.microsoft.com/en-us/dotnet/core/deploying/trimming/trimming-options).

Example of partial trimming:

```xml
<PropertyGroup>
  <PublishTrimmed>true</PublishTrimmed>
  <TrimMode>partial</TrimMode>
</PropertyGroup>

<!-- list of assemblies that will be trimmed -->
<ItemGroup>
  <TrimmableAssembly Include="MyAssembly" />
</ItemGroup>
```

## NativeAOT

NativeAOT is a special type of compilation straight to native machine code, improving app performance.

In traditional compilation, the final executable is composed of intermediate language code (IL) that is interpreted by the .NET runtime (CoreCLR). During execution, the runtime translates each IL instruction into native machine code, and that's how the program runs.

In NativeAOT compilation, the runtime is no longer needed and many processor architecture and operating system optimizations can be applied, causing:

- faster execution,
- less memory usage,
- and lower app size.

**This compilation option is not so easy to use, though.** It requires that all code paths can be statically analysed, in other words, *reflection cannot be used in the code*, which affects for example JSON and XML (de)serialization.

WPF and Windows Forms are heavily reflection-based and because of that they don't support NativeAOT. However, console and ASP\.NET minimal APIs do have support for NativeAOT.

Just like trimming, using this feature requires caution and the [official docs](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/) should be read.

```xml
<PropertyGroup>
  <PublishAot>true</PublishAot>
</PropertyGroup>
```

## Version

Sets the application, assembly or file version.

```xml
<PropertyGroup>
  <Version>3.7.1</Version>
  <!-- Version value is reused below -->
  <FileVersion>$(Version)</FileVersion>
  <AssemblyVersion>$(Version)</AssemblyVersion>
</PropertyGroup>
```

To retrieve the version by code:

```cs
string versionName = Assembly.GetExecutingAssembly()
                             .GetName()
                             .Version?
                             .ToString(3);
// versionName = "3.7.1"
```

> **Important**: the versioning of NuGet packages is done through other properties. Read more in the [docs](https://learn.microsoft.com/en-us/nuget/create-packages/package-authoring-best-practices).

## ApplicationIcon

Sets an icon on the program for Windows Explorer.

```xml
<PropertyGroup>
  <ApplicationIcon>my_program.ico</ApplicationIcon>
</PropertyGroup>
```

# Sources and interesting reads

- [.NET Docs - Target frameworks in SDK-style projects](https://learn.microsoft.com/en-us/dotnet/standard/frameworks#how-to-specify-a-target-framework)
- [Microsoft DevBlogs - Embracing nullable reference types](https://devblogs.microsoft.com/dotnet/embracing-nullable-reference-types/)
- [DotNetCore Tutorials - Implicit Using Statements In .NET 6](https://dotnetcoretutorials.com/implicit-using-statements-in-net-6/)
- [.NET Docs - Single-file deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview)
- [.NET Docs - .NET application publishing overview](https://learn.microsoft.com/en-us/dotnet/core/deploying/)
- [.NET Docs - ReadyToRun Compilation](https://learn.microsoft.com/en-us/dotnet/core/deploying/ready-to-run)
- [.NET Docs - Trimming options](https://learn.microsoft.com/en-us/dotnet/core/deploying/trimming/trimming-options)
- [.NET Docs - Native AOT deployment](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/)
- [GitHub Dotnet Core repo - How to set application icon on Windows?](https://github.com/dotnet/core/issues/6260)
- [.NET Docs - NuGet Package authoring best practices](https://learn.microsoft.com/en-us/nuget/create-packages/package-authoring-best-practices)
- [.NET Docs - MSBuild reference for .NET SDK projects](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/msbuild-props)
- [MSBuild Docs - Common MSBuild project properties](https://learn.microsoft.com/en-us/visualstudio/msbuild/common-msbuild-project-properties?view=vs-2022)
- [MSBuild Docs - MSBuild reserved and well-known properties](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild-reserved-and-well-known-properties?view=vs-2022)