let BaseGameWorld = require('../../src-server/worlds/base-game-world');
let WorldOptions = require('../../src-server/utils/options-containers/game-world-options');
let Position = require('../../src-server/utils/position');
let Size = require('../../src-server/utils/size');
let expect = require('chai').expect;

describe('BaseGameWorld', () => {
    describe('constructor', () => {
        it('Should throw if worldOptions parameter is not provided', () => {
            let act = () => {
                new BaseGameWorld();
            };

            expect(act).to.throw(/type/);
        });

        it('Should throw if worldOptions parameter is not an instance of WorldOptions', () => {
            let act = () => {
                let worldOptions = {};
                new BaseGameWorld(worldOptions);
            };

            expect(act).to.throw(/type/);
        });

        it('Should not throw when worldOptions parameter is valid.', () => {
            let act = () => {
                let size = new Size(10000000, 1000000);
                let position = new Position(100, 1000);
                let enemies = ['type', 'another', 't'];
                let worldOptions = new WorldOptions('name', size, position, enemies);
                new BaseGameWorld(worldOptions);
            };

            expect(act).to.not.throw();
        });

        it('Should set all properties to the correct value when worldOptions parameter is valid.', () => {
            let name = 'name';
            let size = new Size(10000000, 1000000);
            let position = new Position(100, 1000);
            let enemies = ['type', 'another', 't'];
            let worldOptions = new WorldOptions(name, size, position, enemies);
            let gameWorld = new BaseGameWorld(worldOptions);

            expect(gameWorld.name).to.equal(name);
            expect(gameWorld.size.width).to.equal(size.width);
            expect(gameWorld.size.height).to.equal(size.height);
            expect(gameWorld.startPosition.x).to.equal(position.x);
            expect(gameWorld.startPosition.y).to.equal(position.y);
            expect(gameWorld.enemyTypes).to.equal(enemies);
        });
    });
});