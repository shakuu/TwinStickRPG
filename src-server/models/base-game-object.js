var BaseGameObject = (() => {
    class BaseGameObject {
        constructor(id, type) {
            this.id = id;
            this.type = type;
        }

        get id() {
            return this._id;
        }

        set id(id) {
            if (!(+id || id === 0)) {
                throw new Error('id parameter must be a number');
            }

            this._id = id;
        }

        get type() {
            return this._type;
        }

        set type(type) {
            if (typeof this._type !== 'undefined') {
                throw new Error('type property should not be changed');
            }

            if (typeof type !== 'string') {
                throw new Error('type parameter must be a string');
            }

            this._type = type;
        }
    }

    module.exports = BaseGameObject;
})();