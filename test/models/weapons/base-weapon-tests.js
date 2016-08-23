var BaseWeapon = require('../../../scripts/models/weapons/base-weapon');
var expect = require('chai').expect;

describe('BaseWeapon', function () {

    describe('constructor', function () {

        it('Should throw if options parameter is not provided', function () {
            var act;

            act = () => {
                new BaseWeapon();
            };

            expect(act).to.throw(/options/);
        });

        it('Should throw if options.damage is not a number', function () {
            var act,
                options = {
                    damage: 'not a number',
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw if options.damage value is less than zero.', function () {
            var act,
                options = {
                    damage: -1000,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be greated than or equal to zero/);
        });

        it('Should throw if options.timeBetweenShotsInMs is not a number', function () {
            var act,
                options = {
                    damage: 50,
                    timeBetweenShotsInMs: 'not a number',
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw if options.timeBetweenShotsInMs value is less than zero.', function () {
            var act,
                options = {
                    damage: 1000,
                    timeBetweenShotsInMs: -500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be greated than or equal to zero/);
        });

        it('Should throw if options.timeBetweenShotsInMs value is not an integer.', function () {
            var act,
                options = {
                    damage: 1337,
                    timeBetweenShotsInMs: 13.37,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be an integer/);
        });

        it('Should throw if options.reloadTimeInMs is not a number', function () {
            var act,
                options = {
                    damage: 50,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 'not a number',
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw if options.reloadTimeInMs value is less than zero.', function () {
            var act,
                options = {
                    damage: 1000,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: -5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be greated than or equal to zero/);
        });

        it('Should throw if options.reloadTimeInMs value is not an integer.', function () {
            var act,
                options = {
                    damage: 1337,
                    timeBetweenShotsInMs: 137,
                    reloadTimeInMs: 50.50,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be an integer/);
        });
        //
        it('Should throw if options.ammoCapacity is not a number', function () {
            var act,
                options = {
                    damage: 50,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 10000,
                    ammoCapacity: 'not a number'
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be a number/);
        });

        it('Should throw if options.ammoCapacity value is less than zero.', function () {
            var act,
                options = {
                    damage: 1000,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: -100
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be greated than or equal to zero/);
        });

        it('Should throw if options.ammoCapacity value is not an integer.', function () {
            var act,
                options = {
                    damage: 1337,
                    timeBetweenShotsInMs: 137,
                    reloadTimeInMs: 5050,
                    ammoCapacity: 10.54
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.throw(/must be an integer/);
        });

        it('Should not throw if options value is valid.', function () {
            var act,
                options = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                new BaseWeapon(options);
            };

            expect(act).to.not.throw();
        });
    });

    describe('addMod', function () {

        it('Should throw when mod parameter is not provided', function () {
            var act,
                weapon,
                options = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                };

            act = () => {
                weapon = new BaseWeapon(options);
                weapon.addMod();
            };

            expect(act).to.throw(/mod/);
        });

        it('Should throw when mod.typeId parameter is not a number', function () {
            var act,
                weapon,
                options = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                },
                mod = {
                    typeId: 'zero',
                    name: 'name',
                    isPassiveEffect: true,
                    apply: function () { },
                    remove: function () { }
                };

            act = () => {
                weapon = new BaseWeapon(options);
                weapon.addMod(mod);
            };

            expect(act).to.throw(/typeId/);
        });

        it('Should throw when mod.typeId parameter is not an integer.', function () {
            var act,
                weapon,
                options = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                },
                mod = {
                    typeId: '13.37',
                    name: 'name',
                    isPassiveEffect: true,
                    apply: function () { },
                    remove: function () { }
                };

            act = () => {
                weapon = new BaseWeapon(options);
                weapon.addMod(mod);
            };

            expect(act).to.throw(/must be an integer/);
        });

        it('Should throw when mod.name parameter is not a string', function () {
            var act,
                weapon,
                options = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                },
                mod = {
                    typeId: 0,
                    name: null,
                    isPassiveEffect: true,
                    apply: function () { },
                    remove: function () { }
                };

            act = () => {
                weapon = new BaseWeapon(options);
                weapon.addMod(mod);
            };

            expect(act).to.throw(/mod.name/);
        });

        it('Should throw when mod.isPassiveEffect parameter is not a boolean', function () {
            var act,
                weapon,
                options = {
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                },
                mod = {
                    typeId: 0,
                    name: 'mod',
                    passiveEffect: 'true',
                    apply: function () { },
                    remove: function () { }
                };

            act = () => {
                weapon = new BaseWeapon(options);
                weapon.addMod(mod);
            };

            expect(act).to.throw(/mod.isPassiveEffect/);
        });

        it('Should throw when mod with the same typeId is already in the list.', function () {
            var act,
                weapon,
                options = {
                    typeId: 0,
                    damage: 30,
                    timeBetweenShotsInMs: 500,
                    reloadTimeInMs: 5000,
                    ammoCapacity: 10
                },
                mod = {
                    typeId: 0,
                    name: 'mod',
                    passiveEffect: 'true',
                    applyEffect: function () { },
                    removeEffect: function () { }
                };

            act = () => {
                weapon = new BaseWeapon(options);
                weapon.addMod(mod);
            };

            expect(act).to.throw(/mod.isPassiveEffect/);
        });
    });
});