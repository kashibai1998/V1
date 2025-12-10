function Resturant (name,location,rating) {
    this.name = name;
    this.location = location;
    this.rating = rating;
}

const Resturant1 = new Resturant('Appu', 'Älmel', '5');
Resturant1.fonder="Lucky";
console.log(Resturant1);