"use strict";
const base_game_object_1 = require('../base-game-object');
class BaseGameUnit extends base_game_object_1.BaseGameObject {
    constructor(id, healthPoints, weapon) {
        super(id);
        this.healthPoints = healthPoints;
        this.currentWeapon = weapon;
        this.level = 1;
        this.position = { x: 0, y: 0 };
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
    get level() {
        return this._level;
    }
    set level(level) {
        this._level = level;
    }
    get healthPoints() {
        return this._healthPoints;
    }
    set healthPoints(healthPoints) {
        this._healthPoints = healthPoints;
    }
    get currentWeapon() {
        return this._currentWeapon;
    }
    set currentWeapon(weapon) {
        this._currentWeapon = weapon;
    }
    get isAlive() {
        const isAlive = this.healthPoints > 0;
        return isAlive;
    }
    dealDamage(timestamp) {
        // TODO: apply weapon damage ( ability damage, bonuses)
    }
    takeDamage(damage) {
        // TODO: damage modifier based on statistics
    }
}
exports.BaseGameUnit = BaseGameUnit;
