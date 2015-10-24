//// [ES5For-of31.ts]
var a: string, b: number;

for ({ a: b = 1, b: a = ""} of []) {
    a;
    b;
}

//// [ES5For-of31.js]
var a, b;
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    _c = _a[_i], _d = _c.a, b = _d === void 0 ? 1 : _d, _e = _c.b, a = _e === void 0 ? "" : _e;
    a;
    b;
}
var _c, _d, _e;
