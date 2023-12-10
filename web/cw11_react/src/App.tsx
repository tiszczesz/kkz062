import './App.css';
import Counter from './components/Counter';
import Select from './components/Select';
import SelectLight from './components/SelectLight';
import { Dane } from './dane';

function App() {
  console.log("renderowanie App");
  console.log(`${Dane.get("a")}|${Dane.get("b")}|${Dane.get("c")}`);
  
  return (
    <div >
      <Counter />
      <SelectLight />
      <Select values={["red","green","blue","yellow","purple"]} info='Kolory'/>
    </div>
  );
}

export default App;
