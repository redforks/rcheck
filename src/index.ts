export function assert(test: any, message?: string) {
  const prefix = 'Assertion failed';
  if (!test) {
    throw Error(message ? `${prefix}: ${message}` : prefix);
  }
}
