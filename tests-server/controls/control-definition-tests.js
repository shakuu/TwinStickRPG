var ControlDefinition = require('../../src-server/controls/control-definition');
var expect = require('chai').expect;

describe('ControlDefinition', function () {

    describe('constructor', function () {

        it('Should throw when controlName parameter is not a string', function () {
            var keyCode = 38,
                controlName = null,
                state = false,
                act;

            act = () => {
                new ControlDefinition(controlName, keyCode, state);
            };

            expect(act).to.throw(/must be a string/);
        });

        it('Should throw when controlName parameter length is less than 3', function () {
            var keyCode = 38,
                controlName = 'n',
                state = false,
                act;

            act = () => {
                new ControlDefinition(controlName, keyCode, state);
            };

            expect(act).to.throw(/length must be/);
        });

        it('Should throw when controlName parameter length is greater than 16', function () {
            var keyCode = 38,
                controlName = '01234567890123456',
                state = false,
                act;

            act = () => {
                new ControlDefinition(controlName, keyCode, state);
            };

            expect(act).to.throw(/length must be/);
        });

        it('Should throw when keyCode parameter is not a number.', function () {
            var keyCode = 'string',
                controlName = 'name',
                state = false,
                act;

            act = () => {
                new ControlDefinition(controlName, keyCode, state);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw when state parameter is not a boolean value', function () {
            var keyCode = 38,
                controlName = 'name',
                state = 'false',
                act;

            act = () => {
                new ControlDefinition(controlName, keyCode, state);
            };

            expect(act).to.throw(/must be boolean/);
        })
    });
});