/**
 * Updates unique items in a Map.
 *
 * Parameters:
 * - map: The Map to update.
 *
 * Throws:
 * - Error: If the input is not a Map.
 */

function updateUniqueItems(map) {
  // Check if input is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map entries
  map.forEach((value, key) => {
    // If value is 1, set it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  });
}

export default updateUniqueItems;
