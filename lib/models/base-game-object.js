'use strict';

(function () {
    var BaseGameObject = function () {
        var _id, _type;

        function Constructor(id, type) {
            this.id = id;
            this.type = type;
        }

        Object.defineProperty(Constructor.prototype, 'id', {
            get: function get() {
                return _id;
            },
            set: function set(id) {
                if (!(+id || id === 0)) {
                    throw new Error('id parameter must be a number');
                }

                _id = id;
            }
        });

        Object.defineProperty(Constructor.prototype, 'type', {
            get: function get() {
                return _type;
            },
            set: function set(type) {
                if (typeof _type !== 'undefined') {
                    throw new Error('type property should not be changed');
                }

                if (typeof type !== 'string') {
                    throw new Error('type parameter must be a string');
                }

                _type = type;
            }
        });

        return Constructor;
    }();

    module.exports = BaseGameObject;
})();