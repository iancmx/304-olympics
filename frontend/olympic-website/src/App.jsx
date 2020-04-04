import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home"

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path={"/"} component = { Home } />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;