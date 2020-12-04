/* Prototype - every object type and any custom type we create has a prototype */
/** It contains all the methods for that object type */

function User(email, name) {
    this.email = email
    this.name = name
    this.online = false
}

/** Defined this method on the prototype of the user and not define it inside the upper contructor func*/
User.prototype.login = function(){
    this.online = true
    return this.email + ' has logged in'
}

User.prototype.logout = function(){
    this.online = false
    return this.email + ' has logged out'
}

const userOne = new User('demi@user', 'Demi')
const userTwo = new User('daniel@user', 'Daniel')

const loggedIn = userOne.login()
const loggedOut = userTwo.logout()

module.exports = {
    loggedIn,
    loggedOut,
}

