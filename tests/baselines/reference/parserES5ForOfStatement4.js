//// [parserES5ForOfStatement4.ts]
for (var a = 1 of X) {
}

//// [parserES5ForOfStatement4.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var a = 1 = X[_i];
}
