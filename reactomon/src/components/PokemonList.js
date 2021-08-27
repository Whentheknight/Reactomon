import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function PokemonList() {
  const theme = useContext(ThemeContext)[0];


  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=16"
  );

  const getPokemons = async () => {
    const result = await fetch(loadMore);
    const data = await result.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((currentList) => [...currentList, data]);
        pokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      {theme === "spin" ? (
        <div className="names">
          {pokemons.map((pokemon, index) => (
            <Diver>
              <Link to={`/pokemon/${index + 1}`}>
                <div className="pokemonName" key={`${index + 1}`}>
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                  ></img>
                  <br></br>
                  <Paragh>
                    <p>{pokemon.name}</p>
                  </Paragh>
                </div>
              </Link>
            </Diver>
          ))}
        </div>
      ) : (
        <div className="names">
          {pokemons.map((pokemon, index) => (
            <Link to={`/pokemon/${index + 1}`}>
              <div className="pokemonName" key={`${index + 1}`}>
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                ></img>
                <br></br>
                <Paragh>
                  <p>{pokemon.name}</p>
                </Paragh>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const Paragh = styled.p`
  font-size: 1rem;
  margin-top: -2rem;
`;

const spinning = keyframes`
0% {
  transform: rotate(0) translate3D(-50%, -50%, 0);
}
100% {
  transform: rotate(360deg) translate3D(-50%, -50%, 0);
}`;

const Diver = styled.div`
  animation: ${spinning} 1s infinite;
`;

export default PokemonList;
