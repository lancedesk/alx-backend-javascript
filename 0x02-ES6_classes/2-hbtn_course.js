/**
 * Implements HolbertonCourse class:
 */
class HolbertonCourse {
  /**
   * Implements HolbertonCourse class:.
   * name - Course name.
   * length - Period of course in months.
   * students - Students enrolled in the cours.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}

export default HolbertonCourse;
