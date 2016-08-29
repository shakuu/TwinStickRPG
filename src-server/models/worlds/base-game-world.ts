import {IBaseGameWorld} from '../../interfaces/worlds/base-game-world';
import {IGameWorldOptions} from '../../interfaces/worlds/options/game-world-options';
import {IPosition} from '../../interfaces/utils/IPosition';
import {ISize} from '../../interfaces/utils/ISize';

class BaseGameWorld implements IBaseGameWorld {
    private _name: string;
    private _size: ISize;
    private _startPosition: IPosition;
    private _enemyTypes: string[];

    constructor(worldOptions: IGameWorldOptions) {
        this._name = worldOptions.name;
        this._size = worldOptions.size;
        this._startPosition = worldOptions.startPosition;
        this._enemyTypes = worldOptions.enemyTypes;
    }

    get name() {
        return this._name;
    }

    get size() {
        return this._size;
    }

    get startPosition() {
        return this._startPosition;
    }

    get enemyTypes() {
        return this._enemyTypes;
    }
}

export {BaseGameWorld};