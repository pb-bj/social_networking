import React from 'react'
import "./share.css"
import person1 from '../../assets/person/1.jpg'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
const Share = () => {
  return (
    <>
     <div className="share">
        <div className="shareWraper">
            <div className="shareTop">
                
                    <img className='shareProfileImg' src={person1} alt="" />
                    <input type="text" placeholder="what's on your mind....." className="shareInput" />
                    </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                  <div className="shareOptions_container">

                    <div className="shareOption">
                    <ImageOutlinedIcon className='shareIcon'/>
                      <span className='shareOptionText'>image</span>
                      </div>

                    <div className="shareOption">
                    <ImageOutlinedIcon className='shareIcon'/>
                      <span className='shareOptionText'>image</span>
                      </div>

                    <div className="shareOption">
                    <ImageOutlinedIcon className='shareIcon'/>
                      <span className='shareOptionText'>image</span>
                      </div>

                    <div className="shareOption">
                    <ImageOutlinedIcon className='shareIcon'/>
                      <span className='shareOptionText'>image</span>
                      </div>
                      
                  </div>
                </div>
            
        </div>
     </div>
    </>
  )
}

export default Share
