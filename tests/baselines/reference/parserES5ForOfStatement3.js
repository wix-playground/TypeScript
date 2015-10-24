//// [parserES5ForOfStatement3.ts]
for (var a, b of X) {
}

//// [parserES5ForOfStatement3.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var a = X[_i];
}
