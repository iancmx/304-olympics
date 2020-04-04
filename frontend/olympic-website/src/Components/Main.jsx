import React from "react";
import olympic from "../olympic.jpg";

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

    if (!isLoaded1) return <div>No Data...</div>;
    return (
      <div className="App">
        <ul>
          {query1s.map((row) => (
            <li key={row.country_name}>
              Country: {row.country_name} | Gold Medal: {row.gold_medal_count}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderTable2() {
    var { isLoaded2, query2s } = this.state;

    if (!isLoaded2) return <div>No Data...</div>;
    return (
      <div className="App">
        <ul>
          {query2s.map((row) => (
            <li key={row.name + row.country}>
              Name: {row.name} | Country: {row.country}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderTable3() {
    var { isLoaded3, query3s } = this.state;
    if (!isLoaded3) return <div>No Data...</div>;
    return (
      <div className="App">
        <ul>
          {query3s.map((row) => (
            <li key={row.name + row.age + row.sport}>
              Name: {row.name} | Age: {row.age} | Sport: {row.sport} | Country:{" "}
              {row.country}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderTable4() {
    var { isLoaded4, query4s } = this.state;

    if (!isLoaded4) return <div>No Data...</div>;
    return (
      <div className="App">
        <ul>
          {query4s.map((row) => (
            <li key={row.country_name}>
              Name: {row.country_name} | Gold Medal: {row.gold_medal_count}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderTable5() {
    var { isLoaded5, query5s } = this.state;

    if (!isLoaded5) return <div>No Data...</div>;
    return (
      <div className="App">
        <ul>
          {query5s.map((row) => (
            <li key={row.country}>
              Country: {row.country} | # of Athletes: {row.number_of_athletes} |
              Average Age: {row.average}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  renderTable6() {
    var { isLoaded6, query6s } = this.state;

    if (!isLoaded6) return <div>No Data...</div>;
    return (
      <div className="App">
        <ul>
          {query6s.map((row) => (
            <li key={row.nationality}>Country: {row.nationality}</li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    // if (this.props.loggedInStatus === "NOT_LOGGED_IN")
    //   return (
    //     <div
    //       className="Main"
    //       style={{
    //         backgroundImage: `url(${olympic})`,
    //         minHeight: "100%",
    //         minWidth: "100%",
    //       }}
    //     >
    //       <h1>OLYMPIC 2020</h1>
    //       <h1>{this.props.loggedInStatus}</h1>
    //     </div>
    //   );
    //Main Page
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
        <div>
          <span>Countries with gold medels </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query1")}
          >
            Query
          </button>
          <div>{this.renderTable1()}</div>
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
          {this.renderTable2()}
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
          <div>{this.renderTable3()}</div>
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
          <div>{this.renderTable4()}</div>
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
          <div>{this.renderTable5()}</div>
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
          <div>{this.renderTable6()}</div>
        </div>
      </div>
    );
  }
}
