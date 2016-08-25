let validator = require('../../src-server/utils/validator');
let IdProvider = require('../../src-server/utils/id-provider');
let Random = require('../../src-server/utils/random-generator');
let expect = require('chai').expect;

describe('Validator', () => {
    describe('validateNumber()', () => {
        it('Should throw when value parameter is not provided.', () => {
            let act = () => {
                validator.validateNumber();
            };

            expect(act).to.throw(/Value must be a number/);
        });

        it('Should throw when value parameter is not a number.', () => {
            let act = () => {
                let value = 'zero';
                validator.validateNumber(value);
            };

            expect(act).to.throw(/Value must be a number/);
        });

        it('Should not throw when value parameter is a valid number.', () => {
            let act = () => {
                let value = 0;
                validator.validateNumber(value);
            };

            expect(act).to.not.throw(/Value must be a number/);
        });

        it('Should not throw when value parameter is castable to number.', () => {
            let act = () => {
                let value = '0';
                validator.validateNumber(value);
            };

            expect(act).to.not.throw(/Value must be a number/);
        });
    });

    describe('validateType()', () => {
        it('Should throw when obj parameter type is not the same as the on provided in type parameter.', () => {
            let act = () => {
                let obj = new Random(0, 10);
                validator.validateType(obj, IdProvider);
            };

            expect(act).to.throw(/Object is not of correct type/);
        });

        it('Should not throw when obj parameter type is the same as the on provided in type parameter.', () => {
            let act = () => {
                let obj = new Random(0, 10);
                validator.validateType(obj, Random);
            };

            expect(act).to.not.throw(/Object is not of correct type/);
        });
    });

    describe('checkIfNumberIsAnInteger()', () => {
        it('Should throw when value parameter is not provided.', () => {
            let act = () => {
                validator.validateInteger();
            };

            expect(act).to.throw(/Value must be an integer/);
        });

        it('Should throw when value parameter is not an integer.', () => {
            let act = () => {
                let value = 456.789;
                validator.validateInteger(value);
            };

            expect(act).to.throw(/Value must be an integer/);
        });

        it('Should not throw when value parameter is valid.', () => {
            let act = () => {
                let value = 5;
                validator.validateInteger(value);
            };

            expect(act).to.not.throw(/Value must be an integer/);
        });
    });
});