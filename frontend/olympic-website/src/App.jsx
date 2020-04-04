import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home";
import Main from "./Components/Main";
import notFoundPage from "./Components/404";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route
              exact
              path={"/main"}
              render={(props) => (
                <Main {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Rout exact path={"/404"} Component={notFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
