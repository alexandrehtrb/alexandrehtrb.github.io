---
lang: pt
langEnLink: ../introduction-to-ffmpeg
title: Introdução ao FFmpeg
date: 2025-01-13
excerpt: Aprenda com exemplos práticos como usar o FFmpeg para editar vídeos e áudios.
published: true
enableMermaid: false
tags:
- em português
- video
- audio
- cheatsheet
---

## Introdução

Sabe aquele vídeo engraçado que você viu na Internet? Ou o filme que assistiu no cinema? Se você assistiu um vídeo digital nos últimos 15 anos, há grandes chances de ele ter passado pelo FFmpeg em algum momento, seja para edição, reprodução ou distribuição.

O FFmpeg é um programa de transformação de vídeo e áudio que é usado por diversas empresas de multimídia, como YouTube, TikTok e Vimeo.

Neste artigo, vamos aprender como usá-lo, através de exemplos práticos.

## Índice

- [Instalação do FFmpeg](#instalação-do-ffmpeg)
- [Mudar formato do arquivo](#mudar-formato-do-arquivo)
- [Extrair áudio de um vídeo](#extrair-áudio-de-um-vídeo)
- [Diminuir tamanho do arquivo](#diminuir-tamanho-do-arquivo)
- [Cortar trecho do vídeo](#cortar-trecho-do-vídeo)
- [Aumentar e diminuir volume de som](#aumentar-e-diminuir-volume-de-som)
- [Redimensionar *frames*](#redimensionar-frames)
- [Inserir legendas](#inserir-legendas)
- [Colocar texto em cima do vídeo](#colocar-texto-em-cima-do-vídeo)
- [Inspecionar metadados](#inspecionar-metadados)

## Instalação do FFmpeg

### Linux

Debian / Ubuntu:

```sh
sudo apt update
sudo apt install ffmpeg
ffmpeg -version
```

Fedora:

```sh
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
sudo dnf upgrade --refresh
sudo dnf install ffmpeg --allowerasing
sudo dnf install ffmpeg-devel --allowerasing
ffmpeg -version
```

Arch Linux:

```sh
sudo pacman -Sy 
sudo pacman -S ffmpeg 
ffmpeg -version
```

### macOS

- Instalar o [Brew](https://brew.sh/).
- Executar no Terminal:

```sh
brew update
brew install ffmpeg
ffmpeg -version
```

### Windows

Você pode instalar via Winget (disponível para Windows 11, Windows Server 2025):

```ps1
winget install --id=Gyan.FFmpeg -e
```

Ou instalar manualmente:

- Baixar a versão mais recente do FFmpeg para Windows ([link](https://github.com/GyanD/codexffmpeg/releases)). A versão `essentials` é a mais indicada para a maioria dos usuários.
- Descompactar o zip baixado.
- Adicionar o caminho da pasta `bin` ao PATH. Para isto:
  - No Windows Explorer, clicar com o botão direito do mouse em *Este Computador* > *Propriedades*.
  - Na janela que se abriu, clicar em *Configurações avançadas do sistema*.
  - Em *Propriedades do sistema*, clicar em *Variáveis de Ambiente...*.
  - Em *Variáveis de usuário para X*, selecionar a linha com **Path** e clicar em *Editar...*.
  - Adicionar o caminho da pasta na lista. Vai ser algo como: `C:\Users\usuario\Downloads\ffmpeg-7.0.1-essentials_build\bin` (alterar para o caminho na sua máquina).
  - Clicar em OK nas janelas para salvar as alterações.

### Como usar

- O FFmpeg é usado via Terminal, Prompt de Comando ou PowerShell. No seu computador, abra um desses programas.
- Nos exemplos, os arquivos são especificados sem a pasta, o que implica a pasta atual da linha de comando. Para mudar o diretório atual:

```ps1
cd C:\Users\usuario\Videos\
```

- Se os arquivos estão (ou serão gerados) em outras pastas, é necessário passar o caminho completo do arquivo, por exemplo:

```ps1
ffmpeg -i "C:\Vídeos\entrada.mov" -c copy "C:\Vídeos\saida.mp4"
```

<br/>

# Operações

## Mudar formato do arquivo

Os formatos de vídeo geralmente são apenas contêineres de transporte, sendo que o conteúdo em si é determinado pelos codecs. Exemplos de contêineres: `MP4`, `AVI`, `MKV`, `MOV`, `WebM`.

Os codecs de vídeo mais populares são: 

- **H.264**, é o mais antigo e com maior suporte de plataformas.
- **H.265**, é mais recente e resulta em tamanho até 50% menor do que o H.264, porém, alguns navegadores Web e players não têm compatibilidade com ele.
- **AV1** é um codec novo. Ele tem licença de uso livre e promete compressão mais rápida e melhor do que o H.265, entretanto, o FFmpeg não o suporta plenamente ainda (06/01/2025).
- **VP9**, usado em vídeos `.webm` e pelo YouTube.

Os principais codecs de áudio são:

- **MP3**, amplamente suportado, tem boa compressão e poucas perdas (*lossy*).
- **AAC**, usado no MP4, tem compressão e qualidade um pouco melhores do que o MP3.
- **Opus**, *lossy* com boa qualidade.
- **FLAC**, é um codec com compressão sem perdas (*lossless*).

Conversão de formato mantendo os codecs:

```ps1
ffmpeg -i entrada.mov -c copy saida.mp4
```

Conversão de formato e de codecs (*transcoding*).

- `-c:v`: codec de vídeo
- `-c:a`: codec de áudio
- `-b:a`: *bitrate* do áudio

```ps1
ffmpeg -i entrada.mov -c:v h264 -c:a libopus -b:a 96k saida.mp4
```

## Extrair áudio de um vídeo

Extração total, mantendo o codec de áudio:

- MP4 -> AAC ou M4A
- MKV -> diversos
- WebM -> Opus ou Ogg Vorbis
- MOV -> ALAC

```ps1
ffmpeg -i entrada.mp4 -vn -c:a copy saida.m4a
```

Extração com *transcoding* (mudança de codec). `-q:a` é a qualidade, de 0 a 9; quanto menor, melhor a qualidade.

```ps1
ffmpeg -i entrada.mp4 -vn -c:a libmp3lame -q:a 2 saida.mp3
```

Extração do áudio de um trecho do vídeo. `-ss` é o início, `-to` é o fim.

```ps1
ffmpeg -i entrada.mp4 -ss 00:00:07 -to 00:00:10.7 -vn -c:a libmp3lame -q:a 2 saida.mp3
```

## Diminuir tamanho do arquivo

Existem várias formas de se reduzir o tamanho de um vídeo. Nesta seção, abordaremos compressão.

Para entender a fundo o funcionamento, recomendo ler a documentação oficial dos codecs (exemplos: [H.264](https://trac.ffmpeg.org/wiki/Encode/H.264) e [H.265](https://trac.ffmpeg.org/wiki/Encode/H.265)).

**Limitar com CRF.** A flag `-crf`, *Constant Rate Factor*, controla a qualidade e valor menor significa menos compressão e mais qualidade. A escala é de 0 a 51, valor padrão 23.

```ps1
ffmpeg -i entrada.mp4 -c:v libx264 -crf 23 -pix_fmt yuv420p -c:a copy saida.mp4
```

> `-pix_fmt yuv420p` é necessário para compatibilidade com o Apple QuickTime e alguns outros players.

**Limitar o *bitrate*.** Pode-se colocar um limite no *bitrate* do vídeo, tornando seu tamanho mais previsível. Essa opção pode ser combinada com o CRF. No exemplo abaixo, o encoder procura limitar o bitrate máximo em 1Mbit/s.

```ps1
ffmpeg -i entrada.mp4 -c:v libx264 -crf 23 -maxrate 1M -bufsize 2M -pix_fmt yuv420p -c:a copy saida.mp4
```

**Transcodar para codecs mais modernos.** O H.265, por exemplo, produz arquivos menores do que o H.264. A escala do CRF aqui é de 0 a 51, com valor padrão 28. 

*Deve-se lembrar que não são todos os navegadores e players que suportam H.265.*

```ps1
ffmpeg -i entrada.mp4 -c:v libx265 -crf 28 -tag:v hvc1 -c:a copy saida.mp4
```

> `-tag:v hvc1` é para o vídeo gerado ter compatibilidade com o Apple QuickTime.

## Cortar trecho do vídeo

```ps1
ffmpeg -i entrada.mp4 -ss 00:00:19.4 -to 00:03:50 -c copy saida.mp4
```

Os parâmetros de tempo podem ser colocados antes ou depois do parâmetro de entrada.

Colocados antes (`-ss -to -i`), resulta-se em uma operação mais rápida pois o corte é na entrada, que depois é processada; porém, o corte pode ser impreciso e pode haver dissincronia entre o áudio e o vídeo.

Colocados depois (`-i -ss -to`), o corte é mais preciso e não há risco de dissincronia; contudo, a operação é mais lenta porque o corte é na saída, após todo o processamento do vídeo.

Em dúvida, pode-se experimentar primeiro o corte na entrada (primeira opção) e ver o resultado; se o resultado não for correto, então partir para o corte na saída (segunda opção).

## Aumentar e diminuir volume de som

O exemplo abaixo aumenta o volume em 2,4 vezes.

Para reduzir à metade, valor 0,5 (usar ponto ao invés de vírgula).

```ps1
ffmpeg -i entrada.mp4 -af "volume=2.4" saida.mp4
```

## Redimensionar *frames*

Dimensões fixas, largura por altura:

```ps1
ffmpeg -i entrada.mp4 -lavfi "scale='720:480'" saida.mp4
```

Uma dimensão fixada e a outra proporcional, para manter o aspecto:

```ps1
ffmpeg -i entrada.mp4 -lavfi "scale='720:-2'" saida.mp4
```

Redução por proporções:

```ps1
ffmpeg -i entrada.mp4 -lavfi "scale='floor(iw/4)*2:floor(ih/4)*2'" saida.mp4
```

No exemplo acima, usou-se a função `floor(d/4) * 2` para calcular a metade porque alguns codecs requerem que as dimensões sejam sempre números pares.

## Inserir legendas

### Legendas opcionais

Também chamadas de legendas *soft*, aparecem ao clicar com o botão direito do mouse no player e escolher a legenda. Mais de uma pode ser adicionada, por exemplo, para mais de um idioma.

```ps1
ffmpeg -i entrada.mp4 -i legendas.srt -c copy -c:s mov_text -metadata:s:s:0 language=eng saida.mp4
```

### Legendas fixas

Também chamadas de legendas *hard* ou *burned*.

`legendas.srt` é o arquivo de legendas. `Alignment=2` significa posição centro inferior.

```ps1
ffmpeg -i entrada.mp4 -lavfi "subtitles=legendas.srt:force_style='Alignment=2,OutlineColour=&H100000000,BorderStyle=3,Outline=1,Shadow=0,Fontsize=18,MarginL=5,MarginV=25'" -crf 1 -c:a copy saida.mp4
```

Exemplo de resultado:

<video controls="controls" src="/assets/videos/posts/2025_01_ffmpeg_burned_subtitles.mp4"></video>

## Colocar texto em cima do vídeo

Usaremos o `pad` e o `drawtext`.

O `pad` coloca uma camada ao redor do vídeo; no exemplo abaixo, faremos de côr preta em cima do vídeo. Para isso, estenderemos a altura do frame em 100 e desenharemos a camada entre 0 e 100 na direção vertical:

```ps1
# ih = input height
"pad=width=iw:height=(ih+100):x=0:y=100:color=black"
```

O `drawtext` desenhará o texto na camada. Nosso texto terá duas linhas, então, usaremos ele duas vezes.

`x=(w-text_w)/2` centraliza horizontalmente o texto. A coordenada `y` determina a posição vertical da linha.

```ps1
"drawtext=:font='Arial':text='Men′s Volleyball 2016 Olympics':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=25"

"drawtext=:font='Arial':text='BRA 3 - 0 ITA':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=54"
```
Comando:

```ps1
ffmpeg -i entrada.mp4 -lavfi "format=yuv420p,pad=width=iw:height=(ih+100):x=0:y=100:color=black, drawtext=:font='Arial':text='Men′s Volleyball 2016 Olympics':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=25, drawtext=:font='Arial':text='BRA 3 - 0 ITA':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=54" -c:v libx264 -crf 25 saida.mp4
```

> `format=yuv420p` é necessário para compatibilidade com Apple QuickTime e alguns outros players.

Exemplo de resultado:

<video controls="controls" src="/assets/videos/posts/2025_01_ffmpeg_text_layer_on_top.mp4"></video>

## Inspecionar metadados

Detalha quais codecs foram usados, resolução e *bitrate* do áudio e do vídeo, dentre outras informações.

```ps1
ffprobe video.mp4
```

<br/>

# Fontes e links interessantes

- [007 GoldenEye - Bond e Xenia no cassino](https://www.youtube.com/watch?v=Oz8TYyn-k40) (todos os direitos reservados)
- [Olimpíadas Rio 2016 - Brasil conquista o ouro no vôlei masculino](https://www.youtube.com/watch?v=KLIa2UaE2KE) (todos os direitos reservados)
- [Site oficial do FFmpeg](https://ffmpeg.org/)
- [FFmpeg - Projetos que o usam](https://trac.ffmpeg.org/wiki/Projects)
- [Streaming Learning Center - YouTube uses FFmpeg for encoding](https://streaminglearningcenter.com/blogs/youtube-uses-ffmpeg-for-encoding.html)
- [TheirStack - List of companies using FFmpeg](https://theirstack.com/en/technology/ffmpeg)
- [FFmpeg - H.264 Video Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [FFmpeg - H.265/HEVC Video Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.265)
- [Unix Stack Exchange - How can I reduce a video's size with ffmpeg?](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg)
- [FFmpeg - Scaling](https://trac.ffmpeg.org/wiki/Scaling)
- [FFmpeg - Seeking](https://trac.ffmpeg.org/wiki/Seeking)
- [Stack Overflow - FFmpeg -ss weird behaviour](https://stackoverflow.com/questions/6984628/ffmpeg-ss-weird-behaviour)
- [Super User - How to resize a video to make it smaller with FFmpeg](https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg)
- [Tribuna de Jundiaí - FLAC, AAC, Opus e MP3: entenda as diferenças entre os arquivos de áudio](https://tribunadejundiai.com.br/mais/inovacao/flac-aac-opus-e-mp3-entenda-as-diferencas-entre-os-arquivos-de-audio/)
- [Stack Overflow - ffmpeg subtitles alignment and position](https://stackoverflow.com/questions/57869367/ffmpeg-subtitles-alignment-and-position)
- [Subtitle Tools - Sync subtitles](https://subtitletools.com/subtitle-sync-shifter)

<script>
document.querySelectorAll("pre.shiki").forEach((block) => {
  block.classList.add("wrapped");
});
</script>