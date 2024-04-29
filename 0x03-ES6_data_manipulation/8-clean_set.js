/**
 * Cleans a Set by removing elements that do not start with a specified string.
 *
 * Parameters:
 * - set: The Set to clean.
 * - startString: The string that elements should start with to be included.
 *
 * Returns:
 * - A string containing cleaned elements joined by '-'.
 * - An empty string if set or startString is invalid or if no elements match the criteria.
 */

function cleanSet(set, startString) {
  // Check if set and startString are valid and of the correct types
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // Iterate over the set values
  for (const value of set.values()) {
    // Check if value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Remove startString from value and add to parts if not empty and different from value
      const valueSubStr = value.substring(startString.length);
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }

  // Join cleaned parts with '-'
  return parts.join('-');
}

export default cleanSet;
