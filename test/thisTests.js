const should = require('chai').should();
const { firstCartoon, secondCartoon, thirdCartoon, showCartoonByGenre } = require('../jsConcepts/this');

describe('This', function(){
    it('firstCartoon, secondCartoon and thirdCartoon should be objects', function(){
        firstCartoon.should.be.a('object')
        secondCartoon.should.be.a('object')
        thirdCartoon.should.be.a('object')
    })
    it('firstCartoon should return an object with title, year and seasons', function(){
        firstCartoon.should.deep.equal({ title: 'Adventure time', year: 2010, seasons: 10 })
    })
    it('secondCartoon should return an object with title, year and seasons', function(){
        secondCartoon.should.deep.equal({ title: 'Phineas and Ferb', year: 2007, seasons: 4 })
    })
    it('thirdCartoon should return an object with title, year and seasons', function(){
        thirdCartoon.should.deep.equal({ title: 'Gravity Falls', year: 2012, seasons: 2 })
    })
    it('showCartoonByGenre should return Naruto', function(){
        showCartoonByGenre().should.deep.equal('Naruto')
    })
})