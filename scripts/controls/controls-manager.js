(function () {
    var ControlsManager = (function () {
        var controlDefinitionsByKeyCode = [],
            controlDefinitionsByControlName = [];

        function Constructor() {

        }

        Constructor.prototype.setKeyDown = function (keyCode) {
            if (validateKeyCode(keyCode)) {
                controlDefinitionsByKeyCode[keyCode].state = true;
            }
        };

        Constructor.prototype.setKeyUp = function (keyCode) {
            if (validateKeyCode(keyCode)) {
                controlDefinitionsByKeyCode[ketCode].state = false;
            }
        };

        Constructor.prototype.addDefinition = function (definition) {
            if (!definition || !definition.name || !definition.keyCode) {
                throw new Error('invalid definition');
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