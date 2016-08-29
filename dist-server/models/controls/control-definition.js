"use strict";
class ControlDefinition {
    constructor(action, keyCode, state) {
        this.action = action;
        this.keyCode = keyCode;
        this.state = state;
    }
    get keyCode() {
        return this._keyCode;
    }
    set keyCode(keyCode) {
        this._keyCode = keyCode;
    }
    get action() {
        return this._action;
    }
    set action(controlName) {
        this._action = controlName;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
}
exports.ControlDefinition = ControlDefinition;
