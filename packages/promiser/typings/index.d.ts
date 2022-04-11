/**
 * It takes an array of functions and returns a promise that resolves to an array of the results of
 * those functions, or rejects with an error
 * @param {Function[]} fn - Function[] - an array of functions that return a promise
 * @returns An array of two elements. The first element is the result of the promise, the second
 * element is the error.
 */
declare function promiser(...fn: Function[]): Promise<Array<null | any> | null>;
export { promiser };
