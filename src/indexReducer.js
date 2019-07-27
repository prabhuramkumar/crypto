const initialState = {
    currencies:[]
}

const indexReducer= (state = initialState, action)=>{
	switch(action.type) {
		case 'UPDATE_CURRENCIES':
			return Object.assign({},
                state,
                {currencies: action.val}
            )

		default:
	    	return state;
    }

}
export default indexReducer;