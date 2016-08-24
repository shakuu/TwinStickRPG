'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random = function () {
    var Random = function () {
        function Random(min, max) {
            _classCallCheck(this, Random);

            this.min = min;
            this.max = max;
        }

        _createClass(Random, [{
            key: 'generate',
            value: function generate() {
                return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            }
        }, {
            key: 'min',
            get: function get() {
                return this._min;
            },
            set: function set(min) {
                if (validateNumber(min)) {
                    this._min = +min;
                }
            }
        }, {
            key: 'max',
            get: function get() {
                return this._max;
            },
            set: function set(max) {
                if (validateNumber(max)) {
                    this._max = +max;
                }
            }
        }]);

        return Random;
    }();

    function validateNumber(value) {
        if (+value || value === 0) {
            return true;
        } else {
            throw new Error('Value must be a number.');
        }
    }

    return Random;
}();

exports.Random = Random;