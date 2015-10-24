//// [parserES5ForOfStatement7.ts]
for (var a: number = 1, b: string = "" of X) {
}

//// [parserES5ForOfStatement7.js]
for (var _i = 0, _a = X ? X.length : 0; _i < _a; _i++) {
    var a = 1 = X[_i];
}
