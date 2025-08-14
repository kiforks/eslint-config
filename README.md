# @kiforks/eslint-config

[![npm version](https://img.shields.io/npm/v/@kiforks/eslint-config?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@kiforks/eslint-config)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kiforks/eslint-config/cd.yml?query=workflow%3Adeploys&logo=github)](https://github.com/kiforks/eslint-config/actions/workflows/cd.yml?query=workflow%3Adeploy)
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
import kiforJavascript from '@kiforks/eslint-config/javascript.js';
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
	...kiforJavascript,
	...kiforAngularTemplate,
	...kiforAngularTypescript,
	...kiforTests,
	...kiforJasmine,
	...kiforJest,
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
			'jest/prefer-expect-assertions': 'off',
		},
	},
];
```

## Disable Recommend Configuration

The `disable-recommend` configuration is designed to disable certain ESLint rules that enforce stricter coding practices, giving developers more flexibility when needed. This can be useful in scenarios where specific recommendations are not suitable for your project's requirements.

### Purpose

- **Flexibility**: Allows you to bypass overly strict linting rules.
- **Customization**: Focus on rules that align with your project's coding style.
- **Ease of Development**: Reduces friction when rapid prototyping or working with legacy code.

### Usage

In your `eslint.config.js`, extend the `disable-recommend` configuration:

```javascript
import kiforDisableRecommend from '@kiforks/eslint-config/disable-recommend.js';

/** @type { import("eslint").Linter.Config[] } */
export default [...kiforDisableRecommend];
```

## Feature-Sliced Design Configuration

The `feature-sliced-design.js` configuration enforces architectural boundaries based on the [Feature-Sliced Design methodology](https://feature-sliced.github.io/documentation/docs). It restricts cross-layer imports to encourage modularity, scalability, and maintainability in frontend applications.

### Key Features

- Enforces layer isolation: shared, entities, features, widgets, pages, processes, app
- Restricts disallowed import paths across layers
- Works with `.ts`, `.tsx`, `.js`, `.jsx` files

### Usage

```javascript
import kiforFeatureSliced from '@kiforks/eslint-config/feature-sliced-design.js';

export default [...kiforFeatureSliced];
```
---
## NestJS Configuration

Add NestJS-specific linting for controllers, providers, and pipes.

```js
// eslint.config.js
import kiforNest from '@kiforks/eslint-config/nestjs.js';

export default [
  ...kiforNest,
];
```

**Notes**

* Includes rules for DI usage, validation pipes, and common NestJS best practices.
* Works with Express or Fastify projects.

---

## Storybook Configuration

Enable rules for CSF stories and Storybook testing utilities.

```js
// eslint.config.js
import kiforStorybook from '@kiforks/eslint-config/storybook.js';

export default [
  ...kiforStorybook,
];
```

**Globs**

* Targets `**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)` by default.

---

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
