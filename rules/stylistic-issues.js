'use strict';

//   ____  _         _ _     _   _        ___
//  / ___|| |_ _   _| (_)___| |_(_) ___  |_ _|___ ___ _   _  ___ ___
//  \___ \| __| | | | | / __| __| |/ __|  | |/ __/ __| | | |/ _ \ __|
//   ___) | |_| |_| | | \__ \ |_| | (__   | |\__ \__ \ |_| |  __\__ \
//  |____/ \__|\__, |_|_|___/\__|_|\___| |___|___/___/\__,_|\___|___/
//             |___/
//
// These rules are purely matters of style and are quite subjective.
// http://eslint.org/docs/2.0.0/rules/index.html#stylistic-issues

module.exports = {

    'rules': {

        // enforce spacing inside array brackets
        'array-bracket-spacing': [2, 'never'],

        // disallow or enforce spaces inside of single line blocks
        'block-spacing': [2, 'always'],

        // enforce one true brace style
        'brace-style': [2, 'stroustrup', { 'allowSingleLine': false }],

        // require camel case names
        'camelcase': [2, { 'properties': 'never' }],

        // enforce spacing before and after comma
        'comma-spacing': [2, { 'before': false, 'after': true }],

        // enforce one true comma style
        'comma-style': [2, 'last'],

        // require or disallow padding inside computed properties
        'computed-property-spacing': [2, 'never'],

        // enforce consistent naming when capturing the current execution context
        'consistent-this': 0,

        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': 2,

        // require function expressions to have a name
        'func-names': 0,

        // enforce use of function declarations or expressions
        'func-style': 0,

        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': 0,

        // require identifiers to match the provided regular expression
        'id-match': 0,

        // blacklist certain identifiers to prevent them being used
        'id-blacklist': 0,

        // specify tab or space width for your code
        'indent': [2, 4, { 'SwitchCase': 1 }],

        // specify whether double or single quotes should be used in JSX attributes
        'jsx-quotes': 2,

        // enforce spacing between keys and values in object literal properties
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],

        // enforce spacing before and after keywords
        'keyword-spacing': 2,

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style': 2,

        // enforce empty lines around comments
        'lines-around-comment': 0,

        // specify the maximum depth that blocks can be nested
        'max-depth': 0,

        // specify the maximum length of a line in your program
        'max-len': 0,

        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': 0,

        // limits the number of parameters that can be used in the function declaration
        'max-params': 0,

        // specify the maximum number of statement allowed in a function
        'max-statements': 0,

        // require a capital letter for constructors
        'new-cap': 0,

        // disallow the omission of parentheses when invoking a constructor with no arguments
        'new-parens': 2,

        // require or disallow an empty newline after variable declarations
        'newline-after-var': 0,

        // enforce newline after each call when chaining the calls
        'newline-per-chained-call': 0,

        // disallow use of the Array constructor
        'no-array-constructor': 2,

        // disallow use of bitwise operators
        'no-bitwise': 2,

        // disallow use of the continue statement
        'no-continue': 2,

        // disallow comments inline after code
        'no-inline-comments': 2,

        // disallow if as the only statement in an else block
        'no-lonely-if': 0,

        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 2,

        // disallow multiple empty lines
        'no-multiple-empty-lines': [2, { 'max': 2 }],

        // disallow negated conditions
        'no-negated-condition': 2,

        // disallow nested ternary expressions
        'no-nested-ternary': 2,

        // disallow the use of the Object constructor
        'no-new-object': 2,

        // disallow use of unary operators, ++ and --
        'no-plusplus': 2,

        // disallow use of certain syntax in code
        'no-restricted-syntax': [2, 'WithStatement'],

        // disallow space between function identifier and application
        'no-spaced-func': 2,

        // disallow the use of ternary operators
        'no-ternary': 0,

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 2,

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 0,

        // disallow the use of ternary operators when a simpler alternative exists
        'no-unneeded-ternary': 2,

        // disallow whitespace before properties
        'no-whitespace-before-property': 2,

        // require or disallow padding inside curly braces
        'object-curly-spacing': [2, 'always'],

        // require or disallow one variable declaration per function
        'one-var': [2, 'never'],

        // require or disallow an newline around variable declarations
        'one-var-declaration-per-line': [2, 'always'],

        // require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': 0,

        // enforce operators to be placed before or after line breaks
        'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],

        // enforce padding within blocks
        'padded-blocks': 0,

        // require quotes around object literal property names
        'quote-props': [2, 'as-needed', { 'keywords': false }],

        // specify whether backticks, double or single quotes should be used
        'quotes': [2, 'single', 'avoid-escape'],

        // Require JSDoc comment
        'require-jsdoc': 0,

        // enforce spacing before and after semicolons
        'semi-spacing': [2, { 'before': false, 'after': true }],

        // require or disallow use of semicolons instead of ASI
        'semi': [2, 'always'],

        // sort variables within the same declaration block
        'sort-vars': 0,

        // sort import declarations within module
        'sort-imports': 0,

        // require or disallow a space before blocks
        'space-before-blocks': [2, 'always'],

        // require or disallow a space before function opening parenthesis
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],

        // require or disallow spaces inside parentheses
        'space-in-parens': [2, 'never'],

        // require spaces around operators
        'space-infix-ops': 2,

        // require or disallow spaces before/after unary operators
        'space-unary-ops': [2, { words: true, nonwords: false }],

        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [2, 'always'],

        // require regex literals to be wrapped in parentheses
        'wrap-regex': 0,
    }
};
