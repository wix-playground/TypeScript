//// [ES5For-of6.ts]
for (var w of []) {
    for (var v of []) {
        var x = [w, v];
    }
}

//// [ES5For-of6.js]
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var w = _a[_i];
    for (var _c = 0, _d = [], _e = _d ? _d.length : 0; _c < _e; _c++) {
        var v = _d[_c];
        var x = [w, v];
    }
}
