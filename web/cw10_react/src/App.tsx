import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Persons } from './Models/Persons';

function App() {
  console.log(Persons);
  let lp = 0;
  return (
    <div className="container">
      <h3>Lista osób</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Lp</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
            <th>Miejsce urodzenia</th>
          </tr>
        </thead>
        <tbody>
          {Persons.map((v, k) => {
            return (
              <tr key={k}>
                <td>{++lp}</td>
                <td>{v[0]}</td>
                <td>{v[1]}</td>
                <td>{v[2]}</td>
                <td>{v[3]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
