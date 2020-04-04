import React from "react";

export default class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Main"><h1>{this.props.loggedInStatus}</h1></div>
		);
	}
}
