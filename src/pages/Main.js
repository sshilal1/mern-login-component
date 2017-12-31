import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '../components/Button';
import LoginInfo from '../components/LoginInfo';
import Home from './Home';

export default class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			color : '#333',
			start : false
		};
		this.login = this.login.bind(this);
	}

	createUser(user) {
		axios.post('http://localhost:4000/newuser', user)
		.then( (response) => {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	login(info) {
		axios.post('http://localhost:4000/login', info)
		.then( (response) => {
			console.log(response.data);
			if (response.data.stat) {
				this.setState({
					start: true
				})
			}
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

		if (!this.state.start) {
			return (
				<div style={{padding:"100px"}}>
					<div style={style}>Settling America</div>
					<div style={{fontSize:"3rem"}}>The Game</div>
					<LoginInfo onAdd={this.createUser} onLogin={this.login}/>
				</div>
			)
		}
		else {
			return (
				<div style={{padding:"100px"}}>
					<Home/>
				</div>
			)
		}
	}
}