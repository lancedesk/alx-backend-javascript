/**
 * calculateNumber - Rounds two numbers and performs an operation
 * @type: the type of operation (SUM, SUBTRACT, DIVIDE)
 * @a: first number
 * @b: second number
 *
 * Return: the result of the operation or 'Error' if division by zero
*/

function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

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
}

module.exports = calculateNumber;
