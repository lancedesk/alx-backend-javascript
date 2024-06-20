const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('promise resolves with success and value', async function () {
    try {
      const response = await getPaymentTokenFromAPI(true);
      assert.deepStrictEqual(response, {
        data: 'Successful response from the API',
      });
    } catch (error) {
      assert.fail(error);
    }
  });
});
