"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdProvider = function () {
    var IdProvider = function () {
        function IdProvider() {
            _classCallCheck(this, IdProvider);

            this._currentValue = -1;
        }

        _createClass(IdProvider, [{
            key: "getNext",
            value: function getNext() {
                this._currentValue += 1;
                return this._currentValue;
            }
        }, {
            key: "reset",
            value: function reset() {
                this._currentValue = -1;
            }
        }]);

        return IdProvider;
    }();

    return IdProvider;
}();

exports.IdProvider = IdProvider;