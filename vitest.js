import vitest from '@vitest/eslint-plugin';

/** @type { import("eslint").Linter.Config[] } */
export const config = [
	{
		plugins: {
			vitest,
		},
		rules: {
			...vitest.configs.all.rules,
			'vitest/prefer-importing-vitest-globals': 'off',
			'vitest/no-importing-vitest-globals': 'off',
			'vitest/prefer-expect-assertions': 'off',
			'vitest/consistent-test-filename': 'off',
			'vitest/no-hooks': 'off',
			'vitest/expect-expect': [
				'error',
				{
					assertFunctionNames: ['expect', 'check*'],
				},
			],
		},
		settings: {
			vitest: {
				typecheck: true,
			},
		},
		languageOptions: {
			globals: {
				...vitest.environments.env.globals,
			},
		},
	},
];

/** @type { import("eslint").Linter.Config[] } */
// eslint-disable-next-line no-shadow
export default config.map(config => ({ ...config, files: ['**/*.spec.ts', '**/*.host.ts', '**/*.po.ts'] }));
