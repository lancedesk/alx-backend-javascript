/**
 * Implements EVCar class:
 */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range attribute
  get range() {
    return this._range;
  }

  // Method to clone the car
  cloneCar() {
    const Species = Car[Symbol.species];
    return new Species();
  }
}

export default EVCar;
