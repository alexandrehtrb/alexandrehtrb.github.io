---
lang: en
langPtLink: ../excel-como-frontend
title: Excel as a frontend
date: 2025-09-29
excerpt: Exploring the idea of using Microsoft Excel and the frontend of a system.
published: true
enableMermaid: false
tags:
- in english
- excel
- architecture
---

{% post_avif_img '2025_09_mr_burns_excellent.avif' '2025_09_mr_burns_excellent.jpg' 'Mr. Burns from The Simpsons saying Excellent' %}

Corporate and personal finances. Governmental and management reports. Account statements. Inventory. Projections. Simulations. Lists of people. 90% of the global GDP. What do all those things have in common?

They go through Excel.

On the projects I have worked on, one of the most common features requested by clients is exporting data to Excel, especially for back-office operations, so analysts can more easily find information, make reports and calculate sums. Not just back-office — field agents, support and sales people also use it.

Some real life examples:

- Internal reports of transactions per individual;
- Reports of sales grouped by business partners;
- A salesman that needs to see which offers are available for a customer;
- An economist that needs the inflation rates of previous months;
- An HR analyst checking employees' worked hours;
- An investment manager analysing the historical valuation of a product.

Excel is a great tool for visualizing data and is very intuitive, easily used by anyone.

Considering that many times it is the final data format, here is the question: instead of having a web app, backend and frontend, hosting, servers, etc., can't we just do everything on Excel? Wouldn't it be easier? In this article, let's explore this idea.

## Connecting to external data sources

Excel can connect to external sources and download data from them. Many integrations are available, such as:

- XMLs from the internet
- XML, CSV, TXT and XLSX files
- Flat files
- Databases, like SQL Server, PostgreSQL, MySQL
- Azure Blob Storage
- HTTP endpoints
- And others.

For example, let's create a local XML file with the content below:

```xml
<yearly_inflation>
<inflation><year>2014</year><rate>1.6%</rate></inflation>
<inflation><year>2015</year><rate>0.1%</rate></inflation>
<inflation><year>2016</year><rate>1.3%</rate></inflation>
<inflation><year>2017</year><rate>2.1%</rate></inflation>
<inflation><year>2018</year><rate>2.4%</rate></inflation>
<inflation><year>2019</year><rate>1.8%</rate></inflation>
<inflation><year>2020</year><rate>1.2%</rate></inflation>
<inflation><year>2021</year><rate>4.7%</rate></inflation>
<inflation><year>2022</year><rate>8.0%</rate></inflation>
<inflation><year>2023</year><rate>4.1%</rate></inflation>
<inflation><year>2024</year><rate>2.9%</rate></inflation>
</yearly_inflation>
```

On Excel, on the **Data** tab, let's click on **New Query** > **From File** > **From XML**, and then select our file.

{% post_img '2025_09_excel_import_xml_file_en.png' 'Excel - Import external XML file data source' %}

After importing, the result will be:

{% post_img '2025_09_excel_import_xml_file_result_en.png' 'Excel - Result after importing XML file' %}

Whenever you wish to pull data, you can go on **Data** > **Refresh All**, and the table will be updated with the latest remote data.

{% post_img '2025_09_excel_refresh_data_source_en.png' 'Excel - Refresh remote connection' %}

## Advantages

Having Excel pull remote data has many advantages.

One of them is that we don't need to spend effort, time or infrastructure building a website to make that information available; all we need is the data source and a spreadsheet.

Even information security is solved for us:

- If the data source is a remote file, we just need to control access permission on it.
- If the data source is a database or HTTP endpoint, we can provide a personalized credential with permissions only for specific queries.

Another advantage is that once downloaded, the data is available for usage even without an internet connection.

Last, having individual spreadsheets gives users a great degree of freedom, because they can customize them however they want.

## Write operations

Can we use Excel to insert, delete and modify remote data? The answer is yes. UserForms and macros are the way to achieve that.

UserForms are custom dialogs for user data input. Macros on the other hand are the code behind, responsible for data validations and connecting to the database and server.

{% post_img '2025_09_excel_userform.png' 'Excel - UserForm' %}

{% image_caption 'Userform example on Excel.' %}

Keep in mind that whenever a change is required on those integrations, users will need to download updated versions of the spreadsheet.

I recommend the following userform tutorials: one from [Excel Easy](https://www.excel-easy.com/vba/userform.html) and another from [Wise Owl Training](https://www.wiseowl.co.uk/vba-macros/guides/user-forms/vba-userform/).

## Conclusion

For customer facing applications, Excel may not be a good frontend solution, as it requires a PC with it installed, and the UI is not very appealing; in those cases, websites and phone apps are the better choice. However, for internal services within a business, Excel can definitely be a good alternative to websites and desktop programs.
