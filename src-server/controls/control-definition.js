(() => {
    class ControlDefinition {
        constructor(controlName, keyCode, state) {
            this.controlName = controlName;
            this.keyCode = keyCode;
            this.state = state;
        }

        get keyCode() {
            return this._keyCode;
        }

        set keyCode(keyCode) {
            if (!(+keyCode || keyCode === 0)) {
                throw new Error('keyCode parameter must be a number.');
            }

            this._keyCode = keyCode;
        }

        get controlName() {
            return this_controlName;
        }

        set controlName(controlName) {
            if (typeof controlName !== 'string') {
                throw new Error('controlName parameter must be a string.');
            }

            if (!(3 <= controlName.length && controlName.length <= 16)) {
                throw new Error('controlName length must be between 3 and 16');
            }

            this._controlName = controlName;
        }

        get state() {
            return this._state;
        }

        set state(state) {
            if (typeof state !== 'boolean') {
                throw new Error('state parameter must be boolean.');
            }

            this._state = state;
        }
    }

    module.exports = ControlDefinition;
})();