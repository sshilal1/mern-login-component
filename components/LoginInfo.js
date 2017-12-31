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
			fontSize: "1rem",
			flex: 1
		}

		if (this.state.registering) {
			return (
				<div style={{width:"75%", display:"flex", flexDirection:"column", paddingTop:"100px"}}>
						<div style={{display:"flex"}}>
							<label style={style}>User Name</label>
							<input style={inputStyle} name="user" onChange={this.handleInputChange}/>
						</div><div style={{display:"flex"}}>
							<label style={style}>Password</label>
							<input style={inputStyle} name="password" type="password" onChange={this.handleInputChange}/>
						</div><div style={{display:"flex"}}>
							<label style={style}>Confirm Password</label>
							<input style={inputStyle} name="confirm" type="password" onChange={this.handleInputChange}/>
						</div>
						<button onClick={this.handleRegister} style={style} type="submit" label="Create User">Register</button>
				</div>
			)
		}

		else {
			return (
				<div style={{width:"75%", display:"flex", flexDirection:"column", paddingTop:"100px"}}>
					<div style={{display:"flex"}}>
						<label style={style}>User Name</label>
						<input style={inputStyle} name="user" onChange={this.handleInputChange}/>
					</div><div style={{display:"flex"}}>
						<label style={style}>Password</label>
						<input style={inputStyle} name="password" type="password" onChange={this.handleInputChange}/>
					</div>
					<button onClick={this.handleLogin} style={style} type="submit">Log In</button>
					<div style={{display:"flex"}} onClick={this.signUp}>
						Not Registered? Sign up!
					</div>
				</div>
			)
		}
	}
}