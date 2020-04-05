import React from "react";

export class Athletes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  usernameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

	handleSubmit(){
		const username = this.state.username;
		const password = this.state.password;

		if (!username) {
			alert("Please enter your username!");
		} else if (!password) {
			alert("Please enter your password!");
		} else {
			fetch('http://localhost:3001/user/login', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					login: username,
					password: password
				})
			})
			.then(response => 
    			response.json().then(data => ({
        			data: data,
        			status: response.status,
    			}))
			).then(res => {
    			console.log(res.status, res.data);
    			var data = res.data[0];
    			if(data){
    				this.props.handleSuccessfulAuthentication(data);
    			}
			})
			.catch(error => {console.log(error)});
		}
	}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <h1> Test 2 </h1>
      </div>
    );
  }
}
