/** Transpiling is the process of interpreting certain programming languages and
 * translating it to a specific target language. It is the process of converting source code to source code.*/


/** An example would be transpiling something from ES6 to ES5 */

/** ES6 arrow function syntax*/
const numbers = [1,2,3]
const ES6MapTranspiler = numbers.map(n => n + 1); 

/** Is interpreted and translated to this ES5 anonymous function syntax */

const ES5MapTranspiler = numbers.map(function(n) {   
  return n + 1; 
});

module.exports = {
  ES6MapTranspiler,
  ES5MapTranspiler
}