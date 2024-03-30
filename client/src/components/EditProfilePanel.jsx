import React from "react";
import Profile1 from "../assets/profile/profile1.jpg";
const EditProfilePanel = ({visible, onClose}) => {
    if(!visible) return null;
  return (
    <div className=" fixed inset-0 bg-slate-400 bg-opacity-25 backdrop-blur-sm  flex justify-center items-center">
      <div className="blockz bg-white py-5 px-3 flex flex-col rounded-md">
        {/* top */}
        <div className="top flex items-center justify-between  mb-3">
          <div className="title font-medium">Edit Profile</div>{" "}
          <div onClick={onClose} className="cross  bg-slate-200 py-1 px-1 rounded-full hover:bg-slate-300 hover:cursor-pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* middle */}
        <div className="middle flex flex-col items-center justify-center mt-2  ">
          <img
            className=" object-cover rounded-full w-16 h-16 border  border-slate-500"
            src={Profile1}
            alt=""
          />
          <div className="text-sm font-semibold mt-3">Jhon Doe</div>
          <div className="text-[12px]">Graphics Designer</div>
          <button className=" flex items-center text-[10px] py-1 px-3 gap-3 mt-2 border border-black rounded-full ">
            Change profile{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-4 "
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </button>

          <form className="flex flex-col gap-2 mt-4">
            <input
              placeholder="Full name"
              className="bg-slate-200 rounded-sm   placeholder:text-[14px] placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            ></input>
            <input
              placeholder="Address name"
              className="bg-slate-200 rounded-sm  placeholder:text-[14px] placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            ></input>
            <input
              placeholder="Post name"
              className="bg-slate-200 rounded-sm  placeholder:text-[14px] placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            ></input>
            <input
              placeholder="Email Address"
              className="bg-slate-200  rounded-sm placeholder:text-[14px] placeholder:text-slate-400 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
            ></input>

            <button className=" py-2 rounded-sm bg-sky-400 text-white">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePanel;
