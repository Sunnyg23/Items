
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddItem extends Component{
	addItem(newItem){
		axios.request({
			method:'post',
			url: 'http://localhost:3000/api/items',
			data: newItem
		}).then(response => {
			this.props.history.push('/');
		}).catch(err => console.log(err));
}

	onSubmit(e){
		const newItem = {
			name: this.refs.name.value
		}
		this.addItem(newItem);
		e.preventDefault();
	}

	render(){
		return (
			<div>
			<br />
			<Link className="btn grey" to="/">Back</Link>
			<h1>add item</h1> 
			<form onSubmit={this.onSubmit.bind(this)}>
				<div className="input-field">
					<input type="text" name="name" ref="name" />
					<label htmlFor="name">Name</label>
				</div>
				<input type="submit" value="Add" className="btn" />
			</form>
			</div>
			)
		}
}

export default AddItem;