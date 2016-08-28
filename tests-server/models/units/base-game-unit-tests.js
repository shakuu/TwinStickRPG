let BaseGameUnit = require('../../../src-server/models/units/base-game-unit');
let Weapon = require('../../../src-server/models/weapons/base-weapon');
let WeaponOptions = require('../../../src-server/utils/options-containers/weapon-options');
let Position = require('../../../src-server/utils/position');
let expect = require('chai').expect;

describe('BaseGameUnit', () => {
    describe('constructor', () => {
        it('Should set positionX and positionY values to 0.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                actualPosition = unit.position;

            expect(actualPosition.x).to.equal(0);
            expect(actualPosition.y).to.equal(0);
        });

        it('Should set initial id value correctly.', () => {
            var providedId = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(providedId, type, healthPoints, weapon),
                actualId = unit.id;

            expect(actualId).to.equal(providedId);
        });

        it('Should set initial type value correctly.', () => {
            var id = 0,
                providedType = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, providedType, healthPoints, weapon),
                actualType = unit.type;

            expect(actualType).to.equal(providedType);
        });

        it('Should set initial experience value correctly.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon);

            expect(unit.experience).to.equal(0);
        });

        it('Should set initial level value correctly.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon);

            expect(unit.level).to.equal(1);
        });

        it('Should set initial healthPoints value correctly.', () => {
            var id = 0,
                type = 'base unit',
                providedHealthPoints = 1000,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, providedHealthPoints, weapon);

            expect(unit.healthPoints).to.equal(providedHealthPoints);
        });

        it('Should set initial isAlive value correctly.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon);

            expect(unit.isAlive).to.equal(true);
        });
    });

    describe('position', () => {
        it('Should throw when position parameter is not provided.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                act;

            act = () => {
                unit.position = { x: 100, y: 500 };
            };

            expect(act).to.throw(/type/);
        });

        it('Should not throw when position parameter is valid.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                act;

            act = () => {
                let newPosition = new Position(1000, 1000);
                unit.position = newPosition;
            };

            expect(act).to.not.throw();
        });
    });

    describe('level', () => {
        it('Should throw when level is not a number.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                level = 'zero',
                act;

            act = () => {
                unit.level = level;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when level is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                level = -1234,
                act;

            act = () => {
                unit.level = level;
            };

            expect(act).to.throw(/positive/);
        });

        it('Should throw when experience is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                level = 12.34,
                act;

            act = () => {
                unit.level = level;
            };

            expect(act).to.throw(/integer/);
        });
    });

    describe('experience', () => {
        it('Should throw when experience is not a number.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                experience = 'zero',
                act;

            act = () => {
                unit.experience = experience;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when experience is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                experience = -1234,
                act;

            act = () => {
                unit.experience = experience;
            };

            expect(act).to.throw(/positive/);
        });

        it('Should throw when experience is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, weapon),
                experience = 12.34,
                act;

            act = () => {
                unit.experience = experience;
            };

            expect(act).to.throw(/integer/);
        });
    });

    describe('healthPoints', () => {
        it('Should throw when healthPoints is not a number.', () => {
            var id = 0,
                type = 'base unit',
                baseHealthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, baseHealthPoints, weapon),
                healthPoints = 'zero',
                act;

            act = () => {
                unit.healthPoints = healthPoints;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when healthPoints is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                baseHealthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, baseHealthPoints, weapon),
                healthPoints = 12.34,
                act;

            act = () => {
                unit.healthPoints = healthPoints;
            };

            expect(act).to.throw(/integer/);
        });

        it('Should throw when healthPoints is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                baseHealthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                weapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, baseHealthPoints, weapon),
                healthPoints = -1234,
                act;

            act = () => {
                unit.healthPoints = healthPoints;
            };

            expect(act).to.not.throw(/positive/);
        });
    });

    describe('currentWeapon', () => {
        it('Should throw if weapon parameter is not provided.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                baseWeapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, baseWeapon),
                weapon = null,
                act;

            act = () => {
                unit.currentWeapon = weapon;
            };

            expect(act).to.throw(/must be provided/);
        });

        it('Should throw if weapon parameter is not instanceof Weapon.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                weaponOptions = new WeaponOptions(50, 100, 1000, 100),
                baseWeapon = new Weapon(weaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, baseWeapon),
                weapon = {},
                act;

            act = () => {
                unit.currentWeapon = weapon;
            };

            expect(act).to.throw(/type weapon/);
        });

        it('Should not throw if weapon parameter valid.', () => {
            var id = 0,
                type = 'base unit',
                healthPoints = 100,
                baseWeaponOptions = new WeaponOptions(50, 100, 1000, 100),
                baseWeapon = new Weapon(baseWeaponOptions),
                unit = new BaseGameUnit(id, type, healthPoints, baseWeapon),
                weaponOptions = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                },
                weapon = new Weapon(weaponOptions),
                act;

            act = () => {
                unit.currentWeapon = weapon;
            };

            expect(act).to.not.throw(/must be provided/);
        });
    });
});