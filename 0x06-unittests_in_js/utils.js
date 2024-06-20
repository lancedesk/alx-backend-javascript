/**
 * Utils - Utility module containing the calculateNumber function
*/

const Utils = {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  calculateNumber(type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        if (Math.round(b) === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        break;
    }
  },
};

module.exports = Utils;
