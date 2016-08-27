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

        get score() {
            return this._score;
        }

        set score(score) {
            validator.validateNumber(score);
            validator.validateInteger(score);
            this._score = score;
        }

        get lives() {
            return this._lives;
        }

        set lives(lives) {
            validator.validateNumber(lives);
            validator.validateInteger(lives);
            this._lives = lives;
        }
    }

    module.exports = BaseUserPlayer;
})();