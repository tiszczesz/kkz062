import React from 'react'

type Props = {
    firstname:string;
    lastname:string;
    year:number;
}

const Wizytowka = (props: Props) => {
  return (
    <div className='border'>
        imie: {props.firstname}    nazwisko: {props.lastname} rocznik: {props.year}</div>
  )
}

export default Wizytowka