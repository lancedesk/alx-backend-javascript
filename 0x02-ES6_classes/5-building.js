/**
 * Implements Building class:
 */
class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft attribute
  set sqft(value) {
    this._sqft = value;
  }
}

export default Building;
