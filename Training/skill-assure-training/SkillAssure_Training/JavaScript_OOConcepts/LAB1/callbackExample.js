function introduction(firstname, lastname, callback) {
    console.log(firstname, lastname);
    callback(firstname)
}

function greeting(name) {
    console.log(`Greeting for new employee ${name}`)
}

console.log(introduction('Lucky', 'Pujari', greeting))



