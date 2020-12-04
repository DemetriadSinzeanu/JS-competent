const assert = require('chai').assert;
const { favNumber, iife, avoidGlobal } = require('../jsConcepts/iife');

describe('IIFE', function(){
    it('favNumber, avoidGlobal and iife should be a function', function(){
        favNumber.should.be.a('function')
        iife.should.be.a('function')
        avoidGlobal.should.be.a('function')
    })
    it('iife should return this is a IIFE', function(){
        assert.equal(iife(), 'this is a IIFE')
    })
    it('favNumber should return this is my number 3', function(){
        assert.equal(favNumber(), 'this is my number 3')
    })
    it('avoidGlobal should return this is my number 3', function(){
        assert.equal(avoidGlobal(), 3)
    })
})