import js from '@eslint/js';

import jasmine from 'eslint-plugin-jasmine';
import globals from 'globals';

/** @type { import("eslint").Linter.Config[] } */
const config = [
	js.configs.recommended,
	js.configs.all,
	jasmine.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.jasmine,
			},
		},
		plugins: {
			jasmine,
		},
	},
];

/** @type { import("eslint").Linter.Config[] } */
export default config.map(config => ({ ...config, files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'] }));
