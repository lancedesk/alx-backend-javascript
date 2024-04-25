/**
 * Implements Car class:
 */
const carSymbol = Symbol('car');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    const clonedCar = new Car();
    Object.getOwnPropertySymbols(this).forEach((symbol) => {
      clonedCar[symbol] = this[symbol];
    });
    return clonedCar;
  }
}

export default Car;
