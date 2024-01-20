import React, { FormEvent, useRef } from 'react';
import { Silnia } from '../Utility/Silnia';

const SilniaForm = () => {
  const nRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const choiceRef = useRef<HTMLSelectElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (
      nRef.current !== null &&
      choiceRef.current !== null &&
      resultRef.current !== null
    ) {
        const n = parseInt(nRef.current.value);
        const choice = choiceRef.current.value==='rek'? 'Rekurencyjnie': 'Iteracyjnie';
        console.log(n,choice); 
        const result = Silnia.Iteration(n);
        resultRef.current.innerHTML = `
            <p>silnia ${choice} ${n}! = ${result}</p>
        `       
    }
  }

  return (
    <div className="container">
      <h3>Obliczenie silni n!</h3>
      <form onSubmit={handleSubmit}>
        <div className="row m-3">
          <input ref={nRef} type="number" placeholder="podaj n"  min={1} max={20} required/>
        </div>
        <div className="row m-3">
          <label htmlFor="">Wybierz metodę</label>
          <select ref={choiceRef}>
            <option value="rek">Rekurencyjnie</option>
            <option value="iter">Iteracyjnie</option>
          </select>
        </div>
        <div className="row m-3">
          <input type="submit" value="Oblicz" />
        </div>
      </form>
      <div ref={resultRef} className="p-5 bg-info" style={{fontSize:"3em"}}>
        
      </div>
    </div>
  );
};

export default SilniaForm;
