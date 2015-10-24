//// [ES5For-ofTypeCheck9.ts]
var union: string | string[] | number | symbol;
for (let v of union) { }

//// [ES5For-ofTypeCheck9.js]
var union;
for (var _i = 0, _a = union ? union.length : 0; _i < _a; _i++) {
    var v = union[_i];
}
