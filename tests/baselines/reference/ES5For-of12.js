//// [ES5For-of12.ts]
for ([""] of [[""]]) { }

//// [ES5For-of12.js]
for (var _i = 0, _a = [[""]], _b = _a ? _a.length : 0; _i < _b; _i++) {
    "" = _a[_i][0];
}
