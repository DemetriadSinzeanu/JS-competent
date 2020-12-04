const assert = require('chai').assert;
const { sum, fibonacci } = require('../jsConcepts/pureFunction');

describe('Pure Functions', function(){
    it('sum should return 5', function(){
        assert.equal(sum(2,3), 5)
    })
    it('fibonacci func should return 0', function(){
        assert.equal(fibonacci(0), 0)
    })
    it('fibonacci func should return 1', function(){
        assert.equal(fibonacci(2), 1)
    })
    it('fibonacci func should return 5', function(){
        assert.equal(fibonacci(5), 5)
    })
})