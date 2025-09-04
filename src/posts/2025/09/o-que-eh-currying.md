---
lang: pt
langEnLink: ../what-is-currying
title: O que é currying?
date: 2025-09-04
excerpt: Explicando o conceito de currying com exemplos da vida real.
published: true
enableMermaid: false
tags:
- em português
- functional programming
---

*Currying* é uma técnica para criar funções que compartilham uma mesma lógica. Nela, subfunções aplicam argumentos fixos a uma função-mãe e herdam os parâmetros restantes dela.

Exemplo em JavaScript:

```js
// função curryficada
function soma(a) {
  return function(b) {
    return a + b;
  }
}

const somar2 = soma(2);

// usos
console.log(soma(2)(7)); // 9
console.log(somar2(7)); // 9
```

Essa técnica vem da programação funcional e é muito útil para cálculos e matemática.

Outro exemplo, em F#:

```fs
let volumePiramide(formulaAreaBase)(c)(l)(a) = 
  a * (formulaAreaBase(c)(l))/3.0

let areaRetangulo(c)(l) = c * l

let areaTriangulo(c)(l) = (c * l)/2.0

let areaCirculo(_)(r) = Math.PI * r**2.0

let volumePiramideBaseRetangular =
  volumePiramide(areaRetangulo)

let volumePiramideBaseTriangular =
  volumePiramide(areaTriangulo)

let volumeCone =
  volumePiramide(areaCirculo)(0)

// usos
let v1 = volumePiramideBaseRetangular(7.0)(4.0)(11.0)
let vc = volumeCone(9.0)(12.0) // raio 9, altura 12
```

Quanto menos um parâmetro varia entre as subfunções, mais à esquerda ele deve ficar na declaração curryficada.
