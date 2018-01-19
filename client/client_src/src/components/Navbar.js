import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
	render(){
		return	(
			<div>
				<nav className="blue darken-3">
    				<div className="nav-wrapper">
      					<a href="/" className="brand-logo">Shopping List
  						</a>
      					<a href="#" data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i>
      					</a>
      					<ul className="right hide-on-small-only">
        					<li><Link to="/"><i class="fa fa-users"></i>Items</Link></li>
      					</ul>
      					<ul className="side-nav" id="main-menu">
      						<li><Link to="/"><i class="fa fa-users"></i>Items</Link></li>
      						<li><Link to="/"><i class="fa fa-plus"></i>Add Items</Link></li>


        			
      					</ul>
    				</div>
    			</nav>
			</div>
		)
	}
}	

export default Navbar;
