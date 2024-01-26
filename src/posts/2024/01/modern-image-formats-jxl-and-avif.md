---
title: >
  Modern image formats: JXL and AVIF
date: 2024-01-22
published: true
enableMermaid: false
tags:
- in english
- images
- graphics
---
Meet the next generation image formats, with superior graphics and reduced size in bytes.<!-- excerpt -->

[Ler em português](../formatos-de-imagem-modernos-jxl-avif)

## Computers, photography and images

The visualization of images is fundamental in many areas, such as arts, professional photography, cartography, astrophotography, diagnostic medicine, historic preservation and movies. The quality of the images is very important to highlight details, like an artistic touch, an imprecision or an element that is imperceptible at first sight.

On a computer screen, an image is represented by thousands of *pixels* (**pic**ture **el**ement), each *pixel* corresponding to a colour and its intensity. Consider an image of 1,024px x 768px = 768,432 *pixels*; if each pixel is RGBA and has 4 *bytes*, 1 for red, 1 for green, 1 for blue and 1 for transparency, this image will have a size of 3.1MB, which is quite large. However, by choosing proper compression techniques and file formats, we can have this image with the same quality and with a much lower file size.

{% asset_img '2024_01_hires_images_examples.jpg' 'Examples of high-resolution images' %}

## Newer formats

Around 2019, two new image file formats, JXL and AVIF, came to market promising lower disk usage and better preservation of details.

Both share characteristics like:

- Support for lossless and lossy compression at more efficient rates than previous formats, like JPEG and PNG, and with better quality retention.
- Support for animations and transparencies.
- Open-source and royalty-free licenses.

### JXL

JXL, or JPEG-XL, began in 2017 with a call for papers for a next-generation image format. The final proposal was the junction of two others: PIK, from Google, and FLIF, from Cloudinary.

### AVIF

AVIF is a format created by the Alliance for Open Media, an industry-consortium of companies like Netflix, Meta and Google, with the objective of forming standards for multimedia delivery. AVIF's first specification is from 2018.

## When should I use JXL?

JXL is better for:

- Images with high and extremely high resolution and level of details.
- When processing speed is important. JXL encoding is 5 to 10 times faster than AVIF's.
- Very high colour precision.
- Progressive decoding - the image can be rendered as it is downloaded. 
- Images with very high dimensions, because it supports sizes of over 1 billion x 1 billion pixels. AVIF supports images at most of 8K resolution (8193px x 4320px).

## When should I use AVIF?

AVIF is better for:

- Images in Web pages, because most of the browsers support AVIF (88%), while only few browsers support JXL (9,5%). Data obtained from [caniuse](https://caniuse.com/avif) (01/26/2024).
- Videos and animations, because it has excellent compression rates for them, over 90% in some cases. It's a great substitute for GIFs.

## Compression and performance tests

The original image below is a JPEG of 8192x5464, file size 10.982kB. In JXL format (q=90), the size is 7.344kB. In AVIF (q=90), is 8.312kB.

{% asset_img '2024_01_subway_escalators.jpg' 'Escalators in a subway station' %}

The original GIF below has a file size of 3.174kB. In JXL format (q=90), the size is 2.558kB. In AVIF (q=90), is 79kB. Impressive!

{% asset_img '2024_01_emilia_clarke.gif' 'Emilia Clarke' %}

This [GitHub repo](https://github.com/alexandrehtrb/jxl-avif-simple-benchmark) executes tests to compare compression rates and speeds of JXL and AVIF. The comparison is not qualitative, nor scientific. The input images include:

- Animated GIFs of high, medium and low complexity.
- JPEG photographies of medium, high and very high resolution.
- PNG and JPEG infographics, to evaluate compression of images with texts on them.

## Tools

There are websites on the Internet that can convert to AVIF and JXL. I personally recommend [ezgif](https://ezgif.com).

Most browsers support opening `.avif` files.

To view JXL, there is [GIMP](https://www.gimp.org/), [Irfanview](https://www.irfanview.com/) and [other programs](https://github.com/libjxl/libjxl/blob/main/doc/software_support.md).

### Conversion to `.jxl`

To convert an image to JXL, using the [official tool](https://github.com/libjxl/libjxl):

```bash
cjxl input_image.jpg output_image.jxl -q 90 --lossless_jpeg=0
```

### Conversion to `.avif`

There are two main tools: [cavif-rs](https://github.com/kornelski/cavif-rs) and [ffmpeg](https://ffmpeg.org/). `cavif-rs` currently doesn't support GIFs, so we need to use `ffmpeg` for them.

To convert a static image to AVIF, using cavif-rs:

```bash
cavif input_image.jpg -o output_image.avif -Q 90 -f
```

To convert a GIF to AVIF using ffmpeg, you will also need [libavif](https://github.com/AOMediaCodec/libavif).

```bash
# sudo apt install ffmpeg
# sudo apt install libavif-bin

# first, from .gif to .y4m
ffmpeg -i input.gif -pix_fmt yuv420p -f yuv4mpegpipe temp.y4m

# then, from .y4m to .avif
avifenc temp.y4m output.avif
```

## HTML rendering with fallback

If you want to use these new formats, but also want to guarantee compatibility with older web browsers, you can use the HTML `<picture>` tag.

```html
<html>
  <head>
    <title>Animated AVIF Example</title>
  </head>
  <body>
    <picture>
      <source type="image/avif" srcset="my_animation.avif" />
      <img src="my_animation.gif" />
    </picture>
  </body>
</html>
```

If the browser supports, it will first try to load the picture in AVIF format. If it doesn't support, then will load the picture in GIF format. The web page will load much faster when AVIF is supported.

The logic is the same for JXl, only the MIME type changes to `image/jxl`.

There is a [more thorough tutorial](https://codelabs.developers.google.com/codelabs/avif#5) made by Google.

## Read more

[JPEG XL vs AVIF: A Comparison](https://tonisagrista.com/blog/2023/jpegxl-vs-avif/) ([WebArchive](https://web.archive.org/web/20240121144338/https://tonisagrista.com/blog/2023/jpegxl-vs-avif/))

[Image formats comparison](https://eclipseo.github.io/image-comparison-web/#adventure-with-the-windmills*1:1&AOM_3.1.1=s&JXL_20210715=s&subset1)

[What’s the best lossless image format? Comparing PNG, WebP, AVIF, and JPEG XL](https://siipo.la/blog/whats-the-best-lossless-image-format-comparing-png-webp-avif-and-jpeg-xl) ([WebArchive](https://web.archive.org/web/20240121174347/https://siipo.la/blog/whats-the-best-lossless-image-format-comparing-png-webp-avif-and-jpeg-xl))

[How to compare images fairly](https://kornel.ski/en/faircomparison) ([WebArchive](https://web.archive.org/web/20240126200642/https://kornel.ski/en/faircomparison))

[How JPEG XL Compares to Other Image Codecs](https://cloudinary.com/blog/how_jpeg_xl_compares_to_other_image_codecs) ([WebArchive](https://web.archive.org/web/20240121174134/https://cloudinary.com/blog/how_jpeg_xl_compares_to_other_image_codecs))

## Images used in this article

* Galaxy: [Unsplash](https://unsplash.com/photos/black-hole-galaxy-illustration-Oze6U2m1oYU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)
* Dental radiography: [Unsplash](https://unsplash.com/photos/teeth-x-ray-KeVKEs1_RDU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)
* Subway escalators: [Unsplash](https://unsplash.com/photos/an-underground-subway-station-with-escalators-and-stairs-hLIi1IU5IU0)
