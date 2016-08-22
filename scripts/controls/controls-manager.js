(function () {
    var ControlsManager = (function () {
        var controlDefinitionsByKeyCode = [],
            controlDefinitionsByControlName = [];

        function Constructor() {

        }

        Constructor.prototype.setKeyDown = function (keyCode) {
            if (validateKeyCode(keyCode)) {
                if (controlDefinitionsByKeyCode[keyCode]) {
                    controlDefinitionsByKeyCode[keyCode].state = true;
                } else {
                    throw new Error('no ControlDefinition corresponding to this keyCode.');
                }
            }
        };

        Constructor.prototype.setKeyUp = function (keyCode) {
            if (validateKeyCode(keyCode)) {
                if (controlDefinitionsByKeyCode[keyCode]) {
                    controlDefinitionsByKeyCode[keyCode].state = false;
                } else {
                    throw new Error('no ControlDefinition corresponding to this keyCode.');
                }
            }
        };

        Constructor.prototype.addDefinition = function (definition) {
            if (!definition || !definition.name || !definition.keyCode) {
                throw new Error('Invalid definition.');
            }

            if (!(+definition.keyCode || definition.keyCode === 0)) {
                throw new Error('definition.keyCode must be a number.');
            }

            controlDefinitionsByControlName[definition.name] = definition;
            controlDefinitionsByKeyCode[definition.keyCode] = definition;
        };

        Constructor.prototype.removeDefinition - function (definition) {
            controlDefinitionsByControlName[definition.name] = null;
            controlDefinitionsByKeyCode[definition.keyCode] = null;
        };

        Constructor.prototype.getControlState = function (controlName) {
            if (typeof controlName !== 'string') {
                throw new Error('controlName parameter must be a string.');
            }

            if (!controlDefinitionsByControlName[controlName]) {
                throw new Error(controlName + ' is not defined.');
            }

            return controlDefinitionsByControlName[controlName];
        };

        function validateKeyCode(keyCode) {
            if (!(+keyCode || keyCode === 0)) {
                throw new Error('keyCode must be a number.');
            }

            return true;
        }

        return Constructor;
    } ());

    module.exports = ControlsManager;
} ());