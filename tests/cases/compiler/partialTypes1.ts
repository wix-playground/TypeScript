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