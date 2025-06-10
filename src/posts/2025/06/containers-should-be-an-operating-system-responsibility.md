---
lang: en
langPtLink: ../conteineres-deveriam-ser-responsabilidade-do-sistema-operacional
title: Containers should be an operating system responsibility
date: 2025-06-10
excerpt: My opinion regarding containers and a proposal of an alternative solution that could be implemented by operating systems.
published: true
enableMermaid: false
tags:
- in english
- architecture
- security
---

Not before 2018, gradually, my colleagues at work started talking about Docker, a technology for setting up environments for applications on servers. In less than two years, Docker had become the standard and new backend apps included Dockerfiles and YAMLs for Kubernetes.

Even though I understood what containers were for, part of me said that they were an overweight solution, and the problems solved by them should actually be solved by operating systems. My opinion still stands.

In this article, let's cover some alternatives to containers and propose a solution that could be implemented by operating systems.

## Beginning from the end

After all, why do we use containers? The majority of the answers will be: "To run my app in the cloud".

Docker solved two problems: environment setup and safe execution.

Docker images include everything needed to run the app, which usually is the app runtime, its dependencies and the user space of an operating system. This can be sensitive, especially for Linux, because the dependency tree may be fragile and break when an inner dependency is updated. Having a rigid and reproducible dependency tree ensures environment stability.

Safe execution results from the container being a process with an isolated file system and network, reducing the risk of attacks and infections on the host machine.

### Environment setup, without containers

There are many ways to setup an environment without resorting to containers.

One is actually installing the required dependencies on the host machine.

Another is self-contained deployment, where the compilation includes the runtime alongside or inside the program. Thus, the target machine does not require the runtime to be installed to run the app.

Some languages offer ahead-of-time compilation (AOT), which compiles into native machine code. This allows program execution without runtime, and lowers the number of required external dependencies. As a positive side effect, AOT compilation also produces apps with better performance and reduced memory usage.

An operating system's Docker image corresponds to its *user space*, which is the operating system minus its kernel. This includes essential programs, libraries, services and some other files.

Loading an entire operating system's user space for each container instance wastes memory and disk space. Ubuntu's Docker image, for instance, uses 188MB, which is a lot. There are ultra-light images that leave only what is strictly necessary; for example, Alpine Linux image uses only 5MB. Nevertheless, it's still an additional weight.

The solutions above show how to mitigate the risk of a fragile dependency tree.

### Safe execution, without containers

This is a bit more complicated. Here, we want to limit the access to the host machine's file system and network.

On most operating systems, file system access control is done at user-level. In order to restrict a program's access to specific files and directories, we need to create a user (or user group) with those rules and ensure the program always runs under that user.

Network restriction, on the other hand, is done via firewall, with user and program-scoped rules.

## Proposal: Execution manifests

A suggestion to be implemented by operating systems would be execution manifests, that clearly define how a program is executed and its system permissions.

The execution manifest could also define which devices and peripherals a program can interact with. This would make it useful for desktop applications too.

The manifest file could be signed with a public-private key pair for authentication. A hash would verify that the executable file corresponds to the one expected in the manifest.

```yml
manifestVersion: v1
author: myCompany
name: myApp
run: ./myapp
hash: <executable_file_hash> # optional

allowedDirectories:
  - name: appDir
    path: ./**/ # all subdirectories
    permission: read
  - name: sharedFolder
    path: \\EnvGeoServer\Repository\Tools\admin\
    permission: readWrite

allowedNetwork:
  - name: localhost
    direction: inbound
    ip: 127.0.0.1
    protocol: tcp
    port: 8080

allowedDevices:
  - mouse
  - keyboard
  - audioOut
  - display
```

## Sources and interesting reads

- [Ivan Velichko - You Don't Need an Image To Run a Container](https://iximiuz.com/en/posts/you-dont-need-an-image-to-run-a-container/)
- [Stack Overflow - What is meant by shared kernel in Docker?](https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker)
- [AppContainer isolation - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation)
- [SuperUser - Restrict access to files by list of programs](https://superuser.com/questions/1238613/restrict-access-to-files-by-list-of-programs)
- [Stack Overflow - Prevent accessing files outside of given working directory](https://stackoverflow.com/questions/11345374/prevent-accessing-files-outside-of-given-working-directory)
- [The AndroidManifest.xml File | Android Developers](https://stuff.mit.edu/afs/sipb/project/android/docs/guide/topics/manifest/manifest-intro.html)
- [Wikipedia - Ahead-of-time compilation](https://en.wikipedia.org/wiki/Ahead-of-time_compilation)