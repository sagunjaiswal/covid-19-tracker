import React from "react";

class Total extends React.Component {
  render() {
    const { summary } = this.props;
    return (
      <div className="row">
        <div className="newConfirmed" style={{ color: "orangered" }}>
          <h3>New Confirmed</h3>
          <h1>{summary.NewConfirmed}</h1>
        </div>
        <div className="totalConfirmed" style={{ color: "blue" }}>
          <h4>Total Confirmed</h4>
          <h1>{summary.TotalConfirmed}</h1>
        </div>
        <div className="totalDeaths" style={{ color: "maroon" }}>
          <h3>Total Deaths</h3>
          <h1>{summary.TotalDeaths}</h1>
        </div>
        <div className="totalRecovered" style={{ color: "green" }}>
          <h4>Total Recovered</h4>
          <h1>{summary.TotalRecovered}</h1>
        </div>
      </div>
    );
  }
}

export default Total;
