'use strict';

(function () {
    var ControlDefinition = function () {
        var _controlName, _keyCode, _state;

        function Constructor(controlName, keyCode, state) {
            this.controlName = controlName;
            this.keyCode = keyCode;
            this.state = state;
        }

        Object.defineProperty(Constructor.prototype, 'keyCode', {
            get: function get() {
                return _keyCode;
            },
            set: function set(keyCode) {
                if (!(+keyCode || keyCode === 0)) {
                    throw new Error('keyCode parameter must be a number.');
                }

                _keyCode = keyCode;
            }
        });

        Object.defineProperty(Constructor.prototype, 'controlName', {
            get: function get() {
                return _controlName;
            },
            set: function set(controlName) {
                if (typeof controlName !== 'string') {
                    throw new Error('controlName parameter must be a string.');
                }

                if (!(3 <= controlName.length && controlName.length <= 16)) {
                    throw new Error('controlName length must be between 3 and 16');
                }

                _controlName = controlName;
            }
        });

        Object.defineProperty(Constructor.prototype, 'state', {
            get: function get() {
                return _state;
            },
            set: function set(state) {
                if (typeof state !== 'boolean') {
                    throw new Error('state parameter must be boolean.');
                }

                _state = state;
            }
        });

        return Constructor;
    }();

    module.exports = ControlDefinition;
})();