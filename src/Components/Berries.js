import React, { Component } from "react";
import axios from "axios";
import BerryCard from "./BerryCard";

class Berries extends Component {
  constructor() {
    super();
    this.state = {
      berries: [],
      selectedValue: "",
      currentBerry: {},
    };
  }

  handleChange = async (e) => {
    this.setState({
      selectedValue: e.target.value,
    });

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/berry/${e.target.value}`
    );

    console.log(data);

    this.setState({
      currentBerry: data,
    });
  };

  getBerries = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/berry/");
    this.setState({ berries: data.results });
  };

  componentDidMount() {
    this.getBerries();
  }

  render() {
    const { berries, selectedValue, currentBerry } = this.state;
    const options = berries.map((berry, i) => {
      return (
        <option key={i} value={berry.name}>
          {berry.name}
        </option>
      );
    });
    return (
      <div>
        <h1>Select a Type</h1>
        <select onChange={this.handleChange} value={selectedValue}>
          <option></option>
          {options}
        </select>
        {currentBerry.firmness && <BerryCard currentBerry={currentBerry} />}
      </div>
    );
  }
}

export default Berries;
