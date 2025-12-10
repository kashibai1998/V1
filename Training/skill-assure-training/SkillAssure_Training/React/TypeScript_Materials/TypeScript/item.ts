import { Idgenerator } from "./idgenerator";

export class Item{
    itemId: number;
    price: number;
    description: string;

    constructor(_price:number,_description:string) {
        this.price = _price;
        this.description = _description;
    }

    getItemId(): number{
        return Idgenerator.itemid++;
    }

    getPrice(): number{
        return this.price;
    }

    getDescription(): string{
        return this.description;
    }

}