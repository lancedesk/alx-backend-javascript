/**
 * Creates a groceries list as a Map.
 *
 * Returns:
 * - A Map representing a groceries list with items as keys and quantities as values.
 */

function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}

export default groceriesList;
