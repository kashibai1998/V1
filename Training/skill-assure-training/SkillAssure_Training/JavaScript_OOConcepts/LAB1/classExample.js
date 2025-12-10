class Book {              //creating the class and assigning the name to the constructor value
    constructor(name) {
        this.name = name;
    }
}

class newBook extends Book {
    constructor(name) {
        super(name);        //it's calling the parent constructor
    }
}

const newBook1 = new newBook('Mathematics-V');
console.log(newBook1.name);
