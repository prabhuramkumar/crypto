import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrencyDisplay from '../components/CurrencyDisplay';
import * as CryptoActions from '../actions/cryptoActions';

describe('currencyDisplay snapshot', () => {
	const initialState = {
	    currencies:[{
    	  "id": 1,
	      "currency": "BTC",
	      "buyValue": "34.98",
	      "sellValue": "37.01",
	      "buyTime":  "0915",
	      "sellTime": "1230",
	      "date": "20180507",
	      "profit": "2.03"
	    }],
	    appError: ''
	}
  it('should render correctly in normal mode', () => {
    const currencyDisplayBox = shallow(<CurrencyDisplay actions={CryptoActions} state={initialState} />);
  	expect(currencyDisplayBox).toMatchSnapshot();
  });
});

describe('currencyDisplay tests', () => {
  it('should render error when no data', () => {
    const currencies= [];
	const state = {
	    currencies,
	    appError: ''
	}
    const currencyDisplay = mount(<CurrencyDisplay actions={CryptoActions} state={state} />);
  	const component = currencyDisplay.find('.currencyDisplay');
  	const dislayBox = currencyDisplay.find('.currencyDisplay__box');
  	const error = currencyDisplay.find('.error__message');
    expect(component.length).toEqual(1);
    expect(error.length).toEqual(1);
    expect(dislayBox.length).toEqual(0);
  });

  it('should render component when there is data.', () => {
  	const currencies= [{
	  "id": 1,
      "currency": "BTC",
      "buyValue": "34.98",
      "sellValue": "37.01",
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507",
      "profit": "2.03"
    }]
    const state = {
	    currencies,
	    appError: ''
	}
    const currencyDisplay = mount(<CurrencyDisplay actions={CryptoActions} state={state} />);
  	const component = currencyDisplay.find('.currencyDisplay');
  	const dislayBox = currencyDisplay.find('.currencyDisplay__box');
  	const error = currencyDisplay.find('.error__message');
    expect(component.length).toEqual(1);
    expect(dislayBox.length).toEqual(1);
    expect(error.length).toEqual(0);
  });

   it('should render more component when there is more data.', () => {
  	const currencies= [{
	  "id": 1,
      "currency": "BTC",
      "buyValue": "34.98",
      "sellValue": "37.01",
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507",
      "profit": "2.03"
    },
    {
	  "id": 2,
      "currency": "BTC",
      "buyValue": "14.98",
      "sellValue": "17.01",
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507",
      "profit": "2.03"
    }];
    const state = {
	    currencies,
	    appError: ''
	}
    const currencyDisplay = mount(<CurrencyDisplay actions={CryptoActions} state={state} />);
  	const dislayBox = currencyDisplay.find('.currencyDisplay__box');
    expect(dislayBox.length).toEqual(2);
  });
});