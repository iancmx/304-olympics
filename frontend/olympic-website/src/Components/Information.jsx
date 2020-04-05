import React from "react";
import "./Main.css";
import olympic from "../olympic.jpg";
import { Link } from "react-router-dom";
import { Country, Athletes, Sports, User } from "./Information/index";

export default class Information extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "Country",
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(newMode) {
    this.setState({ mode: newMode });
  }

  render() {
    return (
      <div
        className="Information"
        style={{
          backgroundImage: `url(${olympic})`,
          minHeight: "100%",
          minWidth: "100%",
          width: "500px",
          float: "left",
          height: "500px",
          position: "relative",
          overflowY: "scroll",
        }}
      >
        <div className="Top_level_view" style={{ position: "relative" }}>
          <Link to="/main">
            <button type="button" className="btn">
              OLYMPIC 2020
            </button>
          </Link>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Country")}
          >
            {" "}
            Country{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Athletes")}
          >
            {" "}
            Athletes{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Sports")}
          >
            {" "}
            Sports & Events{" "}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.changeMode("Users")}
          >
            {" "}
            Users{" "}
          </button>
          <Link to="/main">
            <button type="button" className="btn">
              MAIN
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="btn">
              LOG OUT
            </button>
          </Link>
        </div>
        <div className="container">
          {this.state.mode === "Country" && (
            <Country containerRef={(ref) => (this.current = ref)} />
          )}
          {this.state.mode === "Athletes" && (
            <Athletes containerRef={(ref) => (this.current = ref)} />
          )}
          {this.state.mode === "Sports" && (
            <Sports containerRef={(ref) => (this.current = ref)} />
          )}
          {this.state.mode === "Users" && (
            <User containerRef={(ref) => (this.current = ref)} />
          )}
        </div>
      </div>
    );
  }
}
