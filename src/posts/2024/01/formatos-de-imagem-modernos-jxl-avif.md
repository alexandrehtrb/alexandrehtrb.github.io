---
title: >
  Formatos de imagem modernos: JXL e AVIF
date: 2024-01-22
published: true
enableMermaid: false
tags:
- em português
- images
- graphics
---
Conheça os formatos de imagem de última geração, com qualidade gráfica superior e tamanho em bytes reduzido.<!-- excerpt -->

[Read in english](../modern-image-formats-jxl-and-avif)

## Computação, fotografia e imagens

A visualização de imagens é fundamental em vários setores, como artes plásticas, fotografias profissionais, cartografia, astrofotografia, medicina diagnóstica, preservações históricas e cinema. A qualidade das imagens é muito importante para se notar detalhes, como um toque artístico, uma imprecisão ou um elemento imperceptível à primeira vista.

Em uma tela de computador, uma imagem é representada por milhares de *pixels* (**pic**ture **el**ement), cada *pixel* correspondendo a uma cor e sua intensidade. Considere uma imagem de tamanho 1.024px x 768px = 786.432 *pixels*; se cada pixel for RGBA e tiver 4 *bytes*, 1 para vermelho, 1 para verde, 1 para azul e 1 para transparência, essa imagem terá um tamanho de 3,1MB, o que é bastante alto. Contudo, escolhendo técnicas de compressão e um formato de arquivo adequados, podemos ter essa imagem com a mesma qualidade e ocupando muito menos espaço em memória.

{% asset_img '2024_01_hires_images_examples.jpg' 'Exemplos de imagens de alta resolução' %}

## Novos formatos

Por volta de 2019, surgiram no mercado dois novos formatos de imagem, o JXL e o AVIF, prometendo menor consumo de memória em disco e maior preservação de detalhes.

Ambos compartilham como características:

- Compressão com perdas (*lossy compression*), ou sem perdas (*lossless compression*), mais eficiente do que formatos predecessores, como o JPEG e PNG, e retendo alta definição.
- Suporte a animações e transparências.
- *Open-source* e licença livre de *royalties*.

### JXL

O JXL, ou JPEG-XL, começou em 2017 com uma chamada de propostas para um formato de imagem de nova geração. A proposta final foi a junção de duas outras: a PIK, do Google, e a FLIF, da Cloudinary.

### AVIF

O AVIF é um formato criado pela Alliance for Open Media, um consórcio de várias empresas de tecnologia, como a Netflix, Meta e Google, com o objetivo de formar padrões de mercado para mídia digital. A primeira especificação do AVIF é de 2018.

## Quando devo usar o JXL?

O JXL é melhor para:

- Imagens de alta e extrema alta resolução e nível de detalhes.
- Situações em que a velocidade de processamento é importante. O *encoding* do JXL é de 5 a 10 vezes mais rápido do que o AVIF.
- Altíssima precisão de côres.
- *Decoding* progressivo - a imagem pode ser visualizada conforme é baixada.
- Imagens de dimensões muito grandes, pois suporta tamanhos de mais de 1 bilhão x 1 bilhão de pixels. O AVIF suporta imagens em no máximo 8K (8193px x 4320px).

## Quando devo usar o AVIF?

O AVIF é melhor para:

