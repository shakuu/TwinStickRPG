(() => {
    let Position = require('./position');

    class Size extends Position {
        constructor(sizeX, sizeY) {
            super(sizeX, sizeY);
        }

        get width() {
            return super.x;
        }

        get height() {
            return super.y;
        }
    }

    module.exports = Size;
})();