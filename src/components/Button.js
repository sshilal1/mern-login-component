import React from 'react';

export default class Button extends React.Component {
	render() {
		var btnStyle = { fontSize: "3rem", "margin": "10px"};
		return (
			<div>
				<button style={btnStyle}>Ok</button>
			</div>
		)
	}
}