- Imagens em páginas Web, pois a maioria dos navegadores suporta AVIF (88%), enquanto que poucos navegadores suportam JXL (9,5%). Dados obtidos pelo [caniuse](https://caniuse.com/avif) (26/01/2024).
- Vídeos e animações, pois tem excelente taxa de compressão para eles, acima de 90% em alguns casos. É um ótimo substituto aos GIFs.

## Testes de compressão e performance

Exemplos:

A imagem original abaixo é um JPG de dimensões 8192x5464, com tamanho de 11MB. Em formato JXL (q=90), o tamanho ficou em 7,3MB. Em AVIF (q=90), ficou em 8,3MB.

{% asset_img '2024_01_subway_escalators.jpg' 'Escadas-rolantes de uma estação de metrô' %}

O GIF original abaixo tem tamanho de 3,1MB. Em formato JXL (q=90), o tamanho ficou em 2,5MB. Em AVIF (q=90), ficou em 79kB. Impressionante!

<picture class="my-4">
  <source type="image/avif" srcset="/assets/img/posts/2024_01_emilia_clarke.avif" alt="Emilia Clarke" />
  <img src="/assets/img/posts/2024_01_emilia_clarke.gif" alt="Emilia Clarke" />
</picture>

Este repositório no GitHub ([link](https://github.com/alexandrehtrb/jxl-avif-simple-benchmark)) executa testes para comparar as velocidades e taxas de compressão do JXL e do AVIF. A comparação não é qualitativa, nem científica. Como imagens de entrada, estão:

- GIFs animados de alta, média e baixa complexidade.
- Fotografias em JPEG de média, alta e altíssima resolução.
- Infográficos em PNG e JPEG, para avaliar a compressão de imagens com textos.

## Ferramentas

Existem sites na internet que podem fazer conversões para AVIF e JXL. Eu recomendo o [ezgif](https://ezgif.com).

A maioria dos navegadores suporta abrir arquivos `.avif`.

Para visualizar JXL, há o [GIMP](https://www.gimp.org/), o [Irfanview](https://www.irfanview.com/) e [outros programas](https://github.com/libjxl/libjxl/blob/main/doc/software_support.md).

### Conversão para `.jxl`

Para converter uma imagem para JXL, usando a [ferramenta oficial](https://github.com/libjxl/libjxl):

```bash
cjxl img_entrada.jpg img_saida.jxl -q 90 --lossless_jpeg=0
```

### Conversão para `.avif`

Há duas ferramentas principais: o [cavif-rs](https://github.com/kornelski/cavif-rs) e o [ffmpeg](https://ffmpeg.org/). O cavif-rs atualmente não suporta GIFs, então para estes devemos usar o ffmpeg.

Para converter uma imagem estática para AVIF, usando o cavif-rs:

```bash
cavif img_entrada.jpg -o img_saida.avif -Q 90 -f
```

Para converter uma GIF para AVIF usando o ffmpeg, você precisará também da [libavif](https://github.com/AOMediaCodec/libavif).

```bash
# sudo apt install ffmpeg
# sudo apt install libavif-bin

# primeiro, converter de .gif para .y4m
ffmpeg -i entrada.gif -pix_fmt yuv420p -f yuv4mpegpipe temp.y4m

# depois, de .y4m para .avif
avifenc temp.y4m saida.avif
```

## Exibição em HTML com *fallback*

Se você quer usar esses novos formatos, mas quer garantir compatibilidade com navegadores Web mais antigos, você pode usar a tag HTML `<picture>`.

```html
<html>
  <head>
    <title>Animated AVIF Example</title>
  </head>
  <body>
    <picture>
      <source type="image/avif" srcset="minha_animacao.avif" />
      <img src="minha_animacao.gif" />
    </picture>
  </body>
</html>
```

Se o navegador tiver suporte, tentará primeiro carregar a imagem em formato AVIF. Se não tiver suporte, então carregará a imagem em formato GIF. A página carregará muito mais rápida quando suportar AVIF.

A lógica é a mesma para JXL, só alterar o MIME type para `image/jxl`.

A animação abaixo está dentro de uma tag `<picture>`. Se seu browser suportar, será um AVIF, senão, será um GIF. Você pode conferir a extensão salvando o arquivo.

<picture class="my-4">
  <source type="image/avif" srcset="/assets/img/posts/2024_01_curtains.avif" alt="Cortinas balançando com o vento" />
  <img src="/assets/img/posts/2024_01_curtains.gif" alt="Cortinas balançando com o vento" />
</picture>

## Para ler mais

[JPEG XL vs AVIF: A Comparison](https://tonisagrista.com/blog/2023/jpegxl-vs-avif/) ([WebArchive](https://web.archive.org/web/20240121144338/https://tonisagrista.com/blog/2023/jpegxl-vs-avif/))

[Image formats comparison](https://eclipseo.github.io/image-comparison-web/#adventure-with-the-windmills*1:1&AOM_3.1.1=s&JXL_20210715=s&subset1)

[What’s the best lossless image format? Comparing PNG, WebP, AVIF, and JPEG XL](https://siipo.la/blog/whats-the-best-lossless-image-format-comparing-png-webp-avif-and-jpeg-xl) ([WebArchive](https://web.archive.org/web/20240121174347/https://siipo.la/blog/whats-the-best-lossless-image-format-comparing-png-webp-avif-and-jpeg-xl))

[How to compare images fairly](https://kornel.ski/en/faircomparison) ([WebArchive](https://web.archive.org/web/20240126200642/https://kornel.ski/en/faircomparison))

[How JPEG XL Compares to Other Image Codecs](https://cloudinary.com/blog/how_jpeg_xl_compares_to_other_image_codecs) ([WebArchive](https://web.archive.org/web/20240121174134/https://cloudinary.com/blog/how_jpeg_xl_compares_to_other_image_codecs))

[The Current Role of Image Compression Standards in Medical Imaging](https://www.mdpi.com/2078-2489/8/4/131) ([WebArchive](https://web.archive.org/web/20240126221119/https://www.mdpi.com/2078-2489/8/4/131))

[Serving AVIF images codelab](https://codelabs.developers.google.com/codelabs/avif#0)

## Fontes das imagens

* Galáxia: [Unsplash](https://unsplash.com/photos/black-hole-galaxy-illustration-Oze6U2m1oYU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)
* Radiografia dental: [Unsplash](https://unsplash.com/photos/teeth-x-ray-KeVKEs1_RDU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)
* Escadas-rolantes na estação de metrô: [Unsplash](https://unsplash.com/photos/an-underground-subway-station-with-escalators-and-stairs-hLIi1IU5IU0)
