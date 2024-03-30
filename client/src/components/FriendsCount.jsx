import React from "react";
import Profile1 from "../assets/profile/profile1.jpg";

const FriendsCount = () => {
  return (
    <div className="FriendReq  mt-5   py-9 px-7 rounded-md bg-white">
      <div className="Reqinfo flex justify-between">
        <div className="Reqtitle">Friends List</div>
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

        <div className="follow px-2 py-2 bg-slate-200 hover:cursor-pointer hover:bg-red-300  rounded-full">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
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

        <div className="follow px-2 py-2 bg-slate-200 hover:cursor-pointer hover:bg-red-300  rounded-full">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FriendsCount;
