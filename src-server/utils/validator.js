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

    module.exports = {
        validateInteger: checkIfNumberIsAnInteger,        
        validateNumber: checkIfNumberIsValid,
        validateType: checkIfObjectIsOfType
    };
})();