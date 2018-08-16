"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List extends Array {
    constructor() {
        super();
    }
    get count() {
        return this.length;
    }
    add(value) {
        this.push(value);
    }
    get(index) {
        return this[index];
    }
    contains(item) {
        if (this.indexOf(item) != -1) {
            return true;
        }
        else {
            return false;
        }
    }
    clear() {
        this.splice(0, this.count);
    }
}
exports.List = List;
