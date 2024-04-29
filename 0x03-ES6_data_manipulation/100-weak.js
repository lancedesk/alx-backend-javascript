/**
 * A WeakMap instance to track the number of times queryAPI is called for each endpoint.
 */

const weakMap = new WeakMap();

/**
 * Export the weakMap
 */

export { weakMap };

/**
 * Increments the count of queries for the specified endpoint in the weakMap.
 * Throws an error if the number of queries for the endpoint is >= 5.
 *
 * Parameters:
 * - endpoint: An object representing the API endpoint.
 *   Example: { protocol: 'http', name: 'getUsers' }
 *
 * Throws:
 * - Error: If the number of queries for the endpoint is >= 5.
 */

function queryAPI(endpoint) {
  // If the endpoint is already in the weakMap, increment the count by 1
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
    // If the count is >= 5, throw an error
    if (count >= 4) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the weakMap, initialize the count to 1
    weakMap.set(endpoint, 1);
  }
}

/**
 * Export the queryAPI function
 */

export { queryAPI };
