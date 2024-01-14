import React from 'react'
import Nav from './Nav'
import App from '../App'
import './Home.css';
import { Route, Routes } from 'react-router-dom';
import Exercise1 from './Exercise1';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='container d-flex p-2'>
        <div className='myNav'>
            <Nav />
        </div>
        <div className="contains">
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/ex1' element={<Exercise1/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home;