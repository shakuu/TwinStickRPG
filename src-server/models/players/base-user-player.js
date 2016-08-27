(() => {
    let validator = require('../../utils/validator');

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
    }

    module.exports = BaseUserPlayer;
})();