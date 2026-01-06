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

*Currying* é uma técnica para criar funções que compartilham uma mesma lógica. Nela, funções são aninhadas dentro de outras, cada uma sendo responsável por um parâmetro da lógica total. 

Exemplo em JavaScript:

```js
// função curryficada
function multiplicarESomar(a) {
  return function(b) {
    return function(x) {
      return a*x + b;
    }
  }
}

const f = multiplicarESomar(2)(1);
// f(x) = 2x + 1

console.log(f(4)); // 9

const g = multiplicarESomar(3);
// g(x) = 3x + b
// b não especificado ainda

console.log(g(2)(1)); // 5, b = 2
```

Com *currying*, subfunções podem aplicar argumentos fixos a uma função-mãe e herdar a declaração dos parâmetros restantes.

Uma forma de imaginar funções *curryficadas* é como se fossem bonecas russas ([*matryoshkas*](https://pt.wikipedia.org/wiki/Matriosca)): uma dentro de outra, dentro de outra.

{% post_img '2025_09_matryoshka.jpg' 'Bonecas russas matryoshkas' %}

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
