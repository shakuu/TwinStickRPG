var Random = require('../../src-server/utils/random-generator');
var expect = require('chai').expect;

describe('Random', function () {

    describe('constructor', function () {

        it('Should throw if min parameter is not a number.', function () {
            var min = 'invalid',
                max = 100,
                act;

            act = () => {
                new Random(min, max);
            };

            expect(act).to.throw();
        });

        it('Should throw if max parameter is not a number.', function () {
            var min = 0,
                max = NaN,
                act;

            act = () => {
                new Random(min, max);
            };

            expect(act).to.throw();
        });
    });

    describe('generate()', function () {

        it('Should return an integer', function () {
            var random = new Random(0, 100),
                actual = random.generate();

            expect(actual | 0).to.equal(actual);
        });
    });
});