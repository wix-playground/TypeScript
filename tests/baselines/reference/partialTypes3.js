//// [partialTypes3.ts]
// Should fail

interface A {
    prop1: string;
    prop2: boolean;
}

let _a: partial A;
let a: A;

a = _a;

//// [partialTypes3.js]
// Should fail
var _a;
var a;
a = _a;
