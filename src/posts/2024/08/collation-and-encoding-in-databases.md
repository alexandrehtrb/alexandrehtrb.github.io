---
title: Collation and encoding in databases
date: 2024-08-29
published: true
enableMermaid: false
tags:
- in english
- architecture
- sql
- sql server
---
Understand better the concepts of collation and encoding.<!-- excerpt -->

[Ler em português](../collation-e-encoding-em-bancos-de-dados)

## Introduction

Every information in a computer is stored and processed in its binary number representation.

But what about texts? A text is a sequence of characters, a character being a letter or a symbol. Each character is represented by a binary number and the character-number mapping is called **encoding**.

The table below is for Windows-1252 encoding, which addresses 255 possible characters, each represented by one byte. You can see this table on Windows Character Map (Win+R, `charmap`).

{% asset_img '2024_08_windows_1252_table.gif' 'Windows-1252 encoding table' %}

The **collation** is the ordering and comparison rule for texts. It also determines which encoding is used.

On Microsoft SQL Server, in the collation's name, CI / CS means case (in)sensitive; AI / AS, accent (in)sensitive.

With a case-insensitive (CI) collation, for example, searching for either `João da Silva` or `joão da silva` yields the same results.

```sql
SELECT
  [Name],
  COLLATIONPROPERTY( [Name], 'LCID' ) AS [LCID],
  COLLATIONPROPERTY( [Name], 'CodePage' ) AS [CodePage]
FROM sys.fn_helpcollations()
ORDER BY [Name];
```

| Name | Encoding | Considers casing in comparisons | Considers accents in comparisons |
|:-:|:-:|:-:|:-:|
| Latin1_General_<br>CI_AS | Windows-1252 | No | Yes |
| Latin1_General_<br>100_CI_AS_<br>KS_SC_UTF8 | UTF-8<br>(code page 65001) | No | Yes |
| Latin1_General_<br>100_CS_AS_<br>KS_SC_UTF8 | UTF-8<br>(code page 65001) | Yes | Yes |

## Unicode, UTF-8 and UTF-16

Unicode is a table that defines a number for each character, covering symbols, digits and letters from many languages. The number attributed to a character is called **code point**.

UTF-8 and UTF-16 are encodings that follow Unicode. Basically, they are ways of storing these numbers in bytes.

UTF-16 uses 2 bytes for most chars and 4 for those above the standard range. This encoding is used in the strings of most programming languages.

UTF-8 uses a variable number of bytes, starting at 1 and up to 4 for a char. It's the main encoding on the Internet.

| Unicode range | Groups | No. of bytes per char w/ UTF-8 | No. of bytes per char w/ UTF-16 |
|:-:|:-:|:-:|:-:|
| 0x0000 - 0x007F | Basic latin alphabet, arabic digits (0-9), basic keyboard symbols | 1 | 2 |
| 0x0080 - 0x07FF | Extended latin alphabet, greek, cyrillic, arabic, hebrew | 2 | 2 |
| 0x0800 - 0xFFFF | Japanese and chinese ideograms; varied symbols; math operators | 3 | 2 |
| 0x010000 - 0x10FFFF | Ancient writing pictograms (e.g. egyptian hieroglyphs); emojis; musical symbols | 4 | 4 |

The choice of encoding directly affects the size of text storage. If most characters lie in the basic latin range, UTF-8 is better, because it uses fewer bytes than UTF-16; however, if it's an asian text, UTF-16 is the best, because each character occupies 2 bytes, instead of 3 on UTF-8.

The table below shows how an Unicode number is converted to UTF-8 or UTF-16.

| Unicode range | Example character | Code point, in binary | In UTF-8 | In UTF-16 |
|:-:|:-:|:-:|:-:|:-:|
| 0x0000 - 0x007F | **P** (0x0050) | 00110010 | 00110010 | 00000000 00110010 |
| 0x0080 - 0x07FF | **Ω** (0x03A9) | 00000<span style="color:green">011</span> <span style="color:red">1010</span><span style="color:purple">1001</span> | **110<span style="color:green">011</span></span><span style="color:red">10</span> 10<span style="color:red">10</span><span style="color:purple">1001</span>** | 00000011 10101001 |
| 0x0800 - 0xFFFF | **€** (0x20AC) | <span style="color:blue">0010</span><span style="color:green">0000</span> <span style="color:red">1010</span><span style="color:purple">1100</span> | **1110<span style="color:blue">0010</span> 10<span style="color:green">0000</span><span style="color:red">10</span> 10<span style="color:red">10</span><span style="color:purple">1100</span>** | 00100000 10101100 |
| 0x010000 - 0x10FFFF | 🐎 (0x1F40E) | 000<span style="color:SeaGreen">0</span><span style="color:sienna">0001</span> <span style="color:blue">1111</span><span style="color:green">0100</span> <span style="color:red">0000</span><span style="color:purple">1110</span> | **11110<span style="color:SeaGreen">0</span><span style="color:sienna">00</span> 10<span style="color:sienna">01</span><span style="color:blue">1111</span> 10<span style="color:green">0100</span><span style="color:red">00</span> 10<span style="color:red">00</span><span style="color:purple">1110</span>** | **110110<span style="color:mediumvioletred">00</span> <span style="color:mediumvioletred">00</span><span style="color:blue">1111</span><span style="color:green">01</span> 110111<span style="color:green">00</span> <span style="color:red">0000</span><span style="color:purple">1110</span>** |

