//// [ES5For-of27.ts]
for (var {x: a = 0, y: b = 1} of [2, 3]) {
    a;
    b;
}

//// [ES5For-of27.js]
for (var _i = 0, _a = [2, 3], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var _c = _a[_i], _d = _c.x, a = _d === void 0 ? 0 : _d, _e = _c.y, b = _e === void 0 ? 1 : _e;
    a;
    b;
}
