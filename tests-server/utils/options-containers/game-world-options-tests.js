let GameWorldOptions = require('../../../src-server/utils/options-containers/game-world-options');
let Position = require('../../../src-server/utils/position');
let Size = require('../../../src-server/utils/size');
let expect = require('chai').expect;

describe('GameWorldOptions', () => {
    describe('constructor', () => {
        it('Should throw when name parameters is not a string.', () => {
            let act = () => {
                let name = null;
                let size = new Size(1000, 100000);
                let startPosition = new Position(100, 100);
                let enemies = ['type1', 'type2'];
                new GameWorldOptions(name, size, startPosition, enemies);
            };

            expect(act).to.throw(/string/);
        });

        it('Should throw when name parameter contains non letter characters.', () => {
            let act = () => {
                let name = '%letters7';
                let size = new Size(1000, 100000);                
                let startPosition = new Position(100, 100);
                let enemies = ['type1', 'type2'];
                new GameWorldOptions(name, size, startPosition, enemies);
            };

            expect(act).to.throw(/letters/);
        });

        
    });
});