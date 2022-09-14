import logo from './logo.svg';
import './App.css';
import Persons from "./components/rickandmorty/persons";
import './components/rickandmorty/main.css'
import Simpsons from "./components/simpsons/simpsons";
import './components/simpsons/main.css'

function App() {
  return (
    <div className="App">
        <h2>Simpsons</h2>
        <Simpsons/>
        <h2>Rick & Morty</h2>
      <Persons/>
    </div>
  );
}

export default App;
