//// [ES5For-of30.ts]
var a: string, b: number;
var tuple: [number, string] = [2, "3"];
for ([a = 1, b = ""] of tuple) {
    a;
    b;
}

//// [ES5For-of30.js]
var a, b;
var tuple = [2, "3"];
for (var _i = 0, _a = tuple ? tuple.length : 0; _i < _a; _i++) {
    _b = tuple[_i], _c = _b[0], a = _c === void 0 ? 1 : _c, _d = _b[1], b = _d === void 0 ? "" : _d;
    a;
    b;
}
var _b, _c, _d;
