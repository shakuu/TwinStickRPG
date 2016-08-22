var IdProvider = require('../../scripts/utils/id-provider');
var expect = require('chai').expect;

describe('IdProvider', function () {

    describe('getNext()', function () {
        it('Should return an integer value.', function () {
            var idProvider = new IdProvider(),
                actual = idProvider.getNext();

            expect(typeof actual).to.equal('number');
            expect(actual | 0).to.equal(actual);
        });

        it('Should return 0 as first value.', function () {
            var idProvider = new IdProvider(),
                actual = idProvider.getNext();

            expect(actual).to.equal(0);
        });

        it('Should return sequential integer values ( current = next - 1 ).', function () {
            var idProvider = new IdProvider(),
                first = idProvider.getNext(),
                second = idProvider.getNext();

            expect(first).to.equal(second - 1);
        });
    });

    describe('reset()', function () {
        it('Should return 0 as next id after reset() is called.', function () {
            var idProvider = new IdProvider(),
                timesToInvoke = 10,
                actual, i;

            for (i = 0; i < timesToInvoke; i += 1) {
                idProvider.getNext();
            }

            idProvider.reset();
            actual = idProvider.getNext();

            expect(actual).to.equal(0);
        });
    });
});