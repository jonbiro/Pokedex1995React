import React from "react";

const Search = props => {
  return (
    <form className="search">
      {
        <input
          onChange={e => props.handleChange(e)}
          type="text"
          value={props.search}
          placeholder="Search By Name"
        />
      }
    </form>
  );
};

export default Search;
