/**
 * Checks if all values from an array are present in a Set.
 *
 * Parameters:
 * - set: The Set to check against.
 * - array: An array containing values to check.
 *
 * Returns:
 * - true if all values from the array are present in the Set, otherwise false.
 */

function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

export default hasValuesFromArray;
