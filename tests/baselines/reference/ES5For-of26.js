//// [ES5For-of26.ts]
for (var [a = 0, b = 1] of [2, 3]) {
    a;
    b;
}

//// [ES5For-of26.js]
for (var _i = 0, _a = [2, 3], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var _c = _a[_i], _d = _c[0], a = _d === void 0 ? 0 : _d, _e = _c[1], b = _e === void 0 ? 1 : _e;
    a;
    b;
}
//# sourceMappingURL=ES5For-of26.js.map