(() => {
    function checkIfNumberIsValid(value) {
        if (!(+value || +value === 0)) {
            throw new Error('Value must be a number.');
        }
    }

    function checkIfNumberIsAnInteger(value) {

    }

    function checkIfObjectIsOfType(obj, type) {
        if (!(obj instanceof type)) {
            throw new Error('Object is not of correct type.');
        }
    }

    module.exports = {
        validateNumber: checkIfNumberIsValid,
        validateType: checkIfObjectIsOfType
    };
})();