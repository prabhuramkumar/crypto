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
  it('should render component and all fields', () => {
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
  	const buyPrice = currencyDisplayBox.find('.currencyDisplay__box--price').at(0);
  	const sellPrice = currencyDisplayBox.find('.currencyDisplay__box--price').at(1);
  	const buyTime = currencyDisplayBox.find('.currencyDisplay__box--time').at(0);
  	const sellTime = currencyDisplayBox.find('.currencyDisplay__box--time').at(1);
  	const profit = currencyDisplayBox.find('.currencyDisplay__box--profit');
    expect(component.length).toEqual(1);
    expect(buyPrice.text()).toContain('$34.98');
    expect(sellPrice.text()).toContain('$37.01');
    expect(buyTime.text()).toContain('09:15 AM');
    expect(sellTime.text()).toContain('12:30 PM');
    expect(profit.text()).toContain('$2.03');
  });
});

