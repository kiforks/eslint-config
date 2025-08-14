import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.Config[] } */
export default tseslint.config(
	{
		files: ['**/*.ts'],
		extends: [...angular.configs.tsRecommended, ...angular.configs.tsAll],
		processor: angular.processInlineTemplates,
		rules: {
			'@angular-eslint/directive-selector': 'off',
			'@angular-eslint/component-selector': 'off',
			'@angular-eslint/no-input-rename': 'off',
		},
	},
	{
		files: ['**/*.spec.component.ts'],
		rules: {
			'@angular-eslint/template/i18n': 'off',
			'@angular-eslint/component-max-inline-declarations': 'off',
		},
	}
);
