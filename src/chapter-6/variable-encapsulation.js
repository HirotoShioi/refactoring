let defaultOwnerData = { firstName: 'Martin', lastName: 'Fowler' };

export const defaultOwner = () => {
  return new Person(defaultOwnerData);
};

export const setDefaultOwner = (arg) => {
  defaultOwnerData = new Person(arg);
};

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}
