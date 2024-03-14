import React from 'react'
import "./sidebar.css"
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
 const sidebar = () => {
  return (
    <>
    <div className='sidebar'>
    <div className="sidebarWrapper">
     <ul className="sidebarList">
      <li className='sidebarListItem'>
        <RssFeedRoundedIcon/>
        <span className="sidebarListItem"> Feed</span>
      </li>
      <li className='sidebarListItem'>
        <RssFeedRoundedIcon/>
        <span className="sidebarListItem"> Feed</span>
      </li>
      <li className='sidebarListItem'>
        <RssFeedRoundedIcon/>
        <span className="sidebarListItem"> Feed</span>
      </li>
      <li className='sidebarListItem'>
        <RssFeedRoundedIcon/>
        <span className="sidebarListItem"> Feed</span>
      </li>
      <li className='sidebarListItem'>
        <RssFeedRoundedIcon/>
        <span className="sidebarListItem"> Feed</span>
      </li>
      <li className='sidebarListItem'>
        <RssFeedRoundedIcon/>
        <span className="sidebarListItem"> Feed</span>
      </li>
     </ul>
    </div>
    </div>
     
    </>
  )
}

export default sidebar
