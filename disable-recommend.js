/** @type { import("eslint").Linter.Config[] } */
export default {
	rules: {
		'new-cap': [
			'error',
			{
				'newIsCap': true,
				'capIsNew': false,
				'properties': true,
				'capIsNewExceptions': ['Injectable', 'Component', 'Directive', 'Pipe', 'NgModule'],
			},
		],
		'no-magic-numbers': [
			'error',
			{
				'ignore': [0, 1, 12, 13, 31, 32],
				'ignoreArrayIndexes': true,
				'ignoreDefaultValues': true,
				'ignoreClassFieldInitialValues': true,
				'detectObjects': false,
				'enforceConst': false,
			},
		],
		'one-var': 'off',
		'no-ternary': 'off',
		'no-implicit-coercion': 'off',
		'sort-keys': [
			'error',
			'asc',
			{
				'caseSensitive': true,
				'natural': false,
				'minKeys': 10,
				'allowLineSeparatedGroups': true,
			},
		],
		'no-use-before-define': 'off',
	},
};
