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
            let actString = () => {
                let value = 'zero';
                validator.validateNumber(value);
            };

            let actNull = () => {
                let value = null;
                validator.validateNumber(value);
            };

            expect(actString).to.throw(/Value must be a number/);
            expect(actNull).to.throw(/Value must be a number/);            
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

    describe('validateInteger()', () => {
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

    describe('validateString()', () => {
        it('Should throw when the passed value is not a string.', () => {
            let act = () => {
                let invalidStringToValidate = 42;
                validator.validateString(invalidStringToValidate);
            };

            expect(act).to.throw(/must be a string/);
        });

        it('Should not throw when the passed value is a string.', () => {
            let act = () => {
                let validStringToValidate = 'string';
                validator.validateString(validStringToValidate);
            };

            expect(act).to.not.throw(/must be a string/);
        });
    });

    describe('validateNumberIsWithinRange()', () => {
        it('Should throw when the passed value is less than the provided minimum value.', () => {
            let act = () => {
                let invalidValue = 0;
                let minimumValue = 1;
                let maximumValue = 11;
                validator.validateNumberIsWithinRange(invalidValue, minimumValue, maximumValue);
            };

            expect(act).to.throw(/Value must be within the given range/);
        });

        it('Should throw when the passed value is greater than the provided maximum value.', () => {
            let act = () => {
                let invalidValue = 12;
                let minimumValue = 1;
                let maximumValue = 11;
                validator.validateNumberIsWithinRange(invalidValue, minimumValue, maximumValue);
            };

            expect(act).to.throw(/Value must be within the given range/);
        });

        it('Should not throw when the passed value is equal to the provided minimum value.', () => {
            let act = () => {
                let invalidValue = 1;
                let minimumValue = 1;
                let maximumValue = 11;
                validator.validateNumberIsWithinRange(invalidValue, minimumValue, maximumValue);
            };

            expect(act).to.not.throw(/Value must be within the given range/);
        });

        it('Should not throw when the passed value is equal to the provided maximum value.', () => {
            let act = () => {
                let invalidValue = 11;
                let minimumValue = 1;
                let maximumValue = 11;
                validator.validateNumberIsWithinRange(invalidValue, minimumValue, maximumValue);
            };

            expect(act).to.not.throw(/Value must be within the given range/);
        });

        it('Should throw when min or max values are not provided.', () => {
            let act = () => {
                let invalidValue = 11;
                validator.validateNumberIsWithinRange(invalidValue);
            };

            expect(act).to.throw(/min and max/);
        });
    });

    describe('validateStringOnlyContainsLetters', () => {
        it('Should throw when the validated value contains non letter characters.', () => {
            let act = () => {
                let invalidValue = 'string0';
                validator.validateStringOnlyContainsLetters(invalidValue);
            };

            expect(act).to.throw(/String must only contain letters/);
        });

        it('Should not throw when the validated value does not contain non letter characters.', () => {
            let act = () => {
                let validString = 'string';
                validator.validateStringOnlyContainsLetters(validString);
            };

            expect(act).to.not.throw(/String must only contain letters/);
        });
    });
});