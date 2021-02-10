import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import gamesStore from './stores/gamesStore';
import userStore from './stores/userStore';

const stores = {
	userStore,
	gamesStore,
};

ReactDOM.render(
	<Provider {...stores}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
