import React, { Component } from "react";

class PokeFormNew extends Component {
  state = {
    name: "",
    description: "",
    img: "",
    GIF: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    e.persist();
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        description: e.target.description.value,
        img: e.target.img.value,
        GIF: e.target.GIF.value
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.newPokemon(res);
        this.emptyForm();
      })

  };

  emptyForm = () => {
    this.setState({ name: "", description: "", img: "", GIF: "" });
  };

  render() {
    return (
      <div>
        <h2>Make a Pokemon:</h2>

        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Title"
          />
          <br />
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            value={this.state.description}
            placeholder="Description"
          />
          <br />
          <input
            name="img"
            type="text"
            onChange={this.handleChange}
            value={this.state.img}
            placeholder="Image URL"
          />
          <br />
          <input
            name="GIF"
            type="text"
            onChange={this.handleChange}
            value={this.state.GIF}
            placeholder="GIF URL"
          />
          <br />
          <input type="submit" className="button" />
        </form>
      </div>
    );
  }
}
export default PokeFormNew
