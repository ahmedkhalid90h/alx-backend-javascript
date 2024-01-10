export default class Car {
  /**
   * @param {string} brand
   * @param {string} motor
   * @param {string} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * @returns {string} - new Car instance
   */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
