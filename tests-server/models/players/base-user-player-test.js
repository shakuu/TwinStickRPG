let BaseUserPlayer = require('../../../src-server/models/players/base-user-player');
let GunKataNinja = require('../../../src-server/models/units/playable-units/gun-kata-ninja');
let BaseWeapon = require('../../../src-server/models/weapons/base-weapon');
let WeaponOptions = require('../../../src-server/utils/options-containers/weapon-options');
let expect = require('chai').expect;

describe('BaseUserPlayer', () => {
    describe('constructor', () => {
        it('Should throw when name parameter is not a string.', () => {
            let act = () => {
                let invalidName = 12345;
                new BaseUserPlayer(invalidName);
            };

            expect(act).to.throw();
        });

        it('Should throw when name parameter contains non letter symbols.', () => {
            let act = () => {
                let invalidName = '$name1';
                new BaseUserPlayer(invalidName);
            };

            expect(act).to.throw();
        });

        it('Should not throw when name parameter is valid.', () => {
            let act = () => {
                let validName = "playerOne";
                new BaseUserPlayer(validName);
            };

            expect(act).to.not.throw();
        });
    });

    describe('gameCharacter', () => {
        it('Should throw when unit parameter is not of BaseGameUnit type.', () => {
            let act = () => {
                let invalidUnit = {};
                let playerName = 'name';
                let player = new BaseUserPlayer(playerName);
                player.gameCharacter = unit;
            };

            expect(act).to.throw();
        });

        it('Should not throw when unit parameter is of BaseGameUnit type.', () => {
            let act = () => {
                let weaponOptions = new WeaponOptions(5, 50, 500, 50);
                let weapon = new BaseWeapon(weaponOptions)
                let unit = new GunKataNinja(0, weapon);
                let playerName = 'name';
                let player = new BaseUserPlayer(playerName);
                player.gameCharacter = unit;
            };

            expect(act).to.not.throw();
        });
    });
});