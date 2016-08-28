(() => {
    let validator = require('./validator');

    class Position {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        get x() {
            return this._x;
        }

        set x(x) {
            validator.validateNumber(x);
            validator.validateInteger(x);
            this._x = x;
        }

        get y() {
            return this._y;
        }

        set y(y) {
            validator.validateNumber(y);
            validator.validateInteger(y);
            this._y = y;
        }
    }

    module.exports = Position;
})();