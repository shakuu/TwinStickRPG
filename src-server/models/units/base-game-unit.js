((parent) => {
    class BaseGameUnit extends parent {
        constructor(id, type) {
            super(id, type);

            this._positionX = 0;
            this._positionY = 0;
        }

        get position() {
            return {
                x: this._positionX,
                y: this._positionY
            };
        }

        set position(position) {
            if (!position) {
                throw new Error('position parameter must be provided.');
            }

            if (!position.x) {
                throw new Error('position.x must be provided.');
            }

            if (!position.y) {
                throw new Error('position.y must be provided.');
            }

            validatePositionvalue(position.x);
            validatePositionvalue(position.y);

            this._positionX = position.x;
            this._positionY = position.y;
        }

        get currentWeapon() {
            return this._currentWeapon;
        }

        set currentWeapon(weapon) {
            validateObjectIsProvided(weapon);
            this._currentWeapon = weapon;
        }
    }

    function validatePositionvalue(value) {
        if (!(+value || value === 0)) {
            throw new Error('value must be a number.');
        }

        if (+value < 0) {
            throw new Error('value must be positive.');
        }

        if ((+value | 0) !== +value) {
            throw new Error('value must be an integer.');
        }
    }

    function validateObjectIsProvided(obj) {
        if (!obj) {
            throw new Error('value must be provided.');
        }
    }

    module.exports = BaseGameUnit;
})(require('../base-game-object'));