/** functions that take other functions as arguments,
or functions that return a function as their result. */

function formSentence(word) {
    return `watch ${word}`
  }
  
  const words = ['anime', 'cartoons', 'movies', 'series']
  const newSentence = words.map(formSentence)

  console.log(newSentence)

  /** we can use HOF for multiple vatriations of an operation*/

  function addPrefix(prefix) {
    return function(word) {
      return `${prefix}${word}`
    }
  }

  const addEuroSign = addPrefix('€')
  const productName = addPrefix('Playstation 5')
  const productWorth = addEuroSign('999.99')
  const formProductHeadline = productName(
    ` price will be ${productWorth}`,
  )
  
  console.log(productWorth)
  console.log(formProductHeadline)

module.exports = {
  newSentence,
  formProductHeadline
}