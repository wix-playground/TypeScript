//// [partialTypes1.ts]
// All these expressions should be valid
interface A {
    prop1: string;
    prop2: boolean;
}

function test(_x: partial A) {
}

let a: A;
let _a: partial A = { prop1: 'p' };
_a = a;

test(a);
test(_a);

//// [partialTypes1.js]
function test(_x) {
}
var a;
var _a = { prop1: 'p' };
_a = a;
test(a);
test(_a);
