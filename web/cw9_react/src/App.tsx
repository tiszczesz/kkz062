import React from 'react';

import './App.css';
import Message from './components/Message';
import Wizytowka from './components/Wizytowka';
import MyComponent from './components/MyComponent';
import Select from './components/Select';

function App() {
  console.log("renderowanie App...");
  const colors = ["black","green","blue","red"];
  
  return (
    <>
     <Message color='red' info='ala ma kota' />
     {/* <Message color='green' info='sdfsf s fs fs fs'/>
     <Message color='yellow' info='lorem ipsum..... ' />
     <Wizytowka firstname='Antoni' lastname='Małecki' year={2007} />
     <Wizytowka firstname='Roman' lastname='Małecki' year={2007} /> */}
     <Wizytowka firstname='Franciszek' lastname='Małecki' year={2007} />
     <MyComponent colors={colors} actualDate={new Date(2012,4,17)} />
     <MyComponent colors={colors} actualDate={new Date()} />
    <Select options={colors}/>
    </>
  );
}

export default App;
