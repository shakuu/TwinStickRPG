(() => {
    let BaseGameObject = require('../base-game-object');
    let validator = require('../../utils/validator');
    let Weapon = require('../weapons/base-weapon');
    let Position = require('../../utils/position');
    let Size = require('../../utils/size');

    class BaseGameUnit extends BaseGameObject {
        constructor(id, type, healthPoints, weapon) {
            super(id, type);

            healthPoints = healthPoints || 100;
            this.healthPoints = healthPoints;
            this.currentWeapon = weapon;
            this.experience = 0;
            this.level = 1;
            this._position = new Position(0, 0);
        }

        get position() {
            return this._position;
        }

        set position(position) {
            validator.validateType(position, Position);
            this._position = position;
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
            validateWeaponObject(weapon);
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

    function validateWeaponObject(weapon) {
        if (!weapon) {
            throw new Error('weapon parameter must be provided.');
        }

        if (!(weapon instanceof Weapon)) {
            throw new Error('weapon parameter must be of type weapon.');
        }

        if (!weapon.damage) {
            throw new Error('weapon.damage value must be provided.');
        }

        if (!weapon.timeBetweenShotsInMs) {
            throw new Error('weapon.timeBetweenShotsInMs value must be provided.');
        }

        if (!weapon.reloadTimeInMs) {
            throw new Error('weapon.reloadTimeInMs value must be provided.');
        }

        if (!weapon.ammoCapacity) {
            throw new Error('weapon.ammoCapacity value must be provided.');
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

    module.exports = BaseGameUnit;
})();