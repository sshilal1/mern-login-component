import React from 'react';

export default class LoginInfo extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			user : '',
			password : '',
			confirm : '',
			registering : false
		}

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.signUp = this.signUp.bind(this);
  }

	handleInputChange(event) {
		const target = event.target;

		this.setState({
			[target.name] : target.value
		})
	}

	handleRegister() {
  	var entry = Object.assign({}, this.state, {});
    this.props.onAdd(entry);
  	this.setState({
  		registering : false
  	})
  }

	handleLogin(event) {
		var entry = Object.assign({}, this.state, {});
    this.props.onLogin(entry);
  }  

  signUp() {
  	this.setState({
  		registering : true
  	})
  }

	render() {

		var style = {
			padding: "10px",
			margin: "5px",
			marginLeft: 0,
			paddingLeft: 0,
			display: "inline-block",
			fontSize: "2rem",
			flex: 1
		}
		var inputStyle = {
			padding: "10px",
			margin: "5px",
			display: "inline-block",
			fontSize: "1.5rem",
			flex: 1
		}

		if (this.state.registering) {
			return (
				<div className="login">
						<div className="login-row">
							<label className="login-row_label">User Name</label>
							<input className="login-row_input" name="user" onChange={this.handleInputChange}/>
						</div><div className="login-row">
							<label className="login-row_label">Password</label>
							<input className="login-row_input" name="password" type="password" onChange={this.handleInputChange}/>
						</div><div className="login-row">
							<label className="login-row_label">Confirm Password</label>
							<input className="login-row_input" name="confirm" type="password" onChange={this.handleInputChange}/>
						</div><div className="login-row">
							<button onClick={this.handleRegister} className="login-button font" type="submit" label="Create User">Register</button>
						</div>
				</div>
			)
		}

		else {
			return (
				<div className="login">
					<div className="login-row">
						<label className="login-row_label">User Name</label>
						<input className="login-row_input" name="user" onChange={this.handleInputChange}/>
					</div><div className="login-row">
						<label className="login-row_label">Password</label>
						<input className="login-row_input" name="password" type="password" onChange={this.handleInputChange}/>
					</div><div className="login-row">
						<button onClick={this.handleLogin} className="login-button font" type="submit">Log In</button>
						<div style={{display: "flex", alignItems: "flex-end"}}
							onClick={this.signUp}>
							Not Registered? Sign up!
						</div>
					</div>
				</div>
			)
		}
	}
}