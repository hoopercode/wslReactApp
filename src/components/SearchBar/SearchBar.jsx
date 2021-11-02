import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {

  const { placeholder, handleInput, searchTerm } = props;
  
  return (
    <form className="search">
      <input
        className="nav__input"
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleInput}
      />
    </form>
  );
};

export default SearchBar;
