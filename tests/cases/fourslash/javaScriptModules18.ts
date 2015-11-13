///<reference path="fourslash.ts" />

// CommonJS modules should not pollute the global namespace

// @allowNonTsExtensions: true
// @Filename: myMod.js
//// var x = require('fs');

// @Filename: other.js
//// /**/;

goTo.file('other.js');

verify.not.completionListContains('x');
