(() => {
    function checkIfNumberIsValid(value) {
        if (!(+value || +value === 0)) {
            throw new Error('Value must be a number.');
        }
    }

    function checkIfNumberIsAnInteger(value) {
        if ((value | 0) !== value) {
            throw new Error('Value must be an integer.');
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

    function checkIfNumberIsWithRange(value, min, max) {
        if (value < min || max < value) {
            throw new Error('Value must be within the given range.');
        }
    }

    module.exports = {
        validateNumberIsWithinRange: checkIfNumberIsWithRange,
        validateInteger: checkIfNumberIsAnInteger,
        validateNumber: checkIfNumberIsValid,
        validateString: checkIfValueIsString,
        validateType: checkIfObjectIsOfType
    };
})();