import jasmine from 'eslint-plugin-jasmine';
import globals from 'globals';

/** @type { import("eslint").Linter.Config[] } */
const config = [
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
// eslint-disable-next-line no-shadow
export default config.map(config => ({ ...config, files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'] }));
