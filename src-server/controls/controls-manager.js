(() => {
    class ControlsManger {
        constructor() {
            this.controlDefinitionsByKeyCode = [];
            this.controlDefinitionsByControlName = [];
        }

        setKeyDown(keyCode) {
            var controlDefinition =
                getControlDefinitionByKeyCode(keyCode, this.controlDefinitionsByKeyCode);
            controlDefinition.state = true;
            return controlDefinition;
        }

        setKeyUp(keyCode) {
            var controlDefinition =
                getControlDefinitionByKeyCode(keyCode, this.controlDefinitionsByKeyCode);
            controlDefinition.state = false;
            return controlDefinition;
        }

        addDefinition(definition) {
            validateDefinitionInputParameter(definition);

            this.controlDefinitionsByControlName[definition.name] = definition;
            this.controlDefinitionsByKeyCode[definition.keyCode] = definition;
        }

        removeDefinition(definition) {
            validateDefinitionInputParameter(definition);

            this.controlDefinitionsByControlName[definition.name] = null;
            this.controlDefinitionsByKeyCode[definition.keyCode] = null;
        }

        getControlState(controlName) {
            if (typeof controlName !== 'string') {
                throw new Error('controlName parameter must be a string.');
            }

            if (!this.controlDefinitionsByControlName[controlName]) {
                throw new Error(controlName + ' is not defined.');
            }

            return this.controlDefinitionsByControlName[controlName];
        }
    }

    function getControlDefinitionByKeyCode(keyCode, controlDefinitionsByKeyCode) {
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

    function validateDefinitionInputParameter(definition) {
        if (!definition || !definition.name || !definition.keyCode) {
            throw new Error('Invalid definition.');
        }

        validateKeyCode(definition.keyCode);
    }

    function validateKeyCode(keyCode) {
        if (!(+keyCode || keyCode === 0)) {
            throw new Error('keyCode must be a number.');
        }

        return true;
    }

    module.exports = ControlsManger;
})();