let GunKataNinja = require('../../../../src-server/models/units/playable-units/gun-kata-ninja');
let Weapon = require('../../../../src-server/models/weapons/base-weapon');
let WeaponOptions = require('../../../../src-server/utils/options-containers/weapon-options');
let expect = require('chai').expect;

describe('GunKataNinja', () => {
    describe('constructor', () => {
        it('Should assign weapon object correctly.', () => {
            var id = 0,
                weaponOptions = new WeaponOptions(50, 100, 1000, 50),
                providedWeapon = new Weapon(weaponOptions),
                ninja = new GunKataNinja(0, providedWeapon);

            expect(ninja.currentWeapon).to.equal(providedWeapon);
        });
    });
});