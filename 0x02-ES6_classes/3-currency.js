/**
 * Implements Currency class:
 */
class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for code attribute
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
