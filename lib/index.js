"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(test, message) {
    if (!test) {
        fail(message);
    }
}
exports.assert = assert;
function fail(message) {
    const prefix = 'Assertion failed';
    throw Error(message ? `${prefix}: ${message}` : prefix);
}
exports.fail = fail;
function notNull(v, message) {
    if (v == null) {
        throw Error(message || `Expect not null value, but got ${v}`);
    }
    return v;
}
exports.notNull = notNull;
