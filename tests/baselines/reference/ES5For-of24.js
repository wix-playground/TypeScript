//// [ES5For-of24.ts]
var a = [1, 2, 3];
for (var v of a) {
    let a = 0;
}

//// [ES5For-of24.js]
var a = [1, 2, 3];
for (var _i = 0, _a = a ? a.length : 0; _i < _a; _i++) {
    var v = a[_i];
    var a_1 = 0;
}
