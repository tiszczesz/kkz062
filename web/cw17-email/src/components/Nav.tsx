import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div>
        <h2>Wybór ćwiczeń</h2>
        <Link className='btn btn-light w-100 m-1' to='/'>Główna</Link><br />
        <Link className='btn btn-light w-100 m-1' to='/cw1'>Ćwiczenie email</Link><br />
        <Link className='btn btn-light w-100 m-1' to='/cw2'>Ćwiczenie 2 PESEL</Link><br />
    </div>
  )
}

export default Nav