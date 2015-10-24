//// [ES5For-of8.ts]
function foo() {
    return { x: 0 };
}
for (foo().x of ['a', 'b', 'c']) {
    var p = foo().x;
}

//// [ES5For-of8.js]
function foo() {
    return { x: 0 };
}
for (var _i = 0, _a = ['a', 'b', 'c'], _b = _a ? _a.length : 0; _i < _b; _i++) {
    foo().x = _a[_i];
    var p = foo().x;
}
//# sourceMappingURL=ES5For-of8.js.map