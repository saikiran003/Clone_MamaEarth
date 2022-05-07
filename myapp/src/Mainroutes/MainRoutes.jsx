import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Otp from '../login/Otp';
import Login from './../login/Login';
import Signup from './../login/Signup';

const MainRoutes = () => {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path = "login/" element= {<Login/>}/>
          <Route path ="otp/" element={<Otp/>} />
          <Route path= "signup/" element= {<Signup/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes