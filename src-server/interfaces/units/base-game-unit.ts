import {IBaseGameObject} from '../base-game-object';
import {IBaseWeapon} from '../weapons/base-weapon';
import {IPosition} from '../utils/IPosition';

interface IBaseGameUnit {
    position: IPosition;
    currentWeapon: IBaseWeapon;
    healthPoints: number;
    level: number;
}

export {IBaseGameUnit};