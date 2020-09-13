module.exports = {
	extends: ['airbnb-typescript-prettier'],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'import/prefer-default-export': 0,
		'react-hooks/exhaustive-deps': 0,
		'newline-before-return': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'func-names': 0,
	},
};
