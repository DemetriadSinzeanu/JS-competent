const assert = require('chai').assert;
const { eventLoop } = require('../jsConcepts/eventLoop');

describe('Event Loop', function(){
    it('eventLoopResult should execute function in the order: func c, func a, func b', function(){
        assert.equal(eventLoop, 'This is function b')
    })
})