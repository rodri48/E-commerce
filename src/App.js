import "./App.css";
import ItemListContainer from "./container/ItemListContainer ";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <div className="App">
      <Navegacion />
      <ItemListContainer greetings={"Holi soy una prop"} />
    </div>
  );
}

export default App;
