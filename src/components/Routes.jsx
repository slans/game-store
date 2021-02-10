import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './pages/Page404';
import PageGame from './pages/PageGame/PageGame';
import PageHome from './pages/PageHome/PageHome';

function Routes() {
	return (
		<Switch>
			<Route path='/' exact component={PageHome} />
			<Route path='/game/:gameId' exact component={PageGame} />
			<Page404 />
		</Switch>
	);
}

export default Routes;
