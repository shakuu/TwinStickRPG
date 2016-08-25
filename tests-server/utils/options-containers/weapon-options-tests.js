let WeaponOptions = require('../../../src-server/utils/options-containers/weapon-options');
let expect = require('chai').expect;

describe('WeaponOptions', () => {
    describe('contructor', () => {
        it('Should throw when damage parameter is not provied', () => {
            var damage = null,
                timeBetweenShotsInMs = 100,
                reloadTimeInMs = 1000,
                ammoCapacity = 50,
                act;

            act = () => {
                new WeaponOptions(
                    damage,
                    timeBetweenShotsInMs,
                    reloadTimeInMs,
                    ammoCapacity);
            };

            expect(act).to.throw(/damage/);
        });

        it('Should throw when timeBetweenShotsInMs parameter is not provied.', () => {
            var damage = 50,
                timeBetweenShotsInMs = null,
                reloadTimeInMs = 1000,
                ammoCapacity = 50,
                act;

            act = () => {
                new WeaponOptions(
                    damage,
                    timeBetweenShotsInMs,
                    reloadTimeInMs,
                    ammoCapacity);
            };

            expect(act).to.throw(/timeBetweenShotsInMs/);
        });

        it('Should throw when reloadTimeInMs parameter is not provied.', () => {
            var damage = 50,
                timeBetweenShotsInMs = 100,
                reloadTimeInMs = null,
                ammoCapacity = 50,
                act;

            act = () => {
                new WeaponOptions(
                    damage,
                    timeBetweenShotsInMs,
                    reloadTimeInMs,
                    ammoCapacity);
            };

            expect(act).to.throw(/reloadTimeInMs/);
        });

        it('Should throw when ammoCapacity parameter is not provied.', () => {
            var damage = 50,
                timeBetweenShotsInMs = 100,
                reloadTimeInMs = 1000,
                ammoCapacity = null,
                act;

            act = () => {
                new WeaponOptions(
                    damage,
                    timeBetweenShotsInMs,
                    reloadTimeInMs,
                    ammoCapacity);
            };

            expect(act).to.throw(/ammoCapacity/);
        });

        it('Should set correct values when input parameters are valid.', () => {
            var damage = 50,
                timeBetweenShotsInMs = 100,
                reloadTimeInMs = 1000,
                ammoCapacity = 100,
                weaponOptions,                
                act;

            act = () => {
                weaponOptions = new WeaponOptions(
                    damage,
                    timeBetweenShotsInMs,
                    reloadTimeInMs,
                    ammoCapacity);
            };

            expect(act).to.not.throw();
            expect(weaponOptions.damage).to.equal(damage);
            expect(weaponOptions.timeBetweenShotsInMs).to.equal(timeBetweenShotsInMs);
            expect(weaponOptions.reloadTimeInMs).to.equal(reloadTimeInMs);
            expect(weaponOptions.ammoCapacity).to.equal(ammoCapacity);            
        });
    });
});