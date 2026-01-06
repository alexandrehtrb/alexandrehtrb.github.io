---
lang: en
langPtLink: ../o-que-eh-currying
title: What is currying?
date: 2025-09-04
excerpt: Explaining the concept of currying with real-life examples.
published: true
enableMermaid: false
tags:
- in english
- functional programming
---

Currying is a strategy for sharing logic in programming. With it, functions are nested inside others, each one responsible for a parameter of the whole logic.

JavaScript example:

```js
// curried function
function multiplyAndSum(a) {
  return function(b) {
    return function(x) {
      return a*x + b;
    }
  }
}

const f = multiplyAndSum(2)(1);
// f(x) = 2x + 1

console.log(f(4)); // 9

const g = multiplyAndSum(3);
// g(x) = 3x + b
// b unspecified

console.log(g(2)(1)); // 5, b = 2
```

With currying, derived functions can pre-fill arguments of a parent function and inherit the declaration of remaining parameters.

Curried functions can be imagined as [*matryoshka*](https://en.wikipedia.org/wiki/Matryoshka_doll) Russian dolls — one inside another, inside another.

{% post_img '2025_09_matryoshka.jpg' 'Matryoshka Russian dolls' %}

This style comes from functional programming and is very useful for mathematics.

Another example, in F#:

```fs
let volumePyramid(baseAreaFormula)(w)(l)(h) = 
  h * (baseAreaFormula(w)(l))/3.0

let areaRectangle(w)(l) = w * l

let areaTriangle(w)(l) = (w * l)/2.0

let areaCircle(_)(r) = Math.PI * r**2.0

let volumeRectangularBasePyramid =
  volumePyramid(areaRectangle)

let volumeTriangularBasePyramid =
  volumePyramid(areaTriangle)

let volumeCone =
  volumePyramid(areaCircle)(0)

// usage
let v1 = volumeRectangularBasePyramid(7.0)(4.0)(11.0)
let vc = volumeCone(9.0)(12.0) // radius 9, height 12
```

The less a parameter varies across functions, the further to the left it should be in a curried declaration.
