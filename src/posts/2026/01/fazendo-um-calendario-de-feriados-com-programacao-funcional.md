---
lang: pt
langEnLink: ../making-a-holiday-calendar-with-functional-programming
title: Fazendo um calendário de feriados com programação funcional
date: 2026-01-06
excerpt: Vamos ver como aplicar programação funcional para calcular os feriados em um determinado ano.
published: true
enableMermaid: false
tags:
- em português
- functional programming
---

Um dos meus projetos pessoais é o site [Feriados do Brasil](https://feriadosdobrasil.github.io), que é um calendário com os feriados nacionais, estaduais e municipais de várias cidades do país. Enquanto eu desenvolvia esse projeto, encontrei um caso de uso interessante para aplicar programação funcional e resolvi compartilhar neste artigo, mostrando como ela pode fornecer soluções diferentes e elegantes para nossos desafios.

## Feriados fixos e móveis

Existem dois tipos de feriados: os de datas fixas, que caem sempre em um mesmo dia de um mesmo mês, e os de datas móveis, cuja data varia de acordo com o ano. Os feriados móveis mais conhecidos são a Paixão de Cristo, o Carnaval e *Corpus Christi*.

Apesar de menos comuns, existem muitos feriados móveis, cada um com sua regra determinadora. A tabela abaixo mostra alguns deles.

| Feriado móvel | Data |
|:-:|:-:|
| Paixão de Cristo | calculada via fórmula matemática |
| Terça-feira de Carnaval\* | 47 dias antes da Páscoa |
| *Corpus Christi* | 60 dias depois da Páscoa |
| Pentecostes | 50 dias após a Páscoa |
| Sagrado Coração de Jesus | 8 dias após *Corpus Christi* |
| Dia do Comércio no<br/>Rio de Janeiro  | Terceira segunda-feira de outubro |
| Feriados estaduais<br/>do Acre\*\* | Se caírem entre terça-feira e quinta-feira,<br/>são deslocados para a sexta-feira seguinte |
| Feriados estaduais de<br/>Santa Catarina | Se caírem em dia útil,<br/>são deslocados para o domingo seguinte |

{% image_caption '* Carnaval não é um feriado oficial, apesar de ser celebrado em quase todo o país.<br/>** Exceto para o Aniversário do Estado, em 15 de junho.' %}

A questão é: como podemos armazenar os feriados em uma base de dados, considerando que alguns são fixos e outros são móveis? Mais ainda, os de datas móveis têm regras particulares para calcular as datas?

## Solução via programação funcional

No projeto em questão, a listagem e cálculo de feriados são feitos inteiramente no frontend em JavaScript. Basicamente, os feriados de um município correspondem à união dos feriados nacionais, estaduais e municipais. No código, cada um desses conjuntos é representado por um *array* de funções.

```js
const feriadosNacionais = [
  ff(JANEIRO, 1, "Ano Novo"),
  fm(calcularTercaFeiraDeCarnaval, "Carnaval"),
  fm(calcularSextaFeiraSanta, "Paixão de Cristo"),
  ff(ABRIL, 21, "Tiradentes"),
  ff(MAIO, 1, "Dia do Trabalho"),
  ff(SETEMBRO, 7, "Independência do Brasil"),
  ff(OUTUBRO, 12, "Dia de Nossa Senhora Aparecida"),
  ff(OUTUBRO, 28, "Dia do Servidor Público (ponto facultativo)"),
  ff(NOVEMBRO, 2, "Finados"),
  ff(NOVEMBRO, 15, "Proclamação da República"),
  ff(NOVEMBRO, 20, "Dia da Consciência Negra"),
  ff(DEZEMBRO, 25, "Natal")
];
```

`ff` e `fm` representam respectivamente *feriado fixo* e *feriado móvel*. Essas funções recebem o dia e mês ou então uma função para calcular a data, além da descrição do feriado. O retorno delas é outra função, que recebe como argumento o ano numérico e por sua vez retorna um objeto feriado, com a descrição e a data exata (JavaScript `Date`).

```js
// feriado fixo
function ff(mes, dia, desc) {
  return function (ano) {
    return { data: new Date(ano, mes, dia), descricao: desc };
  }
}

// feriado móvel
function fm(funcCalcDia, desc) {
  return function (ano) {
    return { data: funcCalcDia(ano), descricao: desc };
  }
}
```

Aqui usamos dois conceitos da programação funcional: *higher-order functions* e *currying*.

*Higher-order functions* são funções que recebem funções como parâmetro de entrada ou então que retornam funções como valores de saída (ou até as duas coisas ao mesmo tempo). `fm()` recebe `funcCalcDia` como argumento; esta por sua vez receberá um ano numérico e devolverá um objeto *Date*. Tanto `fm()` como `ff()` retornam funções.

*Currying* é uma estratégia de aninhamento de funções em cascata. No caso, `ff` e `fm` aninham as funções internas `function (ano) {...}`. Confira em mais detalhes este outro [artigo](/posts/2025/09/o-que-eh-currying) sobre *currying*.

Para obter os feriados de um conjunto, basta iterar por cada função passando o ano como argumento:

```js
let ano = 2026;
let feriados = feriadosNacionais.map((func) => func(ano));

// retorno:
[
  { data: new Date(2026, 1, 1), descricao: "Ano Novo" },
  { data: new Date(2026, 2, 17), descricao: "Carnaval" },
  { data: new Date(2026, 4, 3), descricao: "Paixão de Cristo" },
  // ...
]
```

O código em questão usado para o site é público e está disponível no [GitHub](https://github.com/alexandrehtrb/FeriadosDoBrasil/blob/master/feriados_calculo.js).

## Leituras interessantes

- [Wikipédia - Feriados no Brasil](https://pt.wikipedia.org/wiki/Feriados_no_Brasil)
- [Unicamp - Professor Paulo Miranda - Cálculo da Páscoa](http://vision.ime.usp.br/~pmiranda/mc102_1s07/lab01/lab.html)
- [The Calendar FAQ - Easter](https://www.tondering.dk/claus/cal/easter.php) (em inglês)