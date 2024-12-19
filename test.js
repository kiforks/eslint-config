import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.Config[] } */
export default tseslint.config({
	files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'],
	rules: {
		/* General */
		'max-nested-callbacks': 'off',
		'max-params-no-constructor/max-params-no-constructor': 'off',

		/* Typescript */
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/prefer-destructuring': 'off',

		/* Angular */
		'@angular-eslint/prefer-on-push-component-change-detection': 'off',

		'max-lines': 'off',
		'max-nesting-depth': 'off',
		'no-magic-numbers': 'off',
		'max-statements': 'off',
		'max-lines-per-function': 'off',
		'init-declarations': 'off',
	},
});
