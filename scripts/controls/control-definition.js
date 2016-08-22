(function () {
    var ControlDefinition = (function () {
        var _controlName,
            _keyCode,
            _state;

        function Constructor(controlName, keyCode, state) {
            this.controlName = controlName;
            this.keyCode = keyCode;
            this.state = state;
        }

        Object.defineProperty(Constructor.prototype, 'keyCode', {
            get: function () {
                return _keyCode;
            },
            set: function (keyCode) {
                if (!(+keyCode || keyCode === 0)) {
                    throw new Error('keyCode parameter must be a number.');
                }

                _keyCode = keyCode;
            }
        });

        Object.defineProperty(Constructor.prototype, 'controlName', {
            get: function () {
                return _controlName;
            },
            set: function (controlName) {
                if (typeof controlName !== 'string') {
                    throw new Error('controlName parameter must be a string.');
                }

                _controlName = controlName;
            }
        });

        Object.defineProperty(Constructor.prototype, 'state', {
            get: function () {
                return _state;
            },
            set: function (state) {
                if (typeof state !== 'boolean') {
                    throw new Error('state parameter must be boolean.');
                }

                _state = state;
            }
        });

        return Constructor;
    } ());

    module.exports = ControlDefinition;
} ());