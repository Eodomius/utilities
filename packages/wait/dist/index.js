"use strict";
/**
 * "Wait for a number of milliseconds, then resolve."
 *
 * The function is a function that returns a promise. The promise is resolved after the specified
 * number of milliseconds
 * @param {number} time - The number of milliseconds to wait.
 * @returns Nothing.
 */
function wait(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
