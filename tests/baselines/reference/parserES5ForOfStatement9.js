//// [parserES5ForOfStatement9.ts]
for (let v of X) {
}

//// [parserES5ForOfStatement9.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var v = X[_i];
}
