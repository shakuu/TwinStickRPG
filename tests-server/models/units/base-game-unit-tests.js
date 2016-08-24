var BaseGameUnit = require('../../../src-server/models/units/base-game-unit');
var expect = require('chai').expect;

describe('BaseGameUnit', () => {
    describe('constructor', () => {
        it('Should intialize positionX and positionY to 0.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                actualPosition = unit.position;

            expect(actualPosition.x).to.equal(0);
            expect(actualPosition.y).to.equal(0);
        });
    });

    describe('position', () => {
        it('Should throw when position parameter is not provided.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                act;

            act = () => {
                unit.position = null;
            };

            expect(act).to.throw(/position/);
        });

        it('Should throw when position.x is not provided.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: null,
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/position.x/);
        });

        it('Should throw when position.x is not a number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 'number',
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when position.x is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: -5,
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/positive/);
        });

        it('Should throw when position.x is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5.12,
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/integer/);
        });

        //
        it('Should throw when position.y is not provided.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5,
                    y: null
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/position.y/);
        });

        it('Should throw when position.y is not a number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5,
                    y: 'number'
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when position.y is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: +5,
                    y: -5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/positive/);
        });

        it('Should throw when position.y is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5,
                    y: 5.45
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/integer/);
        });

        it('Should not throw when position parameter is valid.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 1001,
                    y: 50
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.not.throw();
        });
    });
});