"use strict";
const controlDefinitionsByKeyCode = [];
class ControlsManger {
    setKeyDown(definition) {
        controlDefinitionsByKeyCode[definition.keyCode].state = true;
    }
    setKeyUp(definition) {
        controlDefinitionsByKeyCode[definition.keyCode].state = false;
    }
    addDefinition(definition) {
        controlDefinitionsByKeyCode[definition.keyCode] = definition;
    }
    removeDefinition(definition) {
        controlDefinitionsByKeyCode[definition.keyCode] = null;
    }
    getControlState(definition) {
        return controlDefinitionsByKeyCode[definition.keyCode].state;
    }
}
exports.ControlsManger = ControlsManger;
