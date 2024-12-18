import tsParser from '@typescript-eslint/parser';

import typescript from './typescript.js';

import javascript from './javascript.js';

/** @type { import("eslint").Linter.Config[] } */
export default [
	...typescript.map(config => ({
		...config,
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: ['./tsconfig.base.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	})),
	...javascript,

	{
		rules: {
			'require-unicode-regexp': 'off',
			'sort-keys': 'off',
			'no-undef': 'off',
			'sort-vars': 'off',
			'one-var': 'off',
			'max-lines': 'off',
			'max-nesting-depth': 'off',
			'no-magic-numbers': 'off',
			'max-statements': 'off',
			'max-lines-per-function': 'off',
		},
	},

	{
		ignores: [
			// Compiled output
			'dist/',
			'tmp/',
			'out-tsc/',
			'bazel-out/',

			// Node
			'node_modules/',
			'npm-debug.log',
			'yarn-error.log',

			// IDEs and editors
			'.idea/',
			'.project',
			'.classpath',
			'.c9/',
			'*.launch',
			'.settings/',
			'*.sublime-workspace',

			// Visual Studio Code
			'.vscode/',
			'!.vscode/settings.json',
			'!.vscode/tasks.json',
			'!.vscode/launch.json',
			'!.vscode/extensions.json',
			'.history/',

			// Miscellaneous
			'.angular/cache/',
			'.sass-cache/',
			'connect.lock',
			'coverage/',
			'libpeerconnection.log',
			'testem.log',
			'typings/',

			// System files
			'.DS_Store',
			'Thumbs.db',

			// Storybook і NX
			'*storybook.log',
			'.nx/',
			'.vscode/',
		],
	},
];
