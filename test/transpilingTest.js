const { ES6MapTranspiler, ES5MapTranspiler } = require('../jsConcepts/transpiling');

describe('Transpiling', function(){
    it('ES6MapTranspiler should return an array', function(){
        ES6MapTranspiler.should.deep.equal([ 2, 3, 4 ])
    })
    it('ES5MapTranspiler should return an array', function(){
        ES5MapTranspiler.should.deep.equal([ 2, 3, 4 ])
    })
})