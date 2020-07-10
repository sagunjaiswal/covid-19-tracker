import React from "react";
import axios from "axios";
import Total from "./Total";
import Country from "./Country";

class Data extends React.Component {
  state = {
    countryList: [],
    globalData: [],
    loading: true,
    currentDate: null,
  };

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    console.log(res.data);
    this.setState({
      countryList: res.data.Countries,
      globalData: res.data.Global,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) return <h1>Please Wait...</h1>;
    return (
      <div>
        <h1 className="heading">COVID-19 TRACKER</h1>
        <Total summary={this.state.globalData} />
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>New Confirmed</th>
              <th>Total Recovered</th>
              <th>Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {this.state.countryList.map((country) => (
              <Country countries={country} key={country.Country} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Data;
