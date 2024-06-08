import React from 'react';
import { IBook } from '../../../interfaces/IBook';
import { Card } from 'react-bootstrap';

type Props = {
  books: IBook[];
};

const Sidebar = (props: Props) => {
  const authors = new Set(props.books.map((b) => b.author));
  const maxPrice = props.books.reduce((prev, current) => {
    return prev.price > current.price ? prev : current;
  });
  const minPrice = props.books.reduce((prev, current) => {
    return prev.price < current.price ? prev : current;
  });
  return (
    <>
      <h3>Informacje o zbiorze książek</h3>
      <Card>
        <Card.Header>
          <h5>Ilość książek: {props.books.length}</h5>
        </Card.Header>
        <Card.Body>
          <div>
            Zbiór autorów: Ilość: {authors.size}
            <ul>
              {Array.from(authors).map((a, k) => (
                <li key={k}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            Najwyższa cena: <br /> {maxPrice.title} {maxPrice.author}{' '}
            {maxPrice.price} zł
          </div>
          <div>
            Najniższa cena: <br /> {minPrice.title} {minPrice.author}{' '}
            {minPrice.price} zł
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Sidebar;
