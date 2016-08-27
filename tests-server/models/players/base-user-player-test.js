let BaseUserPlayer = require('../../../src-server/models/players/base-user-player');
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
});