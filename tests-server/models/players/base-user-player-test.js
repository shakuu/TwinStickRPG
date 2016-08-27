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

    describe('score', () => {
        it('Should throw when score parameter is not a number.', () => {
            let act = () => {
                let invalidScore = 'number';
                let playerNmae = 'name';
                let player = new BaseUserPlayer(playerNmae);
                player.score = invalidScore;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when score parameter is not an integer.', () => {
            let act = () => {
                let invalidScore = 2.345;
                let playerNmae = 'name';
                let player = new BaseUserPlayer(playerNmae);
                player.score = invalidScore;
            };

            expect(act).to.throw(/integer/);
        });

        it('Should not throw when score parameter is a valid number.', () => {
            let act = () => {
                let validScore = 2345;
                let playerNmae = 'name';
                let player = new BaseUserPlayer(playerNmae);
                player.score = validScore;
            };

            expect(act).to.not.throw();
        });
    });

    describe('lives', () => {
        it('Should throw when lives parameter is not a number.', () => {
            let act = () => {
                let invalidLives = 'number';
                let playerNmae = 'name';
                let player = new BaseUserPlayer(playerNmae);
                player.lives = invalidLives;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when lives parameter is not an integer.', () => {
            let act = () => {
                let invalidLives = 2.345;
                let playerNmae = 'name';
                let player = new BaseUserPlayer(playerNmae);
                player.lives = invalidLives;
            };

            expect(act).to.throw(/integer/);
        });

        it('Should not throw when lives parameter is a valid number.', () => {
            let act = () => {
                let validLives = 2345;
                let playerNmae = 'name';
                let player = new BaseUserPlayer(playerNmae);
                player.lives = validLives;
            };

            expect(act).to.not.throw();
        });
    });
});