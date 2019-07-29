import indexReducer from '../indexReducer';

const initialState = {
    currencies:[],
    appError: ''
}
  
describe('Reducer test - Testing initialState', () => {
  it('should return the initial state', () => {
    expect(indexReducer(undefined, {})).toEqual(initialState);
  });

  it('should return error if currencyAnalaysis failed', () => {
    const appError = {
     error: true,
     errorMessage: 'Currency Analysis Logic failed'
    };
    let actions = {
      type: 'UPDATE_ERROR',
      val: appError
    }
    let newState = indexReducer(initialState, actions);
    expect(newState.currencies.length).toEqual(0);
    expect(newState.appError.error).toEqual(true);
  });

  it('should update the profitableCurrencies to state', () => {
    const profitableCurrencies = [{
      "currency": "BTC",
      "buyValue": 34.98,
      "sellValue": 37.01,
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507"
    }];
    let actions = {
      type: 'UPDATE_CURRENCIES',
      val: profitableCurrencies
    }
    let newState = indexReducer(initialState, actions);
    expect(newState.currencies[0]).toEqual(profitableCurrencies[0]);
  });
});