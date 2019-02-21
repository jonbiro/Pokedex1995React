import React, { Component } from "react";
import PokeCard from "./PokeCard";
import PokeDisplay from "./PokeDisplay";
import Search from "./Search";
import PokeFormNew from "./PokeFormNew";

class Pokedex extends Component {
  state = {
    pokemon: [],
    searchTerm: "",
    PokeDisplay: {},
    PokemonIsDisplayed: false
    // PokeTeam: {}
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data }));
  }

  handleClick = pokemonObj => {
    this.setState({
      PokeDisplay: pokemonObj,
      PokemonIsDisplayed: true
    });
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  PokeDisplayRender = () => {
    this.state.PokeDisplay.map(pokemon => (
      <PokeDisplay
        key={pokemon.id}
        pokemon={pokemon}
        handleClick={this.handleClick}
      />
    ));
  };

  filterByInput = () => {
    return this.state.pokemon
      .filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
      .map(poke => (
        <PokeCard
          key={poke.id}
          pokemon={poke}
          handleClick={this.handleClick}
          PokeDisplayRender={this.PokeDisplayRender}
        />
      ));
  };

  newPokemon = Pokemon => {
    this.setState({ pokemon: [Pokemon, ...this.state.pokemon] });
  };
  
  editedPokemon = (pokeObj) => {
  	let pokeArr = this.state.pokemon.map(pok => pok.id === pokeObj.id ? pokeObj : pok)
	this.setState({pokemon: pokeArr, PokeDisplay: pokeObj})
  }

  // AddToTeam = AddedPokemon => {
  // 	const addedToTeam = Array.from(new Set([...this.state.PokeTeam, AddedPokemon]));
  // 	this.setState({ PokeTeam: addedToTeam });
  // };
  //
  // RemoveFromTeam = RemovedPokemon => {
  // 	const RemoveFromTeam = this.state.PokeTeam.filter(
  // 		pokemon => pokemon.id !== RemovedPokemon.id
  // 	);
  // 	this.setState({ PokeTeam: RemoveFromTeam });
  // };

  render() {
    return (
      <div className="App">
        <PokeFormNew newPokemon={this.newPokemon} />
        <Search
          search={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <ul className="container">{this.filterByInput()}</ul>
        <PokeDisplay pokemon={this.state.PokeDisplay} allowEdit={this.state.PokemonIsDisplayed} editedPokemon={this.editedPokemon}/>
      </div>
    );
  }
}

export default Pokedex;
