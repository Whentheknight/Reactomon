import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="mainDiv">
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
            path="/pokemons/:id"
            render={(props) => <PokemonDetail {...props} />}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
