const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and return 10', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    const consoleSpy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);
    
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');
    
    stub.restore();
    consoleSpy.restore();
  });
});
