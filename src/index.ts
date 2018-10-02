export function assert(test: any, message?: string) {
  const prefix = 'Assertion failed';
  if (!test) {
    throw Error(message ? `${prefix}: ${message}` : prefix);
  }
}

export function notNull<T>(v: T | null | undefined, message?: string): T {
  if (v == null) {
    throw Error(message || `Expect not null value, but got ${v}`);
  }
  return v;
}
