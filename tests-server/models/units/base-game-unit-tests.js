var BaseGameUnit = require('../../../src-server/models/units/base-game-unit');
var Weapon = require('../../../src-server/models/weapons/base-weapon');
var expect = require('chai').expect;

describe('BaseGameUnit', () => {
    describe('constructor', () => {
        it('Should set positionX and positionY values to 0.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                actualPosition = unit.position;

            expect(actualPosition.x).to.equal(0);
            expect(actualPosition.y).to.equal(0);
        });

        it('Should set initial id value correctly.', () => {
            var providedId = 0,
                type = 'base unit',
                unit = new BaseGameUnit(providedId, type),
                actualId = unit.id;

            expect(actualId).to.equal(providedId);
        });

        it('Should set initial type value correctly.', () => {
            var id = 0,
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType),
                actualType = unit.type;

            expect(actualType).to.equal(providedType);
        });

        it('Should set initial experience value correctly.', () => {
            var id = 0,
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType);

            expect(unit.experience).to.equal(0);
        });

        it('Should set initial level value correctly.', () => {
            var id = 0,
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType);

            expect(unit.level).to.equal(1);
        });

        it('Should set initial healthPoints value correctly.', () => {
            var id = 0,
                providedType = 'base unit',
                providedHealthPoints = 1000;
            unit = new BaseGameUnit(id, providedType, providedHealthPoints);

            expect(unit.healthPoints).to.equal(providedHealthPoints);
        });

        it('Should set initial isAlive value correctly.', () => {
            var id = 0,
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType);

            expect(unit.isAlive).to.equal(true);
        });
    });

    describe('position', () => {
        it('Should throw when position parameter is not provided.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                act;

            act = () => {
                unit.position = null;
            };

            expect(act).to.throw(/position/);
        });

        it('Should throw when position.x is not provided.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: null,
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/position.x/);
        });

        it('Should throw when position.x is not a number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 'number',
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when position.x is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: -5,
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/positive/);
        });

        it('Should throw when position.x is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5.12,
                    y: 5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/integer/);
        });

        //
        it('Should throw when position.y is not provided.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5,
                    y: null
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/position.y/);
        });

        it('Should throw when position.y is not a number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5,
                    y: 'number'
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/number/);
        });

        it('Should throw when position.y is a negative number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: +5,
                    y: -5
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/positive/);
        });

        it('Should throw when position.y is not an integer value.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 5,
                    y: 5.45
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.throw(/integer/);
        });

        it('Should not throw when position parameter is valid.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
                position = {
                    x: 1001,
                    y: 50
                },
                act;

            act = () => {
                unit.position = position;
            };

            expect(act).to.not.throw();
        });
    });

    describe('level', () => {
        it('Should throw when level is not a number.', () => {
            var id = 0,
                type = 'base unit',
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                unit = new BaseGameUnit(id, type),
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
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType),
                weapon = null,
                act;

            act = () => {
                unit.currentWeapon = weapon;
            };

            expect(act).to.throw(/must be provided/);
        });

        it('Should throw if weapon parameter is not instanceof Weapon.', () => {
            var id = 0,
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType),
                weapon = {},
                act;

            act = () => {
                unit.currentWeapon = weapon;
            };

            expect(act).to.throw(/type weapon/);
        });

        it('Should not throw if weapon parameter valid.', () => {
            var id = 0,
                providedType = 'base unit',
                unit = new BaseGameUnit(id, providedType),
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