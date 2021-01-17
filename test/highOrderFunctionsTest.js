const assert = require('chai').assert;
const { newSentence,  formProductHeadline} = require('../jsConcepts/highOrderFunctions');

describe('for a new sentence', function(){
    it('newSentence should return a list of new sentences', function(){
        newSentence.should.deep.equal(['watch anime', 'watch cartoons', 'watch movies', 'watch series' ])
    })
    it('addPrefix should return a string', function(){
        assert.equal(formProductHeadline, 'Playstation 5 price will be €999.99')
    })
})