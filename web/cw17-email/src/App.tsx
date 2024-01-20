
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

function App() {
  return (
    <div className="container">
    <div className="d-flex">
      <div style={{width:"200px"}}>
        <Nav />
      </div>
      <div style={{margin:'30px'}} className='w-100'>
        <Routes>
          <Route path='/' element={<Exercise1 />}/>
          <Route path='/cw1' element={<Exercise2/>}/>
        </Routes>
      </div>
    </div>
      
    </div>
  );
}

export default App;
