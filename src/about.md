---
layout: about
title: This is me.
---

My name is Alexandre, I am a programmer, Brazilian, from the city of Campinas, São Paulo, Brasil.

This blog is based on the [excellent project](https://github.com/kohrongying/11ty-blog-starter) by Rong Ying, using [11ty](https://www.11ty.dev/).

<blockquote>
<p id="kelvinQuote">I often say... that when you can measure what you are speaking about, and express it in numbers, you know something about it; but when you cannot measure it, when you cannot express it in numbers, your knowledge is of a meager and unsatisfactory kind; it may be the beginning of knowledge, but you have scarcely, in your thoughts, advanced to the stage of science, whatever the matter may be.</p>
</blockquote>

**<p align="right" style="margin-top:-18px;">Lord Kelvin (<a style="cursor: pointer;" onclick="switchQuoteLang('en')">en</a> / <a style="cursor: pointer;" onclick="switchQuoteLang('pt')">pt</a>)</p>**

<img class="my-4" src="/assets/img/water_is_the_best_drink.jpg" alt="Water is the best drink!" title="Water is the best drink!" />

<script>
const kelvinQuoteEn = document.getElementById("kelvinQuote").innerText;

const kelvinQuotePt = "Eu sempre digo... que quando você pode medir aquilo de que está falando e consegue exprimir em números, você sabe algo sobre; mas quando você não pode medir, quando não consegue exprimir em números, seu conhecimento sobre o assunto é de um tipo pobre e insatisfatório; pode ser o começo de um conhecimento, mas você não avançou, em seus pensamentos, ao estágio de ciência, qualquer que seja o assunto.";

function switchQuoteLang(lang)
{
    document.getElementById("kelvinQuote").innerText = lang == "en" ? kelvinQuoteEn : kelvinQuotePt;
}
</script>