import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.Config[] } */
export default tseslint.config({
	files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'],
	extends: [...angular.configs.tsRecommended, ...angular.configs.tsAll],
	processor: angular.processInlineTemplates,
	rules: {
		/* General */
		'max-nested-callbacks': 'off', // Avoid this rule in tests because "describe" and "it" are also counted as callbacks
		'max-params-no-constructor/max-params-no-constructor': 'off', // this is not really useful in tests and would error the "inject" function

		/* Typescript */
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/prefer-destructuring': 'off',

		/* Angular */
		'@angular-eslint/prefer-on-push-component-change-detection': 'off',

		'max-lines': 'off',
	},
});
