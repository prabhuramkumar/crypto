import {validateDate, sortByTime, sortByPrice, findBestPrice} from '../utils/logicUtils';

export default (data)=>{
	if(!data || data.length < 1)
		throw new Error('Invalid crypto data.');

	try {
		let profitArray = [];
		profitArray = data.map((currency)=>{
			const clonedVal = [...currency.quotes];
			const quotesPriceSortedMaximum = sortByPrice(clonedVal);
			const quotesPriceSortedMinimum = [...quotesPriceSortedMaximum].reverse();
			const quotesTimeSorted =sortByTime([...currency.quotes]);
			const bestPrice = findBestPrice(quotesPriceSortedMaximum, quotesPriceSortedMinimum, quotesTimeSorted);
			const profitableCurrency = Object.assign({}, bestPrice, {
				"currency": currency.currency,
				"date": validateDate(currency.date),
				"id": currency.id
			});
			return profitableCurrency
		});

		return profitArray;

	}catch(error){
		return error;
	}
}

