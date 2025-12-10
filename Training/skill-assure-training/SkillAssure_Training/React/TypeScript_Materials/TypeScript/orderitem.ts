import { Item } from "./item";
export class Orderitem {
  totalPrice: number;
  item: Item[] = [];
  quantity: number;

  constructor(_quantity: number, _item: Item[]) {
    for (const items of _item) {
      this.item.push(items);
      this.quantity = _quantity;
      this.totalPrice = _quantity * items.getPrice();
      break;
    }
  }

  setQuantity(_qty: number): void {
    this.quantity = _qty;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getItem(): Item[] {
    return this.item;
  }
}
