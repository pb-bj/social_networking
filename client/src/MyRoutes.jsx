import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import App from './App'
import Navbar from "./components/Navbar"
const MyRoutes = () => {
  return (
 <BrowserRouter><Routes>
 <Route path='/' element={<App/>}/>  
  <Route path='/Home' element={<Home/>}/>
  </Routes>
 </BrowserRouter>
  )
}

export default MyRoutes
