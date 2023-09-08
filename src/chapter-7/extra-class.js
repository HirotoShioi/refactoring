export class Person {
  constructor(data) {
    this._name = data.name;
    this._telephoneNumber = new TelephoneNumber();
    this.officeAreaCode = data.officeAreaCode;
    this.officeNumber = data.officeNumber;
  }
  get name() {
    return this._name;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

export class TelephoneNumber {
  constructor() {}
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }
  toString() {
    return `(${this._areaCode}) ${this._number}`;
  }
}
