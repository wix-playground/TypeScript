// These expressions should fail
interface A {
    prop1: string;
    prop2: boolean;
}

function test(a: partial A) {}

let _a: partial A;
let a: A;

_a = { prop1: "A", prop2: "INVALID"};
_a = { prop1: "A", prop3: "SHOULDN'T BE HERE"};
test({ prop1: "A", prop2: "INVALID"});
test({ prop1: "A", prop3: "SHOULDN'T BE HERE"});
