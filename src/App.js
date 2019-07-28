import React, { Component, lazy, Suspense } from 'react';
import './App.scss';
import ErrorBoundary  from './components/ErrorBoundary';
const CurrencyDisplay = lazy(() => import('./components/CurrencyDisplay'));

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render(){
		console.log("props", this.props)
	  const {actions, appState} = this.props;
	  return (
	    <div className="app">
	    	<ErrorBoundary>
	    		<Suspense fallback={<div>Loading...</div>}>
	      			<CurrencyDisplay actions={actions} currencies={appState.currencies}/>
	      		</Suspense>
	      	</ErrorBoundary>
	    </div>
	  )
	};
}


export default App;
