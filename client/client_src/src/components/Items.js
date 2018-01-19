import React, {Component} from 'react';
import axios from 'axios';
import ShoppingItem from './ShoppingItem';
class Items extends Component{
	constructor(){
		super();
		this.state = {
			items: []
		}
	}

	componentWillMount(){
		this.getItems();
	}

	getItems(){
		axios.get('http://localhost:3000/api/items')
		.then(response => {
			this.setState({items: response.data}, () =>
			{
				// console.log(this.state);
			})
		 })	
		.catch(err => console.log(err));
	}

	render(){
		const shoppingItems = this.state.items.map((item, i) => {
			return(
					<ShoppingItem key={item.id} item={item} />
				)
		})
		return	(
			<div>
				<h1>Items</h1>
				<ul className="collection">
					{shoppingItems}
				</ul>
			</div>
		)
	}
}	

export default Items;
