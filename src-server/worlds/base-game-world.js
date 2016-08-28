(() => {
    let validator = require('../utils/validator');
    let WorldOptions = require('../utils/options-containers/game-world-options');

    class BaseGameWorld {
        constructor(worldOptions) {
            validator.validateType(worldOptions, WorldOptions);

            this._name = worldOptions.name;
            this._size = worldOptions.size;
            this._startPosition = worldOptions.startPosition;
            this._enemyTypes = worldOptions.listOfEnemies;
        }

        get name() {
            return this._name;
        }

        get size() {
            return this._size;
        }

        get startPosition() {
            return this._startPosition;
        }

        get enemyTypes() {
            return this._enemyTypes;
        }
    }

    module.exports = BaseGameWorld;
})();