// https://github.com/Bowserinator/Periodic-Table-JSON

var elements = {
"elements": [
{
	"name": "Git", 
	"symbol": "Git", 
	"number": 1, 
	"category": "developer tool", 
	"xpos": 1, 
	"ypos": 1,
	"source": "https://git-scm.com/", 
	"summary": "Git is a distributed version control software system that is capable of managing versions of source code or data. It is often used to control source code by programmers who are developing software collaboratively, in teams or with the community.<br/><br/>It is free and open-source software shared under the GPL-2.0-only license.<br/><br/>Git was originally created by Linus Torvalds for version control in the development of the Linux kernel.<br/><br/>Today, Git is the version control system most commonly used by software developers. It is the most popular distributed version control system, with nearly 95% of developers reporting it as their primary version control system as of 2022."
}, 
{
	"name": "IBM z/OS", 
	"symbol": "Z", 
	"number": 2, 
	"category": "operating system", 
	"xpos": 18, 
	"ypos": 1, 
	"source": "https://www.ibm.com/products/zos",
	"summary": "IBM z/OS is an operating system that runs on IBM Z mainframes, with s390x architectures.",
}, 
{
	"name": "Extensible Markup Language", 
	"symbol": "Xml", 
	"number": 3, 
	"category": "structured data format", 
	"xpos": 1, 
	"ypos": 2,
	"source": "https://www.w3schools.com/xml/", 
	"summary": "Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing data. It defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.<br/><br/>The design goals of XML emphasize simplicity, generality, and usability across the Internet. It is a textual data format with strong support via Unicode for different human languages. Although the design of XML focuses on documents, the language is widely used for the representation of arbitrary data structures, such as those used in web services.", 
}, 
{
	"name": "Hypertext Markup Language", 
	"symbol": "Html", 
	"number": 4, 
	"category": "internet file format", 
	"xpos": 2, 
	"ypos": 2,
	"source": "https://www.d.umn.edu/~gshute/webdev/HTML/examples.html", 
	"summary": "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript (JS).<br/><br/>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and may describe its appearance.", 
}, 
{
	"name": "High-perform. computing", 
	"symbol": "Hpc", 
	"number": 5, 
	"category": "type of computing", 
	"xpos": 13, 
	"ypos": 2,
	"source": "https://www.nvidia.com/en-us/glossary/high-performance-computing/", 
	"summary": "HPC computer systems are characterized by their high-speed processing power, high-performance networks, and large-memory capacity, generating the capability to perform massive amounts of parallel processing. A supercomputer is a type of HPC computer that is highly advanced and provides immense computational power and speed, making it a key component of high-performance computing systems.<br/><br/>In recent years, HPC has evolved from a tool focused on simulation-based scientific investigation to a dual role running simulation and machine learning (ML). This increase in scope for HPC systems has gained momentum because the combination of physics-based simulation and ML has compressed the time to scientific insight for fields such as climate modeling, drug discovery, protein folding, and computational fluid dynamics (CFD)."
}, 
{
	"name": "Structured Query Language", 
	"category": "database system", 
	"number": 6, 
	"source": "https://en.wikipedia.org/wiki/SQL", 
	"summary": "SQL is a standard language for storing, manipulating and retrieving data in databases.<br/><br/>Introduced in the 1970s, SQL offered two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, i.e., with or without an index.<br/><br/>The scope of SQL includes data query, data manipulation (insert, update, and delete), data definition (schema creation and modification), and data access control. Although SQL is essentially a declarative language (4GL), it also includes procedural elements.<br/><br/>There are many database systems that are primarily SQL-based, to list a few of them: SQLite, Microsoft SQL Server, PostgreSQL, Oracle, DuckDB, SAP HANA, any many more.",
	"symbol": "Sql", 
	"xpos": 14, 
	"ypos": 2,
}, 
{
	"name": "vi improved", 
	"category": "developer tool", 
	"number": 7, 
	"source": "https://www.vim.org/", 
	"summary": "Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as \"vi\" with most UNIX systems and with Apple OS X.", 
	"symbol": "Vim", 
	"xpos": 15, 
	"ypos": 2
}, 
{
	"name": "Notepad++", 
	"category": "developer tool", 
	"number": 8, 
	"source": "https://notepad-plus-plus.org/", 
	"summary": "Notepad++ (sometimes npp or NPP) is a text and source-code editor for use with Microsoft Windows. It supports tabbed editing, which allows working with multiple open files in one window. The program's name comes from the C postfix increment operator.<br/><br/>Notepad++ is released as free and open-source software under a GNU General Public License (GPL) 3.0 or later.", 
	"symbol": "Npp", 
	"xpos": 16, 
	"ypos": 2
}, 
{
	"name": "Visual Studio", 
	"category": "developer tool", 
	"number": 9, 
	"source": "https://visualstudio.microsoft.com/", 
	"summary": "Visual Studio and Visual Studio Code are IDEs from Microsoft. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git. Users can change the theme, keyboard shortcuts and preferences, as well as install extensions that add functionality, including to extend its capabilities to function as an IDE for other languages.<br/><br/>Visual Studio is Windows-only and closed-source, whilst Visual Studio Code is multiplatform and open-source.", 
	"symbol": "Vs", 
	"xpos": 17, 
	"ypos": 2
}, 
{
	"name": "Apple iOS", 
	"symbol": "I", 
	"category": "operating system", 
	"number": 10, 
	"xpos": 18, 
	"ypos": 2, 
	"source": "https://www.apple.com/br/os/ios/",
	"summary": "iOS (formerly iPhone OS) is a mobile operating system created and developed by Apple for its iPhone line of smartphones.<br/><br/>iOS is based on macOS. Like macOS, it includes components of the Mach microkernel and FreeBSD. It is a Unix-like operating system.", 
}, 
{
	"name": "JS Object Notation", 
	"category": "structured data format", 
	"number": 11, 
	"symbol": "Json", 
	"xpos": 1, 
	"ypos": 3,
	"source": "https://www.json.org/json-en.html", 
	"summary": "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent.<br/><br/>JSON is built on two structures:<br/><br/>- A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.<br/>- An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence."
}, 
{
	"name": "Markdown", 
	"category": "internet file format", 
	"number": 12, 
	"source": "https://www.markdownguide.org/cheat-sheet/", 
	"summary": "Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.", 
	"symbol": "Md", 
	"xpos": 2, 
	"ypos": 3
}, 
{
	"name": "UNIX shell", 
	"symbol": "Sh", 
	"number": 13, 
	"category": "scripting language", 
	"source": "https://swcarpentry.github.io/shell-novice/", 
	"summary": "A Unix shell provides a command language that can be used either interactively or for writing a shell script on a Unix-like operating system. A user typically works within a Unix shell via a terminal emulator; however, direct access via serial hardware connections or a Secure Shell (SSH) are common for server systems.<br/><br/>The shell is a type of program called an interpreter. An interpreter operates in a simple loop: It accepts a command, interprets the command, executes the command, and then waits for another command. The shell displays a \"prompt\", to notify you that it is ready to accept your command.<br/><br/>On many systems, sh may be a symbolic link or hard link to one of these alternatives: Almquist shell (ash), Bourne-Again shell (bash), Korn shell (ksh) and Z shell (zsh).", 
	"xpos": 13, 
	"ypos": 3
}, 
{
	"name": "Personal computing", 
	"symbol": "Pc", 
	"number": 14, 
	"category": "type of computing", 
	"source": "https://en.wikipedia.org/wiki/Personal_computer", 
	"summary": "A personal computer (PC) is a computer designed for personal use. It is typically used for tasks such as word processing, internet browsing, email, multimedia playback, and gaming. Personal computers are meant to be operated directly by an end user, rather than by a computer expert, administrator, company or technician. Unlike large, costly minicomputers and mainframes, time-sharing by many people at the same time is not used with personal computers. Institutional or corporate computer owners in the 1960s had to write their own programs to do any useful work with computers. The term \"home computer\" has also been used, primarily in the late 1970s and 1980s. The advent of personal computers and the concurrent Digital Revolution have significantly affected the lives of people.<br/><br/>In 1984, Apple Computer launched the Macintosh, with an advertisement during the Super Bowl. The Macintosh was the first successful mass-market mouse-driven computer with a graphical user interface or 'WIMP' (Windows, Icons, Menus, and Pointers). Since the early 1990s, Microsoft operating systems (first with MS-DOS and then with Windows) and CPUs based on Intel's x86 architecture – collectively called Wintel – have dominated the personal computer market.<br/><br/>As of today (2026), smartphones can be considered too a kind of personal computer, due to the amount of tasks and programs that they can execute, and to their presence on most peoples lives.", 
	"xpos": 14, 
	"ypos": 3,
}, 
{
	"name": "MongoDB", 
	"number": 15, 
	"symbol": "Mn", 
	"category": "database system", 
	"source": "https://www.mongodb.com/", 
	"summary": "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB uses JSON-like documents (called BSON) with optional schemas. Released in February 2009 by 10gen (now MongoDB Inc.), it supports features like sharding, replication, and ACID transactions (from version 4.0).", 
	"xpos": 15, 
	"ypos": 3
}, 
{
	"name": "Redis", 
	"category": "database system", 
	"number": 16, 
	"source": "https://redis.io/", 
	"summary": "Redis (Remote Dictionary Server) is an in-memory key–value database, used as a distributed cache and message broker, with optional durability. Because it holds all data in memory and because of its design, Redis offers low-latency reads and writes, making it particularly suitable for use cases that require a cache. The project was developed and maintained by Salvatore Sanfilippo, starting in 2009.", 
	"symbol": "Rd", 
	"xpos": 16, 
	"ypos": 3
}, 
{
	"name": "IntelliJ IDEA", 
	"category": "developer tool", 
	"number": 17, 
	"source": "https://www.jetbrains.com/idea/", 
	"summary": "IntelliJ IDEA is an integrated development environment (IDE) written in Java for developing computer software written in Java, Kotlin, Groovy, and other JVM-based languages. It is developed by JetBrains (formerly known as IntelliJ) and is available as an Apache 2 Licensed community edition with proprietary license for some bundled plugins, and in a proprietary commercial edition. Both can be used for commercial development.<br/><br/>In December 2014, Google announced version 1.0 of Android Studio, an open-source IDE for Android apps, based on the open source community edition. Other development environments based on IntelliJ's framework include AppCode, CLion, DataGrip, GoLand, PhpStorm, PyCharm, Rider, RubyMine, WebStorm, and MPS.", 
	"symbol": "Ij", 
	"xpos": 17, 
	"ypos": 3
}, 
{
	"name": "Microsoft Windows", 
	"symbol": "W", 
	"category": "operating system", 
	"xpos": 18, 
	"ypos": 3, 
	"number": 18,
	"source": "https://www.microsoft.com/pt-br/windows/",
	"summary": "Windows is a proprietary operating system developed by Microsoft.<br/><br/>The first version of Windows, Windows 1.0, was released on November 20, 1985 as a graphical operating system shell for MS-DOS in response to growing interest in graphical user interfaces (GUIs). The name Windows is a reference to the windowing system in GUIs. The 1990 release of Windows 3.0 catapulted its market success.<br/><br/>Windows is the most popular desktop operating system in the world, with a 77% market share as of May 2026, and the second-most popular operating system overall, behind Android.", 
}, 
{
	"name": "Flat file", 
	"symbol": "Flat", 
	"number": 19, 
	"category": "structured data format", 
	"source": "https://evidence.dev/blog/what-is-a-flat-file", 
	"summary": "Flat files are files whose fields and entries separated either by tokens or delimited by pre-determined lengths. They can be used for data transmission or even as databases. CSVs (comma-separated values) are a kind of flat file.", 
	"xpos": 1, 
	"ypos": 4
}, 
{
	"name": "Cascade Style Sheets", 
	"category": "internet file format", 
	"number": 20, 
	"source": "https://developer.mozilla.org/en-US/docs/Web/CSS", 
	"summary": "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.", 
	"symbol": "Css", 
	"xpos": 2, 
	"ypos": 4
}, 
{
	"name": "Wolfram language", 
	"category": "programming language", 
	"number": 21, 
	"source": "https://www.wolfram.com/language/", 
	"summary": "The Wolfram Language is a proprietary, high-level multi-paradigm programming language developed by Wolfram Research. It emphasizes symbolic computation, functional programming, and rule-based programming and can employ arbitrary structures and data. It is the programming language of the mathematical symbolic computation program Mathematica.", 
	"symbol": "Wl", 
	"xpos": 3, 
	"ypos": 4
}, 
{
	"name": "C++", 
	"category": "programming language", 
	"number": 22, 
	"source": "https://en.wikipedia.org/wiki/C%2B%2B", 
	"summary": "C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, adding object-oriented (OOP) features, it has since expanded significantly over time adding more OOP and other features; as of 1997/C++98 standardization, C++ has added functional features, in addition to facilities for low-level memory manipulation for systems like microcomputers or to make operating systems like Linux or Windows, and even later came features like generic programming (through the use of templates).<br/><br/>C++ is usually implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM.", 
	"symbol": "C++", 
	"xpos": 4, 
	"ypos": 4
}, 
{
	"name": "FoxPro", 
	"category": "programming language", 
	"number": 23, 
	"source": "https://en.wikipedia.org/wiki/Visual_FoxPro", 
	"summary": "FoxPro is a text-based procedurally oriented programming language and database management system (DBMS), and it is also an object-oriented programming language, originally published by Fox Software and later by Microsoft, for MS-DOS, Windows, Macintosh, and UNIX.<br/><br/>Visual FoxPro, its successor, is a programming language that was developed by Microsoft. It is a data-centric and procedural programming language with object-oriented programming (OOP) features.<br/><br/>Unlike most database management systems, Visual FoxPro is a full-featured, dynamic programming language that does not require the use of an additional general-purpose programming environment. It can be used to write not just traditional \"fat client\" applications, but also middleware and web applications.", 
	"symbol": "Fox", 
	"xpos": 5, 
	"ypos": 4
}, 
{
	"name": "Rust", 
	"category": "programming language", 
	"number": 24, 
	"source": "https://en.wikipedia.org/wiki/Rust_(programming_language)", 
	"summary": "Rust is a general-purpose programming language which emphasizes performance, type safety, concurrency, and memory safety. Software developer Graydon Hoare created Rust in 2006 while working at Mozilla, which officially sponsored the project in 2009. The first stable release, Rust 1.0, was published in May 2015.<br/><br/>Rust enforces memory safety (i.e., that all references point to valid memory) without a conventional garbage collector; instead, memory safety errors and data races are prevented by the \"borrow checker\", which tracks the object lifetime of references at compile time.", 
	"symbol": "Rs", 
	"xpos": 6, 
	"ypos": 4
}, 
{
	"name": "COBOL", 
	"number": 25, 
	"symbol": "Cbl", 
	"category": "programming language", 
	"source": "https://www.ibm.com/think/topics/cobol", 
	"summary": "Common business-oriented language (COBOL) is a high-level, English-like, compiled programming language that is developed specifically for business data processing needs.<br/><br/>One of COBOL’s biggest strengths is its strong support for large-precision fixed-point decimal calculations, a feature not necessarily native to many traditional programming languages. This capability helped set COBOL apart and drive its adoption by many large financial institutions.<br/><br/>Although COBOL is considered a legacy system, many government and private sector organizations continue to use it to run financial, administrative and business applications. In fact, COBOL’s imperative, procedural and (in its newer iterations) object-oriented configuration serves as the foundation for more than 40% of all online banking systems.<br/><br/>It also supports 80% of in-person credit card transactions, handles 95% of all ATM transactions, and powers systems that generate more than USD 3 billion of commerce each day, as of February 2026. Due to its superior stability and processing power, it continues to play an integral role in helping businesses maintain apps and programs in existing architectures.", 
	"xpos": 7, 
	"ypos": 4
}, 
{
	"name": "OCaml", 
	"category": "programming language", 
	"number": 26, 
	"source": "https://cs3110.github.io/textbook/cover.html", 
	"summary": "Genealogically, OCaml comes from the line of programming languages whose grandfather is Lisp and includes other modern languages such as Clojure, F#, Haskell, and Racket.<br/><br/>OCaml originates from work done by Robin Milner and others at the Edinburgh Laboratory for Computer Science in Scotland. They were working on theorem provers in the late 1970s and early 1980s. Traditionally, theorem provers were implemented in languages such as Lisp. Milner kept running into the problem that the theorem provers would sometimes put incorrect “proofs” (i.e., non-proofs) together and claim that they were valid. So he tried to develop a language that only allowed you to construct valid proofs. ML, which stands for “Meta Language”, was the result of that work. The type system of ML was carefully constructed so that you could only construct valid proofs in the language. A theorem prover was then written as a program that constructed a proof. Eventually, this “Classic ML” evolved into a full-fledged programming language.<br/><br/>In the early ’80s, there was a schism in the ML community with the French on one side and the British and US on another. The French went on to develop CAML and later Objective CAML (OCaml) while the Brits and Americans developed Standard ML. The two dialects are quite similar. Microsoft introduced its own variant of OCaml called F# in 2005.", 
	"symbol": "Ml", 
	"xpos": 8, 
	"ypos": 4
}, 
{
	"name": "Kotlin", 
	"category": "programming language", 
	"number": 27, 
	"source": "https://kotlinlang.org/", 
	"summary": "Kotlin is a modern, trending programming language that was released in 2016 by JetBrains.<br/><br/>It has become very popular since it is compatible with Java, one of the most popular programming languages, meaning that Java code and libraries can be used in Kotlin programs.<br/><br/>Kotlin is used especially for mobile Android applications.", 
	"symbol": "Kt", 
	"xpos": 9, 
	"ypos": 4
}, 
{
	"name": "TypeScript", 
	"category": "programming language", 
	"number": 28, 
	"source": "https://www.typescriptlang.org/", 
	"summary": "TypeScript (TS) is a high-level programming language that adds static typing with optional type annotations to JavaScript. It is designed for developing large applications. It transpiles to JavaScript.<br/><br/>It is developed by Microsoft as free and open-source software released under an Apache License 2.0. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with React.js, Node.js, Deno or Bun).", 
	"symbol": "Ts", 
	"xpos": 10, 
	"ypos": 4
}, 
{
	"name": "Ruby", 
	"category": "programming language", 
	"number": 29, 
	"source": "https://www.ruby-lang.org/en/", 
	"summary": "Ruby is an interpreted, high-level, dynamically typed and general-purpose programming language; its interpreter uses garbage collection and just-in-time compilation. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.<br/><br/>According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, BASIC, and Lisp. Development of the language began in the mid-1990s by Yukihiro \"Matz\" Matsumoto in Japan.<br/><br/>It is very popular due to its Ruby on Rails web framework.", 
	"symbol": "Rb", 
	"xpos": 11, 
	"ypos": 4
}, 
{
	"name": "Java", 
	"category": "programming language", 
	"number": 30, 
	"source": "https://www.java.com/", 
	"summary": "Java is a high-level, general-purpose, memory-safe, object-oriented programming language. Its syntax is similar to C and C++. Java applications are usually compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.<br/><br/>Java was designed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun's Java platform. The original and reference implementation Java compilers, virtual machines (VMs), and class libraries were released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. The official reference implementation is the OpenJDK JVM, which is open-source software used by most developers and is the default JVM for almost all Linux distributions.", 
	"symbol": "Java", 
	"xpos": 12, 
	"ypos": 4
}, 
{
	"name": "AutoHotkey", 
	"category": "scripting language", 
	"number": 31, 
	"source": "https://www.autohotkey.com/", 
	"summary": "AutoHotkey (AHK) is a free and open-source custom scripting language for Microsoft Windows, primarily designed to provide easy keyboard shortcuts (or 'hotkeys'), fast macro-creation, and software automation, to allow users of most computer skill levels to automate repetitive tasks in any Windows application. It can easily extend or modify user interfaces (for example, overriding the default Windows control key commands with their Emacs equivalents).<br/><br/>AutoHotkey was initially released by its creator, Chris Mallet, in 2003; it has subsequently become one of the most commonly used and commonly recommended pieces of software available for simple macro implementation. The installation package includes an extensive help file; web-based documentation is also available.", 
	"symbol": "Ahk", 
	"xpos": 13, 
	"ypos": 4
}, 
{
	"name": "Cloud computing", 
	"category": "type of computing", 
	"number": 32, 
	"source": "https://en.wikipedia.org/wiki/Cloud_computing", 
	"summary": "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider.<br/><br/>Cloud computing has been a game changer since the beginning of the 2010s, because it allows developers and companies to quickly and easily deploy their web services on the Internet without the traditional time and costs (CAPEX) to raise IT infrastructure.", 
	"symbol": "Cl", 
	"xpos": 14, 
	"ypos": 4
}, 
{
	"name": "Mainframe", 
	"category": "type of computing", 
	"number": 33, 
	"source": "https://en.wikipedia.org/wiki/Mainframe_computer", 
	"summary": "A mainframe computer, a.k.a. maxicomputer or big iron, is a computer used primarily by large organizations for critical applications like bulk data processing for tasks such as censuses, industry and consumer statistics, enterprise resource planning, and large-scale transaction processing.<br/><br/>Modern mainframe design is characterized by:<br/><br/>- Redundant internal engineering resulting in high reliability and security;<br/>- Extensive input-output (\"I/O\") facilities with the ability to offload to separate engines;<br/>- Strict backward compatibility with older software;<br/>- High hardware and computational utilization rates through virtualization to support massive throughput;<br/>- Hot swapping of hardware, such as processors and memory.<br/><br/>The high stability and reliability of mainframes enable these machines to run uninterrupted for very long periods of time, with mean time between failures (MTBF) measured in decades. They are typically used in applications where downtime would be costly or catastrophic.", 
	"symbol": "Mf", 
	"xpos": 15, 
	"ypos": 4
}, 
{
	"name": "Microsoft Access", 
	"category": "database system", 
	"number": 34, 
	"source": "https://en.wikipedia.org/wiki/Microsoft_Access", 
	"summary": "Microsoft Access is a database management system (DBMS) from Microsoft that combines the relational Access Database Engine (ACE) with a graphical user interface and software-development tools.<br/><br/>Users can create tables, queries, forms and reports, and connect them together with macros. Advanced users can use VBA to write rich solutions with advanced data manipulation and user control. Access also has report creation features that can work with any data source that Access can access.<br/><br/>The original concept of Access was for end users to be able to access data from any source. Other features include the import and export of data to many formats including Excel, Outlook, ASCII, dBase, Paradox, FoxPro, SQL Server and Oracle. Access is often used by people downloading data from enterprise level databases for manipulation, analysis, and reporting locally.", 
	"symbol": "As", 
	"xpos": 16, 
	"ypos": 4
}, 
{
	"name": "Xcode", 
	"category": "developer tool", 
	"number": 35, 
	"source": "https://developer.apple.com/xcode/", 
	"summary": "Xcode is a suite of developer tools for building apps on Apple devices.[4] It includes an integrated development environment (IDE) of the same name for macOS, used to develop software for macOS, iOS, iPadOS, watchOS, tvOS, and visionOS. It was initially released in late 2003.", 
	"symbol": "Xc", 
	"xpos": 17, 
	"ypos": 4
}, 
{
	"name": "Google Android", 
	"symbol": "A", 
	"category": "operating system", 
	"xpos": 18, 
	"ypos": 4, 
	"number": 36, 
	"source": "https://www.android.com/", 
	"summary": "Android is an open-source operating system developed by Google. Android is based on a modified version of the Linux kernel and other free and open-source software, designed primarily for touchscreen-based mobile devices such as smartphones and tablet computers. First released in 2008, Android is the world's most widely used operating system, and most used operating system for smartphones, as of 2026.<br/><br/>At its core, the operating system is known as the Android Open Source Project (AOSP) and is free and open-source software (FOSS) primarily licensed under the Apache License. However, most devices run the proprietary Android version developed by Google, which ships with additional proprietary closed-source software pre-installed. While AOSP is free, the \"Android\" name and logo are trademarks of Google, who restrict the use of Android branding on \"uncertified\" products.", 
}, 
{
	"name": "Microsoft Excel", 
	"category": "structured data format", 
	"number": 37, 
	"source": "https://en.wikipedia.org/wiki/Microsoft_Excel", 
	"summary": "Microsoft Excel, or simply Excel, is a spreadsheet editor developed by Microsoft. It features calculation or computation capabilities, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications (VBA).<br/><br/>Excel spreadsheets use a grid of cells arranged in numbered rows and letter-named columns to organize data manipulations like arithmetic operations. It has a battery of supplied functions to answer statistical, engineering, and financial needs. In addition, it can display data as line graphs, histograms and charts.<br/><br/>It also has a programming aspect, Visual Basic for Applications, allowing the user to employ a wide variety of numerical methods, for example, for solving complex equations and then reporting the results back to the spreadsheet.", 
	"symbol": "Xls", 
	"xpos": 1, 
	"ypos": 5
}, 
{
	"name": "Joint Photo. Experts Group", 
	"category": "internet file format", 
	"number": 38, 
	"source": "https://en.wikipedia.org/wiki/JPEG", 
	"summary": "JPEG (short for Joint Photographic Experts Group) is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. The degree of compression can be adjusted, allowing a selectable trade off between storage size and image quality. JPEG typically achieves 10:1 compression with a loss in image quality that, while perceptible, is widely agreed upon to be acceptable.<br/><br/>Since its introduction in 1992, JPEG has been the most widely used image compression standard in the world, and the most widely used digital image format, with several billion JPEG images produced every day as of 2015.", 
	"symbol": "Jpg", 
	"xpos": 2, 
	"ypos": 5
}, 
{
	"name": "Pascal", 
	"category": "programming language", 
	"number": 39, 
	"source": "https://en.wikipedia.org/wiki/Pascal_(programming_language)", 
	"summary": "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after French mathematician, philosopher and physicist Blaise Pascal.<br/><br/>Pascal became very successful in the 1970s, notably on the burgeoning minicomputer market. Compilers were also available for many microcomputers as the field emerged in the late 1970s. It was widely used as a teaching language in university-level programming courses in the 1980s, and also used in production settings for writing commercial software during the same period.<br/><br/>A derivative named Object Pascal designed for object-oriented programming was developed in 1985. This was used by Apple Computer (for the Lisa and Macintosh machines) and Borland in the late 1980s and later developed into Delphi on the Microsoft Windows platform.", 
	"symbol": "Pas", 
	"xpos": 3, 
	"ypos": 5
}, 
{
	"name": "JavaScript", 
	"category": "programming language", 
	"number": 40, 
	"source": "https://en.wikipedia.org/wiki/JavaScript", 
	"summary": "JavaScript (JS) is a programming language and core technology of the Web, alongside HTML and CSS. Created by Brendan Eich in 1995. As of 2025, JavaScript is the most widely used programming language on GitHub.<br/><br/>Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.<br/><br/>JavaScript is a high-level language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.", 
	"symbol": "Js", 
	"xpos": 4, 
	"ypos": 5
}, 
{
	"name": "Golang", 
	"category": "programming language", 
	"number": 41, 
	"source": "https://go.dev/", 
	"summary": "Go is a high-level, general-purpose programming language that is statically typed and compiled. It is known for the simplicity of its syntax and the efficiency of development that it enables through the inclusion of a large standard library supplying many needs for common projects.<br/><br/>It was designed at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson, and publicly announced in November 2009. It is syntactically similar to C, but also has garbage collection, structural typing, and CSP-style concurrency.", 
	"symbol": "Go", 
	"xpos": 5, 
	"ypos": 5
}, 
{
	"name": "Lua", 
	"category": "programming language", 
	"number": 42, 
	"source": "https://www.lua.org/", 
	"summary": "Lua ('loo-ah', from Portuguese: lua, meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.<br/><br/>Lua was created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes, members of the Computer Graphics Technology Group (Tecgraf) at the Pontifical Catholic University of Rio de Janeiro, in Brazil.<br/><br/>Lua is intended to be embedded into other applications, and provides a C API for this purpose. Both C code can run inside a Lua program, and Lua scripts can be interop-ed inside a C program.<br/><br/>In video game development, Lua is widely used as a scripting language, mainly due to its perceived ease of embedding, fast execution, and short learning curve. Notable games which use Lua include Roblox, Minecraft, Garry's Mod, World of Warcraft, Payday 2, Project Zomboid, Phantasy Star Online 2, Dota 2, Crysis, and many others.", 
	"symbol": "Lua", 
	"xpos": 6, 
	"ypos": 5
}, 
{
	"name": "Visual Basic", 
	"category": "programming language", 
	"number": 43, 
	"source": "https://en.wikipedia.org/wiki/Visual_Basic_(classic)", 
	"summary": "Visual Basic (VB) is a programming language based on BASIC, first released in 1991, developed by Microsoft for Windows.<br/><br/>Visual Basic was very innovative for its time due to its IDE, that allowed to build graphical user interfaces (GUIs) using drag-and-drop components and event-driven programming. Just as BASIC was originally intended to be easy to learn, Microsoft intended the same for VB.<br/><br/>The final release was version 6 (VB6), released in 1998. On April 8, 2008, Microsoft stopped supporting the VB6 IDE, relegating it to legacy status.<br/><br/>VB still remains active on the .NET ecosystem as VB.NET, and on Microsoft Office, as Visual Basic for Applications (VBA).", 
	"symbol": "Vb", 
	"xpos": 7, 
	"ypos": 5
}, 
{
	"name": "Haskell", 
	"category": "programming language", 
	"number": 44, 
	"source": "https://www.haskell.org/", 
	"summary": "Haskell is a general-purpose, statically typed, purely functional programming language with type inference and lazy evaluation. Haskell pioneered several programming language features including type classes for type-safe operator overloading and monadic input/output (IO). It is named after logician Haskell Curry.<br/><br/>After the release of Miranda by Research Software Ltd. in 1985, interest in lazy functional languages grew. By 1987, more than a dozen non-strict, purely functional programming languages existed. Miranda was the most widely used, but it was proprietary software. At the conference on Functional Programming Languages and Computer Architecture (FPCA '87) in Portland, Oregon, there was a strong consensus that a committee be formed to define an open standard for such languages. The committee's purpose was to consolidate existing functional languages into a common one to serve as a basis for future research in functional-language design.<br/><br/>Haskell was then developed by a committee, attempting to bring together off-the-shelf solutions where possible.", 
	"symbol": "Hs", 
	"xpos": 8, 
	"ypos": 5
}, 
{
	"name": "C", 
	"category": "programming language", 
	"number": 45, 
	"source": "https://www.c-language.org/", 
	"summary": "C is a general-purpose programming language created in the 1970s by Dennis Ritchie. By design, C gives the programmer relatively direct access to the features of the typical CPU architecture, customized for the target instruction set. It has been and continues to be used to implement operating systems (especially kernels), device drivers, and protocol stacks. C is used on computers that range from the largest supercomputers to the smallest microcontrollers and embedded systems.<br/><br/>C is an imperative procedural language, supporting structured programming, lexical variable scope, and recursion, with a static type system. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.", 
	"symbol": "C", 
	"xpos": 9, 
	"ypos": 5
}, 
{
	"name": "ABAP", 
	"category": "programming language", 
	"number": 46, 
	"source": "https://www.geeksforgeeks.org/software-engineering/what-is-abap-a-brief-overview/", 
	"summary": "ABAP (Advanced Business Application Programming, originally Allgemeiner Berichts-Aufbereitungs-Prozessor, German for \"general report preparation processor\") is a high-level programming language created by the German software company SAP SE.<br/><br/>It was originally the report language for SAP R/2, a platform that enabled large corporations to build mainframe business applications for materials management and financial and management accounting.<br/><br/>ABAP is designed to work with SAP's software suite, allowing developers to create custom reports, enhancements, and applications that integrate with SAP systems.", 
	"symbol": "Abap", 
	"xpos": 10, 
	"ypos": 5
}, 
{
	"name": "Dart", 
	"category": "programming language", 
	"number": 47, 
	"source": "https://dart.dev/", 
	"summary": "Dart is a programming language designed by Lars Bak and Kasper Lund and developed by Google. It can be used to develop web and mobile apps as well as server and desktop applications.<br/><br/>Dart also provides the language and runtimes that power Flutter, a framework for building multiplatform apps, mostly for Android and iOS.", 
	"symbol": "Dart", 
	"xpos": 11, 
	"ypos": 5
}, 
{
	"name": "R", 
	"category": "programming language", 
	"number": 48, 
	"source": "https://www.r-project.org/", 
	"summary": "R is a language and environment for statistical computing and graphics. It is a GNU project which is similar to the S language and environment which was developed at Bell Laboratories (formerly AT&T, now Lucent Technologies) by John Chambers and colleagues.<br/><br/>R provides a wide variety of statistical (linear and nonlinear modelling, classical statistical tests, time-series analysis, classification, clustering, …) and graphical techniques, and is highly extensible.<br/><br/>One of R’s strengths is the ease with which well-designed publication-quality plots can be produced, including mathematical symbols and formulae where needed. Great care has been taken over the defaults for the minor design choices in graphics, but the user retains full control.<br/><br/>R is available as Free Software under the terms of the Free Software Foundation’s GNU General Public License in source code form. It compiles and runs on a wide variety of UNIX platforms and similar systems (including FreeBSD and Linux), Windows and MacOS.", 
	"symbol": "R", 
	"xpos": 12, 
	"ypos": 5
}, 
{
	"name": "VBScript", 
	"category": "scripting language", 
	"number": 49, 
	"source": "https://en.wikipedia.org/wiki/VBScript", 
	"summary": "VBScript (Microsoft Visual Basic Scripting Edition) is a programming language for scripting on Microsoft Windows using Component Object Model (COM), based on classic Visual Basic and Active Scripting. It was popular with system administrators for managing computers and automating many aspects of computing environments, and has been installed by default in every desktop release of Microsoft Windows since Windows 98 and in Windows Server since Windows NT 4.0 Option Pack.<br/><br/>System administration was not the only use case for VBScript; it also was conceived as Microsoft's answer to JavaScript. It was designed for use with Microsoft Internet Explorer browser together with other programming that runs at the client including ActiveX controls, automation servers and Java applets.", 
	"symbol": "Vbs", 
	"xpos": 13, 
	"ypos": 5
}, 
{
	"name": "Perl", 
	"category": "scripting language", 
	"number": 50, 
	"source": "https://www.perl.org/", 
	"summary": "Perl is a high-level, general-purpose, interpreted, dynamic programming language. It was developed by Larry Wall in 1987 as a general-purpose Unix scripting language to make report processing easier.<br/><br/>Perl borrows features from other programming languages including C, sh, AWK, and sed. It provides text processing facilities without the arbitrary data-length limits of many contemporary Unix command line tools. Perl is a highly expressive programming language: source code for a given algorithm can be short and highly compressible.<br/><br/>Perl gained widespread popularity in the mid-1990s as a CGI scripting language, in part due to its powerful regular expression and string parsing abilities. In addition to CGI, Perl 5 is used for system administration, network programming, finance, bioinformatics, and other applications, such as for graphical user interfaces (GUIs). It has been nicknamed \"the Swiss Army chainsaw of scripting languages\" because of its flexibility and power. In 1998, it was also referred to as the \"duct tape that holds the Internet together\", in reference to both its ubiquitous use as a glue language and its perceived inelegance.", 
	"symbol": "Pl", 
	"xpos": 14, 
	"ypos": 5
}, 
{
	"name": "Microcontroller", 
	"category": "type of computing", 
	"number": 51, 
	"source": "https://en.wikipedia.org/wiki/Microcontroller", 
	"summary": "A microcontroller (MCU) is a small computer on a single integrated circuit that is designed to control specific tasks within electronic systems. It combines the functions of a central processing unit (CPU), memory, and input/output interfaces, all on a single chip.<br/><br/>Before microcontrollers, logic circuits had to be made with logic gates, transistors and relays, often resulting in large printed circuit boards. If a circuit needed a modification, many times it required a whole new layout, components and soldering. When microcontrollers came into market, they provided a substantial reduction in size and volume of electronic circuits, and accelerated production lines, so new products could more quickly be produced and sold to customers.<br/><br/>There are many microcontroller families popular today, to name a few: ESP8266, Arduino, Intel 8051, MSP430, TLCS-870, STM32, LPC2000 and RL78.", 
	"symbol": "Mc", 
	"xpos": 15, 
	"ypos": 5
}, 
{
	"name": "Analog computing", 
	"category": "type of computing", 
	"number": 52, 
	"source": "https://www.quantamagazine.org/what-is-analog-computing-20240802/", 
	"summary": "Analog computer, any of a class of devices in which continuously variable physical quantities, such as electrical potential, fluid pressure, or mechanical motion, are represented in a way analogous to the corresponding quantities in the problem to be solved. The analog system is set up according to initial conditions and then allowed to change freely. Answers to the problem are obtained by measuring the variables in the analog model.<br/><br/>Analog computers can be made with electrical, mechanical, magnetic, chemical, kinetic, hydraulic, pneumatic and photoluminous components, combined to model a specific problem, in order to calculate values and perform actions. They can have many advantages over digital computers. First, the precision of values is limited by the quality of the components, not by digital word size, which can be a problem for floating-point numbers; second, the response is almost instantaneous, in the case of electrical and optical circuits; third, protection against cyberattacks; fourth, lower energy consumption, in some cases.<br/><br/>Among their disavantages, there are the greater physical size and difficulty to make modifications.<br/><br/>As of 2026, analog computers are being considered as solutions for artificial intelligence and machine learning.", 
	"symbol": "Ac", 
	"xpos": 16, 
	"ypos": 5
}, 
{
	"name": "Eclipse IDE", 
	"category": "developer tool", 
	"number": 53, 
	"source": "https://eclipseide.org/", 
	"summary": "Eclipse is an integrated development environment (IDE) used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment. It's a popular IDE for Java development.<br/><br/>The Eclipse SDK is free and open-source software, released under the terms of the Eclipse Public License, although it is incompatible with the GNU General Public License.", 
	"symbol": "Ec", 
	"xpos": 17, 
	"ypos": 5
}, 
{
	"name": "Linux", 
	"symbol": "L", 
	"category": "operating system", 
	"xpos": 18, 
	"ypos": 5, 
	"number": 54, 
	"source": "https://en.wikipedia.org/wiki/Linux",
	"summary": "Linux is a family of free and open-source Unix-like operating systems based on the Linux kernel, which was first released on 17 September 1991 by Linus Torvalds. Some members of the family are typically packaged as a distribution (a.k.a. distro), which includes the kernel alongside supporting system software and libraries developed by third parties—such as GNU, Red Hat, and X.Org—to create a complete operating system; however, not all Linux-based operating systems are considered distros, with Android being an example. Linux was originally designed as a clone of Unix and is distributed under the copyleft GPL license.<br/><br/>There are many thousands of Linux distributions, many based directly or indirectly on other distributions; popular Linux distros include Debian, Fedora Linux, Linux Mint, Arch Linux, and Ubuntu, while commercial distributions include Red Hat Enterprise Linux, SUSE Linux Enterprise, and ChromeOS. Linux distributions are frequently used in server platforms.<br/><br/>Linux is one of the most prominent examples of free and open-source software collaboration. The Linux kernel is considered by many to be the largest open source project. While originally developed for x86-based personal computers, it has since been ported to more platforms than any other operating system, and is used on a wide variety of devices including personal computers, workstations, mainframes, and embedded systems. Linux is the predominant operating system for servers and is also used on all of the world's 500 fastest supercomputers.", 
}, 
{
	"name": "YAML Ain’t Markup Language", 
	"category": "structured data format", 
	"number": 55, 
	"source": "https://quickref.me/yaml.html", 
	"summary": "YAML is a human-readable data serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted.<br/><br/>It is a subset of JSON, using key-value pairs delimited by colons. Quotes around texts are optional. Nesting is indicated by the number of whitespaces.",
	"symbol": "Yml", 
	"xpos": 1, 
	"ypos": 6
}, 
{
	"name": "Graphics Interchange Format", 
	"category": "internet file format", 
	"number": 56, 
	"source": "https://en.wikipedia.org/wiki/GIF", 
	"summary": "The Graphics Interchange Format (GIF) is a widely used image file format that supports both static and animated images. Created in 1987 by CompuServe, GIF was designed to store multiple bitmap images within a single file for easy exchange across different computer systems.<br/><br/>The format gained significant popularity with the advent of the World Wide Web in the early 1990s, especially after the introduction of animated GIFs in 1995. These animations, formed by combining multiple image frames, became a significant element of online culture, frequently used in memes and as expressive tools in social media and messaging applications.<br/><br/>The image data stored in a GIF file is always LZW compressed. Softwares that implemented the LZW algorithm were required to pay a license fee to the owner of the LZW patent (Unisys), but in 2004, all patents relating to the proprietary compression used for GIF expired. Since then, GIF has been free for all usage.", 
	"symbol": "Gif", 
	"xpos": 2, 
	"ypos": 6
}, 
{
	"name": "RS/232", 
	"symbol": "Sp", 
	"category": "physical protocol", 
	"number": 57, 
	"xpos": 3, 
	"ypos": 9,
	"source": "https://en.wikipedia.org/wiki/RS-232",
	"summary": "In telecommunications, RS-232 or Recommended Standard 232 is a standard introduced in 1960 for serial communication transmission of data.<br/><br/>A serial port complying with the RS-232 standard was once a standard feature of many types of computers. Personal computers used them for connections not only to modems, but also to printers, computer mice, data storage, uninterruptible power supplies, and other peripheral devices.<br/><br/>Compared with later interfaces such as RS-422, RS-485 and Ethernet, RS-232 has lower transmission speed, shorter maximum cable length, larger voltage swing, larger standard connectors, no multipoint capability and limited multidrop capability. In modern personal computers, USB has displaced RS-232 from most of its peripheral interface roles. Thanks to their simplicity and past ubiquity, however, RS-232 interfaces are still used—particularly in industrial CNC machines, networking equipment and scientific instruments where a short-range, point-to-point, low-speed wired data connection is fully adequate."
}, 
{
	"name": "PS/2", 
	"symbol": "Mk", 
	"category": "physical protocol", 
	"number": 58, 
	"xpos": 4, 
	"ypos": 9, 
	"source": "https://en.wikipedia.org/wiki/PS/2_port",
	"summary": "The PS/2 port is a 6-pin mini-DIN connector used for connecting keyboards and mice to a PC compatible computer system. Its name comes from the IBM Personal System/2 series of personal computers, with which it was introduced in 1987. The PS/2 mouse connector generally replaced the older DE-9 RS-232 \"serial mouse\" connector, while the PS/2 keyboard connector replaced the larger 5-pin/180° DIN connector used in the IBM PC/AT design.<br/><br/>The PS/2-style keyboard and mouse interfaces are electrically similar and employ the same communication protocol. However, a given system's keyboard and mouse port may not be interchangeable since the two devices use different sets of commands and the device drivers generally are hard-coded to communicate with each device at the address of the port that is conventionally assigned to that device. (That is, keyboard drivers are written to use the first port, and mouse drivers are written to use the second port.)"
}, 
{
	"name": "Peripheral Component Interconnect", 
	"symbol": "Pci", 
	"category": "physical protocol", 
	"number": 59, 
	"xpos": 5, 
	"ypos": 9, 
	"source": "https://en.wikipedia.org/wiki/PCI_Express",
	"summary": "PCI Express (Peripheral Component Interconnect Express), officially abbreviated as PCIe, is a high-speed standard used to connect hardware components inside computers. It is designed to replace older expansion bus standards such as PCI, PCI-X and AGP. Developed and maintained by the PCI-SIG (PCI Special Interest Group), PCIe is commonly used to connect graphics cards, sound cards, Wi-Fi and Ethernet adapters, and storage devices such as solid-state drives and hard disk drives.<br/><br/>Compared to earlier standards, PCIe supports faster data transfer, uses fewer pins, takes up less space, and allows devices to be added or removed while the computer is running (hot swapping). It also includes better error detection and supports newer features like I/O virtualization for advanced computing needs."
}, 
{
	"name": "Universal Serial Bus", 
	"symbol": "Usb", 
	"category": "physical protocol", 
	"number": 60, 
	"xpos": 6, 
	"ypos": 9, 
	"source": "https://www.britannica.com/technology/USB",
	"summary": "USB, technology used to connect computers to peripheral devices, such as computer mouses and USB flash drives.<br/><br/>Introduced in 1996, the USB standard was developed by a number of American companies, including IBM, Intel Corporation, and Microsoft Corporation, as a simpler way of connecting hardware to personal computers (PCs). Before USB technology, a PC typically would have one or two serial ports, a parallel port, mouse and keyboard ports, and, in some cases, a joystick port. A USB port offered a standardized way to connect a wide range of devices while offering significant advantages in speed over other connection types.<br/><br/>Since then most peripheral devices, such as printers, scanners, and keyboards, have used USB technology. The standard even led to development of new devices, such as portable USB flash drives, which replaced floppy disks.", 
}, 
{
	"name": "Bluetooth", 
	"symbol": "Bt", 
	"category": "physical protocol", 
	"number": 61, 
	"xpos": 7, 
	"ypos": 9, 
	"source": "https://www.bluetooth.com/",
	"summary": "Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances and building personal area networks (PANs). In the most widely used mode, transmission power is limited to 2.5 milliwatts, giving it a very short range of up to 10 metres (33 ft). It was developed by Ericsson, a Swedish manufacturer of mobile telephones, in 1998.<br/><br/>The technology first appeared in mobile phones and desktop computers in 2000 and spread to printers and mobile computers (laptops) the following year. By the middle of the decade, Bluetooth headsets for mobile phones had become near-ubiquitous, and the technology was being incorporated into smartphones, television sets, wristwatches, sunglasses, picture frames, and many other consumer products."
}, 
{
	"name": "Diskette", 
	"symbol": "Dk", 
	"category": "physical protocol", 
	"xpos": 8, 
	"ypos": 9, 
	"number": 62, 
	"source": "https://en.wikipedia.org/wiki/Floppy_disk",
	"summary": "A floppy disk, diskette, or floppy diskette is a type of disk storage made from a thin, flexible disk coated with a magnetic storage medium. It is enclosed in a square or nearly square plastic shell lined with fabric to help remove dust from the spinning disk. Floppy disks store digital data, which can be read or written when inserted into a floppy disk drive (FDD) connected to or built into a computer or other device. The three most popular formats of floppy disks (and their drives) are the 8-inch, 5¼-inch, and 3½-inch versions.<br/><br/>Floppy disks were so common in late 20th-century culture that many electronic and software programs continue to use save icons that look like floppy disks well into the 21st century, as a form of skeuomorphic design.<br/><br/>In May 2016, the United States Government Accountability Office released a report that covered the need to upgrade or replace legacy computer systems within federal agencies. According to this document, old IBM Series/1 minicomputers running on 8-inch floppy disks are still used to coordinate \"the operational functions of the United States' nuclear forces\". The government planned to update some of the technology by the end of the 2017 fiscal year. The update was completed in June 2019.<br/><br/>Use in Japan's government ended in 2024.<br/><br/>The British Airways Boeing 747-400 fleet, up to its retirement in 2020, used 3½-inch floppy disks to load avionics software.", 
}, 
{
	"name": "Compact Disc", 
	"symbol": "Cd", 
	"category": "physical protocol", 
	"xpos": 9, 
	"ypos": 9, 
	"number": 63, 
	"source": "https://musicproductionglossary.com/what-is-cd/",
	"summary": "A compact disc, commonly abbreviated as CD, is an optical disc data storage format released in 1982 that quickly became the standard format for digital audio recording and data storage.<br/><br/>Developed through a partnership between Sony and Philips, the audio CD revolutionized the music industry by allowing digital storage and playback of audio recordings using a new laser technology able to read coded digital data.<br/><br/>The very first test pressing of a compact disc was created in Hanover, Germany in August 1982, containing recordings of Richard Strauss’s Eine Alpensinfonie. Once production quality issues were worked out, the first commercial audio CD released to the public was Billy Joel’s album 52nd Street, which reached Japanese stores in October 1982. Initial adoption was slow, but by the late 1980s the CD became the dominant format for music distribution and listening as Sony and Philips worked to drive down prices on CD players.<br/><br/>The standard dimensions of a CD are a 120mm diameter and 1.2mm thickness, allowing a storage capacity of up to 700MB or 80 minutes of uncompressed stereo audio. This was a massive leap over earlier vinyl records, with a single disc able to hold the same amount of music as nearly 5 LPs. The pits and lands physically pressed into the polycarbonate plastic layer represent binary data read by a 780nm wavelength laser, while error correction ensures precise accuracy in the recording.<br/><br/>Later developments like the CD-ROM expanded the format’s versatility by allowing 700MB of general data storage, enabling computer programs, images, documents, and more to be distributed on compact discs. Although the CD has declined in popularity with the rise of streaming and high-resolution digital formats, its impact on music history and innovation in optical media storage cannot be overstated. For many, the audio CD still evokes nostalgia for the tactile, physical experience of interacting with a stylish physical album.", 
}, 
{
	"name": "Digital Versatile Disc", 
	"symbol": "Dvd", 
	"category": "physical protocol", 
	"xpos": 10, 
	"ypos": 9, 
	"number": 64,
	"source": "https://en.wikipedia.org/wiki/DVD",
	"summary": "DVD (digital video disc or digital versatile disc) is a digital optical disc data storage format. It was invented and developed in 1995 and first released on November 1, 1996, in Japan. The medium can store any kind of digital data and has been widely used to store video programs (watched using DVD players), software and other computer files. DVDs offer significantly higher storage capacity than compact discs (CD) while having the same dimensions. A standard single-layer DVD can store up to 4.7 GB of data, a dual-layer DVD up to 8.5 GB.<br/><br/>Prerecorded DVDs are mass-produced using molding machines that physically stamp data onto the DVD. Such discs are a form of DVD-ROM because data can only be read and not written or erased. Blank recordable DVD discs (DVD-R and DVD+R) can be recorded once using a DVD recorder and then function as a DVD-ROM. Rewritable DVDs (DVD-RW, DVD+RW, and DVD-RAM) can be recorded and erased many times.", 
}, 
{
	"name": "Blu-ray Disc", 
	"symbol": "Blr", 
	"category": "physical protocol", 
	"xpos": 11, 
	"ypos": 9, 
	"number": 65, 
	"source": "https://en.wikipedia.org/wiki/Blu-ray",
	"summary": "Blu-ray (Blu-ray Disc or BD) is a digital optical disc data storage format designed to supersede the DVD format. It was invented and developed in the early-mid 2000s and released worldwide on June 20, 2006, capable of storing several hours of high-definition video (HDTV 720p and 1080p). The main application of Blu-ray is as a medium for video material such as feature films and for the physical distribution of video games for the PlayStation 3, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X. The name refers to the blue laser used to read the disc, which allows information to be stored at a greater density than is possible with the longer-wavelength red laser used for DVDs, resulting in an increased capacity.<br/><br/>The polycarbonate disc is 12 centimetres (4+3⁄4 inches) in diameter and 1.2 millimetres (1⁄16 inch) thick, the same size as DVDs and CDs. Conventional (or \"pre-BDXL\") Blu-ray discs contain 25 GB per layer, with dual-layer discs (50 GB) being the industry standard for feature-length video discs. Triple-layer discs (100 GB) and quadruple-layer discs (128 GB) are available for BDXL re-writer drives.", 
}, 
{
	"name": "Magnetic tape", 
	"symbol": "Mag", 
	"category": "physical protocol", 
	"xpos": 12, 
	"ypos": 9, 
	"number": 66, 
	"source": "https://en.wikipedia.org/wiki/Magnetic-tape_data_storage",
	"summary": "Magnetic-tape data storage is a system for storing digital information on magnetic tape using digital recording. Commercial magnetic tape products used for data storage were first released in the 1950s and have continued to be developed and released to the present day.<br/><br/>Linear Tape-Open (LTO), also known as the LTO Ultrium format, is a magnetic tape data storage technology used for backup, data archiving, and data transfer. It was originally developed in the late 1990s as an open-standard alternative to the proprietary magnetic tape formats available at the time. Upon introduction, LTO rapidly defined the super tape market segment and has consistently been the best-selling super-tape format. The latest generation as of 2026, LTO-10, defines two unique cartridge types which can hold 30 TB or 40 TB each.<br/><br/>In contrast to other non-tape data storage formats, LTO offers high-capacity removable cartridges with a lower cost per TB and better long term stability. As an overall system, LTO requires significantly less electrical power per TB and includes built-in technologies useful for data interchange and safe-keeping, like LTFS, WORM, encryption and data compression."
}, 
{
	"name": "Dial-up connection", 
	"symbol": "Du", 
	"category": "physical protocol", 
	"xpos": 13, 
	"ypos": 9, 
	"number": 67, 
	"source": "https://en.wikipedia.org/wiki/Dial-up_Internet_access",
	"summary": "A dial-up connection is a form of Internet access that uses the public switched telephone network (PSTN) to establish a connection to an Internet service provider (ISP) by dialing a telephone number on a conventional telephone line. The user's computer or terminal equipment uses a modem to encode and decode Internet Protocol packets and control information into audible signals that can be transmitted over the telephone line.<br/><br/>After the introduction of commercial broadband in the late 1990s, dial-up became less popular. It is still used where other forms are not available or where the cost is too high, as in some rural or remote areas.", 
}, 
{
	"name": "Ethernet", 
	"symbol": "Eth", 
	"category": "physical protocol", 
	"xpos": 14, 
	"ypos": 9, 
	"number": 68,
	"source": "https://en.wikipedia.org/wiki/Ethernet",
	"summary": "Ethernet is a widely used technology for creating wired local area networks (LANs). It allows devices like computers, routers, printers, and gaming consoles to communicate with each other by transmitting data through physical cables—typically Ethernet cables such as Cat5e, Cat6, or Cat7.<br/><br/>Ethernet provides a fast, reliable, and secure way to transfer data. Unlike Wi-Fi, which uses radio waves, Ethernet uses copper cables to send signals directly between devices. This results in more stable connections, faster speeds, and lower latency, which is why Ethernet is often preferred for activities like online gaming, video streaming, and business networking.<br/><br/>It was commercially introduced in 1980 and first standardized in 1983 as ECMA-82 and shortly after as IEEE 802.3. Over time, Ethernet has largely replaced competing wired LAN technologies such as Token Ring, FDDI and ARCNET.<br/><br/>In the OSI model, Ethernet belongs to the data link layer (layer 2).", 
}, 
{
	"name": "WiFi / IEEE 802.11", 
	"symbol": "Wf", 
	"category": "physical protocol", 
	"xpos": 15, 
	"ypos": 9, 
	"number": 69,
	"source": "https://en.wikipedia.org/wiki/Wi-Fi",
	"summary": "Wi-Fi is a family of wireless network protocols based on the IEEE 802.11 family of standards, which are commonly used for local area networking of devices and Internet access, allowing nearby digital devices to exchange data by radio waves. These are the most widely used computer networks, used globally in home and small office networks to link devices and to provide Internet access with wireless routers and wireless access points in public places such as coffee shops, restaurants, hotels, libraries, and airports.<br/><br/>The range of an access point is about 20 m (66 ft) indoors, while some access points claim up to a 150 m (490 ft) range outdoors. Hotspot coverage can be as small as a single room with walls that block radio waves or as large as many square kilometers using multiple overlapping access points with roaming permitted between them. Over time, the speed and spectral efficiency of Wi-Fi has increased. As of 2025, some versions of Wi-Fi, running on suitable hardware at close range, can achieve speeds of 23 Gbit/s (gigabit per second).", 
}, 
{
	"name": "LoRaWAN", 
	"symbol": "Lrw", 
	"category": "physical protocol", 
	"xpos": 16, 
	"ypos": 9, 
	"number": 70, 
	"source": "https://lora-alliance.org/",
	"summary": "LoRaWAN is a low-power, wide-area network (LPWAN) protocol that wirelessly connects battery-operated devices to the Internet. LoRaWAN uses LoRa as the physical layer. LoRa can be thought of as the radio signal technology (similar to Wi-Fi or cellular), while LoRaWAN is the protocol and network architecture that manages communication over that signal.<br/><br/>Together, LoRa and LoRaWAN provide a solution for connecting low-power devices over long distances (up to 15 km in rural areas), making them a key technology for the Internet of Things (IoT). The technology is primarily used for applications where small amounts of data need to be transmitted infrequently from hard-to-reach locations, such as in smart agriculture, industrial monitoring, and asset tracking. The technology was originally developed by the French company Cycleo, which was acquired by Semtech in 2012, and the LoRaWAN standard is now managed by the LoRa Alliance."
}, 
{
	"name": "InfiniBand", 
	"symbol": "Ib", 
	"category": "physical protocol", 
	"xpos": 17, 
	"ypos": 9, 
	"number": 71, 
	"source": "https://www.cudocompute.com/blog/hpc-networking-introduction-to-infiniband",
	"summary": "InfiniBand (IB) is a high-performance networking technology initially developed to address the limitations of traditional Ethernet and fiber channels, so it was created with high throughput, low latency, and scalability in mind.<br/><br/>InfiniBand offers incredibly high data transfer rates, supporting speeds of up to 400 Gbps and beyond, achieved through advancements like the Next Data Rate (NDR) specification, which enables 400 Gbps speeds per data lane.<br/><br/>Beyond the speed of InfiniBand, it also achieves ultra-low latency, often in the sub-microsecond range. The minimal delay is important for applications like high-performance computing and financial transactions, where even tiny delays can significantly impact overall performance.<br/><br/>InfiniBand is highly scalable and can connect thousands of nodes in a single cluster, making it ideal for large-scale deployments in high-performance computing, cloud data centers, and enterprise environments where massive interconnected systems are required.", 
}, 
{
	"name": "Lisp", 
	"number": 72, 
	"symbol": "Lsp", 
	"category": "programming language", 
	"source": "https://lisp-lang.org/", 
	"summary": "Lisp (historically LISP, an abbreviation of \"list processing\") is a family of programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in the late 1950s, it is the second-oldest high-level programming language still in common use, after Fortran.<br/><br/>Lisp was originally created as a practical mathematical notation for computer programs, influenced by the notation of Alonzo Church's lambda calculus. It quickly became a favored programming language for artificial intelligence (AI) research. As one of the earliest programming languages, Lisp pioneered many ideas in computer science, including tree data structures, automatic storage management, dynamic typing, conditionals, higher-order functions, recursion, the self-hosting compiler, and the read–eval–print loop.", 
	"xpos": 4, 
	"ypos": 6
}, 
{
	"name": "Julia", 
	"category": "programming language", 
	"number": 73, 
	"source": "https://julialang.org/", 
	"summary": "Julia is a high-level open-source programming language, developed by a group of 4 people at MIT. Similar to R Programming Language, Julia is used for scientific computing, statistical computations and data analysis.<br/><br/>Julia was built mainly because of its speed in programming, it has much faster execution as compared to Python and R. It provides support for big data analytics by performing complex tasks such as cloud computing and parallelism, which play a fundamental role in analyzing Big Data.<br/><br/>To gain such features and compatibility, Julia draws upon the lineage of mathematical programming languages but also adopts much from many other popular dynamic languages, which include Perl, Python, Lua, Lisp, and Ruby.", 
	"symbol": "Jl", 
	"xpos": 5, 
	"ypos": 6
}, 
{
	"name": "High-Level Shader Language", 
	"category": "programming language", 
	"number": 74, 
	"source": "https://programming.muthu.co/posts/beginners-guide-to-hlsl/", 
	"summary": "High-Level Shading Language (HLSL) is a programming language developed by Microsoft for writing shaders. Shaders are small programs that run on a graphics processing unit (GPU) to determine how objects are rendered on the screen. They control various aspects of rendering, including lighting, texturing, and effects.<br/><br/>HLSL is specifically designed to be used with DirectX, Microsoft’s graphics API, making it a crucial tool for game developers and other graphics programmers working within the DirectX ecosystem. HLSL provides a relatively high-level interface, abstracting away many low-level GPU details, while still offering fine-grained control over the rendering process.", 
	"symbol": "Hlsl", 
	"xpos": 6, 
	"ypos": 6
}, 
{
	"name": "C#", 
	"category": "programming language", 
	"number": 75, 
	"source": "https://dotnet.microsoft.com/en-us/languages/csharp", 
	"summary": "C# (pronounced c sharp) is a strongly type object-oriented programming language of the .NET ecosystem.<br/><br/>The principal designers of the C# programming language were Anders Hejlsberg, Scott Wiltamuth, and Peter Golde from Microsoft. It was first released in July 2000 as part of .NET Framework.<br/><br/>On 2016, .NET became an open-source and multiplatform framework, labeled .NET Core at that time; with it, C# and other .NET languages now run on Windows, Linux, macOS and other operating systems.<br/><br/>C# is very popular for ASP.NET web servers, desktop GUIs and console applications.",
	"symbol": "C#", 
	"xpos": 7, 
	"ypos": 6
}, 
{
	"name": "Personal Home Page", 
	"category": "programming language", 
	"number": 76, 
	"source": "https://www.php.net/", 
	"summary": "PHP is a general-purpose scripting language geared towards web development. It was created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.<br/><br/>PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code—which may be any type of data, such as generated HTML or binary image data—can form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks exist that can be employed to orchestrate or facilitate the generation of that response.<br/><br/>PHP can be used for programming tasks outside the web context, though non-web uses are rare.", 
	"symbol": "Php", 
	"xpos": 8, 
	"ypos": 6
}, 
{
	"name": "Swift", 
	"category": "programming language", 
	"number": 77, 
	"source": "https://www.swift.org/", 
	"summary": "Swift is a general purpose, compiled programming language which was started by Chris Lattner and team in 2010 and further developed by Apple Inc. for modern programming to its operating systems, like macOS, iOS, watchOS, tvOS, and beyond. It was introduced at Apple's 2014 Worldwide Developers Conference (WWDC).<br/><br/>Apple intended Swift to support many core concepts associated with Objective-C, notably dynamic dispatch, widespread late binding, extensible programming, and similar features, but in a safer way, making it easier to catch software bugs; Swift has features addressing some common programming errors like null pointer dereferencing and provides syntactic sugar to help avoid the pyramid of doom. Swift supports the concept of protocol extensibility, an extensibility system that can be applied to types, structs and classes, which Apple promotes as a real change in programming paradigms they term \"protocol-oriented programming\" (similar to traits and type classes).", 
	"symbol": "Sw", 
	"xpos": 9, 
	"ypos": 6
}, 
{
	"name": "Zig", 
	"category": "programming language", 
	"number": 78, 
	"source": "https://ziglang.org", 
	"summary": "Zig is a system programming language designed to be a general-purpose improvement to the C programming language. It is free and open-source software, released under an MIT License. Zig was designed by Andrew Kelley and first announced in 2016.<br/><br/>Features adopted from modern languages include the addition of compile time generic programming data types, allowing functions to work on a variety of data, along with a small set of new compiler directives to allow access to the information about those types using reflection. Zig requires manual memory management. Features for low-level programming include packed structs, arbitrary-width integers and multiple pointer types.", 
	"symbol": "Zig", 
	"xpos": 10, 
	"ypos": 6
}, 
{
	"name": "Fortran", 
	"category": "programming language", 
	"number": 79, 
	"source": "https://fortran-lang.org/", 
	"summary": "Fortran (short for formula translation) is a compiled, imperative programming language designed for numeric computation and scientific computing.<br/><br/>It was originally developed by IBM with a reference manual being released in 1956; however, the first compilers only began to produce accurate code two years later. Fortran computer programs have been written to support scientific and engineering applications, such as numerical weather prediction, finite element analysis, computational fluid dynamics, plasma physics, geophysics, computational physics, crystallography and computational chemistry. It is a popular language for high-performance computing.<br/><br/>In the early 1950s, computer programming was the exclusive domain of a small group of specialists who wrote code in machine language, a complex and cumbersome set of instructions. Programming was for experts only — outsiders need not apply. Then came Fortran.<br/><br/>Fortran democratized computer programming by providing scientists, mathematicians and engineers the ability to input their problems directly into the computer without relying on a programmer to translate their needs into machine code. What was formerly a laborious task of manually keying as many as a thousand program instructions for a given problem could now be translated, automated and reduced to only 47 in Fortran.<br/><br/>Fortran instigated the process of abstracting software from the hardware on which it ran. Previous machine language programs had to be written for a specific computer, while a Fortran program could run on any system with a Fortran compiler.", 
	"symbol": "F", 
	"xpos": 11, 
	"ypos": 6
}, 
{
	"name": "Assembly", 
	"category": "programming language", 
	"number": 80, 
	"source": "https://en.wikipedia.org/wiki/Assembly_language", 
	"summary": "Assembly language is essentially a representation of machine code in human-readable words. Each assembly code instruction usually corresponds to a single machine code instruction. It provides human-readable instructions which map directly to the 1s and 0s of machine code. For example, rather than using the machine code instruction “1001000100”, you can use the `add` instruction. They both mean the same thing, but the assembly instruction is much easier to read.<br/><br/>Because assembly depends on the machine code instructions, each assembly language is specific to a particular computer architecture such as x86 or ARM.<br/><br/>Assembly language uses mnemonic symbols to represent low-level machine instructions (opcodes), directives, and usually architectural registers and flags. Many operations require one or more operands in order to form a complete instruction. Most assemblers permit named constants, registers, and labels for program and memory locations, and can calculate expressions for operands. Thus, programmers are freed from tedious repetitive calculations and assembler programs are much more readable than machine code.", 
	"symbol": "Asm", 
	"xpos": 12, 
	"ypos": 6
}, 
{
	"name": "PowerShell", 
	"category": "scripting language", 
	"number": 81, 
	"source": "https://learn.microsoft.com/en-us/powershell/scripting/overview", 
	"summary": "PowerShell is a cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework. Runs on Windows, Linux, and macOS. It was designed for system administration and automation. Unlike most shells that only accept and return text, PowerShell accepts and returns objects, and can call methods from .NET.<br/><br/>Initially released in 2006 by Microsoft, PowerShell has since evolved into a powerful tool used by IT professionals, developers, and sysadmins across the globe. Its ability to handle complex tasks, automate repetitive processes, and manage system configurations makes it indispensable in modern IT infrastructure.", 
	"symbol": "Ps", 
	"xpos": 13, 
	"ypos": 6
}, 
{
	"name": "NullSoft Scriptable Install System", 
	"category": "scripting language", 
	"number": 82, 
	"source": "https://nsis.sourceforge.io/Main_Page", 
	"summary": "NSIS (Nullsoft Scriptable Install System) is a widely used open‑source solution for creating software installers on Windows. Originally designed by Nullsoft, the developer of Winamp, this tool allows developers to generate lightweight, customizable, and high‑performance installation packages.<br/><br/>Being a user's first experience with your product, a stable and reliable installer is an important component of successful software. With NSIS you can create such installers that are capable of doing everything that is needed to setup your software.<br/><br/>NSIS is script-based and allows you to create the logic to handle even the most complex installation tasks. Many plug-ins and scripts are already available: you can create web installers, communicate with Windows and other software components, install or update shared components and more.", 
	"symbol": "Nsis", 
	"xpos": 14, 
	"ypos": 6
}, 
{
	"name": "Batch file", 
	"category": "scripting language", 
	"number": 83, 
	"source": "https://en.wikibooks.org/wiki/Windows_Batch_Scripting", 
	"summary": "A batch file is a script file in DOS, OS/2 and Microsoft Windows. It consists of a series of commands to be executed by the command-line interpreter, stored in a plain text file.<br/><br/>When a batch file is run, the shell program (usually COMMAND.COM or cmd.exe) reads the file and executes its commands, normally line-by-line. Unix-like operating systems, such as Linux, have a similar type of file called a shell script.<br/><br/>The filename extension .bat is used in DOS and Windows. Windows NT and OS/2 also added .cmd.", 
	"symbol": "Bat", 
	"xpos": 15, 
	"ypos": 6
}, 
{
	"name": "Python", 
	"category": "scripting language", 
	"number": 84, 
	"source": "https://www.python.org/", 
	"summary": "Python is an interpreted, object-oriented, high-level programming language with dynamic typing. It is widely taught as an introductory programming language.<br/><br/>It was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands. It was designed as a successor to the ABC programming language, which was inspired by SETL.", 
	"symbol": "Py", 
	"xpos": 16, 
	"ypos": 6
}, 
{
	"name": "Quantum computing", 
	"category": "type of computing", 
	"number": 85, 
	"source": "https://en.wikipedia.org/wiki/Quantum_computing", 
	"summary": "A quantum computer is a real or theoretical computer that exploits quantum phenomena like superposition and entanglement in an essential way.<br/><br/>The basic unit of information in quantum computing, the qubit (or \"quantum bit\"), serves the same function as the bit in digital computing. However, unlike a classical bit, which can be in one of two states (a binary), a qubit can exist in a linear combination of two states known as a quantum superposition. The result of measuring a qubit is one of the two states given by a probabilistic rule. If a quantum computer manipulates the qubit in a particular way, wave interference effects amplify the probability of the desired measurement result. The design of quantum algorithms involves creating procedures that allow a quantum computer to perform this amplification.<br/><br/>Quantum computers are not yet practical for real-world applications, as of 2026. Physically engineering high-quality qubits has proven to be challenging. If a physical qubit is not sufficiently isolated from its environment, it suffers from quantum decoherence, introducing noise into calculations. National governments have invested heavily in experimental research aimed at developing scalable qubits with longer coherence times and lower error rates. Example implementations include superconductors (which isolate an electrical current by eliminating electrical resistance) and ion traps (which confine a single atomic particle using electromagnetic fields). Researchers have claimed, and are widely believed to be correct, that certain quantum devices can outperform classical computers on narrowly defined tasks, a milestone referred to as quantum advantage or quantum supremacy. These tasks are not necessarily useful for real-world applications. As a result, current demonstrations are best understood as scientific milestones rather than evidence of broad near-term deployment. In December 2024, Google's Willow chip achieved below-threshold error correction, a milestone 30 years in the making, while global government investment in quantum computing reached $10 billion by April 2025.", 
	"symbol": "Q", 
	"xpos": 17, 
	"ypos": 6
}, 
{
	"name": "Apple macOS", 
	"symbol": "M", 
	"category": "operating system", 
	"xpos": 18, 
	"ypos": 6, 
	"number": 86,
	"source": "https://www.apple.com/br/os/macos/",
	"summary": "macOS (previously OS X and originally Mac OS X) is a proprietary Unix operating system, derived from OPENSTEP for Mach and FreeBSD, which has been marketed and developed by Apple since 2001. It is the current operating system for Apple's line of Mac computers. As of April 2026, within the market of desktop and laptop computers, it is the second most widely used desktop OS, after Microsoft Windows and ahead of all Linux distributions, including ChromeOS and SteamOS.<br/><br/>Mac OS X succeeded the classic Mac OS, the primary Macintosh operating system from 1984 to 2001. Its underlying architecture came from NeXT's NeXTSTEP, as a result of Apple's acquisition of NeXT, which also brought Steve Jobs back to Apple. The first desktop version, Mac OS X 10.0, was released on March 24, 2001. Apart from OS X Lion, all versions from Mac OS X Leopard onwards are UNIX 03 certified. Each of Apple's other contemporary operating systems, including iOS, iPadOS, watchOS, tvOS, audioOS and visionOS, are derivatives of macOS.", 
}, 
{
	"name": "Apache Parquet", 
	"category": "structured data format", 
	"number": 87, 
	"source": "https://parquet.apache.org/", 
	"summary": "Apache Parquet is an open source, column-oriented data file format designed for efficient data storage and retrieval. It provides high performance compression and encoding schemes to handle complex data in bulk and is supported in many programming languages and analytics tools.<br/><br/>In Parquet, compression is performed column by column, which enables different encoding schemes to be used for text and integer data. This strategy also keeps the door open for newer and better encoding schemes to be implemented as they are invented.<br/><br/>Parquet supports various compression formats: snappy, gzip, LZO, brotli, zstd, and LZ4.<br/><br/>It has an automatic dictionary encoding enabled dynamically for data with a small number of unique values (i.e. below 100 thousand) that enables significant compression and boosts processing speed.<br/><br/>Parquet implements a hybrid of bit packing and run-length encoding, in which the encoding switches based on which produces the best compression results. This strategy works well for certain types of integer data and combines well with dictionary encoding.", 
	"symbol": "Pqt", 
	"xpos": 1, 
	"ypos": 7
}, 
{
	"name": "Scalable Vect. Graphics", 
	"category": "internet file format", 
	"number": 88, 
	"source": "https://developer.mozilla.org/en-US/docs/Web/SVG", 
	"summary": "The SVG file format is an XML-based vector image format, and it’s a perfect fit when designing for scale in a 2D format. The format provides limitless scalability so that your designs work across different mediums and in various sizes. This flexibility allows you to create an image that can be displayed on both a mobile web page and a billboard.<br/><br/>Compared to classic bitmapped image formats such as JPEG or PNG, SVG-format vector images can be rendered at any size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so.<br/><br/>The SVG format uses XML for accessibility. These files can be manipulated in graphic design software or a simple text editor. The text-based file storage also allows SVG files to be indexed and searched on the web, providing an additional layer of search engine optimization benefits for websites that use SVG files.<br/><br/>In the late 1990s, the World Wide Web Consortium (W3) recognized a need for a universal image format, and sent out a call for proposals. The tech world responded with options from designers and developers at influential companies like Adobe, IBM, Microsoft, Boeing, and Xerox.<br/><br/>These ideas informed what eventually became the standard vector graphics format for the web–the SVG file. Today, SVGs provide designers with an easy-to-work-with format that is widely accessible.", 
	"symbol": "Svg", 
	"xpos": 2, 
	"ypos": 7
}, 
{
	"name": "Transmission Control Protocol", 
	"symbol": "Tcp", 
	"category": "logic protocol", 
	"xpos": 3, 
	"ypos": 10, 
	"number": 89,
	"source": "https://en.wikipedia.org/wiki/Transmission_Control_Protocol",
	"summary": "Transmission Control Protocol (TCP) is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees the delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br/><br/>TCP is connection-oriented, meaning that sender and receiver first need to establish a connection based on agreed parameters; they do this through a three-way handshake procedure. The server must be listening (passive open) for connection requests from clients before a connection is established. The three-way handshake (active open), retransmission, and error detection add to reliability but lengthen latency. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP) instead, which provides a connectionless datagram service that prioritizes time over reliability. TCP employs network congestion avoidance.", 
}, 
{
	"name": "User Datagram Protocol", 
	"symbol": "Udp", 
	"category": "logic protocol", 
	"xpos": 4, 
	"ypos": 10, 
	"number": 90, 
	"source": "https://en.wikipedia.org/wiki/User_Datagram_Protocol",
	"summary": "In computer networking, the User Datagram Protocol (UDP) is one of the core communication protocols of the Internet protocol suite used to send messages (transported as datagrams in packets) to other hosts on an Internet Protocol (IP) network.<br/><br/>UDP is a connectionless protocol, meaning that messages are sent without negotiating a connection and that UDP does not keep track of what it has sent. It is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the protocol stack. Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to retransmission, which may not be an option in a real-time system.<br/><br/>If error-correction facilities are needed at the network interface level, an application may instead use Transmission Control Protocol (TCP) or Stream Control Transmission Protocol (SCTP), which are designed for this purpose.", 
}, 
{
	"name": "Internet Protocol", 
	"symbol": "Ip", 
	"category": "logic protocol", 
	"xpos": 5, 
	"ypos": 10, 
	"number": 91,
	"source": "https://en.wikipedia.org/wiki/Internet_Protocol",
	"summary": "The Internet Protocol (IP) is the network layer communications protocol in the Internet protocol suite for relaying datagrams across network boundaries. Its routing function enables internetworking, and essentially establishes the Internet.<br/><br/>IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers. For this purpose, IP defines packet structures that encapsulate the data to be delivered. It also defines addressing methods that are used to label the datagram with source and destination information. With IPSec, the protocol also provides authentication and encryption capabilities.<br/><br/>IP has two mainstream versions, IPv4, the eldest and most popular one; and IPv6, newer, made to support more IP addresses. On April 2026, a new version has been proposed: IPv8.", 
}, 
{
	"name": "Network Time Protocol", 
	"symbol": "Ntp", 
	"category": "logic protocol", 
	"xpos": 6, 
	"ypos": 10, 
	"number": 92, 
	"source": "https://en.wikipedia.org/wiki/Network_Time_Protocol",
	"summary": "The Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. In operation since before 1985, NTP is one of the oldest Internet protocols in current use. NTP was designed by David L. Mills of the University of Delaware.<br/><br/>NTP is intended to synchronize participating computers to within a few milliseconds of Coordinated Universal Time (UTC).  It uses the intersection algorithm, a modified version of Marzullo's algorithm, to select accurate time servers and is designed to mitigate the effects of variable network latency. NTP can usually maintain time to within tens of milliseconds over the public Internet, and can achieve better than one millisecond accuracy in local area networks under ideal conditions.", 
},
{
	"name": "Virtual Private Network", 
	"symbol": "Vpn", 
	"category": "logic protocol", 
	"xpos": 7, 
	"ypos": 10, 
	"number": 93, 
	"source": "https://en.wikipedia.org/wiki/Virtual_private_network",
	"summary": "A Virtual Private Network (VPN) is an overlay network that uses network virtualization to extend a private network across a public network, such as the Internet, via the use of encryption and tunneling protocols. In a VPN, a tunneling protocol is used to transfer network messages from one network host to another.<br/><br/>In a short explanation, network packets such as IP, TCP and UDP are encrypted and laid inside the data portions of other IP, TCP and UDP packets that travel in public networks. The inner packets can only be decrypted and read by the terminations that belong to the VPN; they cannot be decrypted by the public network owner. The authentication and key exchange is normally done by the Diffie-Hellman (DH) algorithm.<br/><br/>The VPN provider and the online service being accessed via the VPN still have visibility of the user's activities, but through encryption and obfuscation, the risk of successful external data sniffing attacks is reduced.<br/><br/>VPNs are used by companies to allow employees and partners remote access to their machines. They are also used by citizens of dictatorships and strict regimes to circumvent Internet blockades (governmental firewalls) and access blocked websites and apps.<br/><br/>Some of the most popular technologies used for VPNs are IPSec, L2TP, OpenVPN, WireGuard and DMVPN.",
},		
{
	"name": "Domain Name System", 
	"symbol": "Dns", 
	"category": "logic protocol", 
	"xpos": 8, 
	"ypos": 10, 
	"number": 94,
	"source": "https://www.cloudflare.com/learning/dns/what-is-dns/",
	"summary": "The Domain Name System (DNS) is the phonebook of the Internet. DNS translates domain names to IP addresses so browsers and programs can load Internet resources.<br/><br/>The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1).",
}, 
{
	"name": "Transport Layer Security", 
	"symbol": "Tls", 
	"category": "logic protocol", 
	"xpos": 9, 
	"ypos": 10, 
	"number": 95, 
	"source": "https://en.wikipedia.org/wiki/Transport_Layer_Security",
	"summary": "Transport Layer Security (TLS) is a cryptographic protocol designed to provide communications security over a computer network, such as the Internet. The protocol is widely used in applications such as email, instant messaging, and voice over IP, but its use in securing HTTPS remains the most publicly visible.<br/><br/>The TLS protocol aims primarily to provide security, including privacy (confidentiality), integrity, and authenticity through the use of cryptography, such as the use of certificates, between two or more communicating computer applications. It runs on top of other protocols, such as TCP/IP, and is itself composed of two layers: the TLS record and the TLS handshake protocols.<br/><br/>TLS is a proposed Internet Engineering Task Force (IETF) standard, first defined in 1999, and the current version is TLS 1.3, defined in August 2018. TLS builds on the now-deprecated SSL (Secure Sockets Layer) specifications (1994, 1995, 1996) developed by Netscape Communications for adding the HTTPS protocol to their Netscape Navigator web browser.",
}, 
{
	"name": "Internet Message Access Protocol", 
	"symbol": "Imap", 
	"category": "logic protocol", 
	"xpos": 10, 
	"ypos": 10, 
	"number": 96, 
	"source": "https://imap.org/",
	"summary": "Internet Message Access Protocol (IMAP) is an Internet standard protocol used by email clients to retrieve email messages from a mail server over a TCP/IP connection.<br/><br/>IMAP was designed with the goal of permitting complete management of an email box by multiple email clients; therefore, clients generally leave messages on the server until the user explicitly deletes them. An IMAP server typically listens on port number 143. IMAP over SSL/TLS (IMAPS) is assigned the port number 993.<br/><br/>Virtually all modern e-mail clients and servers support IMAP, which along with the earlier POP3 (Post Office Protocol) are the two most prevalent standard protocols for email retrieval.", 
}, 
{
	"name": "Simple Mail Transfer Protocol", 
	"symbol": "Smtp", 
	"category": "logic protocol", 
	"xpos": 11, 
	"ypos": 10, 
	"number": 97,
	"source": "https://www.cloudflare.com/learning/email-security/what-is-smtp/",
	"summary": "The Simple Mail Transfer Protocol (SMTP) is an Internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages. User-level email clients typically use SMTP only for sending messages to a mail server for relaying, and typically submit outgoing email to the mail server on port 465 or 587 per RFC 8314.<br/><br/>SMTP's origins began in 1980, building on concepts implemented on the ARPANET since 1971. It has been updated, modified and extended multiple times. The protocol version in common use today has extensible structure with various extensions for authentication, encryption, binary data transfer, and internationalized email addresses. SMTP servers commonly use the Transmission Control Protocol on port number 25 (between servers) and 587 (for submission from authenticated clients), both with or without encryption, and 465 with encryption for submission.", 
}, 
{
	"name": "Post Office Protocol", 
	"symbol": "Pop", 
	"category": "logic protocol", 
	"xpos": 12, 
	"ypos": 10, 
	"number": 98,
	"source": "https://en.wikipedia.org/wiki/Post_Office_Protocol",
	"summary": "Post Office Protocol (POP) is an application-layer Internet standard protocol used by e-mail clients to retrieve e-mail from a mail server. Today, POP version 3 (POP3) is the most commonly used version.<br/><br/>The Post Office Protocol provides access via an Internet Protocol (IP) network for a user client application to a mailbox (maildrop) maintained on a mail server. The protocol supports list, retrieve and delete operations for messages. POP3 clients connect, retrieve all messages, store them on the client computer, and finally delete them from the server. This design of POP and its procedures was driven by the need of users having only temporary Internet connections, such as dial-up access, allowing these users to retrieve e-mail when connected, and subsequently to view and manipulate the retrieved messages when offline.<br/><br/>POP3 clients also have an option to leave mail on the server after retrieval, and in this mode of operation, clients will only download new messages which are identified by using the UIDL command (unique-id list).", 
}, 
{
	"name": "File Transfer Protocol", 
	"symbol": "Ftp", 
	"category": "logic protocol", 
	"xpos": 13, 
	"ypos": 10, 
	"number": 99,
	"source": "https://en.wikipedia.org/wiki/File_Transfer_Protocol",
	"summary": "The File Transfer Protocol (FTP) is a standard communication protocol used for the transfer of computer files from a server to a client over a computer network.<br/><br/>FTP users may authenticate themselves with a plain-text sign-in protocol, normally in the form of a username and password, but can connect anonymously if the server is configured to allow it.<br/><br/>During an FTP transmission, there are four commands used by the computers, servers, or proxy servers that are communicating. These are “send,” “get,” “change directory,” and “transfer.”<br/><br/>While transferring files, FTP uses three different modes: block, stream, and compressed. The stream mode enables FTP to manage information in a string of data without any boundaries between them. The block mode separates the data into blocks, and in the compress mode, FTP uses an algorithm called the Lempel-Ziv to compress the data.", 
}, 
{
	"name": "Hypertext Transfer Protocol", 
	"symbol": "Http", 
	"category": "logic protocol", 
	"xpos": 14, 
	"ypos": 10, 
	"number": 100,
	"source": "https://alexandrehtrb.github.io/posts/2024/03/http2-and-http3-explained/",
	"summary": "The Hypertext Transfer Protocol (HTTP) is a protocol used for transmitting data on top of TCP or UDP protocols. It is the foundation of any data exchange on the Web and allows for the retrieval of HTML pages, images, videos, and other resources. HTTP operates on a client-server model, where the client sends a request to the server, and the server responds with the requested data.", 
}, 
{
	"name": "Message Queue Telemetry Transport", 
	"symbol": "Mqtt", 
	"category": "logic protocol", 
	"xpos": 15, 
	"ypos": 10, 
	"number": 101, 
	"source": "https://mqtt.org/",
	"summary": "Message Queue Telemetry Transport (MQTT) is a lightweight, publish–subscribe, machine-to-machine network protocol for message queueing services. It is designed for connections with remote locations that have devices with resource constraints or limited network bandwidth, such as in the Internet of things (IoT). It must run over a transport protocol that provides ordered, lossless, bi-directional connections—typically, TCP/IP.<br/><br/>Andy Stanford-Clark (IBM) and Arlen Nipper (then working for Eurotech, Inc.) authored the first version of the protocol in 1999. It was used to monitor oil pipelines within the SCADA industrial control system. The goal was to have a protocol that is bandwidth-efficient, lightweight and uses little battery power, because the devices were connected via satellite link, which was extremely expensive at that time.<br/><br/>The MQTT protocol defines two types of network entities: a message broker and a number of clients. An MQTT broker is a server that receives messages from publishing clients and then routes the messages to the appropriate destination clients. An MQTT client is any device, from a microcontroller up to a full-fledged server, that runs an MQTT library and connects to an MQTT broker over a network.<br/><br/>Information is organized in a hierarchy of topics. When a publisher has a new item of data to distribute, it sends a control message with the data to the connected broker. The broker then distributes the information to any clients that have subscribed to that topic. The publisher does not need to have any data on the number or locations of subscribers; and subscribers, in turn, do not have to be configured with any data about the publishers. ", 
},
{
	"name": "BitTorrent", 
	"symbol": "To", 
	"category": "logic protocol", 
	"xpos": 16, 
	"ypos": 10, 
	"number": 102,
	"source": "https://en.wikipedia.org/wiki/BitTorrent",
	"summary": "BitTorrent is a communication protocol for peer-to-peer file sharing (P2P), which enables users to distribute data and electronic files over the Internet in a decentralized manner.<br/><br/>To send or receive files, users use a BitTorrent client on their Internet-connected computer, which are available for a variety of computing platforms and operating systems, including an official client. BitTorrent trackers provide a list of files available for transfer and allow the client to find peer users, known as \"seeds\", who may transfer the files. BitTorrent downloading is considered to be faster than HTTP (\"direct downloading\") and FTP due to the lack of a central server that could limit bandwidth.<br/><br/>Programmer Bram Cohen, a University at Buffalo alumnus, designed the protocol in April 2001 with the idea of speeding up download time by enabling files to be downloaded from many sources. He then released the first available version on 2 July 2001.", 
}, 
{
	"name": "WebSockets", 
	"symbol": "Ws", 
	"category": "logic protocol", 
	"xpos": 17, 
	"ypos": 10, 
	"number": 103,
	"source": "https://en.wikipedia.org/wiki/WebSocket",
	"summary": "WebSocket is a computer communications protocol that provides a bidirectional communication channel over a single HTTP connection. HTTP connections usually operate on a request-response model, but the WebSocket protocol allows them to operate bidirectionally, with clients and servers exchanging messages at will between each other.<br/><br/>WebSockets often are employed to provide real-time communications and updates, on mobile apps (especially communication and instant messaging), programs and websites.", 
}, 
{
	"name": "F#", 
	"category": "programming language", 
	"number": 104, 
	"source": "https://fsharp.org/", 
	"summary": "F# (pronounced f sharp) is a strongly typed functional language. It runs on Windows, Linux, macOS and can be transpiled to JavaScript, to run on browsers. It is based on OCaml and is a language of the .NET ecosystem.<br/><br/>F# is used for scientific computing and research, financial processing, data analysis, and also for enterprise development. Being a .NET language, it can interop with C# and VB.NET code, and use libraries from NuGet.",
	"symbol": "F#", 
	"xpos": 4, 
	"ypos": 7
}, 
{
	"name": "Erlang", 
	"category": "programming language", 
	"number": 105, 
	"source": "https://www.erlang.org/", 
	"summary": "Erlang is a programming language used to build scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution, fault tolerance and hot swapping, where code can be changed without stopping a system.<br/><br/>It was originally proprietary software within Ericsson, developed by Joe Armstrong, Robert Virding, and Mike Williams in 1986, but was released as free and open-source software in 1998. Erlang/OTP is supported and maintained by the Open Telecom Platform (OTP) product unit at Ericsson.", 
	"symbol": "Erl", 
	"xpos": 5, 
	"ypos": 7
}, 
{
	"name": "MATLAB", 
	"category": "programming language", 
	"number": 106, 
	"source": "https://www.mathworks.com/products/matlab.html", 
	"summary": "MATLAB (Matrix Laboratory) is a proprietary multi-paradigm programming language and numeric computing environment developed by MathWorks. MATLAB allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages.<br/><br/>MATLAB was invented by mathematician and computer programmer Cleve Moler. The idea for MATLAB was based on his 1960s PhD thesis. Moler became a math professor at the University of New Mexico and started developing MATLAB for his students as a hobby. He developed MATLAB's initial linear algebra programming in 1967 with his one-time thesis advisor, George Forsythe. This was followed by Fortran code for linear equations in 1971.<br/><br/>The first early version of MATLAB was completed in the late 1970s. The software was disclosed to the public for the first time in February 1979 at the Naval Postgraduate School in California. Early versions of MATLAB were simple matrix calculators with 71 pre-built functions. At the time, MATLAB was distributed for free to universities. Moler would leave copies at universities he visited and the software developed a strong following in the math departments of university campuses.", 
	"symbol": "Mat", 
	"xpos": 6, 
	"ypos": 7
}, 
{
	"name": "Elixir", 
	"category": "programming language", 
	"number": 107, 
	"source": "https://elixir-lang.org/", 
	"summary": "Elixir is a functional, concurrent, high-level general-purpose programming language that runs on the BEAM virtual machine, which is also used to implement the Erlang programming language. Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications.<br/><br/>José Valim, a Brazilian programmer, created the Elixir programming language as a research and development project at Plataformatec. His goals were to enable higher extensibility and productivity in the Erlang VM while maintaining compatibility with Erlang's ecosystem.<br/><br/>Elixir is aimed at large-scale sites and apps. It uses features of Ruby, Erlang, and Clojure to develop a high-concurrency and low-latency language, to handle large data volumes. Elixir is also used in telecommunications, e-commerce, and finance.", 
	"symbol": "Ex", 
	"xpos": 7, 
	"ypos": 7
}, 
{
	"name": "Scala", 
	"category": "programming language", 
	"number": 108, 
	"source": "https://www.scala-lang.org/", 
	"summary": "Scala is a strongly typed functional language of the Java ecosystem.<br/><br/>Scala source code can be compiled to JVM bytecode and run on a Java virtual machine (JVM). When running on the JVM, Scala provides language interoperability with Java so that libraries written in either language may be referenced directly in Scala or Java code. Like Java, Scala is object-oriented, and uses a syntax termed curly-brace which is similar to the language C. Unlike Java, Scala has many features of functional programming languages, including currying, immutability, lazy evaluation, and pattern matching.<br/><br/>The design of Scala started in 2001 at the École Polytechnique Fédérale de Lausanne, in Switzerland, by Martin Odersky. It followed on from work on Funnel, a programming language combining ideas from functional programming and Petri nets. Odersky formerly worked on Generic Java, and javac, Sun's Java compiler.", 
	"symbol": "Sc", 
	"xpos": 8, 
	"ypos": 7
}, 
{
	"name": "Scratch", 
	"category": "educational language", 
	"number": 109, 
	"source": "https://scratch.mit.edu/", 
	"summary": "Scratch is a educational graphical programming language developed by the Lifelong Kindergarten group at the MIT Media Lab. In Scratch, you can drag and combine code blocks to make a range of programs, including animations, stories, musical instruments, and games. It’s a bit like the programming equivalent of building blocks.<br/><br/>It is used in many schools as part of the curriculum. It is free, and young people can use it at home as well as in clubs.<br/><br/>Scratch allows young people to learn coding concepts and create interactive projects without needing to learn a text-based programming language. You don't need to type quickly or remember complex code to use Scratch.", 
	"symbol": "Sb", 
	"xpos": 9, 
	"ypos": 7
},
{
	"name": "Logo", 
	"category": "educational language", 
	"number": 110, 
	"source": "https://www.calormen.com/jslogo/", 
	"summary": "Logo is an educational graphical programming language, designed in 1967 by Wally Feurzeig, Seymour Papert, and Cynthia Solomon. The name was coined by Feurzeig while he was at Bolt, Beranek and Newman, and derives from the Greek logos, meaning 'word' or 'thought'.<br/><br/>A general-purpose language, Logo is widely known for its use of turtle graphics, in which commands for movement and drawing produced line or vector graphics, either on screen or with a small robot termed a turtle.<br/><br/>Logo is a multi-paradigm adaptation and dialect of Lisp, a functional programming language.", 
	"symbol": "Lgo", 
	"xpos": 10, 
	"ypos": 7
}, 
{
	"name": "Ladder", 
	"category": "hardware description language", 
	"number": 111, 
	"source": "https://ladderlogicworld.com/ladder-logic-basics/", 
	"summary": "Ladder logic was originally a written method to document the design and construction of relay racks as used in manufacturing and process control. Each device in the relay rack would be represented by a symbol on the ladder diagram with connections between those devices shown. In addition, other items external to the relay rack such as pumps, heaters, and so forth would also be shown on the ladder diagram.<br/><br/>Ladder logic has evolved into a programming language that represents a program by a graphical diagram based on the circuit diagrams of relay logic hardware. Ladder logic is used to develop software for programmable logic controllers (PLCs) used in industrial control applications. The name is based on the observation that programs in this language resemble ladders, with two vertical rails and a series of horizontal rungs between them.<br/><br/>Some industrial automation application examples where PLC ladder logic is used include:<br/><br/>- Material Handling Conveyor System.<br/>- Pallet Packing and Strapping.<br/>- Ball Mill Lubrication System.<br/>- Logistics Package Conveying and Sorting.<br/>- Cement Batching.<br/>- Beverage Bottling and Labeling.<br/>- Hopper and Tank Level Control.<br/>- Air and Liquid Flow and Pressure Control.", 
	"symbol": "Lad", 
	"xpos": 11, 
	"ypos": 7
}, 
{
	"name": "Verilog", 
	"category": "hardware description language", 
	"number": 112, 
	"source": "https://en.wikipedia.org/wiki/Verilog", 
	"summary": "Verilog is a hardware description language (HDL) that is used to describe digital systems and circuits in the form of code. It was developed by Gateway Design Automation in the mid-1980s and later acquired by Cadence Design Systems.<br/><br/>Verilog is widely used for design and verification of digital and mixed-signal systems, including both application-specific integrated circuits (ASICs) and field-programmable gate arrays (FPGAs). The language is used to describe digital circuits hierarchically, starting with the most basic elements such as logic gates and flip-flops and building up to more complex functional blocks and systems.<br/><br/>At the time of Verilog's introduction (1984), Verilog represented a tremendous productivity improvement for circuit designers who were already using graphical schematic capture software and specially written software programs to document and simulate electronic circuits.", 
	"symbol": "Vlg", 
	"xpos": 12, 
	"ypos": 7
}, 
{
	"name": "VHDL", 
	"category": "hardware description language", 
	"number": 113, 
	"source": "https://en.wikipedia.org/wiki/VHDL", 
	"summary": "VHDL (VHSIC Hardware Description Language) is a hardware description language that can model the behavior and structure of digital systems at multiple levels of abstraction, ranging from the system level down to that of logic gates, for design entry, documentation, and verification purposes.<br/><br/>In 1983, VHDL was originally developed at the behest of the U.S. Department of Defense in order to document the behavior of the application-specific integrated circuits (ASIC) that supplier companies were including in equipment.<br/><br/>The idea of being able to simulate the ASICs from the information in this documentation was so obviously attractive that logic simulators were developed that could read the VHDL files. The next step was the development of logic synthesis tools that read the VHDL and output a definition of the physical implementation of the circuit.<br/><br/>Due to the Department of Defense requiring as much of the syntax as possible to be based on Ada, in order to avoid re-inventing concepts that had already been thoroughly tested in the development of Ada, VHDL borrows heavily from the Ada programming language in both concept and syntax.", 
	"symbol": "Vhd", 
	"xpos": 13, 
	"ypos": 7
}, 
{
	"name": "brainfuck", 
	"category": "esoteric language", 
	"number": 114, 
	"source": "https://brainfuck.org/brainfuck.html", 
	"summary": "Brainfuck was invented by Urban Müller in 1993, in an attempt to make a language for which he could write the smallest possible compiler for the Amiga OS, version 2.0. He managed to write a 240-byte compiler. The language was inspired by FALSE, which had a 1024-byte compiler. Müller chose to name the language brainfuck (with the initial letter in lower case, although it is now often capitalised).<br/><br/>Designed to be extremely minimalistic, the language consists of only eight simple commands, a data pointer, and an instruction pointer.<br/><br/>Brainfuck is an example of a so-called Turing tarpit: it can be used to write any program, but it is not practical to do so because it provides so little abstraction that the programs get very long or complicated. While brainfuck is fully Turing-complete, it is not intended for practical use, but to challenge and amuse programmers.", 
	"symbol": "Br", 
	"xpos": 14, 
	"ypos": 7
}, 
{
	"name": "GolfScript", 
	"category": "esoteric language", 
	"number": 115, 
	"source": "https://www.golfscript.com/golfscript/", 
	"summary": "GolfScript is a stack oriented esoteric programming language aimed at solving problems in as few keystrokes as possible — a type of challenge called code golf. It also aims to be simple and easy to write.<br/><br/>Short code is achieved by using single symbols to represent high level operations (such as map, join, array size, etc). Being stack based allows for functions and other manipulations to work without the need for explicit variables, however variables still exist and are useful for more complicated stack manipulations.<br/><br/>GolfScript is written on top of Ruby.", 
	"symbol": "Gs", 
	"xpos": 15, 
	"ypos": 7
}, 
{
	"name": "Befunge", 
	"category": "esoteric language", 
	"number": 116, 
	"source": "https://esolangs.org/wiki/Befunge", 
	"summary": "Befunge is a two-dimensional esoteric programming language invented in 1993 by Chris Pressey with the goal of being as difficult to compile as possible. Code is laid out on a two-dimensional grid of instructions (playfield), and execution can proceed in any direction of that grid.<br/><br/>Execution proceeds by the means of a program counter (-93) or instruction pointer (-98). This points to a grid cell on the playfield. The instruction pointer has inertia: it can travel to any of the four cardinal directions, and keep traveling that way until an instruction changes the direction. The instruction pointer begins at a set location (the upper-left corner of the playfield) and is initially travelling in a set direction (right). As it encounters instructions, they are executed.<br/><br/>The word Befunge started life as a typographical error for the word \"before\", typed by Curtis Coleman at 4AM on a BBS chat system.", 
	"symbol": "Bf", 
	"xpos": 16, 
	"ypos": 7
}, 
{
	"name": "ArnoldC", 
	"category": "esoteric language", 
	"number": 117, 
	"source": "https://github.com/lhartikk/ArnoldC", 
	"summary": "ArnoldC is an esoteric programming language created with Scala by the Finnish programmer Lauri Hartikka. The language commands and expressions are famous quotes of Arnold Schwarzenegger's movie characters, such as from The Terminator (1984), Predator (1987) and Total Recall (1990).<br/><br/>Example program:<br/><br/>IT'S SHOWTIME<br/>TALK TO THE HAND \"hello world\"<br/>YOU HAVE BEEN TERMINATED",
	"symbol": "Arn", 
	"xpos": 17, 
	"ypos": 7
}, 
{
	"name": "Malbolge", 
	"category": "esoteric language", 
	"number": 118, 
	"source": "https://esolangs.org/wiki/Malbolge", 
	"summary": "Malbolge is a public-domain esoteric programming language invented by Ben Olmstead in 1998, named after the eighth circle of hell in Dante's Inferno, the Malebolge. It was specifically designed to be almost impossible to use.<br/><br/>The effect of any instruction depends on where it is located in memory (mod 94, of course), all instructions are self-modifying (according to a permutation table) and both the code and data pointers are incremented after every instruction, making it hard to re-use any code or data. There is no way to initialize memory except to one of the 8 instruction characters, there is no LOAD or STORE operator, and the only available memory operators (both of them) work in trinary and are designed to be opaque. The only control flow construct is an unconditional computed jump, which is also nearly worthless since there is no way (or certainly no obvious way) to set memory to anything except the 8 instruction characters.<br/><br/>Malbolge was very difficult to understand when it arrived, taking two years for the first program to appear. The author himself has never written a Malbolge program. The first program was not written by a human being; it was generated by a beam search algorithm designed by Andrew Cooke and implemented in Lisp. In 2020, Kamila Szewczyk published a Lisp interpreter written in Malbolge Unshackled.", 
	"symbol": "Mal", 
	"xpos": 18, 
	"ypos": 7
},        
{
	"name": "Whitespace",
	"category": "esoteric language",
	"number": 119,
	"source": "https://esolangs.org/wiki/Whitespace",
	"summary": "Whitespace, created in 2002 by Edwin Brady and Chris Morris at the University of Durham, is an imperative, stack-based, esoteric programming language that uses only whitespace characters—space, tab, and linefeed—as syntax. All other characters are ignored. Whitespace got a brief moment of fame when it was posted on Slashdot on April 1st, 2003. Most people took it as an April Fool's joke, while it wasn't.<br/><br/>Whitespace defines a command as a sequence of whitespace characters. For example, [Tab][Space][Space][Space] performs arithmetic addition of the top two elements on the stack. A command is written as an instruction modification parameter (IMP) followed by an operation and then any parameters.",
	"symbol": " ",
	"xpos": 1,
	"ypos": 8
}
]
}

