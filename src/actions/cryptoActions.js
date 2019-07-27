export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export const updateCurrencies= (val)=>{
    return{
        type: UPDATE_CURRENCIES,
        val
    }
}

export const updateError= (val)=>{
    return{
        type: UPDATE_ERROR,
        val
    }
}


