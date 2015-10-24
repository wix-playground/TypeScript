//// [ES5For-ofTypeCheck1.ts]
for (var v of "") { }

//// [ES5For-ofTypeCheck1.js]
for (var _i = 0, _a = "", _b = _a ? _a.length : 0; _i < _b; _i++) {
    var v = _a[_i];
}
