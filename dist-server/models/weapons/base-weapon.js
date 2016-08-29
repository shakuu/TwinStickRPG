"use strict";
const activeEffectMods = [];
const mods = [];
class BaseWeapon {
    constructor(options) {
        this.damage = options.damage;
        this.delayBetweenShotsInMs = options.delayBetweenShotsInMs;
        this.reloadTimeInMs = options.reloadTimeInMs;
        this.ammoCapacity = options.ammoCapacity;
    }
    get damage() {
        return this._damage;
    }
    set damage(damage) {
        this._damage = damage;
    }
    get delayBetweenShotsInMs() {
        return this._delayBetweenShotsInMs;
    }
    set delayBetweenShotsInMs(timeBetweenShotsInMs) {
        this._delayBetweenShotsInMs = timeBetweenShotsInMs;
    }
    get reloadTimeInMs() {
        return this._reloadTimeInMs;
    }
    set reloadTimeInMs(reloadTimeInMs) {
        this._reloadTimeInMs = reloadTimeInMs;
    }
    get ammoCapacity() {
        return this._ammoCapacity;
    }
    set ammoCapacity(ammoCapacity) {
        this._ammoCapacity = ammoCapacity;
    }
    addMod(mod) {
    }
    shoot() {
    }
}
exports.BaseWeapon = BaseWeapon;
