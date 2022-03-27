"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesLink = exports.hasSpecialCharacter = exports.passwordForce = exports.isEmail = void 0;
/**
 * It checks if the string is a valid email address.
 * @param {string} str - The string to be tested.
 * @returns A boolean value.
 */
function isEmail(str) {
    const valide = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return valide.test(str);
}
exports.isEmail = isEmail;
/**
 * It checks if the password is strong, medium or weak.
 * @param {string} str - The string to test.
 * @returns The password strength.
 */
function passwordForce(str) {
    let strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    let mediumRegex = new RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/);
    let strength = "";
    if (strongRegex.test(str)) {
        strength = "strong";
    }
    else if (mediumRegex.test(str)) {
        strength = "medium";
    }
    else {
        strength = "weak";
    }
    return strength;
}
exports.passwordForce = passwordForce;
/**
 * Check if a string contains a special character
 * @param {string} str - The string to check for special characters.
 * @returns a boolean value.
 */
function hasSpecialCharacter(str) {
    const specialCharacterRegex = new RegExp(/[a-z0-9]/i);
    const strArray = str.split("");
    let specialCharacter = false;
    for (const str of strArray) {
        if (!specialCharacterRegex.test(str)) {
            specialCharacter = true;
            break;
        }
    }
    return specialCharacter;
}
exports.hasSpecialCharacter = hasSpecialCharacter;
/**
 * It checks if the string contains a link.
 * @param {string} str - The string to check.
 * @returns A boolean value.
 */
function includesLink(str) {
    const strArray = str.split(" ");
    const linkRegex = new RegExp(/^https?:\/\/(www.)?[a-zA-Z0-9@:%._\+~#=]{3,63}.[a-zA-Z]{2,3}((\/)?([a-zA-Z0-9#\?=&]){1,2000}){1,1000}$/);
    let includesLink = false;
    if (strArray && strArray.length) {
        for (const item of strArray) {
            const str = item;
            if (linkRegex.test(str)) {
                includesLink = true;
                break;
            }
        }
    }
    else
        return undefined;
    return includesLink;
}
exports.includesLink = includesLink;
