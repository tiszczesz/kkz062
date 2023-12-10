import { ChangeEvent, useState } from 'react';
import './Select.css';

type Props = {
  values: string[];
  info: string;
};

const Select = (props: Props) => {
    console.log("renderowanie Select");
    
    const [color,setColor] = useState(props.values[0])
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setColor(e.target.value)
    }
  return (
    <div className="select-container">
      <div className="elem">
        <h3>{props.info}</h3>
        <select 
         onChange={(e)=>handleChange(e)}
        //onChange={(e)=>setColor(e.target.value)}
        >
          {props.values.map((v, k) => (
            <option value={v} key={k}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className="elem">
        <div style={{backgroundColor:color}}></div>
      </div>
    </div>
  );
};

export default Select;
