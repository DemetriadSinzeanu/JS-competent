/*This is a keyword that references another value, usually an object
that represents the current execution context*/

/*for example when used inside a function it references the object calling
that function*/

function contextThisExample() {
    return this
}
//Running this in a blowser:
// contextThisExample() === window; //true

//Running this in Node:
contextThisExample() === globalThis; //true

/** Set this by creting a objects where this is the new object */
/** new keyword creates and object where this is automatically bound to that new obj*/
function Cartoon(title, year, seasons) {
    this.title = title
    this.year = year
    this.seasons = seasons
    //here this is used to assign values to the objects props based on the values passed to the function
}

const firstCartoon = new Cartoon('Adventure time', 2010, 10)
const secondCartoon = new Cartoon('Phineas and Ferb', 2007, 4)
const thirdCartoon = new Cartoon('Gravity Falls', 2012, 2)

/* Prototype methods*/
/** BIND - helps you explicitly set this on a brand new function*/

function genreCartoon() {
    return this.name;
}

const anime = {
    name: 'Naruto',
}

/* create a another object as this and create a new func
that is bound to this object by calling th eoriginal one */

const showCartoonByGenre = genreCartoon.bind(anime)

console.log(showCartoonByGenre())

/** Call or apply - helps you when you want to call a func with a diff context but creating a new func*/
/** The difference between them is that apply invokes a func
with arguments as an array and call requires the parameters listed explicitly */

const cartoon = {
    name: 'Johny Bravo',
}

genreCartoon.call(cartoon,1, 2, 3)
/** or */
genreCartoon.call(cartoon,...[1, 2, 3])

genreCartoon.apply(cartoon, [1, 2, 3])

module.exports = {
    firstCartoon,
    secondCartoon,
    thirdCartoon,
    showCartoonByGenre
}