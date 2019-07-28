import {sortByTime, sortByPrice, findBestPrice} from '../utils/Utils';

export default (data)=>{
	if(!data || data.length < 1)
		throw new Error('oops');

	try {
		let profitArray = [];
		data.map((currency)=>{
			const quotesPriceSortedMaximum = sortByPrice([...currency.quotes]);
			const quotesTimeSorted =sortByTime([...currency.quotes]);
			const quotesPriceSortedMinimum = [...quotesPriceSortedMaximum].reverse();
			let bestPrice = findBestPrice(quotesPriceSortedMaximum, quotesPriceSortedMinimum, quotesTimeSorted);
			let profitableCurrency = Object.assign({}, bestPrice, {
				"currency": currency.currency,
				"date": currency.date
			})
			profitArray.push(profitableCurrency)
		});
		
		return profitArray;

	}catch(error){
		return error;
	}
}

