import React, { useState } from "react";
import Profile1 from "../assets/profile/profile1.jpg";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbar w-full sticky top-0 bg-[#53abee] h-16 flex justify-between px-10 items-center">
      <h3 className="text-2xl text-white font-bold">Socialize</h3>
      <div className="navSearch md:w-96 w-60 mx-5 py-1 rounded-full bg-white">
        <form action="" className="flex items-center">
          <input
            className="navSearchin md:w-96 rounded-full focus:outline-none focus:none ps-2 mx-2 h-7 border-none"
            type="text"
            placeholder="Search.."
            autoComplete="off"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className=" me-3 w-5 h-5 text-slate-500 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
        </form>
      </div>
      <div className="relative" onClick={toggleDropdown}>
        <img
          src={Profile1}
          className="Profile object-cover rounded-full h-7 w-7"
          alt="Profile"
        />
        {dropdownVisible && (
          <div className="dropDown rounded-md border bg-white top-7 shadow-md absolute right-0 mt-8 w-48 h-92 ">
            <div className="dropOption cursor-pointer px-10 py-5 hover:bg-slate-200 hover:rounded-t-md text-black flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 me-2"
              >
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>
              <Link to="../pages/MyProfile">My Profile</Link>
            </div>

            <div className="dropOption cursor-pointer px-10 py-5 hover:bg-slate-200 hover:rounded-t-md text-black flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 me-2"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Notification
            </div>

            <div className="dropOption cursor-pointer px-10 py-5 hover:bg-slate-200 hover:rounded-b-md text-black flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 me-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
                  clipRule="evenodd"
                />
              </svg>
              Log out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
