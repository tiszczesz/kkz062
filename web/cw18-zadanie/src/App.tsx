import React, {
  useState,
  FocusEvent,
  MouseEventHandler,
  MouseEvent,
} from 'react';
import { colors } from './models/colors';
import './App.css';

function App() {
  const [valueColor, setValueColor] = useState('');
  const [listColors, setListColors] = useState<string[]>(colors);
  function handleClick(event: FocusEvent<HTMLInputElement, Element>): void {
    setValueColor(event.target.value);
  }

  function handleAddColor(event: MouseEvent<HTMLInputElement>): void {
    setListColors([...listColors, valueColor]);
    setValueColor('');
  }
  const handleRemove = (color: string) =>
    setListColors(listColors.filter((c) => c !== color));
  return (
    <div>
      <h1>Kolory</h1>
      <div className="info">
        <input
          type="text"
          placeholder="podaj kolor"
          onChange={handleClick}
          value={valueColor}
        />
        <input type="button" value="Dodaj kolor" onClick={handleAddColor} />
      </div>
      <div className="list">
        <ol>
          {listColors.map((color, index) => {
            return (
              <li key={index}>
                {color}
                <input
                  type="button"
                  value="X"
                  onClick={() => handleRemove(color)}
                  style={{ width: '50px', margin: '10px' }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
