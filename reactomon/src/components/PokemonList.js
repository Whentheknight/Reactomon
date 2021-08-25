import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    const url = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() =>{
        getPokemons();
    }, []);

    const getPokemons = () =>{
        axios.get(`${url}`)
        .then((response) =>{
            const pokemons = response.data.results;
            setPokemons(pokemons);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div className='names'>
      {pokemons.map((pokemon) =>(
            <div className='pokemonName'>
            <h2 >{pokemon.name}</h2>
            </div>
        ))}
        </div>
    )
}

export default PokemonList
