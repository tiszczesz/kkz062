import React, { FormEvent, useRef, useState } from 'react';
import { Silnia } from '../Utility/Silnia';


type Props = {};

const Silnia2Form = (props: Props) => {
  const [result,setResult] = useState("Brak wyniku")
  const nRef = useRef<HTMLInputElement>(null);
  const choiceRef = useRef<HTMLSelectElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (
      nRef.current !== null &&
      choiceRef.current !== null      
    ) {
        const n = parseInt(nRef.current.value);
        const choice = choiceRef.current.value==='rek'? 'Rekurencyjnie': 'Iteracyjnie';
        console.log(n,choice); 
         setResult((prev)=> {
          const wynik = choiceRef.current?.value==='rek'? Silnia.Recursion(n): Silnia.Iteration(n);
          return `Silnia ${choice} ${n}! = ${wynik}`
         })
        //setResult(Silnia.Iteration(n))
        console.log(result);
             
    }


   
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row m-3">
          <input
            ref={nRef}
            type="number"
            placeholder="podaj n"
            min={1}
            max={20}
            required
          />
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
      <div>Wartość result = {result}</div>
    </div>
  );
};

export default Silnia2Form;
