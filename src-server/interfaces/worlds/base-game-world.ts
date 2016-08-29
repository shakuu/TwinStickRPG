import {IPosition} from '../utils/IPosition';
import {ISize} from '../utils/ISize';

interface IBaseGameWorld {
    name: string;
    size: ISize;
    startPosition: IPosition;
    enemyTypes: string[];
}

export {IBaseGameWorld};