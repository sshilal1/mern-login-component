import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

	render() {

		var style = {
			color : this.state.color,
			fontSize : "5rem"
		}

		var btnStyle = { fontSize: "3rem", "margin": "10px"};

		return (
			<div style={{padding:"100px"}}>
				<div style={style}>Settling America</div>
				<h1>A game for our Country</h1>
				<button style={btnStyle} onClick={this.getBlue.bind(this)}>Blue</button>
				<button style={btnStyle} onClick={this.getRed.bind(this)}>Red</button>
			</div>
		)
	}
}

ReactDOM.render(
	<MyComponent/>,
	document.getElementById('root')
);