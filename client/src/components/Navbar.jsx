import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { useAuth } from "../contexts/AuthContext";
import { useUserDetails  } from "../contexts/UserContext";

const Navbar = () => {
  const { usersInfo } = useUserDetails();
  const { logout } = useAuth();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleLogout = () => logout();

  useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);

  const handleDropdownOptionClick = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="Wrapper  bg-opacity-[95%] backdrop-blur-[2px] sticky top-0 shadow-[0px_1px_10px_0px_#00000024] flex justify-between bg-white px-7 py-5 md:py-4">
      <div className="left flex items-center gap-3 ">
        <p className="text-lg font-bold text-sky-500">Socio</p>
        <div className="searchbar">
          <input
            className="h-5 bg-slate-200 rounded-full py-4 pl-3 pr-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Search.."
            type="text"
          />
        </div>
      </div>
      <div className="center"></div>
      <div className="right flex items-center text-sky-500 ">
        <div className="btn hover:cursor-pointer flex items-center hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="me-1 h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <div className="me-5 md:block hidden font-medium">Home</div>
        </div>

        <div className="relative" onClick={toggleDropdown} ref={dropdownRef}>
          <div className="profile flex items-center gap-2 rounded-full md:bg-sky-400 text-white px-3 py-2 hover:cursor-pointer">
            <img
              className="h-6 w-6 object-cover rounded-full bg-emerald-700"
              src={usersInfo?.user?.image}
              alt=""
            />
            <p className="md:block hidden">{usersInfo?.user?.firstName}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="md:block hidden h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            {dropdownVisible && (
              <div className="dropDown rounded-md border bg-white top-7 shadow-md absolute right-0 mt-8 w-48 h-92">
                <div
                  className="dropOption cursor-pointer px-10 py-5 hover:bg-slate-200 hover:rounded-t-md text-black flex items-center"
                  onClick={handleDropdownOptionClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 me-2"
                  >
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                  </svg>
                  <Link to="/profile">My Profile</Link>
                </div>

                <div
                  className="dropOption cursor-pointer px-10 py-5 hover:bg-slate-200 hover:rounded-t-md text-black flex items-center"
                  onClick={handleDropdownOptionClick}
                >
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

                <div
                  className="dropOption cursor-pointer px-10 py-5 hover:bg-slate-200 hover:rounded-b-md text-black flex items-center"
                  onClick={handleDropdownOptionClick}
                >
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
                  <p onClick={ handleLogout }>Log out</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
