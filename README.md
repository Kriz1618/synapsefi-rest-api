# Welcome to synapsefi-api 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)
[![Twitter: kriz1618](https://img.shields.io/twitter/follow/kriz1618.svg?style=social)](https://twitter.com/kriz1618)

> Testing banking as a service with the synapsefi platform

## Initial steps

* Initialize project
```
mkdir synapsefi-api && cd synapsefi-api
npm init -y
```

* Install main modules
```
npm i ts-node express morgan axios cors dotenv joi
npm i -D typescript @types/express nodemon @types/morgan @types/axios @types/cors @hapi/joi
```

* Initialize Typescript to generate the `tsconfig.json` file
```
npx tsc --init
```

* Setting up the `tsconfig.json` file, by specifying the compiler options with at leats this fields, check [documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
```sh
{
	"compilerOptions": {
		"forceConsistentCasingInFileNames": true,
		"module": "commonjs",
		"esModuleInterop": true,
		"outDir": "./build",
		"rootDir": "./source",
		"target": "es6",
		"skipLibCheck": true,
		"strict": true
	}
}
```

* Creating the .env file
```
CLIENT_ID = VALUE
CLIENT_SECRET = VALUE
PORT = VALUE
FINGER_PRINT = VALUE
```

* Adding scripts in the `package.json` file

```sh
"scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon"
  }
```

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Author

👤 **Christian**

* Twitter: [@kriz1618](https://twitter.com/kriz1618)
* Github: [@Kriz1618](https://github.com/Kriz1618)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_