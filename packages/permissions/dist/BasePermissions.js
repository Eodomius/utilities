"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePermissions = void 0;
class BasePermissions {
    permissions;
    constructor(permissions) {
        this.permissions = permissions;
    }
    get ALL() {
        let bit = 0;
        for (let flag of this.permissions) {
            bit += flag.value;
        }
        return bit;
    }
}
exports.BasePermissions = BasePermissions;
