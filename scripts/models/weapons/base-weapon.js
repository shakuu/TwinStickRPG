(function () {
    var BaseWeapon = (function () {
        // STATIC in this scope.

        function Constructor(options) {
            if (!options) {
                throw new Error('options parameter must be provided.');
            }

            this.damage = options.damage;
            this.timeBetweenShotsInMs = options.timeBetweenShotsInMs;
            this.reloadTimeInMs = options.reloadTimeInMs;
            this.ammoCapacity = options.ammoCapacity;
            this._mods = [];
        }

        Object.defineProperty(Constructor.prototype, 'damage', {
            get: function () {
                return this._damage;
            },
            set: function (damage) {
                validateValueIsNotSet(this._damage);
                if (validateIsNumber(damage) && validateNumberIsNotNegative(damage)) {
                    this._damage = damage;
                }
            }
        });

        Object.defineProperty(Constructor.prototype, 'timeBetweenShotsInMs', {
            get: function () {
                return this._timeBetweenShotsInMs;
            },
            set: function (timeBetweenShotsInMs) {
                validateValueIsNotSet(this._timeBetweenShotsInMs);
                if (validateIsNumber(timeBetweenShotsInMs) &&
                    validateNumberIsNotNegative(timeBetweenShotsInMs) &&
                    validateNumberIsIntegerValue(timeBetweenShotsInMs)) {

                    this._timeBetweenShotsInMs = timeBetweenShotsInMs;
                }
            }
        });

        Object.defineProperty(Constructor.prototype, 'reloadTimeInMs', {
            get: function () {
                return this._reloadTimeInMs;
            },
            set: function (reloadTimeInMs) {
                validateValueIsNotSet(this._reloadTimeInMs);
                if (validateIsNumber(reloadTimeInMs) &&
                    validateNumberIsNotNegative(reloadTimeInMs) &&
                    validateNumberIsIntegerValue(reloadTimeInMs)) {

                    this._reloadTimeInMs = reloadTimeInMs;
                }
            }
        });

        Object.defineProperty(Constructor.prototype, 'ammoCapacity', {
            get: function () {
                return this._ammoCapacity;
            },
            set: function (ammoCapacity) {
                validateValueIsNotSet(this._ammoCapacity);
                if (validateIsNumber(ammoCapacity) &&
                    validateNumberIsNotNegative(ammoCapacity) &&
                    validateNumberIsIntegerValue(ammoCapacity)) {

                    this._ammoCapacity = ammoCapacity;
                }
            }
        });

        Object.defineProperty(Constructor.prototype, 'addMod', {
            value: {
                function(mod) {
                    if (!mod) {
                        throw new Error('mod parameter must be provided.');
                    }

                    if (!mod.name || typeof mod.name !== 'string') {
                        throw new Error('mod.name must be provided.');
                    }
                }
            }
        });

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
            if ((value | 0) === value) {
                return true;
            } else {
                throw new Error('Value must be an integer.');
            }
        }

        return Constructor;
    } ());

    module.exports = BaseWeapon;
} ());