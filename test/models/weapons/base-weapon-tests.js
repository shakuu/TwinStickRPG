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
});