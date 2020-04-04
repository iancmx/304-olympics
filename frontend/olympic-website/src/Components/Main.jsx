import React from "react";
import olympic from "../olympic1.jpg";
import ReactDOM from "react-dom";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is by default an object
      query1s: [],
      query2s: [],
      query3s: [],
      query4s: [],
      query5s: [],
      query6s: [],
      isLoaded1: false,
      isLoaded2: false,
      isLoaded3: false,
      isLoaded4: false,
      isLoaded5: false,
      isLoaded6: false,
    };
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView(0, 0);
  }
  queryHandler = (query) => {
    console.log(query);
    var path;
    switch (query) {
      case "query1":
        path = "http://localhost:3001/db/country/oneGoldMin";
        break;
      case "query2":
        path = "http://localhost:3001/db/participant/getCountries";
        break;
      case "query3":
        path = "http://localhost:3001/db/participant/hatachiSport";
        break;
      case "query4":
        path = "http://localhost:3001/db/country/mostGoldMedals";
        break;
      case "query5":
        path = "http://localhost:3001/db/athlete/numAthleteAgeCountry";
        break;
      case "query6":
        path = "http://localhost:3001/db/country/participateAllSports";
        break;
      default:
        return;
    }

    fetch(path, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        switch (query) {
          case "query1":
            this.setState({
              isLoaded1: true,
              query1s: json,
            });
            break;
          case "query2":
            this.setState({
              isLoaded2: true,
              query2s: json,
            });
            break;
          case "query3":
            this.setState({
              isLoaded3: true,
              query3s: json,
            });
            break;
          case "query4":
            this.setState({
              isLoaded4: true,
              query4s: json,
            });
            break;
          case "query5":
            this.setState({
              isLoaded5: true,
              query5s: json,
            });
            break;
          case "query6":
            this.setState({
              isLoaded6: true,
              query6s: json,
            });
            break;
        }
        console.log("the json", json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderTable1() {
    var { isLoaded1, query1s } = this.state;

    if (!isLoaded1)
      return (
        <tr>
          <td>No Data...</td>
        </tr>
      );
    // return (
    //   <div className="App">
    //     <ul>
    //       {query1s.map((row) => (
    //         <li key={row.country_name}>
    //           Country: {row.country_name} | Gold Medal: {row.gold_medal_count}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
    return query1s.map((row, index) => {
      const { country_name, gold_medal_count } = row; //destructuring
      return (
        <tr key={country_name}>
          <td>{country_name}</td>
          <td>{gold_medal_count}</td>
        </tr>
      );
    });
  }
  renderTable2() {
    var { isLoaded2, query2s } = this.state;

    if (!isLoaded2)
      return (
        <tr>
          <td>No Data...</td>
        </tr>
      );
    // return (
    //   <div className="App" style={{ overflow: "auto" }}>
    //     <ul>
    //       {query2s.map((row) => (
    //         <li key={row.name + row.country}>
    //           Name: {row.name} | Country: {row.country}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
    return query2s.map((row, index) => {
      const { name, country } = row; //destructuring
      return (
        <tr key={name + country}>
          <td>{name}</td>
          <td>{country}</td>
        </tr>
      );
    });
  }
  renderTable3() {
    var { isLoaded3, query3s } = this.state;
    if (!isLoaded3)
      return (
        <tr>
          <td>No Data...</td>
        </tr>
      );
    // return (
    //   <div className="App">
    //     <ul>
    //       {query3s.map((row) => (
    //         <li key={row.name + row.age + row.sport}>
    //           Name: {row.name} | Age: {row.age} | Sport: {row.sport} | Country:{" "}
    //           {row.country}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
    return query3s.map((row, index) => {
      const { name, age, sport, country } = row; //destructuring
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{age}</td>
          <td>{sport}</td>
          <td>{country}</td>
        </tr>
      );
    });
  }
  renderTable4() {
    var { isLoaded4, query4s } = this.state;

    if (!isLoaded4)
      return (
        <tr>
          <td>No Data...</td>
        </tr>
      );
    // return (
    //   <div className="App">
    //     <ul>
    //       {query4s.map((row) => (
    //         <li key={row.country_name}>
    //           Name: {row.country_name} | Gold Medal: {row.gold_medal_count}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
    return query4s.map((row, index) => {
      const { country_name, gold_medal_count } = row; //destructuring
      return (
        <tr key={country_name}>
          <td>{country_name}</td>
          <td>{gold_medal_count}</td>
        </tr>
      );
    });
  }
  renderTable5() {
    var { isLoaded5, query5s } = this.state;

    if (!isLoaded5)
      return (
        <tr>
          <td>No Data...</td>
        </tr>
      );
    // return (
    //   <div className="App">
    //     <ul>
    //       {query5s.map((row) => (
    //         <li key={row.country}>
    //           Country: {row.country} | # of Athletes: {row.number_of_athletes} |
    //           Average Age: {row.average}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
    return query5s.map((row, index) => {
      const { country, number_of_athletes, average } = row; //destructuring
      return (
        <tr key={country}>
          <td>{country}</td>
          <td>{number_of_athletes}</td>
          <td>{average}</td>
        </tr>
      );
    });
  }
  renderTable6() {
    var { isLoaded6, query6s } = this.state;

    if (!isLoaded6)
      return (
        <tr>
          <td>No Data...</td>
        </tr>
      );
    // return (
    //   <div className="App">
    //     <ul>
    //       {query6s.map((row) => (
    //         <li key={row.nationality}>Country: {row.nationality}</li>
    //       ))}
    //     </ul>
    //   </div>
    // );
    return query6s.map((row, index) => {
      const { nationality } = row; //destructuring
      return (
        <tr key={nationality}>
          <td>{nationality}</td>
        </tr>
      );
    });
  }
  renderTableHeader = (query) => {
    var isLoaded;
    var querys;
    switch (query) {
      case "query1":
        isLoaded = this.state.isLoaded1;
        querys = this.state.query1s;
        break;
      case "query2":
        isLoaded = this.state.isLoaded2;
        querys = this.state.query2s;
        break;
      case "query3":
        isLoaded = this.state.isLoaded3;
        querys = this.state.query3s;
        break;
      case "query4":
        isLoaded = this.state.isLoaded4;
        querys = this.state.query4s;
        break;
      case "query5":
        isLoaded = this.state.isLoaded5;
        querys = this.state.query5s;
        break;
      case "query6":
        isLoaded = this.state.isLoaded6;
        querys = this.state.query6s;
        break;
    }

    if (!isLoaded) return <th></th>;
    let header = Object.keys(querys[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  render() {
    if (this.props.loggedInStatus === "NOT_LOGGED_IN")
      return (
        <div
          className="Main"
          style={{
            backgroundImage: `url(${olympic})`,
            minHeight: "100%",
            minWidth: "100%",
          }}
        >
          <h1>OLYMPIC 2020</h1>
          <h1>{this.props.loggedInStatus}</h1>
        </div>
      );
    //Main Page
    return (
      <div
        className="Main"
        style={{
          backgroundImage: `url(${olympic})`,
          minHeight: "100%",
          minWidth: "100%",
          border: "1px solid red",
          width: "500px",
          float: "left",
          height: "500px",
          position: "relative",
          overflowY: "scroll",
        }}
      >
        <h1>OLYMPIC 2020</h1>
        <div>
          <span>Countries with gold medels </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query1")}
          >
            Query
          </button>
          <table id="table1">
            <tbody>
              <tr>{this.renderTableHeader("query1")}</tr>
              {this.renderTable1()}
            </tbody>
          </table>
        </div>
        <div>
          <span> Athletes' Nationality</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query2")}
          >
            Query
          </button>
          <table id="table2">
            <tbody>
              <tr>{this.renderTableHeader("query2")}</tr>
              {this.renderTable2()}
            </tbody>
          </table>
        </div>
        <div>
          <span> Athletes' in the age 20-30</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query3")}
          >
            Query
          </button>
          <table id="table3">
            <tbody>
              <tr>{this.renderTableHeader("query3")}</tr>
              {this.renderTable3()}
            </tbody>
          </table>
        </div>
        <div>
          <span> Countries with most Gold Medal</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query4")}
          >
            Query
          </button>
          <table id="table4">
            <tbody>
              <tr>{this.renderTableHeader("query4")}</tr>
              {this.renderTable4()}
            </tbody>
          </table>
        </div>
        <div>
          <span>Each country's number of athletes</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query5")}
          >
            Query
          </button>
          <table id="table5">
            <tbody>
              <tr>{this.renderTableHeader("query5")}</tr>
              {this.renderTable5()}
            </tbody>
          </table>
        </div>
        <div>
          <span>Countries participate in all sports</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query6")}
          >
            Query
          </button>
          <table id="table6">
            <tbody>
              <tr>{this.renderTableHeader("query6")}</tr>
              {this.renderTable6()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
