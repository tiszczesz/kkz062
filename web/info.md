## Informacje o TypeScript

https://www.typescriptlang.org/

### instalacja lokalna TypeScript

```console

//w katalogu projektu

npm init -y   //utworzy sie package.json

//instalacja typescript
npm i typescript --save-dev

//wykonywanie kompilacji
npx tsc plik.ts 

//powstanie 
plik.js

//konifguracja typescript
npx tsc -init

```


### użycie useRef i formularza:

```js
import React, { useRef } from 'react';

function Form() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    resultRef.current.innerHTML = `Wynik: $\{inputValue}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wprowadź wartość:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Wyślij</button>
      <div ref={resultRef}></div>
    </form>
  );
}

```