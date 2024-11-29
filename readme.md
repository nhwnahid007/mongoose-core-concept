# Mongoose Setup

## Installation

### Initialize Project

```bash
npm init -y
```

### Install Dependencies

#### Express

```bash
npm install express
```

#### Mongoose

```bash
npm install mongoose --save
```

#### TypeScript

```bash
npm install typescript --save-dev
```

_Note: Use `--save-dev` for development dependencies as TypeScript will be converted into JavaScript._

#### Additional Packages

```bash
npm install cors
npm install dotenv
```

### TypeScript Configuration

```bash
tsc --init
```

## TypeScript Configuration

1. Open `tsconfig.json`.
2. Set the `rootDir` and `outDir`:

   ```json
   "rootDir": "./src/", // specify the root directory
   "outDir": "./dist/", // specify the output directory
   ```

3. Add the following to manage included and excluded files:
   ```json
   "include": ["src"], // files to compile
   "exclude": ["node_modules"], // files to skip
   ```

## Package.json Scripts

Add the following scripts to your `package.json`:

```json
"scripts": {
    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "lint": "eslint src --ignore-path .eslintignore --ext .ts",
    "lint:fix": "npx eslint src --fix",
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "npx prettier --write src",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

_Note: Use `npm run build` to compile TypeScript._

## Development Tools

### Type Definitions

```bash
npm install --save-dev @types/node
npm install --save-dev @types/express
npm install --save-dev @types/cors
```

### ESLint

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npx eslint --init
```

_Alternatively, install a specific version:_

```bash
npm install -D eslint@9.14.0
```

#### Prettier Integration

To integrate Prettier with ESLint, install the following:

```bash
npm install --save-dev eslint-config-prettier
```

### Prettier

```bash
npm install -D --exact prettier
```

## Project Structure

Create the following files:

- `src/app.ts`
- `src/server.ts`