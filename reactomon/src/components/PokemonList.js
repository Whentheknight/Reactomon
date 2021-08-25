import React, {useEffect, useState} from "react";
import axios from "axios";
import { Switch, useParams } from "react-router";
import PokemonDetail from "./PokemonDetail";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link

  } from "react-router-dom";



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
        <Router>
        <div className='names'>
      {pokemons.map((pokemon, index) =>(
            <div className='pokemonName' key={`${index+1}`}>
            <Link to={`/pokemon/${index+1}`} >{pokemon.name}</Link>
            </div>
        ))}
        </div>
        <Switch>
        <Route path={`/pokemon/:id`}>
            <Pokemon/>
        </Route>
        </Switch>
        </Router>
    )
}

function Pokemon(){
    let {id} = useParams();
    return <div><PokemonDetail num={id}/></div>
}

export default PokemonList
