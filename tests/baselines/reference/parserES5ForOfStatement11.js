//// [parserES5ForOfStatement11.ts]
for (const [a, b] of X) {
}

//// [parserES5ForOfStatement11.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var _b = X[_i], a = _b[0], b = _b[1];
}
