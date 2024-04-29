/**
 * Creates an Int8 typed array with specified length, setting a value at a specific position.
 *
 * Parameters:
 * - length: The length of the Int8 typed array.
 * - position: The position at which to set the value.
 * - value: The value to set at the specified position.
 *
 * Returns:
 * - An Int8 typed array with the specified length and value set at the specified position.
 *
 * Throws:
 * - Error: If the position is outside the range of the array.
 */

function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}

export default createInt8TypedArray;
