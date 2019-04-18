"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
test('assert', () => {
    _1.assert(true);
    expect(() => { _1.assert(false); }).toThrow('Assertion failed');
    expect(() => { _1.assert(0, 'blah'); }).toThrow('Assertion failed: blah');
});
it('notNull', () => {
    expect(_1.notNull(0)).toBe(0);
    expect(() => _1.notNull(null)).toThrow('Expect not null value, but got null');
    expect(() => _1.notNull(undefined)).toThrow('Expect not null value, but got undefined');
    expect(() => _1.notNull(null, 'foo')).toThrow('foo');
});
