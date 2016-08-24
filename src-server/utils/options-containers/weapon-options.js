(() => {
    class WeaponOptions {
        constructor(damage, timeBetweenShotsInMs, reloadTimeInMs, ammoCapacity) {
            if (!damage) {
                throw new Error('damage must be provided.');
            }

            if (!timeBetweenShotsInMs) {
                throw new Error('timeBetweenShotsInMs must be provided.');
            }

            if (!reloadTimeInMs) {
                throw new Error('reloadTimeInMs must be provided.');
            }

            if (!ammoCapacity) {
                throw new Error('ammoCapacity must be provided.');
            }

            this.damage = damage;
            this.timeBetweenShotsInMs = timeBetweenShotsInMs;
            this.reloadTimeInMs = reloadTimeInMs;
            this.ammoCapacity = ammoCapacity;
        }
    }

    module.exports = WeaponOptions;
})();