var BaseGameObject = require('../../scripts/models/base-game-object');
var expect = require('chai').expect;

describe('BaseGameObject', function () {

    describe('constructor', function () {

        it('Should throw when id parameter is not a number', function () {
            var id = 'invalid',
                type = 'valid type',
                act;

            act = () => {
                new BaseGameObject(id, type);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw when type parameter is not a string', function () {
            var id = 10,
                type = 60,
                act;

            act = () => {
                new BaseGameObject(id, type);
            };

            expect(act).to.throw(/must be a string/);
        });
    });

    describe('type property', function () {

        it('Should throw when type already has a value', function () {
            var id = 10,
                type = 'valid',
                act,
                obj;

            act = () => {
                obj = new BaseGameObject(id, type);
                obj.type = 'new type';
            };

            expect(act).to.throw(/should not be changed/);
        });
    });
});