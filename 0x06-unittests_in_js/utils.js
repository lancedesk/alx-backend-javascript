/**
 * Utils - Utility module containing the calculateNumber function
*/

const Utils = {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  calculateNumber (type, a, b) {
    if (type === 'SUM') {
      return roundedA + roundedB;
    }
    if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    }
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0) return 'Error';
      return roundedA / roundedB;
    }
  }
};

module.exports = Utils;
