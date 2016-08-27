(() => {
    let MILISECONDS_IN_ONE_SECOND = 1000;

    class GameTimersOptions {
        constructor(framesPerSecond, gameCyclesPerSecond, physicsCyclesPerSecond) {
            checkIfValueIsANumber(framesPerSecond);
            checkIfValueIsANumber(gameCyclesPerSecond);
            checkIfValueIsANumber(physicsCyclesPerSecond);
            
            this.nextFrameDelay = MILISECONDS_IN_ONE_SECOND / framesPerSecond;
            this.nextGameCycleDelay = MILISECONDS_IN_ONE_SECOND / gameCyclesPerSecond;
            this.nextPhysicsCycleDelay = MILISECONDS_IN_ONE_SECOND / physicsCyclesPerSecond;
        }

        get nextFrameDelay() {
            return this._nextFrameDelay;
        }

        set nextFrameDelay(value) {
            checkIfValueIsANumber(value);
            this._nextFrameDelay = +value;
        }

        get lastFrameTimestamp() {
            return this._lastFrameTimestamp;
        }

        set lastFrameTimestamp(value) {
            checkIfValueIsANumber(value);
            this._lastFrameTimestamp = +value;
        }

        get nextGameCycleDelay() {
            return this._nextGameCycleDelay;
        }

        set nextGameCycleDelay(value) {
            checkIfValueIsANumber(value);
            this._nextGameCycleDelay = +value;
        }

        get lastGameCycleTimestamp() {
            return this._lastGameCycleTimestamp;
        }

        set lastGameCycleTimestamp(value) {
            checkIfValueIsANumber(value);
            this._lastGameCycleTimestamp = +value;
        }

        get nextPhysicsCycleDelay() {
            return this._nextPhysicsCycleDelay;
        }

        set nextPhysicsCycleDelay(value) {
            checkIfValueIsANumber(value);
            this._nextPhysicsCycleDelay = +value;
        }

        get lastPhysicsCycleTimestamp() {
            return this._lastPhysicsCycleTimestamp;
        }

        set lastPhysicsCycleTimestamp(value) {
            checkIfValueIsANumber(value);
            this._lastPhysicsCycleTimestamp = +value;
        }
    }

    function checkIfValueIsANumber(value) {
        if (!value || !(+value || value === 0)) {
            throw new Error('Value must be a number.');
        }
    }

    module.exports = GameTimersOptions;
})();