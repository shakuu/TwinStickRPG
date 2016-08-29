"use strict";
class Random {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    get min() {
        return this._min;
    }
    set min(min) {
        this._min = +min;
    }
    get max() {
        return this._max;
    }
    set max(max) {
        this._max = +max;
    }
    generate() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}
exports.Random = Random;
