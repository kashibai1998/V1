let person = {
    name: "Lakkappa",
    lastname: "Pujari",
    city:"Bijapur"
}
const person1= Object.create(person)
person.nationality = "Ïndian";
delete person.lastname;
console.log(person.lastname)
for (var key in person1) {
    console.log(key[person1])
}


