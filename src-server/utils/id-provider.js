var IdProvider = (() => {
    class IdProvider {
        constructor() {
            this._currentValue = -1;
        }

        getNext() {
            this._currentValue += 1;
            return this._currentValue;
        }

        reset() {
            this._currentValue = -1;
        }
    }

    module.exports = IdProvider;
})();