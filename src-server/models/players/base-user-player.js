(() => {
    let validatorFunctions = require('../../utils/validator');

    class BaseUserPlayer {
        constructor(name) {
            this.name = name;
        }

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }
    }
})();