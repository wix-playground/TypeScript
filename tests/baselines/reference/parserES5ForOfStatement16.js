//// [parserES5ForOfStatement16.ts]
for (var {a, b} of X) {
}

//// [parserES5ForOfStatement16.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var _b = X[_i], a = _b.a, b = _b.b;
}
