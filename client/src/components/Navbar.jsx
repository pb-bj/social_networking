import React from 'react'
import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import person1 from '../assets/person/1.jpg'
import "./navbar.css"
const Navbar = () => {
  return (
    <>


    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Socialize </span>
        <div className="searchbar"> <input type="text" className="searchInput"  placeholder='Search'/> <SearchRoundedIcon className='searchIcon'/>  </div>
       
      </div>
      <div className="navbarCenter">
        <div className="navbarIcons">
          <span className="navbarIconItem"><HomeRoundedIcon className='homeIcon' /></span>
          <span className="navbarIconItem"><ChatRoundedIcon className='chatIcon'/><div className="navbarIconBadge">1</div></span>
          <span className="navbarIconItem"><NotificationsRoundedIcon className='NotifyIcon' /><div className="navbarIconBadge">2</div></span>
          

        </div>
      </div>
      <div className="navbarRight">
      <div className="profilebar"><img src={person1} className="navbarImg" /> <p className='profilename'> Angelina Shrestha</p>  </div>
      
      </div>
    </div>
{/*       
      <nav className="navbar navbar-expand-lg bg-light ">
        
  <div className="container-fluid">
    <Link className="navbar-brand " to="#">Socialize</Link>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" to="#">Disabled</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav> */}

    </>
  )
}

export default Navbar
