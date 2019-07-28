import React from 'react';
import {convertToAMPM, formatDate} from '../utils/displayUtils';

const CurrencyDisplayBox = (props)=>{
    return(
        <div id={props.key} className="currencyDisplay__box">
            <div className="currencyDisplay__box--date">{formatDate(props.currency.date)}</div>
            <div className="currencyDisplay__box--name">{props.currency.currency}</div>
            <div className="currencyDisplay__box--section">
                <div>
                    <div className="currencyDisplay__box--transaction">Buy</div>
                    <div className="currencyDisplay__box--price">${props.currency.buyValue}</div>
                    <div className="currencyDisplay__box--time">{convertToAMPM(props.currency.buyTime)}</div>
                </div>
                <div>
                    <div className="currencyDisplay__box--transaction">Sell</div>
                    <div className="currencyDisplay__box--price">${props.currency.sellValue}</div>
                    <div className="currencyDisplay__box--time">{convertToAMPM(props.currency.sellTime)}</div>
                </div>
            </div>
            <div className="currencyDisplay__box--profit">${props.currency.profit}</div>
        </div>
    )
}

export default CurrencyDisplayBox;