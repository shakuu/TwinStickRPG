let GameTimersOptions = require('../../../src-server/utils/options-containers/game-timers-options');
let expect = require('chai').expect;

describe('GameTimersOptions', () => {
    describe('constructor', () => {
        it('Should throw when framesPerSecond parameter is invalid.', () => {
            var framesPerSecond = null,
                gameCyclesPerSecond = 100,
                physicsCyclesPerSecond = 100,
                act;

            act = () => {
                new GameTimersOptions(
                    framesPerSecond,
                    gameCyclesPerSecond,
                    physicsCyclesPerSecond);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw when gameCyclesPerSecond parameter is invalid.', () => {
            let framesPerSecond = 30,
                gameCyclesPerSecond = null,
                physicsCyclesPerSecond = 100,
                act;

            act = () => {
                new GameTimersOptions(
                    framesPerSecond,
                    gameCyclesPerSecond,
                    physicsCyclesPerSecond);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw when physicsCyclesPerSecond parameter is invalid.', () => {
            let framesPerSecond = 30,
                gameCyclesPerSecond = 100,
                physicsCyclesPerSecond = null,
                act;

            act = () => {
                new GameTimersOptions(
                    framesPerSecond,
                    gameCyclesPerSecond,
                    physicsCyclesPerSecond);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should set correct values when input parameters are valid.', () => {
            let framesPerSecond = 30,
                gameCyclesPerSecond = 100,
                physicsCyclesPerSecond = 100,
                gameTimersOptions,
                act;

            act = () => {
                gameTimersOptions = new GameTimersOptions(
                    framesPerSecond,
                    gameCyclesPerSecond,
                    physicsCyclesPerSecond);
            };

            expect(act).to.not.throw(/must be a number/);
            expect(gameTimersOptions.nextFrameDelay).to.equal(1000/ framesPerSecond);
            expect(gameTimersOptions.nextGameCycleDelay).to.equal(1000/ gameCyclesPerSecond);
            expect(gameTimersOptions.nextPhysicsCycleDelay).to.equal(1000/ physicsCyclesPerSecond);            
        });
    });
});