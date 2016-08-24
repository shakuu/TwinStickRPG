(() => {
    let BaseGameUnit = require('../base-game-unit');

    const GUN_KATA_NINJA = {
        TYPE: 'GunKataNinja',
        HP: 1000
    };

    class GunKataNinja extends BaseGameUnit {
        constructor(id, weapon) {
            super(id, GUN_KATA_NINJA.TYPE, GUN_KATA_NINJA.HP, weapon);
        }
    }

    module.exports = GunKataNinja;
})();