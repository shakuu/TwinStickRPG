let Position = require('../../src-server/utils/position');
let expect = require('chai').expect;

describe('Position', () => {
    describe('constructor', () => {
        it('Should throw when x value is not a number.', () => {
            let act = () => {
                let x = 'not a number';
                let y = 5;
                new Position(x, y);
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when x value is not an integer.', () => {
            let act = () => {
                let x = 5.6789;
                let y = 5;
                new Position(x, y);
            };

            expect(act).to.throw(/integer/);
        });

        it('Should throw when x value is less than zero.', () => {
            let act = () => {
                let x = -5;
                let y = 5;
                new Position(x, y);
            };

            expect(act).to.throw(/zero/);
        });

        it('Should throw when y value is not a number.', () => {
            let act = () => {
                let x = 6;
                let y = null;
                new Position(x, y);
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when y value is not an integer.', () => {
            let act = () => {
                let x = 6789;
                let y = 5.1;
                new Position(x, y);
            };

            expect(act).to.throw(/integer/);
        });

         it('Should throw when y value is less than zero.', () => {
            let act = () => {
                let x = 5;
                let y = -5;
                new Position(x, y);
            };

            expect(act).to.throw(/zero/);
        });

        it('Should not throw when x and y parameters are correct.', () => {
            let act = () => {
                let x = 500;
                let y = 10000;
                new Position(x, y);
            };

            expect(act).to.not.throw();
        });
    });
});