import {IBaseGameObject} from '../interfaces/base-game-object';

class BaseGameObject implements IBaseGameObject {
    private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }
}

export {BaseGameObject};