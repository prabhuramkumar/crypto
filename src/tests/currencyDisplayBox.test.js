import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrencyDisplayBox from '../components/CurrencyDisplayBox';
describe('currencyDisplayBox', () => {
  it('should render correctly in normal mode', () => {
  	const currency= {
      "currency": "BTC",
      "buyValue": "34.98",
      "sellValue": "37.01",
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507",
      "profit": "2.03"
    }
    const currencyDisplayBox = shallow(<CurrencyDisplayBox currency={currency}  key={currency.id} />);
  	expect(currencyDisplayBox).toMatchSnapshot();
  });
});

describe('currencyDisplayBox', () => {
  it('should render correctly in "debug" mode', () => {
  	const currency= {
      "currency": "BTC",
      "buyValue": "34.98",
      "sellValue": "37.01",
      "buyTime":  "0915",
      "sellTime": "1230",
      "date": "20180507",
      "profit": "2.03"
    }
    const currencyDisplayBox = shallow(<CurrencyDisplayBox currency={currency}  key={currency.id} />);
  	const component = currencyDisplayBox.find('.currencyDisplay__box');
  	const price = currencyDisplayBox.find('.currencyDisplay__box--price');
  	const time = currencyDisplayBox.find('.currencyDisplay__box--time');
  	const profit = currencyDisplayBox.find('.currencyDisplay__box--profit');
    expect(component.length).toEqual(1);
    expect(price[0].text()).toEqual('$34.98');
    expect(price[1].text()).toEqual('$37.01');
    expect(time[0].text()).toEqual('09:15 AM');
    expect(time[1].text()).toEqual('12:30 PM');
    expect(profit.text()).toEqual('$2.03');
  });
});

