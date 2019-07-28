import React, {useEffect } from 'react';
import cryptoData from '../data/cryptoData';
import currencyAnalysis from '../logics/currencyAnalysis';
import CurrencyDisplayBox from './CurrencyDisplayBox';

const CurrencyDisplay = (props)=>{
	useEffect(() => {
        const result = currencyAnalysis(cryptoData);
        if(result && result.length > 0){
        	props.actions.updateCurrencies(result);
        }else {
        	props.actions.updateError(result);
        }
    });

    const generateDisplayBox = () => {
    	return props.currencies.length ?
        (  
            props.currencies.map(currency=>{
                return(
                   <CurrencyDisplayBox key={currency.id} currency={currency}/> 
                )
            })
        ):
        (
            <p>Empty currencies.</p>
        )
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