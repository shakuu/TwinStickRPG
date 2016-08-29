import {IControlDefinition} from './control-definition';

interface IControlsManger {
    setKeyDown(definition: IControlDefinition): void;

    setKeyUp(definition: IControlDefinition): void;

    addDefinition(definition: IControlDefinition): void;

    removeDefinition(definition: IControlDefinition): void;

    getControlState(definition: IControlDefinition): void;
}

export {IControlsManger};