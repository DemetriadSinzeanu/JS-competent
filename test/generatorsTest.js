const should = require('chai').should();
const { 
    generateFirstDragon,
    generateSecondDragon,
    generateThirdDragon,
    generateAnotherDragon 
} = require('../jsConcepts/generators');

describe('Generators', function(){
    it('generateFirstDragon,generateSecondDragon,generateThirdDragon and generateAnotherDragon  should be objects', function(){
        generateFirstDragon.should.be.a('object')
        generateSecondDragon.should.be.a('object')
        generateThirdDragon.should.be.a('object')
        generateAnotherDragon.should.be.a('object')
    })
    it('generateFirstDragon should return an object', function(){
        generateFirstDragon.should.deep.equal({ value: 'fluffozaur', done: false })
    })
    it('generateSecondDragon should return an object', function(){
        generateSecondDragon.should.deep.equal({ value: 'purpleHaze', done: false })
    })
    it('generateThirdDragon should return an object', function(){
        generateThirdDragon.should.deep.equal({ value: 'drakari!', done: false })
    })
    it('generateAnotherDragon should return an object', function(){
        generateAnotherDragon.should.deep.equal({ value: undefined, done: true })
    })
})