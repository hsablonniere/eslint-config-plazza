'use strict';

//  __     __         _       _     _
//  \ \   / /_ _ _ __(_) __ _| |__ | | ___ ___
//   \ \ / / _` | '__| |/ _` | '_ \| |/ _ \ __|
//    \ V / (_| | |  | | (_| | |_) | |  __\__ \
//     \_/ \__,_|_|  |_|\__,_|_.__/|_|\___|___/
//
//
// These rules have to do with variable declarations.
// http://eslint.org/docs/2.0.0/rules/index.html#variables

module.exports = {

    'rules': {

        // enforce or disallow variable initializations at definition
        'init-declarations': 0,

        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 2,

        // disallow deletion of variables
        'no-delete-var': 2,

        // disallow labels that share a name with a variable
        'no-label-var': 2,

        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 2,

        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 2,

        // disallow use of undefined when initializing variables
        'no-undef-init': 2,

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 2,

        // disallow use of undefined variable
        'no-undefined': 2,

        // disallow declaration of variables that are not used in the code
        'no-unused-vars': 2,

        // disallow use of variables before they are defined
        'no-use-before-define': [2, { functions: false, classes: false }],
    }
};
