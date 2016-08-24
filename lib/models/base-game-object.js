'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseGameObject = function () {
    var BaseGameObject = function () {
        function BaseGameObject(id, type) {
            _classCallCheck(this, BaseGameObject);

            this.id = id;
            this.type = type;
        }

        _createClass(BaseGameObject, [{
            key: 'id',
            get: function get() {
                return this._id;
            },
            set: function set(id) {
                if (!(+id || id === 0)) {
                    throw new Error('id parameter must be a number');
                }

                this._id = id;
            }
        }, {
            key: 'type',
            get: function get() {
                return this._type;
            },
            set: function set(type) {
                if (typeof this._type !== 'undefined') {
                    throw new Error('type property should not be changed');
                }

                if (typeof type !== 'string') {
                    throw new Error('type parameter must be a string');
                }

                this._type = type;
            }
        }]);

        return BaseGameObject;
    }();

    return BaseGameObject;
}();

exports.BaseGameObject = BaseGameObject;