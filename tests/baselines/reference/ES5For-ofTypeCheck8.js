//// [ES5For-ofTypeCheck8.ts]
var union: string | string[]| number[]| symbol[];
var v: symbol;
for (v of union) { }

//// [ES5For-ofTypeCheck8.js]
var union;
var v;
for (var _i = 0, _a = union ? union.length : 0; _i < _a; _i++) {
    v = union[_i];
}
