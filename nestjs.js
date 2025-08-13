import eslintNestJsTyped from '@darraghor/eslint-plugin-nestjs-typed';

import nestJsConfig from 'eslint-plugin-nestjs';

/** @type { import("eslint").Linter.Config[] } */
export default [
	{
		plugins: {
			nestjs: nestJsConfig,
		},
		rules: {
			'nestjs/parse-int-pipe': 'error',
			'nestjs/deprecated-api-modules': 'error',
			'nestjs/use-dependency-injection': 'error',
			'nestjs/use-validation-pipe': 'error',
		},
	},
	...eslintNestJsTyped.configs.flatRecommended,
	{
		rules: {
			/* Those rules are not working properly */
			'@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator': 'off',
			'@darraghor/nestjs-typed/injectable-should-be-provided': 'off',
			'nestjs/use-validation-pipe': 'off',
		},
	},
].map(config => ({ ...config, files: ['**/*.ts'] }));
