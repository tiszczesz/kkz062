import { useState } from 'react';

const MyFormV1 = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const submitHandle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("zapisane");
  };
  console.log(`${firstname} ${lastname} ${age}`);
  
  return (
    <div className="container">
      <h1>Dane osobowe</h1>
      <form onSubmit={(e)=>{submitHandle(e)}}>
        <div className="row m-2">
          <label className="col-3">Podaj imię:</label>
          <input
            type="text"
            className="col-6"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div className="row m-2">
          <label className="col-3">Podaj nazwisko:</label>
          <input type="text" className="col-6" 
          onChange={(e) => setLastname(e.target.value)} value={lastname} />
          
        </div>
        <div className="row m-2">
          <label className="col-3">Podaj wiek:</label>
          <input type="number" min={12} max={160} className="col-6" value={age}
          onChange={(e) => setAge(e.target.value)} />
         
        </div>
        <input
          type="submit"
          value="Zapisz"
          className="btn btn-primary col-6 offset-3"
         
        />
      </form>
      <div>
        {firstname} {lastname} {age}
      </div>
    </div>
  );
};

export default MyFormV1;
