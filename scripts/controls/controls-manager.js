(function () {
    var ControlsManager = (function () {
        var controlDefinitionsByKeyCode = [],
            controlDefinitionsByControlName = [];

        function Constructor() {

        }

        Constructor.prototype.setKeyDown = function (keyCode) {
            var controlDefinition;

            if (validateKeyCode(keyCode)) {
                if (controlDefinitionsByKeyCode[keyCode]) {
                    controlDefinitionsByKeyCode[keyCode].state = true;
                    controlDefinition = controlDefinitionsByKeyCode[keyCode];
                } else {
                    throw new Error('no ControlDefinition corresponding to this keyCode.');
                }
            }

            return controlDefinition;
        };

        Constructor.prototype.setKeyUp = function (keyCode) {
            var controlDefinition;

            if (validateKeyCode(keyCode)) {
                if (controlDefinitionsByKeyCode[keyCode]) {
                    controlDefinitionsByKeyCode[keyCode].state = false;
                    controlDefinition = controlDefinitionsByKeyCode[keyCode];
                } else {
                    throw new Error('no ControlDefinition corresponding to this keyCode.');
                }
            }
            
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