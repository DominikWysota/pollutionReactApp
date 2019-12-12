import React, { Component } from "react";
import ButtonFetchPollution from "./ButtonFetchPollution";
import PollutionList from "./PollutionList";
import SelectOptions from "./SelectOptions";
import SelectPollution from "./SelectPollution";

class App extends Component {
  state = {
    measurements: null,
    nationality: "PL",
    pollution: "pm25"
  };

  nations = [
    { value: "PL", nationality: "Poland" },
    { value: "DE", nationality: "Germany" },
    { value: "FR", nationality: "France" },
    { value: "ES", nationality: "Spain" }
  ];

  pollutions = ["pm25", "pm10", "so2", "no2", "o3", "co", "bc"];

  handleDataFetch = () => {
    const apiOpenaq = `https://api.openaq.org/v1/measurements?country=${this.state.nationality}&limit=20&parameter=${this.state.pollution}`;
    fetch(apiOpenaq)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.statusText);
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          measurements: data.results
        });
      })
      .catch(error => console.log(error, "Błąd"));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { measurements } = this.state;
    return (
      <div>
        <form>
          <SelectOptions nations={this.nations} change={this.handleChange} />
          <SelectPollution pollutions={this.pollutions} change={this.handleChange} />
        </form>
        <ButtonFetchPollution click={this.handleDataFetch} />
        {measurements ? <PollutionList measurements={measurements} /> : measurements}
      </div>
    );
  }
}

export default App;
