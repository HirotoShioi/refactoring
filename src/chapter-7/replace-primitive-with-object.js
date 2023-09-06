// 参照オブジェクト
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  get priority() {
    return this._priority;
  }
  get priorityString() {
    return this._priority.toString();
  }
  // コンストラクタにて初期化を行う際に、このsetterを呼び出される
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

// 値オブジェクト
export class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid for Priority`);
  }
  toString() {
    return this._value;
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}
