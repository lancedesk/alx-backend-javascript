const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should use the calculateNumber method of Utils', function() {
    // Spy on the specific method
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy
    spy.restore();
  });
});
