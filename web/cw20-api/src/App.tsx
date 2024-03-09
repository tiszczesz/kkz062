import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
   <div className='container'>
     <h1>Hello From Todos</h1>
     <TodoList />
   </div>
  );
}

export default App;
