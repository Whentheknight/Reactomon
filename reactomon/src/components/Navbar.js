import { useParams } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import PokemonDetail from "./PokemonDetail";



function Navbar() {

    return (
        <Router>
        <div className='navbar'>
            <nav>
                <div className='pokemonNav'>
                <Link to='/pokemons'>Pokemons</Link>
                </div>
                <div className='typeNav'>
                <Link to='/types'>Types</Link>
                </div>
            </nav>
        </div>
        <br></br>
        <Switch>
                <Route path="/pokemons">
                    <Pokemons/>
                </Route>
                <Route path="/types">
                    <Types/>
                </Route>
            </Switch>
        </Router>

    )
}

function Pokemons(){
    return <div className="pokemonList"><PokemonList/></div>
}

function Types(){
    return <div className="typeList"><TypeList/></div>
}




export default Navbar
