import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="pokemonNav">
          <Link to="/pokemons">Pokemons</Link>
        </div>
        <div className="typeNav">
          <Link to="/types">Types</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
