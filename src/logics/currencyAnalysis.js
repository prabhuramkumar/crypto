export default (data)=>{
	if(!data || data.length < 1){
		throw 'Error';
		return false;
	}

	try {
		return [{
	      "currency": "BTC",
	      "buyValue": 34.98,
	      "sellValue": 37.01,
	      "buyTime":  "0915",
	      "sellTime": "1230",
	      "date": "20180507"
	    }];

	}catch(e){
		throw 'Error';
	}
}