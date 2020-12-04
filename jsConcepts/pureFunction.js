/** A pure function is a function where the return value is
only determined by its input values, without observable side effects. */

const sum = function(value1, value2) {
    return value1 + value2;
}

/* The sum function caused no side-effects. It did not alter the input values
provided, it used another pure function, the + operator, and returned the sum
of the values as the result of the call.*/

function fibonacci(num){
    if (num === 0) {
        return 0
        } else if (num <= 2) {
        return 1
        } else {
        return fibonacci(num-2) + fibonacci(num-1)
    }
}
/* In the preceding recursive fibonacci function, if the input is the simple
case of 0 then it returns 0. Similarly, if the input is 1 or 2 then return 1.
If not it calculates based on the number entered*/


module.exports = {
    sum,
    fibonacci
}