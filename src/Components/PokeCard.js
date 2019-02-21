import React, { Component } from "react";

class PokeCard extends Component {
  render() {
    return (
      <div
        className="poke-card"
        onClick={() => this.props.handleClick(this.props.pokemon)}
      >
        <img src={this.props.pokemon.img} alt="PokePic" />
      </div>
    );
  }
}

export default PokeCard;
