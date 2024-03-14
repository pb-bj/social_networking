import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import Feed from '../components/feed/Feed.jsx'
import Rightbar from '../components/rightbar/Rightbar.jsx'
import "./home.css"

function Home() {
  return (
    <>
    <Navbar/>
    <div className="homeContainer">
    <Sidebar/>
 
    
    <Feed/>
    <Rightbar/>
    </div>

   
    </>
  )
}

export default Home
