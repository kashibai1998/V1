import {Item} from './item';
import {Customer} from './customer';
import { Idgenerator } from './idgenerator';

export class Restaurants {
    customerId: number
    name: string;
    item: Item[] = [];
    customer: Customer[] = [];


    constructor(_name: string) {
        this.name = _name;
    }

    getName() {
        return this.name;
    }

    getCustomerId(): number {
        return Idgenerator.customerid++;
    }

    getItem(): Item[] {
        return this.item;
    }

    getCustomer(): Customer[] {
        return this.customer;
    }

    getTotalOrderWorth(): number {
        let networth = 0;
        for (let customer of this.getCustomer()) {
            for (let order of customer.getOrder()) {
                for (let item of order.getOrderItem()) {
                    networth += item.totalPrice;
                }
            }
        }
        return networth;
    }
}