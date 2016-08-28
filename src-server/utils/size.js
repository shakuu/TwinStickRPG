(() => {
    let Position = require('./position');

    class Size extends Position {
        constructor(sizeX, sizeY) {
            super(sizeX, sizeY);
        }
    }

    module.exports = Size;
})();