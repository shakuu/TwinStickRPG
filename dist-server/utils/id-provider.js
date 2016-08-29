"use strict";
class IdProvider {
    constructor() {
        this._currentValue = 0;
    }
    getNext() {
        return this._currentValue++;
    }
    reset() {
        this._currentValue = 0;
    }
}
exports.IdProvider = IdProvider;
