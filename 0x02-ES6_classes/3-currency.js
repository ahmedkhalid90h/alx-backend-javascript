/**
 * @param {string} code
 * @param {string} name
 * @method displayFullCurrency
 * @returns {string}
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
