---
lang: pt
langEnLink: ../least-squares-fitting-with-functional-programming
title: Método dos mínimos quadrados com programação funcional
date: 2025-03-07
excerpt: Descubra o que é o Método dos Mínimos Quadrados, como ele pode te ajudar e como implementá-lo em programação funcional.
published: true
enableMermaid: true
tags:
- em português
- functional programming
- dotnet
- economy
- quality
---

Suponha que você tenha um conjunto de dados numéricos e queira formar uma estimativa futura a partir deles. Alguns exemplos:

- Preço de um produto;
- Demanda e produção históricas;
- Cotação de ativos financeiros;
- Calibração de uma máquina ao longo do tempo;
- Concentração de reagentes e produtos químicos;
- Velocidade de propagação de uma doença;
- Volume de reservatórios de água;
- Demanda de energia elétrica;
- Consumo de combustível.

O método dos mínimos quadrados é uma ferramenta matemática que gera uma equação próxima de medições existentes. Diversas curvas podem ser aproximadas, como lineares, polinomiais, exponenciais, logarítmicas e diversas outras.

Considere o gráfico abaixo, de vendas por mês. A linha azul é a aproximação linear e a linha vermelha corresponde às medições reais.

```mermaid
---
config:
    xyChart:
        width: 540
    themeVariables:
        xyChart:
            backgroundColor: "#00000000"
            plotColorPalette: "#A00, #22F"
---
xychart-beta
    title "Vendas por mês (R$)"
    x-axis "mês" [1,2,3,4,5,6,7,8,9,10,11,12]
    y-axis 0 --> 50000
    line [17000, 24000, 16000, 30000, 35000, 26000, 29000, 40000, 44000, 35000, 41000, 47000]
	line [18461.538, 20923.076, 23384.614, 25846.152, 28307.690, 30769.228, 33230.766, 35692.304, 38153.842, 40615.380, 43076.918, 45538.456]
	%% =2461,538 * x + 16000

```

<br/>

# Base teórica

Considere **f(x)** sendo a equação que queremos gerar e **(x<sub>i</sub>, y<sub>i</sub>)** as medições coletadas. A melhor equação é aquela cujas diferenças entre aproximações e medições sejam as menores possíveis; em outras palavras, **Σ|f(x<sub>i</sub>) - y<sub>i</sub>|** deve ser o mais próximo de zero.

{% post_img '2025_03_least_ordinary_squares_errors.png' 'Diferenças entre aproximação e medições.' %}

Para encontrar os parâmetros da equação, usa-se derivadas parciais sobre o somatório. Neste artigo, não iremos muito a fundo na teoria, porém, se você ficou interessado e quer entender mais como o método funciona, recomendo esta [aula da UFPR](/assets/misc/aula_ufpr_mínimos_quadrados.pdf).

<br/>

# Programação funcional

A programação funcional é um paradigma que foca nas transformações dos dados - como em uma função matemática, um valor `x` entra e é transformado por `f(x)`. Num código funcional, transformações muitas vezes são aplicadas em cascata, ex.: `f(g(h(x)))`.

Neste artigo, vamos usar a linguagem funcional F#, que usa o [*runtime* .NET](https://dotnet.microsoft.com).

