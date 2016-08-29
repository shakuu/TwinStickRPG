import {IPosition} from '../../utils/IPosition';
import {ISize} from '../../utils/ISize';

interface IGameWorldOptions {
    name: string;
    size: ISize;
    startPosition: IPosition;
    enemyTypes: string[];
}

export {IGameWorldOptions};