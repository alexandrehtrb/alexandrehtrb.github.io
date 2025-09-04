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

Currying is a strategy for sharing logic in programming. With it, derived functions pre-fill arguments of a parent function and inherit the remaining parameters.

JavaScript example:

```js
// curryfied function
function sum(a) {
  return function(b) {
    return a + b;
  }
}

const sum2 = sum(2);

// usage
console.log(sum(2)(7)); // 9
console.log(sum2(7)); // 9
```

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
