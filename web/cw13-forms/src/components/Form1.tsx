import React, { FormEvent, useRef, useState } from 'react';
import { genres, IFilm } from '../models/data';
type Props = {};

const Form1 = (props: Props) => {
//   const [film, setFilm] = useState({});
  const titleRef = useRef<HTMLInputElement>(null);
  const directorRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    //setFilm({})
    if (
      titleRef.current !== null &&
      directorRef.current !== null &&
      lengthRef.current !== null &&
      dateRef.current !== null &&
      genreRef.current !== null
    ) {
    //   setFilm((prev) => ({
    //     ...prev,
    //     title: titleRef.current?.value,
    //     director: directorRef.current?.value,
    //     length: parseInt(lengthRef.current!.value),
    //     createDate: new Date(dateRef.current!.value),
    //     genre: genreRef.current?.value,
    //   }));
      const film = {
        title: titleRef.current?.value,
        director: directorRef.current?.value,
        length: parseInt(lengthRef.current!.value),
        createDate: new Date(dateRef.current!.value),
        genre: genreRef.current?.value,
      };
      console.log(film);
      
    }
  };

  return (
    <>
      <h2>Formularz zgłoszeniowy</h2>
      <form onSubmit={handleSubmit}>
        <div className="row m-2">
          <label htmlFor="title" className="col-3 text-end">
            Tytuł
          </label>
          <input
            ref={titleRef}
            className="col-6"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="row m-2">
          <label htmlFor="director" className="col-3 text-end">
            Reżyser
          </label>
          <input
            ref={directorRef}
            className="col-6"
            type="text"
            name="director"
            id="director"
          />
        </div>
        <div className="row m-2">
          <label className="col-3 text-end" htmlFor="genre">
            Wybierz gatunek
          </label>
          <select ref={genreRef} className="col-6" name="genre" id="genre">
            {genres.map((elem, key) => {
              return (
                <option key={key} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>
        <div className="row m-2">
          <label htmlFor="length" className="col-3 text-end">
            Czas
          </label>
          <input
            ref={lengthRef}
            className="col-6"
            min="1"
            max="300"
            type="number"
            name="length"
            id="length"
          />
        </div>
        <div className="row m-2">
          <label htmlFor="createDate" className="col-3 text-end">
            Data produkcji
          </label>
          <input
            ref={dateRef}
            className="col-6"
            type="date"
            name="createDate"
            id="createDate"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>
        <div className="row m-2">
          <input
            type="submit"
            value="Zapisz"
            className="col-6 offset-3 btn btn-primary"
          />
        </div>
      </form>
      <div>
       
      </div>
    </>
  );
};

export default Form1;
