import React, { useState } from 'react';

type Props = {};

const SelectLight = (props: Props) => {
    const [selected,setSelected] = useState("");
  return (
    <>
      <div>Wybrana opcja: {selected}</div>
      <select onChange={(e)=>setSelected(e.target.value)}>
        <option value="opcja 1">"opcja 1"</option>
        <option value="opcja 2">"opcja 2"</option>
        <option value="opcja 3">"opcja 3"</option>
        <option value="opcja 4">"opcja 4"</option>
        <option value="opcja 5">"opcja 5"</option>
      </select>
    </>
  );
};

export default SelectLight;
