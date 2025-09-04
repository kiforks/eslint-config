import storybookConfig from 'eslint-plugin-storybook';

/** @type { import("eslint").Linter.Config[] } */
export default [
	...storybookConfig.configs['flat/recommended'],
	...storybookConfig.configs['flat/csf'],
	...storybookConfig.configs['flat/csf-strict'],
	...storybookConfig.configs['flat/addon-interactions'],
	{
		rules: {
			'storybook/no-title-property-in-meta': 'off',
			'no-magic-numbers': 'off',
		},
	},
].map(config => ({ ...config, files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'] }));
