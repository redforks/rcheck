"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
test('assert', () => {
    _1.assert(true);
    expect(() => _1.assert(false)).toThrow('Assertion failed');
    expect(() => _1.assert(0, 'blah')).toThrow('Assertion failed: blah');
});
