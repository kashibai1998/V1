function resturant() {
    this.name = "PanShop";
    this.location = "Almel";
}

function newRest() {
    resturant.call(this);
}
newRest.prototype = Object.create(resturant.prototype);
const rest = new newRest();
console.log(rest.name);
console.log(rest.location);