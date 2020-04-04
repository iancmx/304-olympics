import React from "react";
import olympic from "../olympic.jpg";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  queryHandler = (query) => {
    console.log(query);
    var path;
    switch (query) {
      case "query1":
        path = "http://localhost:3001/db/athlete";
        break;
      case "query2":
        path = "http://localhost:3001/db/athlete/numAthleteAgeCountry";
        break;
      case "query3":
        path = "http://localhost:3001/db/participant/getCountries";
        break;
      case "query4":
        path = "http://localhost:3001/db/country/oneGoldMin";
        break;
      case "query5":
        path = "http://localhost:3001/db/country/mostGoldMedals";
        break;
      case "query6":
        path = "http://localhost:3001/db/participant/participateAllSports";
        break;
      default:
        return;
    }

    var query = path;
    fetch(query, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div>
          <span>Countries with gold medels </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.queryHandler("query1")}
          >
            Query
          </button>
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
        </div>
      </div>
    );
  }
}
