(() => {
    let validator = require('../validator');

    class GameWorldOptions {
        constructor(name, size, startPosition, enemies) {
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
    }

    module.exports = GameWorldOptions;
})();