((parent) => {
    class BaseGameUnit extends parent {
        constructor(id, type, healthPoints) {
            super(id, type);

            healthPoints = healthPoints || 100;
            this.healthPoints = healthPoints;

            this._positionX = 0;
            this._positionY = 0;
            this.experience = 0;
            this.level = 1;
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

            validateNumberValue(position.x);
            validateNumberValue(position.y);

            this._positionX = +position.x;
            this._positionY = +position.y;
        }

        get level() {
            return this._level;
        }

        set level(level) {
            validateNumberValue(level);
            this._level = +level;
        }

        get experience() {
            return this._experience;
        }

        set experience(experience) {
            validateNumberValue(experience);
            this._experience = +experience;
        }

        get healthPoints() {
            return this._healthPoins;
        }

        set healthPoints(healthPoints) {
            validateHealthPoints(healthPoints);
            this._healthPoins = healthPoints;
        }

        get currentWeapon() {
            return this._currentWeapon;
        }

        set currentWeapon(weapon) {
            validateObjectIsProvided(weapon);
            this._currentWeapon = weapon;
        }

        get isAlive() {
            let result = this.healthPoints >= 0;
            return result;
        }

        dealDamage(timestamp) {
            // TODO: apply weapon damage ( ability damage, bonuses)
        }

        takeDamage(damage) {
            // TODO: damage modifier based on statistics
        }
    }

    function validateHealthPoints(value) {
        if (!(+value || value === 0)) {
            throw new Error('value must be a number.');
        }

        if ((+value | 0) !== +value) {
            throw new Error('value must be an integer.');
        }
    }

    function validateNumberValue(value) {
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