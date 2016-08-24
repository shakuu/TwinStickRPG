(function () {
    var ControlsManager = (function () {
        function Constructor() {
            var controlDefinitionsByKeyCode = [],
                controlDefinitionsByControlName = [];
        }

        Constructor.prototype.setKeyDown = function (keyCode) {
            var controlDefinition = getControlDefinitionByKeyCode(keyCode);
            controlDefinition.state = true;
            return controlDefinition;
        };

        Constructor.prototype.setKeyUp = function (keyCode) {
            var controlDefinition = getControlDefinitionByKeyCode(keyCode);
            controlDefinition.state = false;
            return controlDefinition;
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

        Constructor.prototype.removeDefinition = function (definition) {
            if (!definition || !definition.name || !definition.keyCode) {
                throw new Error('Invalid definition.');
            }

            if (!(+definition.keyCode || definition.keyCode === 0)) {
                throw new Error('definition.keyCode must be a number.');
            }

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

        function getControlDefinitionByKeyCode(keyCode) {
            var controlDefinition;

            if (validateKeyCode(keyCode)) {
                if (controlDefinitionsByKeyCode[keyCode]) {
                    controlDefinition = controlDefinitionsByKeyCode[keyCode];
                } else {
                    throw new Error('no ControlDefinition corresponding to this keyCode.');
                }
            }

            return controlDefinition;
        }

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