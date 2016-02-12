module.exports = {

    'parser': 'babel-eslint',

    'extends': [
        'eslint-config-plazza/rules/best-practices',
        'eslint-config-plazza/rules/es6',
        'eslint-config-plazza/rules/nodejs-commonjs',
        'eslint-config-plazza/rules/possible-errors',
        'eslint-config-plazza/rules/strict-mode',
        'eslint-config-plazza/rules/stylistic-issues',
        'eslint-config-plazza/rules/variables',
    ],

    'env': {
        'es6': true,
        'node': true
    },

    'rules': {

        // require effective use of strict mode directives
        'strict': [2, 'global'],
    },

    'globals': {
    }
};
