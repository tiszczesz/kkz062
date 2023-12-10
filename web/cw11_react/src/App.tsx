import './App.css';
import Counter from './components/Counter';
import Select from './components/Select';
import SelectLight from './components/SelectLight';

function App() {
  console.log("renderowanie App");
  
  return (
    <div >
      <Counter />
      <SelectLight />
      <Select values={["red","green","blue","yellow","purple"]} info='Kolory'/>
    </div>
  );
}

export default App;
