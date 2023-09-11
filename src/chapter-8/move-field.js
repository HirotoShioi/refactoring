export class Amount {
  constructor(data) {
    this._value = data;
  }
  get value() {
    return this._value;
  }
  multiply(arg) {
    return new Amount(this.value * arg);
  }
  subtract(arg) {
    return new Amount(this.value - arg.value);
  }
}

export class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(new Date());
    this._setDiscountRate(discountRate);
  }
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }
  get name() {
    return this._name;
  }
  get discountRate() {
    return this._contract.discountRate;
  }
  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
    // other nice things
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate)).value;
  }
}

export class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }
  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

export class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = new AccountType(type, interestRate);
    // assert(interestRate === this._type._interestRate);
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._type.interestRate;
  }
}

export class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}
