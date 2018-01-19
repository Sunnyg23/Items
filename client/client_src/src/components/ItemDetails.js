
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ItemDetails extends Component{
	constructor(props){
		super(props);
		this.state = {
			details:''
		}
	}

	componentWillMount(){
		this.getItem();
	}

	getItem(){
		let itemId = this.props.match.params.id;
		axios.get(`http://localhost:3000/api/items/${itemId}`)
		.then(response => {
			this.setState({details: response.data}, () =>
			{
				console.log(this.state);
			})
		 })	
		.catch(err => console.log(err));
	}

	OnDelete(){
		 let itemId = this.state.details.id;
		axios.delete(`http://localhost:3000/api/items/${itemId}`)
			.then(response => {
				this.props.history.push('/');	
			}).catch(err => console.log(err));

	}


	render(){
		return (
			<div>
			<br />
			<Link className="btn grey" to="/">Back</Link>
				<h1>{this.state.details.name}</h1>
				<Link className="btn" to={`/items/edit/${this.state.details.id}`}>Edit</Link>

				<button OnClick ={this.OnDelete.bind(this)} className="btn red right">Delete</button>
			</div>
			)
		}
}

export default ItemDetails;