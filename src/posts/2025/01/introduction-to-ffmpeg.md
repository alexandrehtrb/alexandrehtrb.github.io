---
lang: en
langPtLink: ../introducao-ao-ffmpeg
title: Introduction to FFmpeg
date: 2025-01-13
excerpt: Learn through practical examples how to use FFmpeg to edit videos and audios.
published: true
enableMermaid: false
tags:
- in english
- video
- audio
- cheatsheet
---

## Introduction

Do you know that funny video on the Internet? Or the movie in the theatre? If you've watched any digital video over the last 15 years, there's a good chance that FFmpeg was involved at some point, whether for editing, playback, or distribution.

FFmpeg is a video and audio transformation software that is used by multimedia companies like YouTube, TikTok, Vimeo, and many others.

In this article, we'll learn how to use it through practical examples.

## Index

- [FFmpeg installation](#ffmpeg-installation)
- [Change file format](#change-file-format)
- [Extract audio from a video](#extract-audio-from-a-video)
- [Reduce file size](#reduce-file-size)
- [Cut part of a video](#cut-part-of-a-video)
- [Increase and decrease audio volume](#increase-and-decrease-audio-volume)
- [Resize frames](#resize-frames)
- [Insert subtitles](#insert-subtitles)
- [Add text on top of the video](#add-text-on-top-of-the-video)
- [Inspect metadata](#inspect-metadata)

## FFmpeg installation

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

- Install [Brew](https://brew.sh/).
- Execute on Terminal:

```sh
brew update
brew install ffmpeg
ffmpeg -version
```

### Windows

You can install via Winget (available for Windows 11, Windows Server 2025):

```ps1
winget install --id=Gyan.FFmpeg -e
```

Or install manually:

- Download the latest FFMpeg for Windows release ([link](https://github.com/GyanD/codexffmpeg/releases)). The `essentials` version is the most appropriate for most users.
- Unzip the file.
- Add the `bin` folder to PATH. For that:
  - On Windows Explorer, mouse right-click on *This Computer* > *Properties*.
  - On the next window, click on *Advanced system configurations*.
  - On *System Properties*, click on *Environment Variables...*.
  - On *User Variables for X*, select the line with **Path** and click on *Edit...*.
  - Add the bin folder path to the list. It will be something like: `C:\Users\user\Downloads\ffmpeg-7.0.1-essentials_build\bin` (change for the path in your machine).
  - Click OK on the windows to save the changes.

### How to use

- FFmpeg is used via Terminal, Command Prompt, or PowerShell. In your computer, open one of those programs.
- In the examples below, the file paths are specified without their folders, which implies the current folder in the command line. To change the current directory:

```ps1
cd C:\Users\user\Videos\
```

If the files are (or will be generated) in other folders, the full file path is required:

```ps1
ffmpeg -i "C:\Videos\input.mov" -c copy "C:\Videos\output.mp4"
```

<br/>

# Operations

## Change file format

Video file formats usually are just transport containers, whereas their content is determined by the codecs. Some video formats: `MP4`, `AVI`, `MKV`, `MOV`, `WebM`.

The most popular video codecs are:

- **H.264**, it's one of the oldest and is widely supported.
- **H.265**, more recent and has up to 50% smaller file sizes than H.264. However, some browsers and players do not support it.
- **AV1** is a newer codec. It has a royalty-free license and promises better compression than H.265, but FFmpeg doesn't support it very well yet (01/06/2025).
- **VP9**, used by YouTube and in `.webm` videos.

The main audio codecs are:

- **MP3**, widely supported, lossy, good compression, good quality.
- **AAC**, used in MP4, compression and quality a bit better than MP3.
- **Opus**, lossy with good quality.
- **FLAC**, lossless, but with compression.

File conversion keeping the codecs:

```ps1
ffmpeg -i input.mov -c copy output.mp4
```

File and codec conversion (transcoding):

- `-c:v`: video codec
- `-c:a`: audio codec
- `-b:a`: audio bitrate

```ps1
ffmpeg -i input.mov -c:v h264 -c:a libopus -b:a 96k output.mp4
```

## Extract audio from a video

Full extraction, keeping the codec:

- MP4 -> AAC or M4A
- MKV -> many codecs
- WebM -> Opus or Ogg Vorbis
- MOV -> ALAC

```ps1
ffmpeg -i input.mp4 -vn -c:a copy output.m4a
```

Extraction with transcoding. `-q:a` is the quality, from 0 to 9; lower means better.

```ps1
ffmpeg -i input.mp4 -vn -c:a libmp3lame -q:a 2 output.mp3
```

Audio extraction from part of the video. `-ss` is the beginning, `-to` is the end.

```ps1
ffmpeg -i input.mp4 -ss 00:00:07 -to 00:00:10.7 -vn -c:a libmp3lame -q:a 2 output.mp3
```

## Reduce file size

There are many ways to reduce the file size of a video. In this section, we'll cover compression.

To fully understand how it works, I recommend reading the codec official docs (such as: [H.264](https://trac.ffmpeg.org/wiki/Encode/H.264) and [H.265](https://trac.ffmpeg.org/wiki/Encode/H.265)).

**Limit with CRF.** The `-crf` flag, *Constant Rate Factor*, controls quality. Lower value means less compression and higher quality. The scale goes from 0 to 51, default value is 23.

```ps1
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -pix_fmt yuv420p -c:a copy output.mp4
```

> `-pix_fmt yuv420p` is necessary for compatibility with Apple QuickTime and some other players.

**Limit bitrate.** You can limit the bitrate, making the file size more predictable. This option can be combined with CRF. In the example below, the encoder aims to limit the maximum bitrate in 1Mbit/s.

```ps1
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -maxrate 1M -bufsize 2M -pix_fmt yuv420p -c:a copy output.mp4
```

**Transcode to more modern codecs.** H.265, for example, generates lower files sizes than H.264. CRF scale goes from 0 to 51, default value is 28. 

*Keep in mind that not every player and browser supports H.265.*

```ps1
ffmpeg -i input.mp4 -c:v libx265 -crf 28 -tag:v hvc1 -c:a copy output.mp4
```

> `-tag:v hvc1` is for compatibility with Apple QuickTime.

## Cut part of a video

```ps1
ffmpeg -ss 00:00:19.4 -to 00:03:50 -i input.mp4 -c copy output.mp4
```

## Increase and decrease audio volume

The example below increases the audio volume by 2.4 times.

To reduce it by half, use 0.5.

```ps1
ffmpeg -i input.mp4 -af "volume=2.4" output.mp4
```

## Resize frames

Fixed dimensions, width x height:

```ps1
ffmpeg -i input.mp4 -lavfi "scale='720:480'" output.mp4
```

One fixed dimension and the other proportional, to maintain the aspect ratio:

```ps1
ffmpeg -i input.mp4 -lavfi "scale='720:-2'" output.mp4
```

Proportional reduction:

```ps1
ffmpeg -i input.mp4 -lavfi "scale='floor(iw/4)*2:floor(ih/4)*2'" output.mp4
```

In the example above, the function `floor(d/4) * 2` was used to calculate half, because some codecs require dimensions to always be even numbers (divisible by 2).

## Insert subtitles

### Optional subtitles

Also known as soft subtitles, they are visible on the player with mouse right-click and selecting the subtitle.

More than one subtitle can be added, for example, for more than one language.

```ps1
ffmpeg -i input.mp4 -i subtitles.srt -c copy -c:s mov_text -metadata:s:s:0 language=eng output.mp4
```

### Burned subtitles

Hard or burned subtitles are imprinted over the video.

`subtitles.srt` is the subtitles file. `Alignment=2` means bottom center position.

```ps1
ffmpeg -i input.mp4 -lavfi "subtitles=subtitles.srt:force_style='Alignment=2,OutlineColour=&H100000000,BorderStyle=3,Outline=1,Shadow=0,Fontsize=18,MarginL=5,MarginV=25'" -crf 1 -c:a copy output.mp4
```

Example of result:

<video controls="controls" src="/assets/videos/posts/2025_01_ffmpeg_burned_subtitles.mp4"></video>

## Add text on top of the video

We will use `pad` and `drawtext`.

`pad` adds a layer around the video; in the example below, we'll make it black above the video. For that, we'll extend the frame height by 100 pixels and draw the layer between 0 and 100 on the vertical direction:

```ps1
# ih = input height
"pad=width=iw:height=(ih+100):x=0:y=100:color=black"
```

`drawtext` renders the text on the layer. Our text will have two lines, so we'll use it twice.

`x=(w-text_w)/2` centers the text horizontally. The `y` coordinate determines the line's vertical position.

```ps1
"drawtext=:font='Arial':text='Men′s Volleyball 2016 Olympics':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=25"

"drawtext=:font='Arial':text='BRA 3 - 0 ITA':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=54"
```
Command:

```ps1
ffmpeg -i input.mp4 -lavfi "format=yuv420p,pad=width=iw:height=(ih+100):x=0:y=100:color=black, drawtext=:font='Arial':text='Men′s Volleyball 2016 Olympics':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=25, drawtext=:font='Arial':text='BRA 3 - 0 ITA':fontsize=24:fontcolor=white:x=(w-text_w)/2:y=54" -c:v libx264 -crf 25 output.mp4
```

> `format=yuv420p` is necessary for compatibility with Apple QuickTime and some other players.

Example of result:

<video controls="controls" src="/assets/videos/posts/2025_01_ffmpeg_text_layer_on_top.mp4"></video>

## Inspect metadata

Details which codecs were used; video and audio resolution and bitrate; and other information.

```ps1
ffprobe video.mp4
```

<br/>

# Sources and interesting reads

- [007 GoldenEye - Bond and Xenia at the casino](https://www.youtube.com/watch?v=Oz8TYyn-k40) (all rights reserved)
- [Rio 2016 Olympics - Brazil wins gold medal match for men's volleyball](https://www.youtube.com/watch?v=KLIa2UaE2KE) (all rights reserved)
- [FFmpeg official site](https://ffmpeg.org/)
- [FFmpeg - Projects that use it](https://trac.ffmpeg.org/wiki/Projects)
- [Streaming Learning Center - YouTube uses FFmpeg for encoding](https://streaminglearningcenter.com/blogs/youtube-uses-ffmpeg-for-encoding.html)
- [TheirStack - List of companies using FFmpeg](https://theirstack.com/en/technology/ffmpeg)
- [FFmpeg - H.264 Video Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [FFmpeg - H.265/HEVC Video Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.265)
- [Unix Stack Exchange - How can I reduce a video's size with ffmpeg?](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg)
- [FFmpeg - Scaling](https://trac.ffmpeg.org/wiki/Scaling)
- [FFmpeg - Seeking](https://trac.ffmpeg.org/wiki/Seeking)
- [Super User - How to resize a video to make it smaller with FFmpeg](https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg)
- [What Hi-Fi? - MP3, AAC, WAV, FLAC: all the audio file formats explained](https://www.whathifi.com/advice/mp3-aac-wav-flac-all-the-audio-file-formats-explained)
- [Stack Overflow - ffmpeg subtitles alignment and position](https://stackoverflow.com/questions/57869367/ffmpeg-subtitles-alignment-and-position)
- [Subtitle Tools - Sync subtitles](https://subtitletools.com/subtitle-sync-shifter)

<script>
document.querySelectorAll("pre.shiki").forEach((block) => {
  block.classList.add("wrapped");
});
</script>