// Global variable for the dialog close
var DialogTrigger;

function ParseElements(data, elmID) {
  try {
    // Use this if the JSON is coming over the wire
    // var JSONdata = JSON.parse(data);
    var JSONdata = data;
    // Get the container that will hold our table
    var theContainer = document.getElementById(elmID);
    // Clear the placeholder non-JS content
    theContainer.innerHTML = "";
    // Create an <ol> to contain it all and add it to the page
    var ol = document.createElement("ol");
    ol.setAttribute("id","Table");
    theContainer.appendChild(ol);
    // Grab the JSON nodes
    var filteredNodes = JSONdata.elements;
    // Blank category array
    var catLookup = {};
    var catArray = [];
    // Loop through the elements nodes
    for (var a = 0; a < filteredNodes.length; a++) {
      var json = filteredNodes[a];
      // Create the <li>, give it an id and row/col info
      var elementNode = document.createElement("li");
      elementNode.setAttribute("id",json.symbol);
      elementNode.classList.add("row" + json.ypos);
      elementNode.classList.add("col" + json.xpos);
      // Get the category and concatenate into the class
      var rawCat = json.category;
      var stringCat = rawCat;
      stringCat = stringCat.split(' ').join('_');
      stringCat = stringCat.split(',').join('');
      elementNode.classList.add("cat-" + stringCat);
      // Make the atomic number container
      var numberDiv = document.createElement("div");
      numberDiv.innerHTML = json.number;
      // Make the name container and give it an id
      var nameDiv = document.createElement("div");
      nameDiv.setAttribute("id","name" + json.symbol);
      nameDiv.innerHTML = json.name;
      // Make tye symbol container
      var symbolDiv = document.createElement("div");
      symbolDiv.innerHTML = json.symbol;
      // Make the atomic mass container
      //var massDiv = document.createElement("div");
      //massDiv.innerHTML = "‎";//json.atomic_mass;
      // Make the button and give it an id and ARIA bits
      var detailButton = document.createElement("button");
      detailButton.innerHTML = "details.";
      detailButton.setAttribute("type","button");
      detailButton.setAttribute("id","btn" + json.symbol);
      var labelledby = "name" + json.symbol + " btn" + json.symbol;
      detailButton.setAttribute("aria-labelledby",labelledby);
      detailButton.setAttribute("onclick","OpenDialog(this.id,'" + json.name + "');");
      // Add all the nodes to the <li>
      elementNode.appendChild(numberDiv);
      elementNode.appendChild(symbolDiv);
      elementNode.appendChild(nameDiv);
      //elementNode.appendChild(massDiv);
      elementNode.appendChild(detailButton);
      // Add the <li> to the <ol>
      ol.appendChild(elementNode);
      // Loop through the category and add distinct to array
      if (!(rawCat in catLookup)) {
        catLookup[rawCat] = 1;
        catArray.push(rawCat);
        // console.log(rawCat);
      }
    }
    // Create a <dl> to hold categories
    var dl = document.createElement("dl");
    for (var i = 0; i < catArray.length; i++) {
      var catText = catArray[i];
      var catString;
      catString = catText.split(' ').join('_');
      catString = catString.split(',').join('');
      catString = "cat-" + catString;
      // console.log(catString);
      // Make the color container and class it
      var dt = document.createElement("dt");
      dt.classList.add(catString);
      // Make the category container
      var dd = document.createElement("dd");
      dd.innerHTML = catText;
      dd.setAttribute("id",catString);
      // Make the button
      var showButton = document.createElement("button");
      showButton.innerHTML = "highlighting";
      showButton.setAttribute("type","button");
      showButton.setAttribute("onmouseover","ToggleStyleBlock('" + catString + "','show');");
      showButton.setAttribute("onfocus","ToggleStyleBlock('" + catString + "','show');");
      showButton.setAttribute("onmouseout","ToggleStyleBlock('','hide');");
      showButton.setAttribute("onblur","ToggleStyleBlock('','hide');");
      showButton.setAttribute("id","btn-" + catString);
      var labelledby = " btn-" + catString + " " + catString;
      showButton.setAttribute("aria-labelledby",labelledby);
      // Append these to the <dl>
      dt.appendChild(showButton);
      dl.appendChild(dt);
      dl.appendChild(dd);
    }
    // Create a new <li>
    var keyItem = document.createElement("li");
    keyItem.setAttribute("role","presentation");
    // keyItem.setAttribute("aria-hidden","true");
    keyItem.setAttribute("id","Key");
    // Give it some context
    var h2 = document.createElement("h2");
    h2.innerHTML = "Category key:";
    // Add the context text
    keyItem.appendChild(h2);
    // Add the new list to it
    keyItem.appendChild(dl);
    // Add this entire mess to the <ol>
    ol.appendChild(keyItem);
  } catch (e) {
    console.log("ParseElements(): " + e);
  }
}
ParseElements(elements, "Elements");


