import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import "./Nav.scss";

const Nav = (props) => {

  const {handleInput, placeholder, searchTerm} = props;

  return (
    <div class="sidenav">
      <SearchBar placeholder="Search" searchTerm={searchTerm} handleInput={handleInput}/>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/profiles">
        <p>Surfer Profiles</p>
      </Link>
      <Link to="/rankings">
        <p>Surfer Rankings</p>
      </Link>
      <Link to="/addSurfer">
        <p>Add Surfer</p>
      </Link>
    </div>
  );
};

export default Nav;
