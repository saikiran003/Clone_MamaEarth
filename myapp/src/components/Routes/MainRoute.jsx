import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactUs } from '../pages/ContactUs'
import { Footer } from '../pages/Footer'

export const MainRoute = () => {
  return (
    <div>

     
      <Routes>
         <Route path="ContactUs" element={<ContactUs/>}/>
      </Routes>

      <Footer/>

    </div>
  )
}
