//// [parserES5ForOfStatement6.ts]
for (var a = 1, b = 2 of X) {
}

//// [parserES5ForOfStatement6.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var a = 1 = X[_i];
}
