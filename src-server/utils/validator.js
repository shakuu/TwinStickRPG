(() => {
    function checkIfNumberIsValid(value) {
        if (!value && value !== 0) {
            throw new Error('Value must be a number.');
        }

        if (!(+value || +value === 0)) {
            throw new Error('Value must be a number.');
        }
    }

    function checkIfNumberIsAnInteger(value) {
        if ((value | 0) !== value) {
            throw new Error('Value must be an integer.');
        }
    }

    function checkIfNumberIsNegative(value) {
        if (value < 0) {
            throw new Error('Value must be greater than or equal to zero.');
        }
    }

    function checkIfNumberIsWithinRange(value, min, max) {
        if (!min || !max) {
            throw new Error('min and max parameters must be provided.');
        }

        if (value < min || max < value) {
            throw new Error('Value must be within the given range.');
        }
    }

    function checkIfObjectIsOfType(obj, type) {
        if (!(obj instanceof type)) {
            throw new Error('Object is not of correct type.');
        }
    }

    function checkIfValueIsString(value) {
        if (typeof value !== 'string') {
            throw new Error('Value must be a string.');
        }
    }

    function checkIfStringOnlyContainsLetters(value) {
        if (!/^[a-zA-Z]+$/.test(value)) {
            throw new Error('String must only contain letters.');
        }
    }

    module.exports = {
        validateInteger: checkIfNumberIsAnInteger,
        validateNumber: checkIfNumberIsValid,
        validateNumberIsWithinRange: checkIfNumberIsWithinRange,
        validateNumberIsNotNegative: checkIfNumberIsNegative,
        validateString: checkIfValueIsString,
        validateStringOnlyContainsLetters: checkIfStringOnlyContainsLetters,
        validateType: checkIfObjectIsOfType
    };
})();