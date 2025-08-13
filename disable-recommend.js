/** @type { import("eslint").Linter.Config[] } */
export default {
	files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.js'],
	rules: {
		'dot-notation': 'off',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'no-underscore-dangle': 'off',
		camelcase: 'off',
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: false,
				properties: true,
				capIsNewExceptions: ['Injectable', 'Component', 'Directive', 'Pipe', 'NgModule'],
			},
		],
		'no-magic-numbers': [
			'error',
			{
				ignore: [0, 1, 12, 13, 31, 32, -1],
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				ignoreClassFieldInitialValues: true,
				detectObjects: false,
				enforceConst: false,
			},
		],
		'one-var': 'off',
		'no-ternary': 'off',
		'no-implicit-coercion': 'off',
		'sort-keys': [
			'error',
			'asc',
			{
				caseSensitive: true,
				natural: false,
				minKeys: 10,
				allowLineSeparatedGroups: true,
			},
		],
		'no-use-before-define': 'off',
		'max-statements': ['error', 15, { ignoreTopLevelFunctions: true }],
		'max-classes-per-file': 'off',
		'no-inline-comments': 'off',
		'id-length': [
			'error',
			{
				min: 2,
				exceptions: ['_', 'i', 'e', 'x', 'y', 'z', 'm'],
			},
		],
	},
};
