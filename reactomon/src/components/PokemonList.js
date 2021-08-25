import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function PokemonList() {
  console.log("List");
  const [pokemons, setPokemons] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const pokemons = response.data.results;
        setPokemons(pokemons);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="names">
      {pokemons.map((pokemon, index) => (
        <div className="pokemonName" key={`${index + 1}`}>
          <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
