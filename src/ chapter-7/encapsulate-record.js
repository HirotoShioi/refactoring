import _ from 'lodash';
export class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get country() {
    return this._country;
  }
  set country(arg) {
    this._country = arg;
  }
}

export class CustomerData {
  constructor(data) {
    this._data = data;
  }
  setUsage(customerId, year, month, amount) {
    this._data[customerId].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}
