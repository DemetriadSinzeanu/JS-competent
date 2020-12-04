const assert = require('chai').assert;
const { sayMyName } = require('../jsConcepts/curry');

describe('Curry', function(){
    it('sayMyName should return a string', function(){
        assert.equal(sayMyName, 'Demi, Curry functions, learned I')
    })
})