import currencyAnalysis from '../logics/currencyAnalysis';
import cryptoData from '../data/cryptoData';

describe('currencyAnalysis test - Testing error cases', () => {
  it('should return false if data is not present', () => {
    expect(() => {
      currencyAnalysis(null)
    }).toThrow();
  });

  it('should return false if data has not currencies in it', () => {
    expect(() => {
      currencyAnalysis([])
    }).toThrow();
  });

  it('should trow error if not valid price', () => {
    const cryptoData = [{
    "currency":"BTC",
    "date": "20180507",
    "quotes":
      [{"time":"0915", "price":"34.98"},
      {"time":"1045", "price":"36.13"},
      {"time":"1230", "price":"37.01"},
      {"time":"1400", "price":"ert"},
      {"time":"1530", "price":"33.56"}]
    }]
    let result = currencyAnalysis(cryptoData);
    expect(result.message).toEqual('Not a valid price');
  });

  it('should trow error if not valid time', () => {
    const cryptoData = [{
    "currency":"BTC",
    "date": "20180507",
    "quotes":
      [{"time":"0915", "price":"34.98"},
      {"time":"1045", "price":"36.13"},
      {"time":"1230", "price":"37.01"},
      {"time":"ert", "price":"34.04"},
      {"time":"1530", "price":"33.56"}]
    }]
    let result = currencyAnalysis(cryptoData);
    expect(result.message).toEqual('Not a valid time');
  });
});

describe('currencyAnalysis test - Testing valid cases', () => {
  it('should return maximumProfit array', () => {
    const cryptoData = [{
    "currency":"BTC",
    "date": "20180507",
    "quotes":
      [{"time":"0915", "price":"34.98"},
      {"time":"1045", "price":"36.13"},
      {"time":"1230", "price":"37.01"},
      {"time":"1400", "price":"35.98"},
      {"time":"1530", "price":"33.56"}]
    }]
    const cryptoMaximumProfit = [{
      "currency": "BTC",
      "buyValue": "34.98",
      "sellValue": "37.01",
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507",
      "profit": "2.03"
    }];
    expect(currencyAnalysis(cryptoData)).toEqual(cryptoMaximumProfit);
  });

  it('should return no Profit day', () => {
    const cryptoData = [{
    "currency":"BTC",
    "date": "20180507",
    "quotes":
      [{"time":"0915", "price":"10.00"},
      {"time":"1045", "price":"8.00"},
      {"time":"1230", "price":"7.00"},
      {"time":"1400", "price":"5.00"},
      {"time":"1530", "price":"4.00"}]
    }]
    const cryptoMaximumProfit = [{
      "currency": "BTC",
      "profit": 0,
      "date": "20180507"
    }];
    expect(currencyAnalysis(cryptoData)).toEqual(cryptoMaximumProfit);
  });
});