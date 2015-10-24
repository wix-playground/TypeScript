//// [parserES5ForOfStatement10.ts]
for (const v of X) {
}

//// [parserES5ForOfStatement10.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var v = X[_i];
}
