import {IWeaponOptions} from '../../interfaces/weapons/options/weapon-options.ts';
import {IBaseWeapon} from '../../interfaces/weapons/base-weapon';

const activeEffectMods = [];
const mods = [];

class BaseWeapon implements IBaseWeapon {
    private _damage: number;
    private _delayBetweenShotsInMs: number;
    private _reloadTimeInMs: number;
    private _ammoCapacity: number;

    constructor(options: IWeaponOptions) {
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

export {BaseWeapon};