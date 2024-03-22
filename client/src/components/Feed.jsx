import React from "react";
import Profile1 from "../assets/profile/profile1.jpg";

const Feed = () => {
  return (
    <div>
      <div className="feedWrapper ">
        <div className="feedContainer flex h-screen  ">
          <div className="feedLeft flex flex-col items-center  w-[57%]  bg-red-600">
            <div className="profile rounded-lg w-[300px] h-[250px]  mt-12 py-10 px-7 bg-red-700 ">
              <div className="profileInfo w-40 flex gap-3">
                <img
                  className=" object-cover rounded-full w-10 h-10"
                  src={Profile1}
                  alt=""
                />
                <h6 className="">
                  Jhon Doe <p className=" text-[12px]">2 Friends</p>
                </h6>
              </div>

              <div className="line my-4 bg-slate-500 py-[1px] rounded-full"></div>

              <div className="address flex ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>Banepa</p>
              </div>

              <div className="Job flex ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <p>Graphic Designer</p>
              </div>
              <div className="line my-4 bg-slate-500 py-[1px] rounded-full"></div>

              <div className="accInteractions flex flex-col">
                <div className="viewInfo flex justify-between gap-20 ">
                  <div className="text-[12px]">Who has viewed your profile</div>{" "}
                  <div className="text-[12px]">12</div>
                </div>
                <div className="viewInfo flex justify-between mt-3 gap-20 ">
                  <div className="text-[12px]">Who has viewed your profile</div>{" "}
                  <div className="text-[12px]">12</div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedCenter w-full bg-emerald-900">Center Content</div>
          <div className="feedRight w-[50%] bg-indigo-800">Right Content</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
