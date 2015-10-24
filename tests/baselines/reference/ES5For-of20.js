//// [ES5For-of20.ts]
for (let v of []) {
    let v;
    for (let v of [v]) {
        const v;
    }
}

//// [ES5For-of20.js]
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var v = _a[_i];
    var v_1;
    for (var _c = 0, _d = [v_2], _e = _d ? _d.length : 0; _c < _e; _c++) {
        var v_2 = _d[_c];
        var v_3;
    }
}
