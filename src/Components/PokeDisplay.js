import React from "react";
import PokePic from "../pokepic.png";
import { Link } from "react-router-dom";
import PokeFormEdit from "./PokeFormEdit";

const PokeDisplay = props => {
  return (
    <div>
      <h1>{props.pokemon.name}</h1>

      {!props.pokemon.GIF ? (
        <img src={PokePic} alt="Pokemon" />
      ) : (
        <img src={props.pokemon.GIF} alt="Pokemon" />
      )}
      <p>{props.pokemon.description}</p>
      <ul>
        <p>
          {props.pokemon.type1}
          <br />
          {props.pokemon.type2}
        </p>
      </ul>

      <Link to={"/pokedog"}>
        {" "}
        <button>Click Here To See A PokeDog</button>{" "}
      </Link>

      {props.allowEdit ? <PokeFormEdit {...props} /> : null}
    </div>
  );
};

export default PokeDisplay;
