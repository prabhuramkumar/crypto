import React, {useEffect } from 'react';
import cryptoData from '../data/cryptoData';
import currencyAnalysis from '../logics/currencyAnalysis';
import CurrencyDisplayBox from './CurrencyDisplayBox';

const CurrencyDisplay = (props)=>{
    const {currencies, appError} = props.state;
    
	useEffect(() => {
        const result = currencyAnalysis(cryptoData);

        if(result && result.length > 0){
        	props.actions.updateCurrencies(result);
        }else {
        	props.actions.updateError(result);
        }
    }, [props.actions]);

    const generateDisplayBox = () => {
    	if(!appError && currencies.length > 0) {
            return currencies.map((currency, index)=>{
                return(
                    <CurrencyDisplayBox  currency={currency}  key={currency.id}/> 
                )
            })
        }else
            return (<p className="error__message">Some error accoured.</p>)
        }

    return(
        <div className="currencyDisplay">
          <h2 className="currencyDisplay__title">Crypto - Profitable Currencies</h2>
          <div className="currencyDisplay__boxes">
      	     {generateDisplayBox()}
          </div>
        </div>
    )
}

export default CurrencyDisplay;