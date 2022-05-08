import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Baby } from '../pages/Baby'
import { Beauty } from '../pages/Beauty'
import { Body } from '../pages/Body'
import { Cart } from '../pages/Cart'
import { ContactUs } from '../pages/ContactUs'
import { Face } from '../pages/Face'
import { Footer } from '../pages/Footer'
import { Hair } from '../pages/Hair'




export const MainRoute = () => {
  return (
    <div>

     
      <Routes>
         <Route path="ContactUs" element={<ContactUs/>}/>
         <Route path="Hair/*" element={<Hair/>}/>
         <Route path="Face/*" element={<Face/>}/>
         <Route path="Body/*" element={<Body/>}/>
         <Route path="Baby/*" element={<Baby/>}/>
         <Route path="Beauty/*" element={<Beauty/>}/>
         <Route path="Cart/*" element={<Cart/>}/>
      </Routes>

      <Footer/>

    </div>
  )
}
