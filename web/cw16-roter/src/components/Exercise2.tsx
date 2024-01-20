import React, { ChangeEvent, useEffect, useState } from 'react'
import './Exercise2.css';

type Props = {}

const Exercise2 = (props: Props) => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [result,setResult] = useState(`rgb(${red},${green},${blue})`);
    function handleRed(event: ChangeEvent<HTMLInputElement>): void {
       setRed((prev)=>(parseInt(event.target.value)));
       setResult((prev)=>(`rgb(${red},${green},${blue})`));
    }

    function handleGreen(event: ChangeEvent<HTMLInputElement>): void {
        setGreen((prev)=>(parseInt(event.target.value)));
        setResult((prev)=>( `rgb(${red},${green},${blue})`));
    }

    function handleBlue(event: ChangeEvent<HTMLInputElement>): void {
        setBlue((prev)=>(parseInt(event.target.value)));
        setResult((prev)=>(`rgb(${red},${green},${blue})`));
        
    }
    //eliminacja efektu opóźnienia przez asynchroniczność
    // useEffect(()=>{
    //     setResult((prev)=>(`rgb(${red},${green},${blue})`));
    // },[result,green,blue,red])
  return (
    <>
     <div>
        <input
          onChange={handleRed}
          type="range"
          min={0}
          max={255}
          value={red}
        />
        <label style={{ margin: '30px' }}>Czerwony: {red}</label>
      </div>
      <div>
        <input
          onChange={handleGreen}
          type="range"
          min={0}
          max={255}
          value={green}
        />
        <label style={{ margin: '30px' }}>Zielony: {green}</label>
      </div>
      <div>
        <input
          onChange={handleBlue}
          type="range"
          min={0}
          max={255}
          value={blue}
        />
        <label style={{ margin: '30px' }}>Niebieski {blue}</label>
      </div>
      <div className="scene" style={{backgroundColor:result}}></div>
     <div>{result}</div>
    </>
  )
}

export default Exercise2