import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=16');
  


  const getPokemons = async () => {
    const result = await fetch(loadMore)
    const data = await result.json()

    setLoadMore(data.next)

    function createPokemonObject(results){
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setPokemons(currentList => [...currentList, data])
        pokemons.sort((a, b)=> a.id - b.id)
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
        <Link to={`/pokemon/${index + 1}`}>
        <div className="pokemonName" key={`${index + 1}`}>
          <img src={pokemon.sprites.other.dream_world.front_default}></img>
          <br></br>
          <Paragh><p>{pokemon.name}</p></Paragh>
        </div>
        </Link>
      ))}
    </div>
    
  );
}

const Paragh = styled.p`
font-size: 1rem;
margin-top: -2rem;
`;

export default PokemonList;
