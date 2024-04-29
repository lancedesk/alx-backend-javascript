/**
 * A WeakMap instance to track the number of times queryAPI is called for each endpoint.
 */
export const weakMap = new WeakMap();

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
  // Check if the endpoint is already tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // Check if the count for the endpoint is >= 5
  if (weakMap.get(endpoint) >= 5) {
    // If yes, throw an error
    throw new Error('Endpoint load is high');
  }
}

export default queryAPI;
