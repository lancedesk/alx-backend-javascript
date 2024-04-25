/**
 * Implements HolbertonClass class:
 */
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size attribute
  get size() {
    return this._size;
  }

  // Getter for location attribute
  get location() {
    return this._location;
  }

  // Casting the class into a Number returns the size
  valueOf() {
    return this._size;
  }

  // Casting the class into a String returns the location
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
