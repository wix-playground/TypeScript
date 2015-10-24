//// [argumentsObjectIterator02_ES5.ts]

function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {
    let blah = arguments[Symbol.iterator];

    let result = [];
    for (let arg of blah()) {
        result.push(arg + arg);
    }
    return <[any, any, any]>result;
}



//// [argumentsObjectIterator02_ES5.js]
function doubleAndReturnAsArray(x, y, z) {
    var blah = arguments[Symbol.iterator];
    var result = [];
    for (var _i = 0, _a = blah(), _b = _a ? _a.length : 0; _i < _b; _i++) {
        var arg = _a[_i];
        result.push(arg + arg);
    }
    return result;
}
