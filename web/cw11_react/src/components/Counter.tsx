import React, { useState } from 'react';
import './Counter.css';

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  console.log(`renderowanie = ${count}`);

  return (
    <>
      <input
        type="button"
        value="<<"
        onClick={() => {
          setCount((count) => --count);
          console.log(`w przycisku = ${count}`);
        }}
      />
      <span className="counter-info">{count}</span>
      <input
        type="button"
        value=">>"
        onClick={() => {
          setCount((count) => ++count);
          console.log(`w przycisku = ${count}`);
        }}
      />
    </>
  );
};

export default Counter;
