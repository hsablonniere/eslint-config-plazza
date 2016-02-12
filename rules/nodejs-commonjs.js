'use strict';

//   _   _           _         _        ___      ____                                          _ ____
//  | \ | | ___   __| | ___   (_)___   ( _ )    / ___|___  _ __ ___  _ __ ___   ___  _ __     | / ___|
//  |  \| |/ _ \ / _` |/ _ \  | / __|  / _ \/\ | |   / _ \| '_ ` _ \| '_ ` _ \ / _ \| '_ \ _  | \___ \
//  | |\  | (_) | (_| |  __/_ | \__ \ | (_>  < | |___ (_) | | | | | | | | | | | (_) | | | | |_| |___) |
//  |_| \_|\___/ \__,_|\___(_)/ |___/  \___/\/  \____\___/|_| |_| |_|_| |_| |_|\___/|_| |_|\___/|____/
//                          |__/
//
// These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
// http://eslint.org/docs/2.0.0/rules/index.html#nodejs-and-commonjs

module.exports = {

    'rules': {

        // enforce return after a callback
        'callback-return': [2, ["next"]],

        // enforce require() on top-level module scope
        'global-require': 2,

        // enforce error handling in callbacks
        'handle-callback-err': 1,

        // disallow mixing regular variable and require declarations
        'no-mixed-requires': 2,

        // disallow use of new operator with the require function
        'no-new-require': 2,

        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 2,

        // disallow process.exit()
        'no-process-exit': 0,

        // restrict usage of specified node imports
        'no-restricted-imports': 0,

        // restrict usage of specified node modules
        'no-restricted-modules': 0,

        // disallow use of synchronous methods
        'no-sync': 1,
    }
};
