var ControlsManager = require('../../scripts/controls/controls-manager'),
    expect = require('chai').expect;

describe('ControlManager', function () {

    describe('addDefinition()', function () {

        it('Should throw when definition object is not provided', function () {
            var controlsManager = new ControlsManager(),
                definition = 'invalid',
                act;

            act = () => {
                controlsManager.addDefinition(definition);
            };

            expect(act).to.throw(/Invalid/);
        });

        it('Should throw when definition.name is not provided', function () {
            var controlsManager = new ControlsManager(),
                definition = {
                    name: null,
                    keyCode: 39,
                    state: false
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
            };

            expect(act).to.throw(/Invalid/);
        });

        it('Should throw when definition.keyCode is not provided', function () {
            var controlsManager = new ControlsManager(),
                definition = {
                    name: 'controlDefinition',
                    keyCode: null,
                    state: false
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
            };

            expect(act).to.throw(/Invalid/);
        });

        it('Should throw when definition.keyCode is not a number', function () {
            var controlsManager = new ControlsManager(),
                definition = {
                    name: 'controlDefinition',
                    keyCode: 'not a number',
                    state: false
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
            };

            expect(act).to.throw(/definition.keyCode/);
        });

    });


    describe('removeDefinition()', function () {

    });

    describe('getControlState()', function () {

    });
    
    describe('setKeyDown()', function () {

    });

    describe('setKeyUp()', function () {

    });
});