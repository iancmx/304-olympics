import React from "react";
import "./App.scss";
import { Login, Register } from "./Components/Login/index";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoginActive: true,	
		}
	}

	changeState(){
		const {isLoginActive} = this.state;
		if (isLoginActive) {
			this.sideButton.classList.remove("right");
			this.sideButton.classList.add("left");
		} else {
			this.sideButton.classList.remove("left");
			this.sideButton.classList.add("right");
		}

		this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}));
	}

	render() {
		const { isLoginActive } = this.state;
		const current = isLoginActive ? "Register" : "Login";
		const currentActive = isLoginActive ? "Login" : "Register";
		return (
			<div className="App">
				<div className="login">
					<div className="container"> 
						{isLoginActive && <Login containerRef={(ref)=>this.current = ref}/>}
						{!isLoginActive && <Register containerRef={(ref)=>this.current = ref}/>}
					</div>
					<SideButton current={current} containerRef={ref => this.sideButton = ref} onClick={this.changeState.bind(this)}/>
				</div>
			</div>
		);
	}
}

const SideButton = props => {
	return (
		<div className="side-button" ref={props.containerRef} onClick={props.onClick}>
			<div className="inner-container">
				<div className="text">{props.current}</div>
			</div>
		</div>
	)
}

export default App;