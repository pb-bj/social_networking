import React from "react";
import Profile1 from "../assets/profile/profile1.jpg";

const EditProfilePanel = () => {
  return (
    <div>
      <div className="editpanel bg-white  px-7 py-10 ">
        <div className="image flex flex-col items-center ">
          <div className=" bg-sky-50 w-[359px] py-4   rounded-md flex flex-col  items-center">
            <img
              className=" object-cover rounded-full w-20 h-20 "
              src={Profile1}
              alt=""
            />

            <div className="name mt-1 font-semibold">Jhon </div>
            <label
              htmlFor="fileInput"
              className="mt-3 bg-sky-200 px-10 py-3 rounded-md text-sm  cursor-pointer hover:bg-white hover:ring-1 hover:ring-sky-400 hover:shadow-lg text-slate-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-200"
            >
              <span id="fileName">Change Profile</span>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const fileName = e.target.files[0].name;
                  document.getElementById("fileName").textContent = fileName;
                }}
              />
            </label>
          </div>

          <form className="flex flex-col mt-3   gap-2">
            <div className="div flex gap-2">
              {" "}
              <input
                placeholder="First Name"
                type="text"
                className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200  w-44 bg-slate-200 py-1 px-2 rounded-sm "
              ></input>
              <input
                placeholder="Last Name"
                type="text"
                className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200  w-44 bg-slate-200 py-1 px-2 rounded-sm "
              ></input>
            </div>

            <input
              placeholder="Address "
              type="text"
              className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200   bg-slate-200 py-1 px-2 rounded-sm "
            ></input>
            <input
              placeholder="Email"
              type="text"
              className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200   bg-slate-200 py-1 px-2 rounded-sm "
            ></input>

            <div className="div flex gap-2">
              <input
                placeholder="Gender"
                type="text"
                className="   focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200 w-44 bg-slate-200 py-1 px-2 rounded-sm "
              ></input>
              <input
                placeholder="Working as"
                type="text"
                className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200  w-44 bg-slate-200 py-1 px-2 rounded-sm "
              ></input>
            </div>

            <div className="buttons grid sm:gird-cols-1 md:grid-cols-2 gap-2">
              {" "}
              <button className="bg-sky-400 text-white rounded-sm px-9 py-2">
                Save Changes
              </button>
              <button className="ring-2 ring-sky-300 text-sky-400 rounded-sm px-9 py-2">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePanel;
