import React from 'react';
import { useState } from 'react'
import './App.css'
// import './index.css'
import Mealcard from './Mealcard';
import Mainpage from './Mainpage';
import { Route, Routes } from 'react-router-dom';
import Mealinfo from './Mealinfo';

function App() {

  return (
    <>
    {/* <Mainpage/> */}
    <Routes>
      <Route path='/' element = {<Mainpage/>}/>
      <Route path='/:mealsid' element = {<Mealinfo/>}/>
    </Routes>
    </>
  )
}

export default App
