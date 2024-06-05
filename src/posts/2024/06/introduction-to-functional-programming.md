---
title: Introduction to functional programming
date: 2024-06-05
published: true
tags:
- in english
- functional programming
- dotnet
---
Come learn more about functional programming and in which situations it can help you.<!-- excerpt -->

[Ler em português](../introducao-a-programacao-funcional)

<picture class="my-4">
  <source type="image/avif" srcset="/assets/img/posts/2024_06_cassino_royale_le_chiffre.avif" alt="Le Chiffre, 007 Casino Royale" />
  <img src="/assets/img/posts/2024_06_cassino_royale_le_chiffre.jpg" alt="Le Chiffre, 007 Casino Royale" />
</picture>

## Paradigms

A paradigm is a manner of thinking, observing and describing something; it's a mental model, through which we understand the things around us. Each person has its own way of seeing the world and this reflects on the things he / she does and makes.

In programming, a code can be written in many different ways with equivalent results - that means that the concept of paradigm also applies.

There are some programming paradigms that are the most popular, among them:

* **Imperative programming**: Here, the focus is on the actions of the program, which are *orders*: "do this"; "do that"; "if this, then do this other thing".

* **Object-oriented programming (OOP)**: The protagonism is on *who (or what)* performs an action. Each object is an actor responsible for an action and can call other objects to execute other actions.

* **Functional programming (FP)**: In this paradigm, the model revolves around *how actions interconnect*: they are like Lego blocks, joined together for something larger and more complex; like a production line, where the end of a step arrives at the beginning of the next step and in the end there is a final product.

## A little bit about FP

Functional programming origins are on mathematical functions.

Mathematical functions can be composed, such that the output of one is the input of another:

```
f(x) = 3x + 1

g(x) = 2x

// compositions

f ○ g (x) = f(g(x)) = 3(2x) + 1 = 6x + 1

g ○ f (x) = g(f(x)) = 2(3x + 1) = 6x + 2
```

The same rationale applies for functional programming: the return of a method is frequently used and the input of other method. The concrete example below shows function composition in F#.

```fs
module Program =

    let f(x: int) = 3*x + 1

    let g(x: int) = 2*x

    let fg = g >> f // f(g(x)), output of g is input of f

    let gf = f >> g // g(f(x)), output of f is input of g

    let [<EntryPoint>] main _ =
        printfn "f(1) = %d" (f(1))
        printfn "g(1) = %d" (g(1))
        printfn "fg(1) = %d" (fg(1))
        printfn "gf(1) = %d" (gf(1))
        0

    // will print:
    // f(1) = 4
    // g(1) = 2
    // fg(1) = 7
    // gf(1) = 8
```

## When to use functional programming

FP excels in mathematical-related tasks. Think on engineering calculus, accounting, taxes, finances, calendars and statistics. It also handles very well categorizations and pattern detections.

Artificial intelligence and machine learning need heavy mathematics and therefore benefit from functional programming.

> Can I call a functional code from a OOP or imperative project?

Yes, you can! Some object-oriented languages allow invoking functional languages, such as C# code interacting with F#, or Java code interacting with Scala.

## When not to use functional programming

For tasks like sending and receiving messages, reading and writing informations in a database, or publishing in a queue, there are not many advantages in favor of FP, because most actions do not interlace to each other. In these cases, a OOP or imperative language is usually better.

## F# language

In this article, we will use the F# functional language for a case study. F# uses [.NET runtime](https://dotnet.microsoft.com).

