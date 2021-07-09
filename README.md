# Fro Quest 1 (FQ1) JavaScript

[![Fro Quest 1 (FQ1) JavaScript](https://img.shields.io/github/package-json/v/x28project/fro-quest-1-js)](https://github.com/x28project/fro-quest-1-js)
[![Fro Quest 1 (FQ1) JavaScript Custom Sarien.net (sariendotnet) Interpreter](https://img.shields.io/github/package-json/v/x28project/fro-quest-1-js-sariendotnet-interpreter?label=fro-quest-1-js-sariendotnet-interpreter)](https://github.com/x28project/fro-quest-1-js-sariendotnet-interpreter)
[![license](https://img.shields.io/github/license/x28project/fro-quest-1-js)](LICENSE)

The Fro Quest 1 (FQ1) game coverted to Javascript using [Sarien.net](http://sarien.net/) from the original [Fro Quest 1 (FQ1) AGI](https://github.com/x28project/fro-quest-1-agi) which used the Sierra Adventure Game Interpreter.

## Play Online

http://x28project.com/FroQuest/

---

## Table of Contents

- [Installation](#installation)
- [Build website](#build-website)
- [Serve locally with http-server](#serve-locally-with-http-server)
- [Copyright](#copyright)
- [License](#license)

---

## Installation

1. To install the required dependencies, run: <br />

```
npm install
```

_Note: There is a postinstall routine that will initialize and update the [Fro Quest 1 (FQ1) JavaScript Assets](https://github.com/x28project/fro-quest-1-js-assets)\* and the [Fro Quest 1 (FQ1) JavaScript Custom Sarien.net (sariendotnet) Interpreter](https://github.com/x28project/fro-quest-1-js-sariendotnet-interpreter) submodules._

_\* The [Fro Quest 1 (FQ1) JavaScript Assets](https://github.com/x28project/fro-quest-1-js-assets) submodule is **private**._

---

## Build website

To build the full website, run:

```
npm run build
```

_Note: All website files will be output into the [dist/](dist/) directory._

---

## Serve locally with [http-server](https://www.npmjs.com/package/http-server)

1. To install [http-server](https://www.npmjs.com/package/http-server) globally, run:

```
npm install --global http-server
```

2. To start the server, open a new terminal to this repo and run:

```
npm run server
```

3. To view the website, open: https://localhost:8080

---

## Copyright

Copyright (c) 2015 X28 Project

---

## License

[CC-BY-NC-ND-4.0](LICENSE)
