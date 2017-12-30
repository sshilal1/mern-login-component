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
			color : this.state.color
		}

		return (
			<div>
				<div style={style}>Hello World</div>
				<button onClick={this.getBlue.bind(this)}>Blue</button>
				<button onClick={this.getRed.bind(this)}>Red</button>
			</div>
		)
	}
}

ReactDOM.render(
	<MyComponent/>,
	document.getElementById('root')
);