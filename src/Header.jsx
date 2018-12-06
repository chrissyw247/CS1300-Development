import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        	<div> 
	        	<div class = "title-container"> 
		        	Find your {this.props.name}!
	        	</div>
	        	<div class = "intro-container">
	        		Search for your movies by toggling the different filters. Hit the Reset button to set the filters back to default
	        	</div>
        	</div>
        );
    }
}

export default Header;
