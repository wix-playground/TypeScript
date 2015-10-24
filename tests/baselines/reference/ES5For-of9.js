//// [ES5For-of9.ts]
function foo() {
    return { x: 0 };
}
for (foo().x of []) {
    for (foo().x of []) {
        var p = foo().x;
    }
}

//// [ES5For-of9.js]
function foo() {
    return { x: 0 };
}
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    foo().x = _a[_i];
    for (var _c = 0, _d = [], _e = _d ? _d.length : 0; _c < _e; _c++) {
        foo().x = _d[_c];
        var p = foo().x;
    }
}
