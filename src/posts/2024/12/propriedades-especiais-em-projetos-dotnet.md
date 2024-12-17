---
lang: pt
langEnLink: ../special-properties-in-dotnet-projects
title: Propriedades especiais em projetos .NET
date: 2024-12-17
excerpt: Conheça formas de customizar seu projeto .NET, melhorando performance e tamanho do programa.
published: true
enableMermaid: false
tags:
- em português
- architecture
- dotnet
- cheatsheet
---

# Arquivos de projeto .NET

Certas configurações em projetos .NET podem modificar como o projeto é compilado, e a performance e tamanho dos programas publicados.

Essas configurações ficam nos arquivos .csproj (C#), .fsproj (F#) e .vbproj (VB\.NET); também podem ser passadas via linha de comando, ao executar `dotnet run`, `dotnet build` e `dotnet publish`.

## Em arquivos de projeto

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

## Via linha de comando

```powershell
dotnet publish `
  --configuration Release `
  --self-contained true `
  --runtime "linux-x64" `
  -p:PublishSingleFile=true `
  --output "./out/"
```

# Propriedades

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

Diz para quais versões do .NET seu projeto deve compilar. Geralmente, especifica-se apenas um TFM (*target framework moniker*), porém, se precisar atender a mais de uma versão do .NET, você pode especificar uma lista de TFMs, separados por ponto-e-vírgula (';').

```xml
<PropertyGroup>
  <TargetFramework>net8.0</TargetFramework>
</PropertyGroup>
```

## Nullable

Quando presente com valor true, avisa sempre que uma variável que pode ser nula for usada em um local que não aceita nulos.

Considere o código abaixo. Há um aviso de que um valor nulo pode acabar sendo passado para o método `int.Parse()`, método este que não aceita strings nulas.

{% post_img '2024_12_warning_nulavel.png' 'Aviso de possível valor nulo' %}

Há quatro formas de resolver esse aviso:

1) Alterar a assinatura do método. Quando uma variável tem interrogação após o tipo (`string?`), significa que aceita nulos; sem interrogação (`string`), espera-se um valor não-nulo.

```cs
public int ConverterParaInt(string stringNumerica) =>
    int.Parse(stringNumerica);
```

2) Proteger via código contra valores nulos.

```cs
public int ConverterParaInt(string? stringNumerica)
{
    if (stringNumerica == null)
        throw new Exception("String não pode ser nula.");
    else
        return int.Parse(stringNumerica);
}
```

3) Marcar com uma exclamação. Ela indica que o valor é seguro.

```cs
public int ConverterParaInt(string? stringNumerica) =>
    int.Parse(stringNumerica!);
```

4) Desabilitar a verificação de nuláveis via diretiva de compilação.

```cs
#nullable disable warnings

    public int ConverterParaInt(string? stringNumerica) =>
        int.Parse(stringNumerica);

#nullable restore warnings
```

## ImplicitUsings

Faz com que todos os arquivos de código (.cs, .fs, .vb) venham com alguns usings declarados implicitamente, de modo que não é necessário declarar manualmente.

A lista de namespaces varia conforme o tipo de projeto.

Para projetos console e class libraries:

```cs
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
```

Para projetos Web, além dos listados acima:

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

Para Workers, a primeira lista, mais:

```cs
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
```

## TreatWarningsAsErrors

Faz com que avisos sejam considerados erros e assim o projeto não compile se houver algum aviso.

```xml
<PropertyGroup>
  <TreatWarningsAsErrors>True</TreatWarningsAsErrors>
</PropertyGroup>
```

É uma opção interessante para melhorar a qualidade do código, pois força os desenvolvedores a se atentarem aos avisos, que indicam possíveis falhas de lógica e tratamento de dados. Um exemplo é combinar essa opção junto com o *Nullable*.

> **Comentário do autor**: apenas isso como medida não tornará seu código melhor. Os devs podem simplesmente contornar os avisos, por exemplo, através de `#pragma warning disable` ou ignorar nuláveis via exclamação (ver acima). Um código de qualidade é resultado de boas práticas de programação e revisões por pares.

## Configuration

Determina se o projeto vai ser compilado como Debug ou Release.

Em modo Debug, a compilação produz arquivos de símbolos (.pdb) que facilitam o debug do código via IDE e breakpoints. Além disso, o código não é optimizado plenamente.

No modo Release, a compilação não produz arquivos de símbolos e a optimização do código é total. Sempre que for gerar um programa para publicação, deve-se usar a configuração Release.

Essa opção é passada via flags.

## SelfContained

Embute o .NET runtime junto ao executável publicado. Isso significa que a máquina de destino (onde o programa vai rodar) não precisará ter ele instalado.

Essa opção faz com que o tamanho do executável final seja maior (por ter o .NET runtime consigo).

## PublishSingleFile

Condensa as várias DLLs e arquivos auxiliares do programa em um único arquivo executável, diminuindo a quantidade de arquivos publicados. Isso é interessante para programas portáteis (portable).

*DLLs interop em C/C++ são imunes a essa opção e vão aparecer em arquivos separados.*

```xml
<PropertyGroup>
  <PublishSingleFile>True</PublishSingleFile>
</PropertyGroup>
```

## EnableCompressionInSingleFile

Junto com a opção acima, comprime o executável condensado, diminuindo seu tamanho no disco rígido. Um contraponto é que a inicialização do programa fica mais lenta, pois ele precisa descomprimir seu conteúdo antes de executar. (Ele não cria arquivos ao executar; a descompressão é feita em memória.)

```xml
<PropertyGroup>
  <EnableCompressionInSingleFile>True</EnableCompressionInSingleFile>
</PropertyGroup>
```

## PublishReadyToRun

É uma optimização especial do compilador que torna a inicialização do programa mais rápida, prevendo como ele vai executar na máquina de destino e trocando partes de código intermedíario (IL, intermediate language) por código de máquina (Assembly). Isso é interessante para APIs, por exemplo, pois assim elas demoram menos tempo para entrar em funcionamento.

Essa opção aumenta o tamanho do executável final e aumenta o tempo de compilação.

```xml
<PropertyGroup>
  <PublishReadyToRun>True</PublishReadyToRun>
</PropertyGroup>
```

## Trimming

Recorta partes não utilizadas do código e de bibliotecas do programa, diminuindo significativamente o tamanho do executável final.

**Essa opção deve ser usada com cuidado**, pois pode remover partes importantes do código e causar erros durante a execução. Para evitar esses problemas, o compilador emite avisos em linhas suscetíveis de serem recortadas, para que o programador adote alternativas ou então marque o código para não ser removido.

O recorte pode ser parcial, ou seja, só em classes e bibliotecas especificadas, ou então no programa inteiro.

Esse tema é extenso e requer uma leitura com atenção, por isso, recomendo a [documentação](https://learn.microsoft.com/en-us/dotnet/core/deploying/trimming/trimming-options).

Exemplo de trimming parcial:

```xml
<PropertyGroup>
  <PublishTrimmed>true</PublishTrimmed>
  <TrimMode>partial</TrimMode>
</PropertyGroup>

<!-- lista de assemblies que serão trimmados -->
<ItemGroup>
  <TrimmableAssembly Include="MyAssembly" />
</ItemGroup>
```

## NativeAOT

NativeAOT é um tipo especial de compilação direto para linguagem de máquina, aumentando a performance do programa.

Na compilação tradicional, o executável final é composto pelo código em linguagem intermediária (IL, *intermediate language*) que é interpretado pelo .NET runtime (CoreCLR). Durante a execução do programa, o runtime traduz cada instrução em IL para código de máquina, e assim o programa roda.

Ao compilar diretamente para linguagem nativa, o intermediário é removido e pode-se aproveitar diversas optimizações específicas de arquitetura de processador e sistema operacional, de modo que:

- a execução fica mais rápida,
- consome menos memória RAM,
- o tamanho do executável final é menor.

**Essa opção de compilação não é simples de usar, contudo.** Ela requer que todos os caminhos de código possam ser analisados estaticamente, em outras palavras, *não é possível usar reflection no programa*, o que afeta por exemplo a serialização e desserialização de JSON e XML.

WPF e Windows Forms são baseados em reflection e por isso não suportam NativeAOT; mas aplicações console e ASP\.NET minimal APIs têm suporte ao NativeAOT.

Assim como o trimming, usar essa funcionalidade requer cuidado e vale ler a [documentação oficial](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/).

```xml
<PropertyGroup>
  <PublishAot>true</PublishAot>
</PropertyGroup>
```

## Version

Marca qual é a versão do programa, do arquivo ou do assembly.

```xml
<PropertyGroup>
  <Version>3.7.1</Version>
  <!-- o valor de Version é reutilizado abaixo -->
  <FileVersion>$(Version)</FileVersion>
  <AssemblyVersion>$(Version)</AssemblyVersion>
</PropertyGroup>
```

Para pegar a versão via código:

```cs
string versionName = Assembly.GetExecutingAssembly()
                             .GetName()
                             .Version?
                             .ToString(3);
// versionName = "3.7.1"
```

> **Aviso**: o versionamento de pacotes NuGet é feito através de outras propriedades. Confira mais na [documentação](https://learn.microsoft.com/en-us/nuget/create-packages/package-authoring-best-practices).

## ApplicationIcon

Coloca um ícone no programa para exibição no Windows Explorer.

```xml
<PropertyGroup>
  <ApplicationIcon>my_program.ico</ApplicationIcon>
</PropertyGroup>
```

# Fontes e leituras interessantes

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