const assert = require('chai').assert;
const { loggedIn, loggedOut } = require('../jsConcepts/prototypes');

describe('Prototypes', function(){
    it('demi should be logged in', function(){
        assert.equal(loggedIn, 'demi@user has logged in')
    })
    it('daniel should be logged out', function(){
        assert.equal(loggedOut, 'daniel@user has logged out')
    })
})