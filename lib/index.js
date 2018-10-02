"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(test, message) {
    const prefix = 'Assertion failed';
    if (!test) {
        throw Error(message ? `${prefix}: ${message}` : prefix);
    }
}
exports.assert = assert;
function notNull(v, message) {
    if (v == null) {
        throw Error(message || `Expect not null value, but got ${v}`);
    }
    return v;
}
exports.notNull = notNull;
