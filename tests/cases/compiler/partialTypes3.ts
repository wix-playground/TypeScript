// Should fail

interface A {
    prop1: string;
    prop2: boolean;
}

let _a: partial A;
let a: A;

a = _a;