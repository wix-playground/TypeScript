//// [ES5For-of21.ts]
for (let v of []) {
    for (let _i of []) { }
}

//// [ES5For-of21.js]
for (var _a = 0, _b = [], _c = _b ? _b.length : 0; _a < _c; _a++) {
    var v = _b[_a];
    for (var _d = 0, _e = [], _f = _e ? _e.length : 0; _d < _f; _d++) {
        var _i = _e[_d];
    }
}
