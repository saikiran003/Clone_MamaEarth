import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

import Login from './../login/Login';
import Signup from '../Signup/Signup';
import Otp from '../Otp/Otp';

const MainRoutes = () => {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path = "login/" element= {<Login/>}/>
          <Route path ="otp/" element={<Otp/>} />
          <Route path= "signup/" element= {<Signup/>}/>
        </Routes>
        {/* <Footer/> */}
    </div>
  )
}

export default MainRoutes