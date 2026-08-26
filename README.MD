<div align="center">

  <img src="./.github/assets/formula-1.png" alt="Logo" height="300">
  <h1 align="center"><strong>Formula One - API</strong></h1>
  <p>
	  This API provides information about all Formula 1 teams and drivers, allowing them to be retrieved by ID and/or name.
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]

</div>

# 🚀 Technologies

This code source was developed with the following items:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - Type definitions for node
- [fastify][fastify-npm] - Fast and low-overhead web framework for Node.js
- [@fastify/cors][@fastify/cors-npm] - Fastify plugin for enabling Cross-Origin Resource Sharing (CORS)

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

# 👨‍💻 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) and [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Igor-Matheus/node-formula-one

# Go into the repository
$ cd node-formula-one

# Install dependencies
$ npm install
```

## Author

| [<img src="https://avatars.githubusercontent.com/u/72845501?v=4&size=64"><br><sub>Igor Brito</sub>](https://github.com/Igor-Matheus) |
| :----------------------------------------------------------------------------------------------------------------------------------: |
|                                     [Linkedin](https://www.linkedin.com/in/igor-matheus-brito/)                                      |

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
[fastify-npm]: https://www.npmjs.com/package/fastify
[@fastify/cors-npm]: https://www.npmjs.com/package/@fastify/cors
