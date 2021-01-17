const assert = require('chai').assert;
const { concurencyPromise } = require('../jsConcepts/concurrency');

describe('Concurency Promise', function(){
    it('concurencyPromise should return Success', function(done){
        setTimeout(function(){
            assert.equal(concurencyPromise, 'Success')
            done();
        }, 5000)
    })
})