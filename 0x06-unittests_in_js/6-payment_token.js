/**
 * getPaymentTokenFromAPI - Simulates an API call for payment token
 * @success: boolean indicating whether to simulate a successful response
 * Returns a promise that resolves with
 * {data: 'Successful response from the API'} if success is true
*/

const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
