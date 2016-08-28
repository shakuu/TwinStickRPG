(() => {
    let validator = require('../validator');
    let Position = require('../position');
    let Size = require('../size');

    class GameWorldOptions {
        constructor(name, size, startPosition, enemies) {
            this.name = name;
            this.size = size;
            this.startPosition = startPosition;
            this.listOfEnemies = enemies;
        }

        get name() {
            return this._name;
        }

        set name(name) {
            validator.validateString(name);
            validator.validateStringOnlyContainsLetters(name);
            this._name = name;
        }

        get size() {
            return this._size;
        }

        set size(size) {
            validator.validateType(size, Size);
            this._size = size;
        }

        get startPosition() {
            return this._startPosition;
        }

        set startPosition(position) {
            validator.validateType(position, Position);
            this._startPosition = position;
        }

        get listOfEnemies() {
            return this._listOfEnemies;
        }

        set listOfEnemies(enemies) {
            validator.validateArray(enemies);
            validator.validateArrayElements(enemies, 'string');
            this._listOfEnemies = enemies;
        }
    }

    module.exports = GameWorldOptions;
})();