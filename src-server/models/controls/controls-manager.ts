import {IControlDefinition} from '../../interfaces/controls/control-definition';
import {IControlsManger} from '../../interfaces/controls/controls-manager';

const controlDefinitionsByKeyCode: IControlDefinition[] = [];

class ControlsManger implements IControlsManger {
    setKeyDown(definition: IControlDefinition) {
        controlDefinitionsByKeyCode[definition.keyCode].state = true;
    }

    setKeyUp(definition) {
        controlDefinitionsByKeyCode[definition.keyCode].state = false;
    }

    addDefinition(definition: IControlDefinition) {
        controlDefinitionsByKeyCode[definition.keyCode] = definition;
    }

    removeDefinition(definition: IControlDefinition) {
        controlDefinitionsByKeyCode[definition.keyCode] = null;
    }

    getControlState(definition: IControlDefinition) {
        return controlDefinitionsByKeyCode[definition.keyCode].state;
    }
}

export {ControlsManger};