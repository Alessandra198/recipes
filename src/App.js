import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Recipes by Rina</h1>
          <em>
            <h2>What would you like to cook?</h2>
          </em>
        </header>
        <Search />
      </div>
    </div>
  );
}

export default App;
