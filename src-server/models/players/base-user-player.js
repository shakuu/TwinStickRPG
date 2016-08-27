(() => {
    let validator = require('../../utils/validator');
    let BaseGameUnit = require('../units/base-game-unit');

    class BaseUserPlayer {
        constructor(name) {
            this.name = name;
        }

        get name() {
            return this._name;
        }

        set name(name) {
            validator.validateString(name);
            validator.validateStringOnlyContainsLetters(name);

            this._name = name;
        }

        get gameCharacter() {
            return this._gameCharacter;
        }

        set gameCharacter(unit) {
            validator.validateType(unit, BaseGameUnit);

            this._gameCharacter = unit;
        }
    }

    module.exports = BaseUserPlayer;
})();