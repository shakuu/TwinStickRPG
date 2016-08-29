import {IControlDefinition} from '../../interfaces/controls/control-definition';

class ControlDefinition implements IControlDefinition {
    private _action: string;
    private _keyCode: number;
    private _state: boolean;

    constructor(action: string, keyCode: number, state: boolean) {
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

export {ControlDefinition};