//// [emptyVariableDeclarationBindingPatterns01_ES5.ts]

(function () {
    var a: any;

    var {} = a;
    let {} = a;
    const {} = a;

    var [] = a;
    let [] = a;
    const [] = a;

    var {} = a, [] = a;
    let {} = a, [] = a;
    const {} = a, [] = a;

    var { p1: {}, p2: [] } = a;
    let { p1: {}, p2: [] } = a;
    const { p1: {}, p2: [] } = a;

    for (var {} = {}, {} = {}; false; void 0) {
    }

    function f({} = a, [] = a, { p: {} = a} = a) {
        return ({} = a, [] = a, { p: {} = a } = a) => a;
    }
})();

(function () {
    const ns: number[][] = [];

    for (var {} of ns) {
    }

    for (let {} of ns) {
    }

    for (const {} of ns) {
    }

    for (var [] of ns) {
    }

    for (let [] of ns) {
    }

    for (const [] of ns) {
    }
})();

//// [emptyVariableDeclarationBindingPatterns01_ES5.js]
(function () {
    var a;
    var _a = a;
    var _b = a;
    var _c = a;
    var _d = a;
    var _e = a;
    var _f = a;
    var _g = a, _h = a;
    var _j = a, _k = a;
    var _l = a, _m = a;
    var _o = a.p1, _p = a.p2;
    var _q = a.p1, _r = a.p2;
    var _s = a.p1, _t = a.p2;
    for (var _u = {}, _v = {}; false; void 0) {
    }
    function f(_a, _b, _c) {
        var _a = a;
        var _b = a;
        var _d = (_c === void 0 ? a : _c).p, _e = _d === void 0 ? a : _d;
        return function (_a, _b, _c) {
            var _a = a;
            var _b = a;
            var _d = (_c === void 0 ? a : _c).p, _e = _d === void 0 ? a : _d;
            return a;
        };
    }
})();
(function () {
    var ns = [];
    for (var _i = 0, _a = ns ? ns.length : 0; _i < _a; _i++) {
        var _b = ns[_i];
    }
    for (var _c = 0, _d = ns ? ns.length : 0; _c < _d; _c++) {
        var _e = ns[_c];
    }
    for (var _f = 0, _g = ns ? ns.length : 0; _f < _g; _f++) {
        var _h = ns[_f];
    }
    for (var _j = 0, _k = ns ? ns.length : 0; _j < _k; _j++) {
        var _l = ns[_j];
    }
    for (var _m = 0, _o = ns ? ns.length : 0; _m < _o; _m++) {
        var _p = ns[_m];
    }
    for (var _q = 0, _r = ns ? ns.length : 0; _q < _r; _q++) {
        var _s = ns[_q];
    }
})();
