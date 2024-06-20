const Utils = require('./utils');

/**
 * sendPaymentRequestToApi - Sends a payment request to the API
 * @totalAmount: total amount to be paid
 * @totalShipping: total shipping cost
*/

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
