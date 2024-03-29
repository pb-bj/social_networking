import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

const Layout = () => {
  const { token } = useAuth();
  return (
    <>
      <Navbar/>
        { token !== null ? <Outlet/> : <Navigate to="/login" replace />}
      <Footer/>
    </>
  )
}

export default Layout
