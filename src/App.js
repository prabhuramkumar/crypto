import React, { lazy, Suspense } from 'react';
import './App.scss';
const CurrencyDisplay = lazy(() => import('./components/CurrencyDisplay'));

const App = (props) => {
	const {actions, appState} = props;

	  return (
	    <div className="app">
    		<Suspense fallback={<div>Loading...</div>}>
      			<CurrencyDisplay actions={actions} state={appState} />
      		</Suspense>
	    </div>
	  )
}

export default App;
