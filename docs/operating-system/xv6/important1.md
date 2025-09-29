---
title: xv6 Kernel Installation Guide on Linux
description: Step-by-step guide to set up and run the xv6 kernel on Linux.
comments: true
---

# xv6 Kernel Setup on Linux

This guide explains how to **install, build, and run** the xv6 operating system kernel on various Linux distributions.

---

## 1. Install Required Packages

To build and run xv6, you need the following tools:

- **`git`** → To clone the xv6 repository
- **`base-devel`** → Compiler tools (`gcc`, `make`, `binutils`, etc.)
- **`qemu`** → Emulator to run xv6
- **`i386-elf-gcc`** → Cross-compiler for xv6

---

### 1.1 On Arch Linux

If you are using Arch Linux, install the packages using `yay`:

```bash
yay -S git base-devel qemu i386-elf-gcc
```

> these command are tested and 100% working...

---

### 1.2 On Other Linux Distributions.

> - for `ubuntu` :

```bash
sudo apt update
sudo apt install -y build-essential qemu-system-x86 git gcc-multilib
```

> - for `debian` :

```bash
sudo apt update
sudo apt install -y build-essential qemu-system-x86 git gcc-multilib
```

> - for `fedora` :

```bash
sudo dnf groupinstall "Development Tools"
sudo dnf install -y qemu-system-x86 git gcc gcc-c++

```

> `⚠️` Note: I have not personally tested the installation on Ubuntu, Debian, or Fedora.
> Some package names or groups might differ, so if you encounter errors or warnings, please check the official documentation/wiki for your distribution.

## 2. Clone the xv6 Repository

- open ur terminal and run the following commands :

```bash
git clone https://github.com/mit-pdos/xv6-public.git

cd xv6-public

```

## 3. Update the Makefile

- Open the Makefile in any editor (e.g., `vim`, `nano` , `vscode` ..)

### 3.1 Set the Tool Prefix

- Search for: `TOOLPREFIX =` Change it to:

```bash
TOOLPREFIX = i386-elf-
```

---

### 3.2 Update Compiler Flags

- Search for: `CFLAGS =` Change it to:

```bash
CFLAGS = -fno-pic -static -fno-builtin -fno-strict-aliasing -O2 -Wall -MD -ggdb -m32 -fno-omit-frame-pointer
```

> This prevents the Makefile from stopping the `build` when warnings occur.

---

### 3.3 Build xv6

- run the following command :

```bash
make
```

---

### 3.4 Run xv6 in QEMU

- run :

```bash
make qemu
```

> or u can run

```bash
make qemu-nox
```

> Launches QEMU entirely in the terminal

---

## 4. Exiting QEMU

> Use `Ctrl-a x` to `exit` QEMU.
