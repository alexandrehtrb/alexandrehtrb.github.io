---
lang: en
langPtLink: ../fazendo-um-calendario-de-feriados-com-programacao-funcional
title: Making a holiday calendar with functional programming
date: 2026-01-06
excerpt: Check out how to apply functional programming to calculate the holidays of a year.
published: true
enableMermaid: false
tags:
- in english
- functional programming
---

One of my personal projects is the website [Feriados do Brasil](https://feriadosdobrasil.github.io), which is a calendar that displays national, state and municipal holidays of many cities in Brazil. While I was developing this project, I found an interesting use case to apply functional programming and wanted to share it in this article, showing how FP can provide unique and elegant solutions.

## Fixed and moveable holidays

There are two kinds of holidays: fixed feasts, whose dates always happen in the same day of the same month, and moveable feasts, whose date varies every year. The most common moveable feasts in Brazil are Holy Friday, Carnival and *Corpus Christi*.

Although less common, there are many other moveable holidays, each with its own determinative rule. The table below shows some of them.

| Moveable holiday | Date |
|:-:|:-:|
| Holy Friday | calculated via mathematical formula |
| Carnival Tuesday\* | 47 days before Easter |
| *Corpus Christi* | 60 days after Easter |
| Pentecost | 50 days after Easter |
| Sacred Heart of Jesus | 8 days after *Corpus Christi* |
| Commerce Day on<br/>Rio de Janeiro  | Third Monday of October |
| State holidays<br/>on Acre\*\* | If within Tuesday and Thursday,<br/>they get transferred to Friday |
| State holidays on<br/>Santa Catarina | If on work day,<br/>they get transferred to Sunday |

{% image_caption '* Carnival is not an official holiday, although celebrated in almost the entire country.<br/>** Except for the State Anniversary, on June 15th.' %}

The question is: how can we store holidays in a database, considering that some are fixed and some are moveable? Furthermore, each moveable feast has its own rule?

## Solution with functional programming

In this project, the listing and calculation of holidays are done entirely on the frontend, in JavaScript. Basically, a city's holidays are the union between national, state and municipal holidays. In the code, each set of holidays is represented by an array of functions.

```js
const nationalHolidays = [
  ff(JANUARY, 1, "New Year"),
  mf(calculateCarnivalTuesday, "Carnival"),
  mf(calculateHolyFriday, "Holy Friday"),
  ff(APRIL, 21, "Tiradentes"),
  ff(MAY, 1, "Worker's Day"),
  ff(SEPTEMBER, 7, "Independency of Brazil"),
  ff(OCTOBER, 12, "Our Lady the Appeared"),
  ff(OCTOBER, 28, "Public Worker Day"),
  ff(NOVEMBER, 2, "All Souls' Day"),
  ff(NOVEMBER, 15, "Proclamation of the Republic"),
  ff(NOVEMBER, 20, "Black Consciousness Day"),
  ff(DECEMBER, 25, "Christmas")
];
```

`ff` and `mf` respectively represent *fixed feast* and *moveable feast*. These functions receive either the day and month or a function to calculate the date, and also a description. They return another function, which receives a numerical year and returns a holiday object, with the description and the exact date (JavaScript `Date`).

```js
// fixed feast
function ff(month, day, desc) {
  return function (year) {
    return { date: new Date(year, month, day), description: desc };
  }
}

// moveable feast
function mf(funcCalcDate, desc) {
  return function (year) {
    return { date: funcCalcDate(year), description: desc };
  }
}
```

Here we use two functional programming concepts: higher-order functions and currying.

Higher-order functions are functions that receive other functions as input parameters or that return functions as outputs (or even both things at the same time). `mf()` receives `funcCalcDate` as an argument, which will receive a numerical year and return a Date object. Both `mf()` and `ff()` return functions.

Currying is a strategy of nesting functions inside other functions. In our case, `ff` and `mf` nest the internal `function (year) {...}`. Check out this other [article](/posts/2025/09/what-is-currying) to learn more about currying.

To obtain the holidays of a year, all we need is to iterate each function in the array, passing the year as argument:

```js
let year = 2026;
let holidays = nationalHolidays.map((func) => func(year));

// returns:
[
  { date: new Date(2026, 1, 1), description: "New Year" },
  { date: new Date(2026, 2, 17), description: "Carnival" },
  { date: new Date(2026, 4, 3), description: "Holy Friday" },
  // ...
]
```

The website's code is public and is available on [GitHub](https://github.com/alexandrehtrb/FeriadosDoBrasil/blob/master/feriados_calculo.js). Comments and variables' names are written in Portuguese.

## Interesting reads

- [Wikipedia - Public holidays in Brazil](https://en.wikipedia.org/wiki/Public_holidays_in_Brazil)
- [The Calendar FAQ - Easter](https://www.tondering.dk/claus/cal/easter.php)