import React from 'react';
import {convertToAMPM, formatDate} from '../utils/displayUtils';

const CurrencyDisplayBox = (props)=>{
    return(
        <div className="currencyDisplay__box" >
            <div className="currencyDisplay__box--date">{formatDate(props.currency.date)}</div>
            <div className="currencyDisplay__box--name">{props.currency.currency}</div>
            <div className="currencyDisplay__box--section">
                <div>
                    <div className="currencyDisplay__box--transaction">Buy</div>
                    <div className="currencyDisplay__box--price">${props.currency.buyValue}</div>
                    <div className="currencyDisplay__box--time">{props.currency.buyTime ? convertToAMPM(props.currency.buyTime) : 'N/A'}</div>
                </div>
                <div>
                    <div className="currencyDisplay__box--transaction">Sell</div>
                    <div className="currencyDisplay__box--price">${props.currency.sellValue}</div>
                    <div className="currencyDisplay__box--time">{props.currency.sellTime ? convertToAMPM(props.currency.sellTime): 'N/A'}</div>
                </div>
            </div>
            <div className="currencyDisplay__box--profit">Profit: ${props.currency.profit}</div>
         </div>
    )
}

export default CurrencyDisplayBox;