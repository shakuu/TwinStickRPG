let validator = require('../../src-server/utils/validator');
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
        
    });
});