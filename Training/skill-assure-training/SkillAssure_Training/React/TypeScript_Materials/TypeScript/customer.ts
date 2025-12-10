import { Idgenerator } from "./idgenerator";
import { Order } from "./order";

export class Customer {
  protected name: string;
  customerId: number;
  order: Order[] = [];

  constructor(_name: string) {
    this.name = _name;
  }

  getName(): string {
    return this.name;
  }

  setName(_name: string) {
    this.name = _name;
  }

  getCustomerId(): number {
    return Idgenerator.customerid++;
  }

  getOrder(): Order[] {
    return this.order;
  }

  setOrder(_order: Order): void {
    {
      this.order.push(_order);
    }
  }
}
