# @kiforks/eslint-config

[![npm version](https://img.shields.io/npm/v/@kiforks/eslint-config?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@kiforks/eslint-config)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kiforks/eslint-config/deploy.yml?query=workflow%3Adeploys&logo=github)](https://github.com/kiforks/eslint-config/actions/workflows/deploy.yml?query=workflow%3Adeploy)
[![Downloads per month](https://img.shields.io/npm/dm/@kiforks/eslint-config)](https://npmcharts.com/compare/@kiforks/eslint-config)

Created by [Kifor Kostiantyn][author-url]

> This is the standard configuration file for ESLint from [Kifor Kostiantyn](https://www.linkedin.com/in/kiforks/).

Use it as is or as a basis for your own configuration.

## Installation

You first need to install your published configuration, for example:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
npm install --save-dev eslint @kiforks/eslint-config
```

<!--yarn-->

```bash
yarn add --dev eslint @kiforks/eslint-config
```

<!--pnpm-->

```bash
pnpm add --save-dev eslint @kiforks/eslint-config
```

<!--bun-->

```bash
bun add --dev eslint @kiforks/eslint-config
```

## Basic Configuration

In the root of the project, create a `eslint.config.js` file and add `@kiforks/eslint-config` to the `extends` field.

_`eslint.config.js`_

```javascript
import kiforAngularTemplate from '@kiforks/eslint-config/angular-template.js';
import kiforAngularTypescript from '@kiforks/eslint-config/angular-typescript.js';
import kiforJasmine from '@kiforks/eslint-config/tests-jasmine.js';
import kiforJest from '@kiforks/eslint-config/tests-jest.js';
import kiforTests from '@kiforks/eslint-config/tests.js';
import kiforTypescript from '@kiforks/eslint-config/typescript.js';

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...kiforTypescript.map(config => ({
    ...config,
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        project: ['./tsconfig.base.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),
  ...kiforAngularTemplate,
  ...kiforAngularTypescript,
  ...kiforTests,
  ...kiforJasmine,
  ...kiforJest
];
```

## Configure Extension

You can override existing rules or add new ones by using the `rules` field in your ESLint configuration.

_`eslint.config.js`_

```javascript
export default [
  ...kiforTypescript,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'jest/prefer-expect-assertions': 'off'
    }
  }
];
```

## Usage in VSCode

1. Install ESLint and the configuration.
2. Open VSCode.
3. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin.
4. Use it.

## Scripts

Add these scripts to your `package.json` for easier linting and formatting:

```json
"scripts": {
  "lint": "npx eslint '**/*.{ts,html,js}' --quiet",
  "lint:fix": "npx eslint '**/*.{ts,html,js}' --quiet --fix"
}
```

## License

[MIT](LICENSE)

[author-url]: https://www.linkedin.com/in/kiforks/
