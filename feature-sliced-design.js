/** @type { import("eslint").Linter.Config[] } */
export default [
	/**
	 * @layer shared
	 * @description The shared layer cannot import from any other layer.
	 */
	{
		files: ['**/shared/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/entities', '**/features', '**/widgets', '**/pages', '**/processes', '**/app'],
							message: '❌ Shared layer must not import from any other FSD layer.',
						},
					],
				},
			],
		},
	},

	/**
	 * @layer entities
	 * @description Entities can only use shared.
	 */
	{
		files: ['**/entities/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/features', '**/widgets', '**/pages', '**/processes', '**/app'],
							message: '❌ Entities can only import from shared.',
						},
					],
				},
			],
		},
	},

	/**
	 * @layer features
	 * @description Features can use shared and entities.
	 */
	{
		files: ['**/features/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/widgets', '**/pages', '**/processes', '**/app'],
							message: '❌ Features can only import from shared and entities.',
						},
					],
				},
			],
		},
	},

	/**
	 * @layer widgets
	 * @description Widgets can use shared, entities, and features.
	 */
	{
		files: ['**/widgets/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/pages', '**/processes', '**/app'],
							message: '❌ Widgets can only import from shared, entities, and features.',
						},
					],
				},
			],
		},
	},

	/**
	 * @layer pages
	 * @description Pages can use shared, entities, features, and widgets.
	 */
	{
		files: ['**/pages/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/processes', '**/app'],
							message: '❌ Pages can only import from shared, entities, features, and widgets.',
						},
					],
				},
			],
		},
	},

	/**
	 * @layer processes
	 * @description Processes can use shared, entities, features, widgets, and pages.
	 */
	{
		files: ['**/processes/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['**/app'],
							message: '❌ Processes can only import from shared, entities, features, widgets, and pages.',
						},
					],
				},
			],
		},
	},
];
