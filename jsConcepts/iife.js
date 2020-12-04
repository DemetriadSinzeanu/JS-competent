/*IIFE also known as Immediately Invoked Function Expression 
is a JavaScript function that runs as soon as it is defined*/

(iife = function() {
  return "this is a IIFE";
})();

(favNumber = function(num = 3) {
  return "this is my number " + num;
})(); //it imediately invokes it

// console.log(test)
favNumber(5); //we can alsa call it later

//most popular use is to avoid global variables
//ex:
avoidGlobal = function() {
  var a = 3;
  (function() {
    var a = 2;
    return a
  })(); //this one executes first

  return a; // this one does not have closure for the var inside te IIFE
}

module.exports = {
  favNumber,
  iife,
  avoidGlobal
}