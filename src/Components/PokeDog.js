import React from "react";
import { Link } from "react-router-dom";

const PokeDog = () => {
  return (
    <div className="pokedog">
      <img
        src="https://media1.popsugar-assets.com/files/thumbor/PahJd-2Sa5873MELBmmYuJ_M00Y/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/03/08/958/n/44344577/addurlZ5sBQO/i/Pokemon-Halloween-Costumes-Dogs.jpg"
        alt="pokedog"
      />
      <br />

      <Link to={"/"}>
        <button>Back to Pokedex</button>
      </Link>
    </div>
  );
};

export default PokeDog;
