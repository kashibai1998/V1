import { Customer } from "./customer";
import { Item } from "./item";
import { Order } from "./order";
import { Orderitem } from "./orderitem";
import { RegCustomer } from "./regcust";
import { Restaurants } from "./restaurants";

let restaurants1: Restaurants = new Restaurants("zemato");

let item1: Item = new Item(500, "north indian");
let item2: Item = new Item(1000, "south indian");
let item3: Item = new Item(200, "drinks");
let item4: Item = new Item(100, "sweets");

restaurants1.item.push(item1);
restaurants1.item.push(item2);
restaurants1.item.push(item3);
restaurants1.item.push(item4);

let orderItem1: Orderitem = new Orderitem(3, [item1]);
let orderItem2: Orderitem = new Orderitem(4, [item2]);
let orderItem3: Orderitem = new Orderitem(4, [item3]);
let orderItem4: Orderitem = new Orderitem(5, [item4]);

let order1: Order = new Order();
let order2: Order = new Order();

order1.orderItem.push(orderItem1);
order1.orderItem.push(orderItem2);
order2.orderItem.push(orderItem3);
order2.orderItem.push(orderItem4);

let customer1: Customer = new Customer("Shaurya");
let regCustomer1: RegCustomer = new RegCustomer("Arjun", 10);

customer1.order.push(order1);
regCustomer1.order.push(order2);

restaurants1.customer.push(customer1);
restaurants1.customer.push(regCustomer1);

console.log("Restaurant name:" + `${restaurants1.getName()}`);
console.log("customer name:" + `${customer1.getName()}`);
console.log("customer id:" + `${customer1.getCustomerId()}`);

console.log("Order Id is" + `${order1.getOrderId()}`);
console.log("Ordered quantity" + `${orderItem1.getQuantity()}`);
console.log("Ordered quantity" + `${orderItem2.getQuantity()}`);

console.log("Description:" + `${item1.getDescription()}`);
console.log("Description:" + `${item2.getDescription()}`);

console.log("Price:" + `${item1.getPrice()}`);
console.log("Price:" + `${item2.getPrice()}`);

console.log("Networth of the restaurant:" +`${restaurants1.getTotalOrderWorth()}`);