Este [post](/posts/2024/06/introducao-a-programacao-funcional/#linguagem-f%23) explica como montar seu ambiente e tem dicas de sintaxe da linguagem.

<br/>

# Aproximação linear

A equação gerada será do tipo `f(x) = a*x + b`.

Tendo um conjunto de valores medidos (x<sub>i</sub>, y<sub>i</sub>), a e b são calculados por:

<br/>

{% svg_2025_03_least_ordinary_squares_linear_fitting_a %}

<br/>

{% svg_2025_03_least_ordinary_squares_linear_fitting_b %}

<br/>

O código em F# abaixo calcula a aproximação linear.

- `x` e `y` são os valores de entrada.
- `Seq.sumBy` soma os resultados de uma função aplicada aos valores de uma seqüência:
    - `x = [1, 2, 3]`
    - `x |> Seq.sumBy(fun i -> i * 2) = 12` (2\*1 + 2\*2 + 2\*3 = 12)
- `Seq.zip` forma uma seqüência de pares vindos de duas outras seqüências. Por exemplo:
  - `x = [1, 2, 3]`
  - `y = [9, 8, 7]`
  - `Seq.zip(x)(y) = [ (1, 9), (2, 8), (3, 7) ]`.

```fs
// s = soma
let s(v: double[]): double =
    v |> Seq.sum

// sm = soma de multiplicações
let sm(v1: double[])(v2: double[]): double =
    Seq.zip(v1)(v2)
    |> Seq.sumBy (fun (x, y) -> x * y)

let aproximacaoLinear(x: double[])(y: double[]): (double * double) =
    let n = x.Length |> double
    let sx = s(x)
    let sx2 = sm(x)(x)
    let sy = s(y)
    let sxy = sm(x)(y)
    let d = n*sx2 - sx**2
    let a = (n*sxy - sx*sy)/d
    let b = (sx2*sy - sxy*sx)/d
    (a,b)
```

<br/>

# Aproximação exponencial

A equação gerada será do tipo `f(x) = A * e^(B*x)`. **e** é a [base natural](https://pt.wikipedia.org/wiki/E_(constante_matem%C3%A1tica)), aproximadamente igual a 2,71828.

Tendo um conjunto de valores medidos (x<sub>i</sub>, y<sub>i</sub>), a e b são calculados por:

<br/>

{% svg_2025_03_least_ordinary_squares_exponential_fitting_a %}

<br/>

{% svg_2025_03_least_ordinary_squares_exponential_fitting_b %}

<br/>

O código em F# abaixo calcula a aproximação exponencial.

- `ln` é o logaritmo natural, na base **e**.
- `A = e^a`.
- `Seq.zip3` segue a mesma lógica que o `Seq.zip`, porém forma uma seqüência de trios vindos de três outras seqüências.
- **Importante**: os valores de y precisam ser todos maiores do que zero, pois não existe logaritmo de valor zero ou negativo.

```fs
// s = soma
let s(v: double[]): double =
    v |> Seq.sum

// sm = soma de multiplicações
let sm(v1: double[])(v2: double[]): double =
    Seq.zip(v1)(v2)
    |> Seq.sumBy (fun (x, y) -> x * y)

let ln = System.Math.Log

// smm = soma(v1 * v2 * v3)
let smm(v1: double[])(v2: double[])(v3: double[]): double =
    Seq.zip3(v1)(v2)(v3)
    |> Seq.sumBy (fun (a,b,c) -> a * b * c)

// smln = soma(v1 * ln(v2))
let smln(v1: double[])(v2: double[]): double =
    Seq.zip(v1)(v2)
    |> Seq.sumBy (fun (a,b) -> a * ln(b))

// smmln = soma(v1 * v2 * ln(v3))
let smmln(v1: double[])(v2: double[])(v3: double[]): double =
    Seq.zip3(v1)(v2)(v3)
    |> Seq.sumBy (fun (a,b,c) -> a * b * ln(c))

// exponencial: y = A * e^(b*x)
let aproximacaoExponencial(x: double[])(y: double[]): (double * double) =
    let sx2y = smm(x)(x)(y)
    let sylny = smln(y)(y)
    let sxy = sm(x)(y)
    let sxylny = smmln(x)(y)(y)
    let sy = s(y)
    let d = sy*sx2y - sxy**2
    let a = (sx2y*sylny - sxy*sxylny)/d
    let b = (sy*sxylny - sxy*sylny)/d
    let A = System.Math.Exp(a)
    (A, b)
```

<br/>

# Caso de estudo: Mineração de prata

{% post_img '2025_03_argentina_pirquitas_silver_mine.jpg' '' %}

{% image_caption 'Mina Pirquitas, Jujuy, Argentina.' %}

Vamos extrair dados do site [Our World in Data](https://ourworldindata.org/metals-minerals) sobre a mineração mundial de prata, entre 1900 e 2023, e vamos fazer as aproximações linear e exponencial.

Arquivo CSV disponível neste [link](/assets/misc/1900-2023-silver_mining_production.csv).

Resultados:

- `f(x)` é a mineração em toneladas, x é o ano.
- Linear: `f(x) = 162,897 * x - 308090,816`
- Exponencial: `f(x) = 0,000000002257 * e^(x * 0,01485166)`

```mermaid
---
config:
    xyChart:
        width: 540
    themeVariables:
        xyChart:
            backgroundColor: "#00000000"
            plotColorPalette: "#AA0000, #2222FF, #00AA00"
---
xychart-beta
    title "Produção anual de prata (ton. mét.)"
    x-axis "Ano" 1900 --> 2023
    y-axis 0 --> 30000
    line [ 5400, 5380, 5060, 5220, 5110, 5360, 5130, 5730, 6320, 6600, 6900, 7040, 6980, 7010, 5240, 5730, 5250, 5420, 6140, 5490, 5390, 5330, 6530, 7650, 7450, 7650, 7890, 7900, 8020, 8120, 7740, 6080, 5130, 5340, 5990, 6890, 7920, 8640, 8320, 8300, 8570, 8140, 7780, 6380, 5740, 5040, 3970, 5220, 5440, 5570, 6320, 6210, 6700, 6900, 6670, 7000, 7020, 7190, 7430, 6910, 7320, 7370, 7650, 7780, 7730, 8010, 8300, 8030, 8560, 9200, 9360, 9170, 9380, 9700, 9260, 9430, 9840, 10300, 10700, 10800, 10700, 11200, 11500, 12100, 13100, 13100, 13000, 14000, 15500, 16400, 16600, 15600, 14900, 14100, 14000, 14900, 15100, 16500, 17200, 17600, 18100, 18700, 18800, 18800, 20000, 20800, 20100, 20800, 21300, 22300, 23300, 23300, 24300, 26700, 28000, 27600, 28600, 26500, 25900, 25800, 23500, 25000, 25600, 26000 ]
	line [ 1413.484, 1576.381, 1739.278, 1902.175, 2065.072, 2227.969, 2390.866, 2553.763, 2716.66, 2879.557, 3042.454, 3205.351, 3368.248, 3531.145, 3694.042, 3856.939, 4019.836, 4182.733, 4345.63, 4508.527, 4671.424, 4834.321, 4997.218, 5160.115, 5323.012, 5485.909, 5648.806, 5811.703, 5974.6, 6137.497, 6300.394, 6463.291, 6626.188, 6789.085, 6951.982, 7114.879, 7277.776, 7440.673, 7603.57, 7766.467, 7929.364, 8092.261, 8255.158, 8418.055, 8580.952, 8743.849, 8906.746, 9069.643, 9232.54, 9395.437, 9558.334, 9721.231, 9884.128, 10047.025, 10209.922, 10372.819, 10535.716, 10698.613, 10861.51, 11024.407, 11187.304, 11350.201, 11513.098, 11675.995, 11838.892, 12001.789, 12164.686, 12327.583, 12490.48, 12653.377, 12816.274, 12979.171, 13142.068, 13304.965, 13467.862, 13630.759, 13793.656, 13956.553, 14119.45, 14282.347, 14445.244, 14608.141, 14771.038, 14933.935, 15096.832, 15259.729, 15422.626, 15585.523, 15748.42, 15911.317, 16074.214, 16237.111, 16400.008, 16562.905, 16725.802, 16888.699, 17051.596, 17214.493, 17377.39, 17540.287, 17703.184, 17866.081, 18028.978, 18191.875, 18354.772, 18517.669, 18680.566, 18843.463, 19006.36, 19169.257, 19332.154, 19495.051, 19657.948, 19820.845, 19983.742, 20146.639, 20309.536, 20472.433, 20635.33, 20798.227, 20961.124, 21124.021, 21286.918, 21449.815 ]
	line [ 4059.94, 4120.69, 4182.34, 4244.92, 4308.44, 4372.90, 4438.33, 4504.74, 4572.14, 4640.55, 4709.99, 4780.46, 4851.99, 4924.58, 4998.27, 5073.06, 5148.96, 5226.00, 5304.20, 5383.56, 5464.11, 5545.87, 5628.85, 5713.07, 5798.55, 5885.31, 5973.37, 6062.75, 6153.46, 6245.53, 6338.98, 6433.83, 6530.10, 6627.80, 6726.97, 6827.62, 6929.78, 7033.47, 7138.71, 7245.52, 7353.93, 7463.96, 7575.64, 7689.00, 7804.04, 7920.81, 8039.32, 8159.61, 8281.70, 8405.62, 8531.39, 8659.04, 8788.60, 8920.10, 9053.56, 9189.03, 9326.52, 9466.07, 9607.70, 9751.46, 9897.36, 10045.45, 10195.76, 10348.31, 10503.15, 10660.30, 10819.81, 10981.70, 11146.01, 11312.78, 11482.05, 11653.85, 11828.22, 12005.20, 12184.83, 12367.15, 12552.19, 12740.00, 12930.62, 13124.10, 13320.47, 13519.78, 13722.07, 13927.38, 14135.77, 14347.28, 14561.95, 14779.83, 15000.97, 15225.43, 15453.24, 15684.46, 15919.13, 16157.32, 16399.08, 16644.45, 16893.49, 17146.26, 17402.81, 17663.20, 17927.49, 18195.73, 18467.98, 18744.31, 19024.77, 19309.43, 19598.34, 19891.58, 20189.21, 20491.29, 20797.89, 21109.08, 21424.93, 21745.50, 22070.86, 22401.10, 22736.28, 23076.47, 23421.75, 23772.20, 24127.89, 24488.90, 24855.32, 25227.21 ]
	%% linear: 162,897 * ano - 308090,816
	%% exponencial: =(0,000000002257)*e^(ano*0,01485166)

```

{% image_caption 'Linha vermelha: produção anual; linha azul: aproximação linear; linha verde: aproximação exponencial.' %}

<br/>

# Fontes e leituras interessantes

- [Universidade Federal do Paraná - Ajuste de Curva pelo Método dos
Quadrados Mínimos](https://docs.ufpr.br/~agnelo.vieira/MetodosNumericos/MMQ.pdf) ([backup](/assets/misc/aula_ufpr_mínimos_quadrados.pdf))
- [Wolfram MathWorld - Least Squares Fitting, Linear](https://mathworld.wolfram.com/LeastSquaresFitting.html) ([WebArchive](https://web.archive.org/web/20250228131909/https://mathworld.wolfram.com/LeastSquaresFitting.html))
- [Wolfram MathWorld - Least Squares Fitting, Exponential](https://mathworld.wolfram.com/LeastSquaresFittingExponential.html) ([WebArchive](https://web.archive.org/web/20250212183347/https://mathworld.wolfram.com/LeastSquaresFittingExponential.html))
- [Wolfram MathWorld - Least Squares Fitting, Power Law](https://mathworld.wolfram.com/LeastSquaresFittingPowerLaw.html) ([WebArchive](https://web.archive.org/web/20250212183356/https://mathworld.wolfram.com/LeastSquaresFittingPowerLaw.html))
- [Wolfram MathWorld - Least Squares Fitting, Logarithmic](https://mathworld.wolfram.com/LeastSquaresFittingLogarithmic.html) ([WebArchive](https://web.archive.org/web/20250212183349/https://mathworld.wolfram.com/LeastSquaresFittingLogarithmic.html))
- [MathJax - LaTeX renderer](https://www.mathjax.org/)
- [Our World In Data - Metals and Minerals](https://ourworldindata.org/metals-minerals)
- [Mining.com - World’s top 10 silver mines](https://www.mining.com/worlds-top-10-silver-mines/)
- Gráficos feitos com [Mermaid.js XY Charts](https://mermaid.live/).
