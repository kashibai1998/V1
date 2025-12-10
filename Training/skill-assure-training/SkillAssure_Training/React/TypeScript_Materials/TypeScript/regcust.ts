import { Customer } from "./customer";

export class RegCustomer extends Customer {
  discount: number;

  constructor(name: string, _discount: number) {
    super(name);
    this.discount = _discount;
  }

  getDiscount(): number {
    return this.discount;
  }

  setDiscount(_discount: number): void {
    this.discount = _discount;
  }
}
