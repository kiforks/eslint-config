import js from '@eslint/js';

/** @type { import("eslint").Linter.Config[] } */
// eslint-disable-next-line no-shadow
const config = [js.configs.recommended, js.configs.all].flatMap(config => ({
	...config,
	files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
}));

/** @type { import("eslint").Linter.Config[] } */
export default [
	...config,

	{
		rules: {
			'sort-imports': 'off',
		},
	},
];
