import "./App.css";
import ItemListContainer from "./container/ItemListContainer";
import Navegacion from "./components/Navegacion";

import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navegacion />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ItemListContainer">
            <ItemListContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
