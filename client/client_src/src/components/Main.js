import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Items from './Items';
import ItemDetails from './ItemDetails';
import AddItem from './AddItem';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Items} />
			<Route exact path= '/items/add' component={AddItem} />
			<Route exact path= '/items/:id' component={ItemDetails} />
		</Switch>
	</main>
)

export default Main;
