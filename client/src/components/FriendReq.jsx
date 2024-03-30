import React from 'react'
import Profile1 from "../assets/profile/profile1.jpg";


const FriendReq = () => {
  return (
    <div className="FriendReq  mt-5   py-9 px-7 rounded-md bg-white">
    <div className="Reqinfo flex justify-between">
      <div className="Reqtitle">Friend Request</div>
      <div className="Reqtitle">2</div>
    </div>

    <div className="ReqContainer flex w-full h-11 mt-3 mb-3 justify-between items-center">
      <div className="posttopin flex  gap-3">
        <img
          className=" object-cover rounded-full w-8 h-8"
          src={Profile1}
          alt=""
        />
        <h6 className="text-[12px]">
          Jhon Doe <p className=" text-[8.5px] ">Graphic Designer</p>
        </h6>
      </div>

      <div className="follow flex gap-2 ">
        {" "}
        <button
          id="Follow"
          className="px-3 py-1.5 bg-sky-400 text-[12px] text-white rounded-full"
        >
          Follow
        </button>
        <button
          id="decline"
          className="px-3 py-1.5 bg-red-400 text-[12px] text-white rounded-full"
        >
          Decline
        </button>
      </div>
    </div>

    <div className="ReqContainer flex w-full h-11 mt-3 mb-3 justify-between items-center">
      <div className="posttopin flex  gap-3">
        <img
          className=" object-cover rounded-full w-8 h-8"
          src={Profile1}
          alt=""
        />
        <h6 className="text-[12px]">
          Jhon Doe <p className=" text-[8.5px] ">Graphic Designer</p>
        </h6>
      </div>

      <div className="follow flex gap-2 ">
        {" "}
        <button
          id="Follow"
          className="px-3 py-1.5 bg-sky-400 text-[12px] text-white rounded-full"
        >
          Follow
        </button>
        <button
          id="decline"
          className="px-3 py-1.5 bg-red-400 text-[12px] text-white rounded-full"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
  )
}

export default FriendReq
