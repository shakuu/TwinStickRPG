import {BaseGameObject} from '../base-game-object';
import {BaseWeapon} from '../weapons/base-weapon';
import {IBaseGameUnit} from '../../interfaces/units/base-game-unit';
import {IBaseWeapon} from '../../interfaces/weapons/base-weapon';
import {IPosition} from '../../interfaces/utils/IPosition';

class BaseGameUnit extends BaseGameObject implements IBaseGameUnit {
    private _position: IPosition;
    private _currentWeapon: IBaseWeapon;

    private _healthPoints: number;
    private _level: number;

    constructor(id: number, healthPoints: number, weapon: IBaseWeapon) {
        super(id);

        this.healthPoints = healthPoints;
        this.currentWeapon = weapon;
        this.level = 1;
        this.position = { x: 0, y: 0 };
    }

    get position(): IPosition {
        return this._position;
    }

    set position(position: IPosition) {
        this._position = position;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }

    get healthPoints(): number {
        return this._healthPoints;
    }

    set healthPoints(healthPoints: number) {
        this._healthPoints = healthPoints;
    }

    get currentWeapon(): IBaseWeapon {
        return this._currentWeapon;
    }

    set currentWeapon(weapon: IBaseWeapon) {
        this._currentWeapon = weapon;
    }

    get isAlive(): boolean {
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

export {BaseGameUnit};