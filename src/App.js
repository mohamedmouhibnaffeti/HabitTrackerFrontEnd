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
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Mental' element={<Mental/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;