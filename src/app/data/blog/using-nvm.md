---
title: "Using nvm"
description: ""
date: "2025-05-02"
author:
  id: "amy"
heroImage: "7a9d155b-1d08-4158-2f45-f42a723fbc00"
ogImage: "https://imagedelivery.net/EBSSfnGYYD9-tGTmYMjDgg/8126e54a-237d-4c60-ee27-182ea5b29900/public"
tags: ["redwoodsdk",, "nvm", "guide", "node"]
---

[nvm](https://github.com/nvm-sh/nvm) is a Node Version Manager. It's the easiest way to run multiple versions of Node.js on the same machine.

## Installing nvm

If you've already installed Node.js on your machine, uninstall Node.js before installing nvm. This will prevent any conflicts between the Node.js and nvm.

### If you're on a Mac

You can uninstall by running the following command in your terminal:

```bash
brew uninstall --force node
```

Once that's finished, run the following command to remove unused folders and dependencies:

```bash
brew cleanup
```

### If you're on Windows

- Go to the start menu, search and go to **Settings**
- Click on the **Apps** section
- In the search box under **Apps & Features** section, search for **Nodejs**
- Click on **Nodejs** and click on **Uninstall**
- We recommend restarting your machine, even if you're not prompted to do so

### If you're on a Mac:

You can install `nvm` using [Homebrew](https://brew.sh/):

```bash
brew install nvm
```

### If you're on Windows

Reference the [nvm-windows](https://github.com/coreybutler/nvm-windows) repo.

- Download the [latest installer](https://github.com/coreybutler/nvm-windows/releases) (nvm-setup.zip)
- Locate your zip file (should be in your downloads or wherever you've configured your downloads to be saved) and unzip/extract its contents
- Now, you should have a file called nvm-setup.exe. Double click on it to run the installer.
- Follow the instructions in the installer

## How to use nvm

To confirm that nvm was installed correctly, run the following command in your terminal:

```bash
nvm --version
```

You should see the version number of `nvm` printed to your terminal.

### To install the latest version of Node.js

```bash
nvm install latest
```

### To install a specific version Node.js

```bash
nvm install <version number>
```

To see all the versions of Node that you can install, run the following command:

```bash
nvm ls-remote
```

### To use a specific version of Node.js

````bash
nvm use <version number>

### To see all the versions of Node.js that you have installed

```bash
nvm ls
````

### To set the default version of Node.js

```bash
nvm alias default <version number>
```

### To uninstall a specific version of Node.js

```bash
nvm uninstall <version number>
```
