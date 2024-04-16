import js from '@eslint/js';

import configs from 'eslint-plugin-jest';

/** @type { import("eslint").Linter.Config[] } */
const config = [
	js.configs.recommended,
	js.configs.all,

	configs['flat/recommended'],
	configs['flat/style'],
	configs['flat/all'],

	{
		rules: {
			'sort-imports': 'off',
			'init-declarations': 'off',
		},
	},
];

/** @type { import("eslint").Linter.Config[] } */
export default config.map(config => ({ ...config, files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'] }));
