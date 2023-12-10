import './App.css';
import Counter from './components/Counter';
import SelectLight from './components/SelectLight';

function App() {
  console.log("renderowanie App");
  
  return (
    <div >
      <Counter />
      <SelectLight />
    </div>
  );
}

export default App;