function ToggleStyleBlock(strClass, showhide) {
  try {
    if (showhide == "show") {
      // Create a style block
      var styleBlock = document.createElement("style");
      styleBlock.setAttribute("id","ShowCat");
      document.head.appendChild(styleBlock);
      styleBlock.sheet.insertRule(
        "#Elements li:not(#Key):not(." + strClass + ") { background-color: #999; opacity: .5; }",0
      );
      styleBlock.sheet.insertRule(
        "@media screen and (prefers-color-scheme: dark) { #Elements li:not(#Key):not(." + strClass + ") { background-color: #333; opacity: .5; } }",1
      );
      styleBlock.sheet.insertRule(
        "@media screen and (forced-colors: active) { #Elements li:not(#Key):not(." + strClass + ") { opacity: .25; } #Elements li." + strClass + " { background-color: AccentColor; color: AccentColorText; } }",2
      );
    } else {
      var node = document.getElementById("ShowCat");
      node.parentNode.removeChild(node);
    }
  } catch (e) {
    console.log("ToggleStyleBlock(): " + e);
  }
}

function OpenDialog(eID,elName) {
  try {
    DialogTrigger = eID;
    // Get all the elements to manipulate
    var body = document.getElementsByTagName("body");
	var dialog = document.getElementById('myDialog');
    var closeBtn = document.getElementById('dialog-element-close-btn');
    // Set the heading
	var elm = elements.elements.filter(x => x.name == elName)[0];
	document.getElementById('dialog-element-name').innerHTML = elm.name;
	document.getElementById('dialog-element-summary').innerHTML = elm.summary;
	document.getElementById('dialog-element-symbol').innerHTML = elm.symbol;
	document.getElementById('dialog-element-type').innerHTML = elm.category;
	document.getElementById('dialog-element-source').href = elm.source;
    // Show dialog
	dialog.showModal();
	document.getElementById('dialog-element-scroll-area').scrollTop = 0;
    // Kill the page scroll
    body[0].style.overflow = "hidden";
    // Put focus on the close button
    // Normally I would put it on the modal, but this fits
    closeBtn.setAttribute("onclick","CloseDialog('" + eID + "');");
    // Disabling focus on close button because looks weird on mobile
	//closeBtn.focus();
  } catch (e) {
    console.log("OpenDialog(): " + e);
  }
}

function CloseDialog(eID) {
  try {
    // Get all the elements to manipulate
    var body = document.getElementsByTagName("body");
    //var overlay = document.getElementById("Overlay");
    var dialog = document.getElementById("myDialog");	
    var triggerBtn = document.getElementById(eID);
	// Close dialog
	dialog.close();
    // Return the scrollbar
    body[0].style.overflow = "auto";
    // Return focus to trigger
    triggerBtn.focus();
  } catch (e) {
    console.log("CloseDialog(): " + e);
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key == "Escape" || evt.key == "Esc";
  } else {
    isEscape = evt.keyCode == 27;
  }
  if (isEscape) {
    CloseDialog(DialogTrigger);
  }
};

// Light-dark mode switch

const isDarkMode = () => localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDarkMode()) {
  document.getElementById('darkModeSwitchCheckbox').checked = true;
  document.documentElement.classList.add('dark')
} else {
  document.getElementById('darkModeSwitchCheckbox').checked = false;
  document.documentElement.classList.remove('dark')
}

document.getElementById('darkModeSwitchCheckbox').addEventListener('change', function(event) {
  if (isDarkMode()) {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
});
