"use strict";
class BaseGameObject {
    constructor(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}
exports.BaseGameObject = BaseGameObject;
