import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login.js'
import Signup from './Components/Signup.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import Profile from './Components/Profile';
import Mental from './Components/Mental';
import { useCookies } from 'react-cookie'
import APIService from './Components/APIService';
import Workout from './Components/Workouts';
import Nutrition from './Components/Nutrition';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Mental' element={<Mental/>} />
        <Route path='/Workouts' element={<Workout/>}/>
        <Route path='/Nutrition' element={<Nutrition/>}/>
        <Route path='/Contact' element={<Contact/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;