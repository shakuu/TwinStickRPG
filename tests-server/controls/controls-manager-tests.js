var ControlsManager = require('../../src-server/controls/controls-manager'),
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

            expect(act).to.throw(/keyCode/);
        });

        it('Should not throw when definition parameter is correct', function () {
            var controlsManager = new ControlsManager(),
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
            };

            expect(act).to.not.throw();
        });
    });


    describe('removeDefinition()', function () {

        it('Should throw when definition object is not provided', function () {
            var controlsManager = new ControlsManager(),
                definition = 'invalid',
                act;

            act = () => {
                controlsManager.removeDefinition(definition);
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
                controlsManager.removeDefinition(definition);
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
                controlsManager.removeDefinition(definition);
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
                controlsManager.removeDefinition(definition);
            };

            expect(act).to.throw(/keyCode/);
        });

        it('Should not throw when definition parameter is correct', function () {
            var controlsManager = new ControlsManager(),
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                act;

            act = () => {
                controlsManager.removeDefinition(definition);
            };

            expect(act).to.not.throw();
        });
    });

    describe('setKeyDown()', function () {

        it('Should throw if keyCode parameter is not provided.', function () {
            var controlsManager = new ControlsManager(),
                act;

            act = () => {
                controlsManager.setKeyDown();
            };

            expect(act).to.throw(/keyCode/);
        });

        it('Should throw if keyCode parameter is not a number.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 'not a number',
                act;

            act = () => {
                controlsManager.setKeyDown(keyCode);
            };

            expect(act).to.throw(/keyCode/);
        });

        it('Should throw if there is no ControlDefinition with this keyCode parameter found.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                act;

            act = () => {
                controlsManager.setKeyDown(keyCode);
            };

            expect(act).to.throw(/ControlDefinition/);
        });

        it('Should not throw if keyCode parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
                controlsManager.setKeyDown(keyCode);
            };

            expect(act).to.not.throw();
        });

        it('Should return a ControlDefinition with correct properties when keyCode parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                actual;

            controlsManager.addDefinition(definition);
            actual = controlsManager.setKeyDown(keyCode);

            expect(actual.name).to.equal(definition.name);
            expect(actual.keyCode).to.equal(definition.keyCode);
        });

        it('Should return a ControlDefinition with state propertiy set to true when keyCode parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                actual;

            controlsManager.addDefinition(definition);
            actual = controlsManager.setKeyDown(keyCode);

            expect(actual.state).to.equal(true);
        });
    });

    describe('setKeyUp()', function () {

        it('Should throw if keyCode parameter is not provided.', function () {
            var controlsManager = new ControlsManager(),
                act;

            act = () => {
                controlsManager.setKeyUp();
            };

            expect(act).to.throw(/keyCode/);
        });

        it('Should throw if keyCode parameter is not a number.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 'not a number',
                act;

            act = () => {
                controlsManager.setKeyUp(keyCode);
            };

            expect(act).to.throw(/keyCode/);
        });

        it('Should throw if there is no ControlDefinition with this keyCode parameter found.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 40,
                act;

            act = () => {
                controlsManager.setKeyUp(keyCode);
            };

            expect(act).to.throw(/ControlDefinition/);
        });

        it('Should not throw if keyCode parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
                controlsManager.setKeyUp(keyCode);
            };

            expect(act).to.not.throw();
        });

        it('Should return a ControlDefinition with correct properties when keyCode parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: false
                },
                actual;

            controlsManager.addDefinition(definition);
            actual = controlsManager.setKeyUp(keyCode);

            expect(actual.name).to.equal(definition.name);
            expect(actual.keyCode).to.equal(definition.keyCode);
        });

        it('Should return a ControlDefinition with state propertiy set to false when keyCode parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                keyCode = 39,
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: true
                },
                actual;

            controlsManager.addDefinition(definition);
            actual = controlsManager.setKeyUp(keyCode);

            expect(actual.state).to.equal(false);
        });
    });

    describe('getControlState()', function () {

        it('Should throw when controlName parameter is not a string.', function () {
            var controlsManager = new ControlsManager(),
                controlName = 107,
                act;

            act = () => {
                controlsManager.getControlState(controlName);
            };

            expect(act).to.throw(/controlName/);
        });

        it('Should throw when controlName parameter does not a match a ControlDefinition.', function () {
            var controlsManager = new ControlsManager(),
                controlName = 'this should not exist',
                act;

            act = () => {
                controlsManager.getControlState(controlName);
            };

            expect(act).to.throw(/is not defined/);
        });

        it('Should not throw when controlName parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                controlName = 'controlDefinition',
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: true
                },
                act;

            act = () => {
                controlsManager.addDefinition(definition);
                controlsManager.getControlState(controlName);
            };

            expect(act).to.not.throw(/is not defined/);
        });

        it('Should return correct ControlDefinition when controlName parameter is correct.', function () {
            var controlsManager = new ControlsManager(),
                controlName = 'controlDefinition',
                definition = {
                    name: 'controlDefinition',
                    keyCode: 39,
                    state: true
                },
                actual;

            controlsManager.addDefinition(definition);
            actual = controlsManager.getControlState(controlName);

            expect(actual.name).to.equal(definition.name);
            expect(actual.keyCode).to.equal(definition.keyCode);
            expect(actual.state).to.equal(definition.state);            
        });

    });
});