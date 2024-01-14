import React, { ChangeEvent, useState } from 'react';

type Props = {};

const Exercise1 = (props: Props) => {
  const [range, setRange] = useState(20);
  // function handleChange(event: ChangeEvent<HTMLInputElement>): void {
  //     console.log("renderowanie Exercise1");
  //     setRange((prev)=>parseInt(event.target.value))
  // }
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log('renderowanie Exercise1');
    setRange((prev) => parseInt(event.target.value));
  };
  return (
    <>
      <h5>
        ćwiczenie 1 - <b>range</b>
      </h5>
      <div>
        <input
          onChange={handleChange}
          type="range"
          min={10}
          max={25}
          value={range}
        />
        <label style={{ margin: '30px' }}>{range}</label>
      </div>
      <div style={{fontSize:`${range}px`}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eligendi perferendis, dolore accusantium praesentium possimus placeat dicta quae et, cupiditate eaque. Sint nostrum temporibus itaque ex, ipsam hic eveniet minima?
      </div>
    </>
  );
};

export default Exercise1;
