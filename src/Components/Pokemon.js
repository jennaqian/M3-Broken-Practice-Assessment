import React, { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      searchPokemon: "",
      currentPokemon: {},
      isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchPokemon: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchPokemon } = this.state;

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      );
      this.setState({
        currentPokemon: data,
        searchPokemon: "",
        isError: false,
      });
    } catch (e) {
      this.setState({
        currentPokemon: {},
        searchPokemon: "",
        isError: !this.state.isError,
      });
    }
  };

  render() {
    const { searchPokemon, currentPokemon, isError } = this.state;
    return (
      <div>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={searchPokemon}
            type="text"
            placeholder="Find Your Pokemon"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {/* <PokemonCard pokemon={currentPokemon} /> */}
        
        {/* if currentPokemon have the initial property of spirtes, give me that img  */}
        {currentPokemon.sprites && <PokemonCard pokemon={currentPokemon} />}
        {isError && <h2>Pokemon not found!</h2>}
      </div>
    );
  }
}

export default Pokemon;
