const initialState = {
    currencies:[],
    appError: ''
}

const indexReducer= (state = initialState, action)=>{
	switch(action.type) {
		case 'UPDATE_CURRENCIES':
			return Object.assign({},
                state,
                {currencies: action.val}
            )
            
        case 'UPDATE_ERROR':
			return Object.assign({},
                state,
                {appError: action.val}
            )

		default:
	    	return state;
    }

}
export default indexReducer;