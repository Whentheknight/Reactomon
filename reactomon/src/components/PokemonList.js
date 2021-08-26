import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
  


  const getPokemons = async () => {
    const result = await fetch(loadMore)
    const data = await result.json()

    setLoadMore(data.next)

    function createPokemonObject(results){
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setPokemons(currentList => [...currentList, data])
        pokemons.sort((a, b)=> a.id - a.id)
      })
      
    }
    createPokemonObject(data.results)
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="names">
      {pokemons.map((pokemon, index) => (
        <div className="pokemonName" key={`${index + 1}`}>
          <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          <img src={pokemon.sprites.other.dream_world.front_default}></img>
        </div>
      ))}
    </div>
  );
}


export default PokemonList;
