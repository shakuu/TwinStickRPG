var Random = require('../../dist-server/utils/random-generator').Random;
var expect = require('chai').expect;

describe('Random', function () {
    describe('generate()', function () {
        it('Should return an integer', function () {
            var random = new Random(0, 100),
                actual = random.generate();

            expect(actual | 0).to.equal(actual);
        });
    });
});