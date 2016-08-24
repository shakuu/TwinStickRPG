(() => {
    let WeaponOptions = require('../../utils/options-containers/weapon-options');

    class BaseWeapon {
        constructor(options) {
            if (!options) {
                throw new Error('options parameter must be provided.');
            }

            this.damage = options.damage;
            this.timeBetweenShotsInMs = options.timeBetweenShotsInMs;
            this.reloadTimeInMs = options.reloadTimeInMs;
            this.ammoCapacity = options.ammoCapacity;
            this._activeEffectMods = [];
            this._mods = [];
        }

        get damage() {
            return this._damage;
        }

        set damage(damage) {
            validateValueIsNotSet(this._damage);
            if (validateIsNumber(damage) && validateNumberIsNotNegative(damage)) {
                this._damage = damage;
            }
        }

        get timeBetweenShotsInMs() {
            return this._timeBetweenShotsInMs;
        }

        set timeBetweenShotsInMs(timeBetweenShotsInMs) {
            validateValueIsNotSet(this._timeBetweenShotsInMs);
            if (validateIsNumber(timeBetweenShotsInMs) &&
                validateNumberIsNotNegative(timeBetweenShotsInMs) &&
                validateNumberIsIntegerValue(timeBetweenShotsInMs)) {

                this._timeBetweenShotsInMs = timeBetweenShotsInMs;
            }
        }

        get reloadTimeInMs() {
            return this._reloadTimeInMs;
        }

        set reloadTimeInMs(reloadTimeInMs) {
            validateValueIsNotSet(this._reloadTimeInMs);
            if (validateIsNumber(reloadTimeInMs) &&
                validateNumberIsNotNegative(reloadTimeInMs) &&
                validateNumberIsIntegerValue(reloadTimeInMs)) {

                this._reloadTimeInMs = reloadTimeInMs;
            }
        }

        get ammoCapacity() {
            return this._ammoCapacity;
        }

        set ammoCapacity(ammoCapacity) {
            validateValueIsNotSet(this._ammoCapacity);
            if (validateIsNumber(ammoCapacity) &&
                validateNumberIsNotNegative(ammoCapacity) &&
                validateNumberIsIntegerValue(ammoCapacity)) {

                this._ammoCapacity = ammoCapacity;
            }
        }

        addMod(mod) {
            if (!mod) {
                throw new Error('mod parameter must be provided.');
            }
            if (!(+mod.typeId || mod.typeId === 0)) {
                throw new Error('mod.typeId must be a valid integer number.');
            } else {
                validateNumberIsIntegerValue(mod.typeId);
            }

            if (!mod.name || typeof mod.name !== 'string') {
                throw new Error('mod.name must be a valid string.');
            }

            if (!mod.isPassiveEffect || typeof mod.isPassiveEffect !== 'boolean') {
                throw new Error('mod.isPassiveEffect must be a valid boolean.');
            }

            if (this._mods.some(function (el) {
                return el.typeId === mod.typeId;
            })) {
                throw new Error('mod with this name already exists');
            }

            if (mod.isPassiveEffect) {
                mod.applyEffect(this);
            } else {
                this._activeEffectMods.push(mod);
            }
            this._mods[mod.name] = mod;
        }

        shoot() {
            var damageToDo;

            return damageToDo;
        }
    }

    function validateValueIsNotSet(property) {
        if (property) {
            throw new Error('Property value cannot be changed.');
        }
    }

    function validateIsNumber(value) {
        if (+value || value === 0) {
            return true;
        } else {
            throw new Error('Value must be a number.');
        }
    }

    function validateNumberIsNotNegative(value) {
        if (value >= 0) {
            return true;
        } else {
            throw new Error('Value must be greated than or equal to zero.');
        }
    }

    function validateNumberIsIntegerValue(value) {
        if ((value | 0) === +value) {
            return true;
        } else {
            throw new Error('Value must be an integer.');
        }
    }

    module.exports = BaseWeapon;
})();