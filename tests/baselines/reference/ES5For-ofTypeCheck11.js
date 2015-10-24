//// [ES5For-ofTypeCheck11.ts]
var union: string | number[];
var v: string;
for (v of union) { }

//// [ES5For-ofTypeCheck11.js]
var union;
var v;
for (var _i = 0, _a = union ? union.length : 0; _i < _a; _i++) {
    v = union[_i];
}
