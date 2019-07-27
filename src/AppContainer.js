import { connect } from 'react-redux';
import App from './App';
import * as CryptoActions from './actions/cryptoActions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state)=>{
    return{
        appState: state,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
    	actions: bindActionCreators(CryptoActions, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)