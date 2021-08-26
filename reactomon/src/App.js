import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="navContainer">
          <Navbar />
        </div>
        <Switch>
          <Route
            path="/pokemons"
            render={(props) => <PokemonList {...props} />}
            exact
          />

          <Route
            path="/types"
            render={(props) => <TypeList {...props} />}
            exact
          />

          <Route
            path="/pokemon/:id"
            render={(props) => <PokemonDetail {...props} />}
            exact
          />
        </Switch>
      </div>
      <br></br>
    </Router>
  );
}

export default App;
