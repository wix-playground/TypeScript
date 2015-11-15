//// [partialTypes.ts]
interface A {
    prop1: string;
    prop2: boolean;
}

const a: partial A = { prop1: 'p' };


//// [partialTypes.js]
var a = { prop1: 'p' };
