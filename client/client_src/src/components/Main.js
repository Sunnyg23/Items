import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Items from './Items';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Items} />
		</Switch>
	</main>
)

export default Main;
