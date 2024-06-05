---
title: Introdução a programação funcional
date: 2024-06-05
published: true
tags:
- em português
- functional programming
- dotnet
---
Venha saber mais sobre programação funcional e em que situações ela pode te ajudar.<!-- excerpt -->

[Read in english](../introduction-to-functional-programming)

<picture class="my-4">
  <source type="image/avif" srcset="/assets/img/posts/2024_06_cassino_royale_le_chiffre.avif" alt="Le Chiffre, 007 Casino Royale" />
  <img src="/assets/img/posts/2024_06_cassino_royale_le_chiffre.jpg" alt="Le Chiffre, 007 Casino Royale" />
</picture>

## Paradigmas

Um paradigma é uma maneira de se pensar, de se observar e de se descrever algo ou um raciocínio; é um modelo mental, no qual nos baseamos para entender as coisas ao nosso redor. Cada pessoa tem um jeito próprio de enxergar o mundo e isso se reflete nas coisas que ela faz e produz.

Em programação, um código pode ser escrito de múltiplas formas e com resultados equivalentes - ou seja, o conceito de paradigmas se aplica.

Existem alguns paradigmas de programação que são os mais difundidos, entre eles:

* **Programação imperativa**: Aqui, o foco é nas ações do programa, que são *ordens*: "faça isto"; "faça aquilo"; "se isso, então faça mais isso".

* **Programação orientada a objetos (POO)**: O protagonismo é em *quem (ou o quê)* realiza uma ação. Cada objeto é um ator responsável por uma ação e pode chamar outros objetos para realizarem outras ações.

* **Programação funcional (PF)**: Neste paradigma, o modelo é em torno de *como se juntam* as ações: elas são como blocos de Lego, que se encaixam para algo maior e mais complexo; como em uma linha de produção industrial, em que o resultado de uma etapa desemboca no início da etapa seguinte e ao fim há um produto bem-acabado.

## Um pouco sobre PF

A programação funcional tem origem na matemática de funções.

Funções matemáticas podem ser compostas, tal que a saída de uma função é entrada de outra. Por exemplo:

```
f(x) = 3x + 1

g(x) = 2x

// composições

f ○ g (x) = f(g(x)) = 3(2x) + 1 = 6x + 1

g ○ f (x) = g(f(x)) = 2(3x + 1) = 6x + 2
```

O mesmo raciocínio se aplica na programação funcional: o retorno de um método é freqüentemente usado como valor de entrada para outro. O exemplo concreto abaixo mostra funções compostas na linguagem F#.

```fs
module Program =

    let f(x: int) = 3*x + 1

    let g(x: int) = 2*x

    let fg = g >> f // f(g(x)), saída de g é entrada de f

    let gf = f >> g // g(f(x)), saída de f é entrada de g

    let [<EntryPoint>] main _ =
        printfn "f(1) = %d" (f(1))
        printfn "g(1) = %d" (g(1))
        printfn "fg(1) = %d" (fg(1))
        printfn "gf(1) = %d" (gf(1))
        0

    // vai printar:
    // f(1) = 4
    // g(1) = 2
    // fg(1) = 7
    // gf(1) = 8
```

## Quando usar programação funcional

A PF se destaca em tarefas de natureza matemática. Pense em cálculos de engenharia, de contabilidade, impostos, finanças, calendários e estatísticas. Ela também lida muito bem com categorizações e reconhecimento de padrões.

As áreas de inteligência artificial e aprendizado de máquina necessitam de matemática pesada e portanto podem se beneficiar da programação funcional.

> Posso chamar um código funcional em um projeto POO ou imperativo?

Pode! Algumas linguagens orientadas a objeto permitem invocar código de linguagens funcionais, por exemplo, C# pode interagir com F#, e Java pode interagir com Scala.

## Quando não usar programação funcional

Para tarefas como envio e recebimento de mensagens, ler e salvar informações em um banco de dados, ou publicação em filas, há poucas vantagens em se optar pela PF, pois a maioria das ações não se entrelaça. Nesses casos, uma linguagem POO ou imperativa normalmente é melhor.

## Linguagem F#

Neste artigo, vamos usar a linguagem funcional F# para um estudo de caso. F# usa o [*runtime* .NET](https://dotnet.microsoft.com).

