(function () {
    var Random = (function () {
        var _min,
            _max;

        function Constructor(min, max) {
            this.min = min;
            this.max = max;        
        }

        Object.defineProperty(Constructor.prototype, 'min', {
            get: function () {
                return _min;
            },
            set: function (min) {
                if (validateNumber(min)) {
                    _min = +min;
                }
            }
        });

        Object.defineProperty(Constructor.prototype, 'max', {
            get: function () {
                return _max;
            },
            set: function (max) {
                if (validateNumber(max)) {
                    _max = +max;
                }
            }
        });

        Constructor.prototype.generate = function () {
            return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        };

        function validateNumber(value) {
            if (+value || value === 0) {
                return true;
            } else {
                throw new Error('Value must be a number.');
            }
        }

        return Constructor;
    } ());

    module.exports = Random;
} ());