The logic for UTF-16 code points above 0x010000 is:

```
U = code point
W1 = 2 upper bytes
W2 = 2 lower bytes

W = U - 0x10000 
W = yyyyyyyyyyxxxxxxxxxx (20 binary digits)
W1 = 110110yy yyyyyyyy
W2 = 110111xx xxxxxxxx

-> there is no risk of W1 and W2 being mistaken for 
other characters because the possible interval for them 
is protected on the Unicode table.
```

## Texts in SQL databases

CHAR and NCHAR store fixed-size texts; VARCHAR and NVARCHAR store variable-sized texts.

NCHAR and NVARCHAR are types present on SQL Server and the 'N' indicates that they store text in UTF-16 encoding. CHAR and VARCHAR, on the other hand, store according to the encoding of the database's collation.

The storage size is specified on the column type declaration, such as `NVARCHAR(n)`. *Many people think that n is the number of characters, but that is not true.* For CHAR and VARCHAR, n defines the size in bytes; for NCHAR and NVARCHAR, n is the size in byte-pairs (x2).

### Practical example

Let's have two databases, one with the Latin1_General_CI_AS collation (Windows-1252 encoding) and another with Latin1_General_100_CI_AS_KS_SC_UTF8 collation (UTF-8 encoding). For each of them, we will compare the storage sizes between VARCHAR and NVARCHAR, for texts in basic and extended latin alphabet, greek and emojis. Below, the script to run:

```sql
CREATE TABLE [dbo].[Person] (
  [Name] VARCHAR(24) NOT NULL,
  [NameUtf16] NVARCHAR(24) NOT NULL
);

INSERT INTO [dbo].[Person] VALUES
('Pericles','Pericles'), -- latin without accent
('Péricles','Péricles'), -- latin with accent
(N'Περικλῆς',N'Περικλῆς'), -- greek
(N'Santa Claus 🎅',N'Santa Claus 🎅'); -- with emoji
-- the N prefix is necessary for unicode strings

SELECT
  [Name], DATALENGTH([Name]) AS [SizeInBytes],
  [NameUtf16], DATALENGTH([NameUtf16]) AS [SizeInBytes]
FROM [dbo].[Person];

DROP TABLE [dbo].[Person];
```

### Latin1_General_CI_AS

| VARCHAR name | Size in bytes | NVARCHAR name | Size in bytes |
|:-:|:-:|:-:|:-:|
| Pericles | 8 | Pericles | 16 |
| Péricles | 8 | Péricles | 16 |
| ?e?????? | 8 | Περικλῆς | 16 |
| Santa Claus ?? | 14 | Santa Claus 🎅 | 28 |

Note that Windows-1252 encoding does not support greek characters and emojis, that are replaced by '?'. Despite that, it handles very well latin words, with only 1 byte per letter, even on those with accents or *cedillas*.

### Latin1_General_100_CI_AS_KS_SC_UTF8

| VARCHAR name | Size in bytes | NVARCHAR name | Size in bytes |
|:-:|:-:|:-:|:-:|
| Pericles | 8 | Pericles | 16 |
| Péricles | 9 | Péricles | 16 |
| Περικλῆς | 17 | Περικλῆς | 16 |
| Santa Claus 🎅 | 16 | Santa Claus 🎅 | 28 |

With an UTF-8 collation, the VARCHAR field successfully supported emojis and greek characters and had a higher efficiency for most cases. The third name, Περικλῆς, needed 17 bytes because the letter ῆ (unicode 0x1FC6) is from ancient greek and requires 3 bytes in UTF-8 encoding.

## Sources and interesting reads

* [Windows-1252 table](https://www.charset.org/charsets/windows-1252)

* [Wikipedia - UTF-8](https://en.wikipedia.org/wiki/UTF-8)

* [Wikipedia - UTF-16](https://en.wikipedia.org/wiki/UTF-16)

* [Unicode table](https://symbl.cc/en/unicode-table/)

* [Emojis Unicode](https://www.unicode.org/emoji/charts/full-emoji-list.html)

* [Azure SQL Blog - Introducing UTF-8 support for Azure SQL Database](https://techcommunity.microsoft.com/t5/azure-sql-blog/introducing-utf-8-support-for-azure-sql-database/ba-p/757748)

* [Microsoft Learn - UTF-8 support on SQL Server](https://learn.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?view=sql-server-ver16#utf8)