Para preparar sua máquina para desenvolver em F#, você vai precisar instalar:
  * [.NET SDK](https://dotnet.microsoft.com/)
  * [Visual Studio](https://visualstudio.microsoft.com/) ou
  * [VS Code](https://code.visualstudio.com/) com a extensão [F# language server updated](https://marketplace.visualstudio.com/items?itemName=faldor20.fsharp-language-server-updated) (não usar a extensão do Ionide F#)

Para criar um projeto F# via linha de comando:

```sh
mkdir MeuProjetoFSharp
cd ./MeuProjetoFSharp/
dotnet new console --language F#
```

Antes de começar, algumas dicas de sintaxe:

* Declaração de função:

```fs
// note que cada parâmetro tem um par de parênteses.
// a última linha é o retorno da função.
let soma(x: int)(y: int) =
  x + y
```

* Função anônima / lambda:

```fs
fun x -> x * 2
```

* Operador de descarte `_`

```fs
let minhaTupla = (1, 2)
// só a primeira parte interessa.
// a segunda é descartada `_`
let (x, _) = minhaTupla
```

* *Pipelining* `|>`

```fs
let numeros = [ 1; 2; 3 ]
let dobrar(x: int) = x * 2
let incrementar(x: int) = x + 1

(*
|> significa que o resultado do anterior
é o último argumento da próxima função.

numeros |> Seq.map(incrementar)

é a mesma coisa que:

Seq.map(incrementar)(numeros)
*)

let numerosIncrementadosDobrados =
  numeros // 1, 2, 3
  |> Seq.map(incrementar) // 2, 3, 4
  |> Seq.map(dobrar) // 4, 6, 8
```

## Estudo de caso: pôquer

No pôquer, um jogador tem uma mão com cartas de baralho, cada carta definida por um naipe mais uma face. Existem quatro naipes (ouros ♦️, paus ♣️, copas ♥️ e espadas ♠️) e treze faces (2 a 10, valete J, dama Q, rei K, ás A). As cartas da mão podem formar combinações especiais e o jogador que tiver a combinação mais rara vence a rodada do jogo.

| Combinação | Exemplo | Descrição | Chance |
|---|---|---|---|
| **Royal Straight Flush** | **<span style="color:red">A️♦️</span>**, **<span style="color:red">K♦️</span>️**️, **<span style="color:red">Q♦️</span>️**️, **<span style="color:red">J♦️</span>️**️, **<span style="color:red">10♦️</span>️**  | Seqüência consecutiva de mesmo naipe, de 10 a ás. | 0,000154% |
| **Straight Flush** | **5♣️**, **6♣️**,️ **7♣️**,️ **8♣️**, **9♣️**  | Seqüência consecutiva de mesmo naipe (que não seja a real, acima). | 0,00139% |
| **Quadra** | **J♣️**, **J♠️**,️ **<span style="color:red">J♦️</span>️**️,️ **<span style="color:red">J♥️</span>️**️, 2♣️️ | Quatro cartas de mesma face. | 0,02401% |
| **Full House** | **4♣️**, **<span style="color:red">4♦️</span>️**️,️ **<span style="color:red">10♦️</span>️**, **10♣️️**, **10♠️** | Uma trinca e um par. | 0,1441% |
| **Flush** | **<span style="color:red">4♥️</span>️**️, **<span style="color:red">7♥️</span>️**️,️ **<span style="color:red">8♥️</span>️**️, **<span style="color:red">J♥️</span>️**️, **<span style="color:red">A♥️</span>️**️ | Cartas de mesmo naipe, mas sem formar seqüência consecutiva. | 0,1965% |
| **Straight** | **<span style="color:red">A♥️</span>️**️, **2♣️**,️ **<span style="color:red">3♥️</span>️**️, **<span style="color:red">4♦️</span>️**️, **5♠️**  | Seqüência consecutiva de faces, mas com naipes distintos. | 0,3925% |
| **Trinca** | <span style="color:red">2♦️</span>️, K♣️,️ **<span style="color:red">7♦️</span>️**️, **7♣️**, **7♠️** | Três cartas de faces iguais. | 2,1128% |
| **Dois pares** | **<span style="color:red">8♥️</span>️**️,️ **<span style="color:red">8♦️</span>️**️, **<span style="color:red">9♥️</span>️**️, **9♠️**, <span style="color:red">7♥️</span>️ | Dois pares de cartas. | 4,7539% |
| **Par** | <span style="color:red">10♦️</span>️,️ **K♠️**, **<span style="color:red">K♥️</span>️**️, 2♠️, 5♠️  | Duas cartas de mesma face. | 42,2569% |
| **Carta mais alta** | <span style="color:red">6♦️</span>️, <span style="color:red">3♦️</span>️, **<span style="color:red">10♥️</span>️**,️ <span style="color:red">7♦️</span>️, <span style="color:red">2♦️</span>️  | Quando a mão não corresponde a uma das combinações acima. | 50,1177% |

### Domínio de um jogo de pôquer

```fs
namespace Poker.Domain

module PokerGame =

    // esta é uma união discriminada
    type Naipe = Espadas | Paus | Copas | Ouros

    // este é um enum
    type Face =
    | Dois = 2 | Três = 3 | Quatro = 4 | Cinco = 5 | Seis = 6 | Sete = 7 | Oito = 8
    | Nove = 9 | Dez = 10 | Valete = 11 | Dama = 12 | Rei = 13 | Ás = 14

    // isto é uma tupla
    type Carta = Naipe * Face

    type Mao = Carta list

    type CombinacaoMao =
    | RoyalStraightFlush = 10
    | StraightFlush = 9
    | Quadra = 8
    | FullHouse = 7
    | Flush = 6
    | Straight = 5
    | Trinca = 4
    | DoisPares = 3
    | Par = 2
    | CartaMaisAlta = 1

    let temStraight(mao: Mao) =
        mao
        |> Seq.sortBy(fun (_,face) -> face)
        |> Seq.pairwise
        |> Seq.forall(fun ((_,face1), (_,face2)) ->
            (int face2) - (int face1) = 1 || (face2 = Face.Ás && face1 = Face.Cinco))

    let temFlush(mao: Mao) =
        let (umNaipe, umaFace) = Seq.head mao
        mao
        |> Seq.map (fun (naipe,_) -> naipe)
        |> Seq.forall ((=)umNaipe)

    let temReiAs(mao: Mao) =
        let temUmRei = Seq.exists(fun (_,face) -> face = Face.Rei)(mao)
        let temUmAs = Seq.exists(fun (_,face) -> face = Face.Ás)(mao)
        temUmRei && temUmAs

    let obterEmOrdemCrescenteQuantidadesPorFace(mao: Mao) =
        mao
        |> Seq.countBy(fun (_, face) -> face)
        |> Seq.sortBy(fun (_, qtdPorFace) -> qtdPorFace)
        |> Seq.map(fun (_, qtdPorFace) -> qtdPorFace)
        |> Seq.toList

    let obterCombinacaoMao(mao: Mao) =
        match obterEmOrdemCrescenteQuantidadesPorFace(mao) with
        | [ 1; 4 ] -> CombinacaoMao.Quadra
        | [ 2; 3 ] -> CombinacaoMao.FullHouse
        | [ 1; 1; 3 ] -> CombinacaoMao.Trinca
        | [ 1; 2; 2 ] -> CombinacaoMao.DoisPares
        | [ 1; 1; 1; 2 ] -> CombinacaoMao.Par
        | _ -> match (temStraight(hand), temFlush(hand), temReiAs(hand)) with
               | (true, true, true) -> CombinacaoMao.RoyalStraightFlush
               | (true, true, false) -> CombinacaoMao.StraightFlush
               | (true, false, _) -> CombinacaoMao.Straight
               | (false, true, _) -> CombinacaoMao.Flush
               | _ -> CombinacaoMao.CartaMaisAlta
```

Em apenas um arquivo, conseguimos descrever a lógica do problema a ser resolvido. Ainda que a sintaxe da linguagem não seja familiar para quem vê pela primeira vez, há um padrão lógico de transformações e comparações nos métodos.

O último método, `obterCombinacaoMao`, compara as quantidades de cartas por face para saber se há uma combinação por quantidade (quadras, trincas, full houses, dois pares e pares). Se não houver, então analisa se a combinação é seqüencial e/ou de naipe (straight, flush, straight flush e royal straight flush). Por fim, se não houver correspondência, então é carta mais alta.

Confesso que quando mexi com linguagem funcional pela primeira vez eu achei difícil, um pouco por causa da sintaxe que é bem diferente, e também porque vários exemplos de código na internet usam tipagem implícita, que é menos óbvia de se entender:

```fs
// tipagem implícita (inferência)
let soma x y =
  x + y

// declaração mais explícita possível
let soma(x: int)(y: int): int =
  x + y
```

Contudo, se você tem alguma situação em que uma abordagem funcional é melhor, digo que vale a pena persistir e aprender, começando com exemplos mais simples e pequenos, e progredir conforme se sentir mais seguro.

O código acima está disponível no [GitHub](https://github.com/alexandrehtrb/FunctionalPoker/), com testes unitários e mostrando como integrar um projeto F# com um projeto C#.

## Fontes e links interessantes

* [Imagem do Le Chiffre, vilão do 007](https://www.007.com/focus-of-the-week-le-chiffre/)

* [Wikipédia - Paradigma](https://pt.wikipedia.org/wiki/Paradigma)

* [Wikipédia - Probabilidade no pôquer](https://pt.wikipedia.org/wiki/Probabilidade_no_p%C3%B4quer)

* [F# cheatsheet](https://fsprojects.github.io/fsharp-cheatsheet/)

* [F# by example](https://camilotk.github.io/fsharp-by-example/)

* [F# for fun and profit](https://fsharpforfunandprofit.com/)
