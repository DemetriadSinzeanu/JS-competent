/** Concurrency means multiple computations are happening at the same time. 
 * JavaScript runs on a single thread. This thread is event-based and responds to events when they occur 
 * and it does not vlock functions from executing. this means JavaScript code is parsed sequentially.
 * Fortunately JavaScript comes with three features that allow you to run code in concurrently. Callbacks, Promises and Async/Await.
*/

let concurencyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 5000)
  })
  
  concurencyPromise.then(value => {
    return console.log(value)
  }).catch(err => {
    return console.log(err)
  })

  /** A statement will be created that will handle the eventual suceess value or failure reason of this promise.
   * Concurrent code is much better than sequential as it’s non-blocking and can handle multiple users or events at the same time without any problem.
  */
  
  // console.log(concurencyPromise)

  module.exports = {
    concurencyPromise
  }