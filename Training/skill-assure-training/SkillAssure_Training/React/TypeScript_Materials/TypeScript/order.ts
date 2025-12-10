import { Orderitem } from "./orderitem";
import { Idgenerator } from "./idgenerator";
export class Order {
  orderItem: Orderitem[] = [];

  private orderId: number;

  constructor() {
    this.orderId = Idgenerator.getOrderId();
  }

  getOrderId(): number {
    return this.orderId;
  }

  getOrderItem(): Orderitem[] {
    return this.orderItem;
  }

  setOrderItem(_orderItem: Orderitem) {
    this.orderItem.push(_orderItem);
  }
}
