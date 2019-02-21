import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokeDog from "./Components/PokeDog";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/pokedog/" component={PokeDog} />
          <Route path="/pokemon" component={Pokedex} />
          <Route path="/*" component={Pokedex} />
        </Switch>
      </Router>
    );
  }
}

export default App;
