export class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }
  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    this._discountRate += 0.03;
    // other nice things
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

export class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}
