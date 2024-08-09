---
title: Iceberg do SQL
date: 2024-08-08
published: true
tags:
- em português
- architecture
- sql
- cheatsheet
---
Descubra comandos e palavras-chaves especiais do SQL.<!-- excerpt -->

[Read in english](../sql-iceberg)

{% asset_img '2024_08_sql_iceberg.jpg' 'Iceberg de comandos SQL' %}

<br>

# Evolução do SQL

A linguagem SQL, em inglês, *Structured Query Language* (linguagem de inquirição estruturada), é uma das mais antigas, tendo surgido em 1974, e permanece relevante até hoje.

O SQL evoluiu muito ao longo dos anos e principalmente nas últimas duas décadas, com novas técnicas de organização e manipulação de dados, que surgiram diante de novos competidores (NoSQL) e novas necessidades (analytics, data warehouse, computação na nuvem).

Este artigo é uma lista de trapaças (*cheatsheet*) do SQL, abordando desde os comandos mais comuns até aqueles mais raros, que surgiram recentemente e têm aplicações muito interessantes.

Os exemplos aqui são em Microsoft SQL Server, todavia, a maioria deles existe de forma igual ou similar em outros bancos de dados, como o PostgreSQL, MySQL, Oracle e outros.

[**Leituras e consultas**](#leituras-e-consultas)

  * [SELECT](#select)
  * [LEFT, RIGHT, INNER JOINS](#left%2C-right%2C-inner-joins)
  * VIEWS
  * GROUP BY + HAVING
  * UNION, INTERSECT, EXCEPT
  * SUBQUERIES
  * SELF JOIN
  * CROSS JOIN
  * PIVOTING
  * ROLLUP, CUBE, GROUPING SET
  * WINDOW FUNCTION

**Alterações de dados**

  * INSERT
  * UPDATE
  * DELETE
  * STORED PROCEDURES
  * MERGE
  * BULK INSERT

**Formação de tabelas**

  * FOREIGN KEY
  * INDEXES
  * UNIQUE
  * SPARSE
  * COLUMNSTORE

**Especiais**

  * IMPORT DLLs
  * APPLOCKS
  * EXPLAIN ANALYZE

<br>

# Leituras e consultas

## SELECT

Obtém dados devolvendo em forma de tabela. [(docs)](https://learn.microsoft.com/pt-br/sql/t-sql/queries/select-transact-sql?view=sql-server-ver16)

Tabela `[dbo].[Frutas]`:

| Id | Nome | Família | Calorias |
|:-:|:-:|:-:|:-:|
| 1 | Banana | Musaceae | 96 |
| 2 | Melão | Cucurbitaceae | 34 |
| 3 | Laranja | Rutaceae | 43 |
| 4 | Morango | Rosaceae | 29 |
| 5 | Melancia | Cucurbitaceae | 30 |
| 6 | Maracujá | Passifloraceae | 97 |
| 7 | Mirtilo | Rosaceae | 29 |
| 8 | Cereja | Rosaceae | 50 |
| 9 | Abacaxi | Bromeliaceae | 50 |
| 10 | Maçã | Rosaceae | 52 |

Comando SQL:

```sql
SELECT [Nome], [Calorias]
FROM [dbo].[Frutas]
WHERE [Calorias] > 50
```

Retorna:

| Nome | Calorias |
|:-:|:-:|
| Banana | 96 |
| Maracujá | 97 |
| Maçã | 52 |

## LEFT, RIGHT, INNER JOINS

Entrelaça duas ou mais tabelas com base em colunas de referência; esse entrelaçamento pode ser usado em consultas, inserções, alterações e exclusões. [(docs)](https://learn.microsoft.com/pt-br/sql/relational-databases/performance/joins?view=sql-server-ver16)

Aqui vamos focar apenas no INNER JOIN e no LEFT JOIN.

<picture class="my-4">
  <source type="image/avif" srcset="/assets/img/posts/2024_08_sql_joins.avif" alt="Diferentes tipos de JOINs no SQL" />
  <img src="/assets/img/posts/2024_08_sql_joins.png" alt="Diferentes tipos de JOINs no SQL" />
</picture>

### INNER JOIN

O `INNER JOIN` é uma intersecção sem tolerâncias, ou seja, os valores de entrelaçamento *devem* existir em ambas as tabelas. Se existir em uma linha da tabela X, mas sem linha equivalente em outra tabela Y, a linha da tabela X não é considerada. Exemplo:

Tabela `[dbo].[Familia]`:

| **<mark>Id</mark>** | Família |
|:-:|:-:|
| **<mark>1</mark>** | Musaceae |
| **<mark>2</mark>** | Cucurbitaceae |
| **<mark>3</mark>** | Rutaceae |
| **<mark>4</mark>** | Rosaceae |
| **<mark>5</mark>** | Passifloraceae |
| **<mark>6</mark>** | Bromeliaceae |
| **<mark>7</mark>** | Malpighiaceae |

Tabela `[dbo].[Frutas]`:

| Id | Nome | **<mark>IdFamília</mark>** | Calorias |
|:-:|:-:|:-:|:-:|
| 1 | Banana | **<mark>1</mark>** | 96 |
| 2 | Melão | **<mark>2</mark>** | 34 |
| 3 | Laranja | **<mark>3</mark>** | 43 |
| 4 | Morango | **<mark>4</mark>** | 29 |
| 5 | Melancia | **<mark>2</mark>** | 30 |
| 6 | Maracujá | **<mark>5</mark>** | 97 |
| 7 | Mirtilo | **<mark>4</mark>** | 29 |
| 8 | Cereja | **<mark>4</mark>** | 50 |
| 9 | Abacaxi | **<mark>6</mark>** | 50 |
| 10 | Maçã | **<mark>4</mark>** | 52 |

Comando SQL:

```sql
-- "ON fr.[IdFamilia] = fa.[Id]"
-- é a intersecção entre as tabelas

SELECT
    fr.[Nome] AS [Nome],
    fa.[Nome] AS [Família]
FROM [dbo].[Frutas] fr
INNER JOIN [dbo].[Familia] fa ON fr.[IdFamilia] = fa.[Id]
WHERE fr.[Calorias] > 50
```

Retorna:

| Nome | Família |
|:-:|:-:|
| Banana | Musaceae |
| Maracujá | Passifloraceae |
| Maçã | Rosaceae |