import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavDiv className="pokemonNav">
          <NavLink to="/pokemons">Pokemons</NavLink>
        </NavDiv>
        <NavDiv className="typeNav">
          <NavLink to="/types">Types</NavLink>
        </NavDiv>
      </nav>
    </div>
  );
}

const NavLink = styled(Link)`
  font-size: 1.8em;
`;

const NavDiv = styled.div`
   {
    border: 3px solid #b71616;
    border-radius: 5px;
    max-height: 5rem;
    min-width: 9rem;
    text-align: center;
    padding-top: 0rem;
    &:hover {
      background-color: #b71616;
    }
  }
`;

export default Navbar;
