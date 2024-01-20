import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <h3> Wybierz ćwiczenie </h3>
      <Link className="btn btn-info w-100 m-1" 
      to="/">
        App
      </Link>
      <br />
      <Link className="btn btn-info w-100 m-1"
       to="/ex1">
        ćwiczenie 1
      </Link>
      <br />
      <Link className="btn btn-info w-100 m-1"
       to="/ex2">
        ćwiczenie 2
      </Link>
      <br />
    </div>
  );
};
export default Nav;
