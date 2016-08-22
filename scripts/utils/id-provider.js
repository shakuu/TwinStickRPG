(function () {
    var IdProvider = (function () {
        var _currentValue;

        function Constructor() {
            _currentValue = -1;
        }

        Constructor.prototype.getNext = function () {
            _currentValue += 1;
            return _currentValue;
        };

        Constructor.prototype.reset = function () {
            _currentValue = -1;
        };

        return Constructor;
    } ());

    module.exports = IdProvider;
} ());