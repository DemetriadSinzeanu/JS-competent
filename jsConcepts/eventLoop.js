/** The event loop’s purpose is to look at the call stack and the queue. When the stack is empty, 
 * it takes the first thing on the queue and executes it.*/


/** Functions are added to a Queue, a list of messages that are to be processed when the time comes.*/ 

const eventLoopResult = () => {
   const data = {
      current: ''
   }
  function a() {
    data.current += "This is function a, "
 }
 function b() {
    setTimeout(function () {
      data.current += "This is function b."
    }, 1000)
    a()
 }
 function c() {
    data.current += "This is function c, "
    b()
 }
 c()

 return data
}
const eventLoop = eventLoopResult()
/** The execution should be, func c, func a, timeout(undefined) and func b*/

console.log(eventLoop)

module.exports = {
   eventLoop: eventLoopResult()
}