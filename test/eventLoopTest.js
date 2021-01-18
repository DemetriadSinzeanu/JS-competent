const { eventLoop } = require('../jsConcepts/eventLoop');

describe('Event Loop', function(){
    it('eventLoopResult should execute function in the order: func c, func a, func b', function(){
        console.log(eventLoop)
        eventLoop.should.deep.equal({ current: 'This is function c, This is function a, This is function b.'})
    })
})