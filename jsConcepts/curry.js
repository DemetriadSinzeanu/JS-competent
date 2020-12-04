/** Curry func - is a function that takes multiple arguments one at a time. */

const name = "Demi";

/**the curried version will take one argument and return a function that
takes the next argument, which returns a function */
function sayMyName (name) {
    const iLearned = "Curry functions, learned I";

    function iAm (string) {
        return name + "," + " " + string;
    }

    return iAm(iLearned);
}

module.exports = {
    sayMyName: sayMyName(name),
    name
};