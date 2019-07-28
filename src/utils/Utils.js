const sortByTime = (quotes) => {
	return quotes.sort((a, b) => {
		if(isNaN(a.time) || parseInt(a.time) > 2400)
			throw new Error('Not a valid time')

    	return a.time > b.time;
	});
}

const sortByPrice = (quotes) => {
	return quotes.sort((a, b) => {
		if(isNaN(a.price))
			throw new Error('Not a valid price')

		a = parseFloat(a.price);
		b = parseFloat(b.price);
		
    	return a < b;
	});
}

const findBestPrice = (quotesPriceSortedMaximum, quotesPriceSortedMinimum, quotesTimeSorted)=>{
	let maximumPrice = quotesPriceSortedMaximum[0], profit;
	let minimumPrice = quotesPriceSortedMinimum[0];
	let startingPrice = quotesTimeSorted[0];
	if(maximumPrice.time === startingPrice.time)
		return {"profit": 0};

	for(let i=0; i<quotesPriceSortedMaximum.length; i++){
		if(quotesPriceSortedMinimum[i].time < maximumPrice.time){
			minimumPrice = quotesPriceSortedMinimum[i];
			break;
		}
	}
	return {
      "buyValue": minimumPrice.price,
      "sellValue": maximumPrice.price,
      "buyTime":  minimumPrice.time,
      "sellTime": maximumPrice.time,
      "profit": Number(maximumPrice.price-minimumPrice.price).toFixed(2)
    }
}

export {sortByTime, sortByPrice, findBestPrice}