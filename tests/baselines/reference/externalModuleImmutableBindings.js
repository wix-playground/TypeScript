//// [tests/cases/compiler/externalModuleImmutableBindings.ts] ////

//// [f1.ts]
export var x = 1;

//// [f2.ts]

// all mutations below are illegal and should be fixed
import * as stuff from './f1';

var n = 'baz';

stuff.x = 0;
stuff['x'] = 1;
stuff.blah = 2;
stuff[n] = 3;

stuff.x++;
stuff['x']++;
stuff['blah']++;
stuff[n]++;

(stuff.x) = 0;
(stuff['x']) = 1;
(stuff.blah) = 2;
(stuff[n]) = 3;

(stuff.x)++;
(stuff['x'])++;
(stuff['blah'])++;
(stuff[n])++;

for (stuff.x in []) {}
for (stuff.x of []) {}
for (stuff['x'] in []) {}
for (stuff['x'] of []) {}
for (stuff.blah in []) {}
for (stuff.blah of []) {}
for (stuff[n] in []) {}
for (stuff[n] of []) {}

for ((stuff.x) in []) {}
for ((stuff.x) of []) {}
for ((stuff['x']) in []) {}
for ((stuff['x']) of []) {}
for ((stuff.blah) in []) {}
for ((stuff.blah) of []) {}
for ((stuff[n]) in []) {}
for ((stuff[n]) of []) {}




//// [f1.js]
exports.x = 1;
//// [f2.js]
// all mutations below are illegal and should be fixed
var stuff = require('./f1');
var n = 'baz';
stuff.x = 0;
stuff['x'] = 1;
stuff.blah = 2;
stuff[n] = 3;
stuff.x++;
stuff['x']++;
stuff['blah']++;
stuff[n]++;
(stuff.x) = 0;
(stuff['x']) = 1;
(stuff.blah) = 2;
(stuff[n]) = 3;
(stuff.x)++;
(stuff['x'])++;
(stuff['blah'])++;
(stuff[n])++;
for (stuff.x in []) { }
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    stuff.x = _a[_i];
}
for (stuff['x'] in []) { }
for (var _c = 0, _d = [], _e = _d ? _d.length : 0; _c < _e; _c++) {
    stuff['x'] = _d[_c];
}
for (stuff.blah in []) { }
for (var _f = 0, _g = [], _h = _g ? _g.length : 0; _f < _h; _f++) {
    stuff.blah = _g[_f];
}
for (stuff[n] in []) { }
for (var _j = 0, _k = [], _l = _k ? _k.length : 0; _j < _l; _j++) {
    stuff[n] = _k[_j];
}
for ((stuff.x) in []) { }
for (var _m = 0, _o = [], _p = _o ? _o.length : 0; _m < _p; _m++) {
    (stuff.x) = _o[_m];
}
for ((stuff['x']) in []) { }
for (var _q = 0, _r = [], _s = _r ? _r.length : 0; _q < _s; _q++) {
    (stuff['x']) = _r[_q];
}
for ((stuff.blah) in []) { }
for (var _t = 0, _u = [], _v = _u ? _u.length : 0; _t < _v; _t++) {
    (stuff.blah) = _u[_t];
}
for ((stuff[n]) in []) { }
for (var _w = 0, _x = [], _y = _x ? _x.length : 0; _w < _y; _w++) {
    (stuff[n]) = _x[_w];
}
