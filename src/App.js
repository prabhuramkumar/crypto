import React, { lazy, Suspense } from 'react';
import './App.scss';
import ErrorBoundary  from './components/ErrorBoundary';
const CurrencyDisplay = lazy(() => import('./components/CurrencyDisplay'));

const App = (props) => {
	const {actions, appState} = props;

	  return (
	  	<ErrorBoundary>
		    <div className="app">
	    		<Suspense fallback={<div>Loading...</div>}>
	      			<CurrencyDisplay actions={actions} state={appState} />
	      		</Suspense>
		    </div>
	    </ErrorBoundary>
	  )
}

export default App;