To setup your machine for F# development, you will need:
  * [.NET SDK](https://dotnet.microsoft.com/)
  * [Visual Studio](https://visualstudio.microsoft.com/) or
  * [VS Code](https://code.visualstudio.com/) with [F# language server updated extension](https://marketplace.visualstudio.com/items?itemName=faldor20.fsharp-language-server-updated) (the Ionide extension is no good)

To create an F# project, enter on the command line:

```sh
mkdir MyFSharpProject
cd ./MyFSharpProject/
dotnet new console --language F#
```

Before we begin, some syntax tips:

* Function declaration:

```fs
// note that each parameter has its own pair of parentheses.
// the last line is what the function returns.
let sum(x: int)(y: int) =
  x + y
```

* Anonymous function / lambda:

```fs
fun x -> x * 2
```

* Discard operator `_`

```fs
let myTuple = (1, 2)
// only the first part is relevant.
// the second is discarded `_`
let (x, _) = myTuple
```

* *Pipelining* `|>`

```fs
let numbers = [ 1; 2; 3 ]
let doble(x: int) = x * 2
let increment(x: int) = x + 1

(*
|> means the result of last function is argument 
for the last parameter of the next function.

numbers |> Seq.map(increment)

is the same as:

Seq.map(increment)(numbers)
*)

let doubledIncrementedNumbers =
  numbers // 1, 2, 3
  |> Seq.map(increment) // 2, 3, 4
  |> Seq.map(doble) // 4, 6, 8
```

## Case study: poker

In poker, a player has a hand with deck cards, each card defined by a suit with a rank. There are four suits (diamonds ♦️, clubs ♣️, hearts ♥️ and spades ♠️) and thirteen ranks (2 to 10, jack J, queen Q, king K, ace A). The cards of a hand can form special combinations and the player that has the rarest combination wins the round.

| Combination | Example | Description | Chance |
|---|---|---|---|
| **Royal Straight Flush** | **<span style="color:red">A️♦️</span>**, **<span style="color:red">K♦️</span>️**️, **<span style="color:red">Q♦️</span>️**️, **<span style="color:red">J♦️</span>️**️, **<span style="color:red">10♦️</span>️**  | Consecutive sequence of a same suit, from 10 to ace. | 0,000154% |
| **Straight Flush** | **5♣️**, **6♣️**,️ **7♣️**,️ **8♣️**, **9♣️**  | Consecutive sequence of a same suit (except the royal, above). | 0,00139% |
| **Four of a kind** | **J♣️**, **J♠️**,️ **<span style="color:red">J♦️</span>️**️,️ **<span style="color:red">J♥️</span>️**️, 2♣️️  | Four cards with the same rank. | 0,02401% |
| **Full House** | **4♣️**, **<span style="color:red">4♦️</span>️**️,️ **<span style="color:red">10♦️</span>️**, **10♣️️**, **10♠️**  | Three cards of a rank and two of another rank. | 0,1441% |
| **Flush** | **<span style="color:red">4♥️</span>️**️, **<span style="color:red">7♥️</span>️**️,️ **<span style="color:red">8♥️</span>️**️, **<span style="color:red">J♥️</span>️**️, **<span style="color:red">A♥️</span>️**️ | All cards with the same suit, but no consecutive sequence. | 0,1965% |
| **Straight** | **<span style="color:red">A♥️</span>️**️, **2♣️**,️ **<span style="color:red">3♥️</span>️**️, **<span style="color:red">4♦️</span>️**️, **5♠️**  | Consecutive sequence of ranks, but cards with different suits. | 0,3925% |
| **Three of a kind** | <span style="color:red">2♦️</span>️, K♣️,️ **<span style="color:red">7♦️</span>️**️, **7♣️**, **7♠️**  | Three cards with the same rank. | 2,1128% |
| **Two pair** | **<span style="color:red">8♥️</span>️**️,️ **<span style="color:red">8♦️</span>️**️, **<span style="color:red">9♥️</span>️**️, **9♠️**, <span style="color:red">7♥️</span>️  | One pair of a rank and another pair of a different rank. | 4,7539% |
| **Pair** | <span style="color:red">10♦️</span>️,️ **K♠️**, **<span style="color:red">K♥️</span>️**️, 2♠️, 5♠️  | Two cards with the same rank. | 42,2569% |
| **High card** | <span style="color:red">6♦️</span>️, <span style="color:red">3♦️</span>️, **<span style="color:red">10♥️</span>️**,️ <span style="color:red">7♦️</span>️, <span style="color:red">2♦️</span>️  | When the combination does not match one of the above. | 50,1177% |

### Domain code for a poker game

```fs
namespace Poker.Domain

module PokerGame =

    // this is a discriminated union
    type Suit = Spades | Clubs | Hearts | Diamonds

    // this is an enum
    type Rank =
    | Two = 2 | Three = 3 | Four = 4 | Five = 5 | Six = 6 | Seven = 7 | Eight = 8
    | Nine = 9 | Ten = 10 | Jack = 11 | Queen = 12 | King = 13 | Ace = 14

    // this is a tuple
    type Card = Suit * Rank

    type Hand = Card list

    type HandRanking =
    | RoyalStraightFlush = 10
    | StraightFlush = 9
    | FourOfAKind = 8
    | FullHouse = 7
    | Flush = 6
    | Straight = 5
    | ThreeOfAKind = 4
    | TwoPairs = 3
    | OnePair = 2
    | HighCard = 1

    let hasStraight(hand: Hand) =
        hand
        |> Seq.sortBy(fun (_,rank) -> rank)
        |> Seq.pairwise
        |> Seq.forall(fun ((_,rank1), (_,rank2)) ->
            (int rank2) - (int rank1) = 1 || (rank2 = Rank.Ace && rank1 = Rank.Five))

    let hasFlush(hand: Hand) =
        let (someSuit, someRank) = Seq.head hand
        hand
        |> Seq.map (fun (suit,_) -> suit)
        |> Seq.forall ((=)someSuit)

    let hasKingAndAce(hand: Hand) =
        let hasKing = Seq.exists(fun (_,rank) -> rank = Rank.King)(hand)
        let hasAce = Seq.exists(fun (_,rank) -> rank = Rank.Ace)(hand)
        hasKing && hasAce

    let getSortedQuantitiesPerRank(hand: Hand) =
        hand
        |> Seq.countBy(fun (_, rank) -> rank)
        |> Seq.sortBy(fun (_, qtyForRank) -> qtyForRank)
        |> Seq.map(fun (_, qtyForRank) -> qtyForRank)
        |> Seq.toList

    let getHandRanking(hand: Hand) =
        match getSortedQuantitiesPerRank(hand) with
        | [ 1; 4 ] -> HandRanking.FourOfAKind
        | [ 2; 3 ] -> HandRanking.FullHouse
        | [ 1; 1; 3 ] -> HandRanking.ThreeOfAKind
        | [ 1; 2; 2 ] -> HandRanking.TwoPairs
        | [ 1; 1; 1; 2 ] -> HandRanking.OnePair
        | _ -> match (hasStraight(hand), hasFlush(hand), hasKingAndAce(hand)) with
               | (true, true, true) -> HandRanking.RoyalStraightFlush
               | (true, true, false) -> HandRanking.StraightFlush
               | (true, false, _) -> HandRanking.Straight
               | (false, true, _) -> HandRanking.Flush
               | _ -> HandRanking.HighCard
```

In only one file, we were able to describe the logic of the problem that needs to be resolved. Even if the language syntax is not familiar for those seeing it for the first time, there is a logical consistency of transformations and comparisons in the methods.

The last method, `getHandRanking`, compares the quantities of cards by rank to know if there is a combination by quantity (four-of-a-kind, full house, three-of-a-kind, two pairs, pair). If there are none, then analyses if the combination is sequential and/or by suits (straight, flush, straight flush and royal straight flush). In the end, if there are no matches, then it is a high card ranking.

I confess that when I first used a programming language I found it difficult, a bit because of the syntax which is very different, and because many code examples on the internet use implicit typing, which is less obvious to understand:

```fs
// implicit typing (inference)
let sum x y =
  x + y

// most explicit typing available
let sum(x: int)(y: int): int =
  x + y
```

Nevertheless, if you have a situation where a functional approach is better, I say that it's worth to persist and learn, starting with simpler and smaller examples, and advancing as you feel more confident.

The code above is available on [GitHub](https://github.com/alexandrehtrb/FunctionalPoker/), with unit tests and showing how to integrate a F# project with a C# project.

## Sources and interesting reads

* [Le Chiffre, 007 villain image](https://www.007.com/focus-of-the-week-le-chiffre/)

* [Wikipédia - Paradigm](https://en.wikipedia.org/wiki/Paradigm)

* [Wikipédia - Poker probability](https://en.wikipedia.org/wiki/Poker_probability)

* [F# cheatsheet](https://fsprojects.github.io/fsharp-cheatsheet/)

* [F# by example](https://camilotk.github.io/fsharp-by-example/)

* [F# for fun and profit](https://fsharpforfunandprofit.com/)
