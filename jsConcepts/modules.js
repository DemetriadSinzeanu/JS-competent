/*Modules are a way to split javascript programs into small 
functionalities that will lated be imported when needed*/

/*A way of doing it

module.exports = {
    hello: () => 'hello',
    add: (i, j) => i + j,
    substract: (i, j) => i - j
}

*/

/*but i prefer this one*/

const hello = () => 'hello';

const add = (i, j) => i + j;

const substract = (i, j) => i - j;

module.exports = {
    hello: hello,
    add: add,
    substract: substract
}

