//// [argumentsObjectIterator01_ES5.ts]

function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {
    let result = [];
    for (let arg of arguments) {
        result.push(arg + arg);
    }
    return <[any, any, any]>result;
}

//// [argumentsObjectIterator01_ES5.js]
function doubleAndReturnAsArray(x, y, z) {
    var result = [];
    for (var _i = 0, _a = arguments ? arguments.length : 0; _i < _a; _i++) {
        var arg = arguments[_i];
        result.push(arg + arg);
    }
    return result;
}
