"use strict";
class BaseGameWorld {
    constructor(worldOptions) {
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
exports.BaseGameWorld = BaseGameWorld;
