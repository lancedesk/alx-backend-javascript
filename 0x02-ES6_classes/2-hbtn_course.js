/**
 * Implements HolbertonCourse class:
 */
class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter and setter for length attribute
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter and setter for students attribute
  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}

export default HolbertonCourse;
