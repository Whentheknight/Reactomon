import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const themeHook = useState("noSpin");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Router>
        <div className="mainDiv">
          <ThemeToggler />
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
    </ThemeContext.Provider>
  );
}

export default App;
