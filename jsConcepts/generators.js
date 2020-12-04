/** Generators are functions that lets you suspend function execution
and simplifies the creation of iterators */

const someDragons = function*() {
    const firstDragon = yield "fluffozaur"
    const secondDragon = yield "purpleHaze"
    const thirdDragon = yield "drakari!"
    console.log(firstDragon, secondDragon, thirdDragon)
}

//ready generators for running
const generateDragons = someDragons()

//next() - Returns a value yielded by the yield expression.
const generateFirstDragon = generateDragons.next()
const generateSecondDragon = generateDragons.next()
const generateThirdDragon = generateDragons.next()
const generateAnotherDragon = generateDragons.next()

module.exports = {
    generateFirstDragon,
    generateSecondDragon,
    generateThirdDragon,
    generateAnotherDragon
}