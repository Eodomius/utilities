/**
 * `cast` is a function that takes a value of any type and returns that value as a value of type `T`
 * @param {unknown} value - The value to cast.
 * @returns The value of `value` cast to type `T`.
 */
export function cast<T>(value: unknown): T {
  return value as T;
}
