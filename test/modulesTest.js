const assert = require('chai').assert;
const { hello, add, substract } = require('../jsConcepts/modules');

describe('Modules', function(){
    it('app should return hello', function(){
        assert.equal(hello(), 'hello')
    })
    it('Add function should return 5', function(){
        assert.equal(add(2, 3), 5)
    })
    it('Substract function should return 3', function(){
        assert.equal(substract(10, 7), 3)
    })
})