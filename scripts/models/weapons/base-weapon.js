(function () {
    var BaseWeapon = (function () {
        var _damage,
            _delayBetweenShotsInMs,
            _reloadTime,
            _ammoCapacity,
            _ammo,
            _mods = [];

        function Constructor(options) {

        }

        Object.defineProperty(Constructor.prototype, 'damage', {
            get: function () {
                return _damage;
            },
            set: function (damage) {
                validateValueIsNotSet(_damage);
                if (validateIsNumber(damage) && validateNumberIsNotNegative(damage)) {
                    _damage = damage;
                }
            }
        });

        function validateValueIsNotSet(property) {
            if (typeof property !== 'undefined') {
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

        return Constructor;
    } ());

    module.exports = BaseWeapon;
} ());