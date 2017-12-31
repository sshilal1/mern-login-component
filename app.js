import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Button from './components/Button';
import LoginInfo from './components/LoginInfo';

class MyComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			color : 'black'
		};
	}

	getBlue() {
		axios.get('/blue')
	  .then((response) => {
	  	console.log(response);
	    this.setState({
	    	color : response.data
	    })
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	getRed() {
		axios.get('/red')
	  .then((response) => {
	    this.setState({
	    	color : response.data
	    })
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	createUser(user) {
		axios.post('/newuser', user)
		.then( (response) => {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		var style = {
			color : this.state.color,
			fontSize : "6rem"
		}

		var btnStyle = { fontSize: "3rem", "margin": "10px"};

		return (
			<div style={{padding:"100px"}}>
				<div style={style}>Settling America</div>
				<div style={{fontSize:"3rem"}}>The Game</div>
				<LoginInfo onAdd={this.createUser}/>
			</div>
		)
	}
}

ReactDOM.render(
	<MyComponent/>,
	document.getElementById('root')
);