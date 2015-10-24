//// [parserES5ForOfStatement5.ts]
for (var a: number of X) {
}

//// [parserES5ForOfStatement5.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var a = X[_i];
}
