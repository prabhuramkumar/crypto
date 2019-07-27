import currencyAnalysis from '../logics/currencyAnalysis';
import cryptoData from '../data/cryptoData';

describe('currencyAnalysis test - Testing logic of retiriving profitable currencies', () => {
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

  it('should return false if data has missing values to perform analysis', () => {
    const cryptoData = [{
    "currency":"BTC",
    "quotes":
      [{"time":"0915", "price":"34.98"},
      {"time":"1045", "price":"36.13"},
      {"time":"1230", "price":"37.01"},
      {"time":"1400", "price":"35.98"},
      {"time":"1530", "price":"33.56"}]
    }]
    expect(() => {
      currencyAnalysis(cryptoData)
    }).toThrow();
  });
});