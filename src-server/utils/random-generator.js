var Random = (() => {
    class Random {
        constructor(min, max) {
            this.min = min;
            this.max = max;
        }

        get min() {
            return this._min;
        }

        set min(min) {
            if (validateNumber(min)) {
                this._min = +min;
            }
        }

        get max() {
            return this._max;
        }

        set max(max) {
            if (validateNumber(max)) {
                this._max = +max;
            }
        }

        generate() {
            return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        }
    }

    function validateNumber(value) {
        if (+value || value === 0) {
            return true;
        } else {
            throw new Error('Value must be a number.');
        }
    }

    module.exports = Random;
})();
