import React from "react";
import Profile1 from "../assets/profile/profile1.jpg";

const Feed = () => {
  return (
    <div>
      <div className="feedWrapper h-auto md:h-[10000px] bg-[#f1f1f1] ">
        <div className="feedContainer flex flex-col md:flex-row  ">
          <div className="feedLeft flex flex-col items-center w-full md:w-[57%] ">
            <div className="profile  hidden md:block rounded-lg w-[300px] h-[290px]  mt-12 py-10 px-7 bg-white ">
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

              <div className="line my-4 bg-slate-300 py-[1px] rounded-full"></div>

              <div className="address flex items-center gap-2 ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
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

              <div className="Job flex items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <p>Graphic Designer</p>
              </div>
              <div className="line my-4 bg-slate-300 py-[1px] rounded-full"></div>

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
          <div className="feedCenter w-full flex flex-col items-center mt-6 md:mt ">
            <div className="shareWrapper mt-6 flex flex-col bg-white px-8 py-8 w-full h-[180px] rounded-md ">
              <div className="sharetop flex  mb-4    gap-5">
                <img
                  className=" object-cover rounded-full w-10 h-10"
                  src={Profile1}
                  alt=""
                />

                <div className="postbar w-[414px] sm:w-[600px] md:w-[600px] rounded-full bg-slate-200 flex items-center justify-center">
                  <input
                    type="text"
                    placeholder="How are you feeling.."
                    className=" md:rounded-none rounded-2xl md:w-[550px] sm:w-[490px] w-[390px] bg-slate-200 h-7 focus:outline-none focus-visible:none"
                  />
                </div>
              </div>

              <div className="line  my-4 bg-slate-300 py-[1px] rounded-full"></div>

              <div className="sharebotm flex item-center justify-between  gap-9">
                <div className="imageicon flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Image
                </div>
                <div className="Clipicon flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-6"
                  >
                    <path d="M3.75 2A1.75 1.75 0 0 0 2 3.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5ZM10.75 2a.75.75 0 0 0 0 1.5h1.5a.25.25 0 0 1 .25.25v1.5a.75.75 0 0 0 1.5 0v-1.5A1.75 1.75 0 0 0 12.25 2h-1.5ZM3.5 10.75a.75.75 0 0 0-1.5 0v1.5c0 .966.784 1.75 1.75 1.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.25.25 0 0 1-.25-.25v-1.5ZM14 10.75a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5A1.75 1.75 0 0 0 14 12.25v-1.5ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                  Clip
                </div>
                <div className="Attachmenticon flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.914 4.086a2 2 0 0 0-2.828 0l-5 5a2 2 0 1 0 2.828 2.828l.556-.555a.75.75 0 0 1 1.06 1.06l-.555.556a3.5 3.5 0 0 1-4.95-4.95l5-5a3.5 3.5 0 0 1 4.95 4.95l-1.972 1.972a2.125 2.125 0 0 1-3.006-3.005L9.97 4.97a.75.75 0 1 1 1.06 1.06L9.058 8.003a.625.625 0 0 0 .884.883l1.972-1.972a2 2 0 0 0 0-2.828Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Attachment
                </div>
                <button className="bg-sky-400 text-white py-1 px-3 rounded-full">
                  post
                </button>
              </div>
            </div>
            {/* Post */}
            <div className="posts mt-10 flex flex-col py-10 px-7 bg-white w-full h-[700px]">
              {" "}
              <div className="posttop flex justify-between items-center">
                <div className="posttopin flex gap-4">
                  <img
                    className=" object-cover rounded-full w-10 h-10"
                    src={Profile1}
                    alt=""
                  />
                  <div className="">
                    Jhon Doe <p className=" text-[9.5px] ">Graphic Designer</p>
                  </div>
                </div>

                <div className="follow py-2 px-2 bg-slate-200  rounded-full">
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
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="postdesc mt-2 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia recusandae ea maiores facere unde iste! Reprehenderit
                officia esse sed a. Optio sequi accusamus fugiat dolor nesciunt
                quaerat eos, voluptates possimus ...
              </div>
              <div className="postcontent mt-2 ">
                <img
                  className=" w-full object-cover  h-[450px]"
                  src={Profile1}
                  alt=""
                />
              </div>
              <div className="postinteract mt-2 flex justify-between">
                <div className="like items-center gap-2 flex">
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
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                  100 Likes
                </div>
                <div className="Comment flex items-center gap-2">
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
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                  100 Comments
                </div>
              </div>
            </div>

            <div className="posts mt-10 flex flex-col py-10 px-7 bg-white w-full h-[700px]">
              {" "}
              <div className="posttop flex justify-between items-center">
                <div className="posttopin flex gap-4">
                  <img
                    className=" object-cover rounded-full w-10 h-10"
                    src={Profile1}
                    alt=""
                  />
                  <h6 className="">
                    Jhon Doe <p className=" text-[9.5px] ">Graphic Designer</p>
                  </h6>
                </div>

                <div className="follow py-2 px-2 bg-slate-200  rounded-full">
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
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="postdesc mt-2 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia recusandae ea maiores facere unde iste! Reprehenderit
                officia esse sed a. Optio sequi accusamus fugiat dolor nesciunt
                quaerat eos, voluptates possimus ...
              </div>
              <div className="postcontent mt-2 ">
                <img
                  className=" w-full object-cover  h-[450px]"
                  src={Profile1}
                  alt=""
                />
              </div>
              <div className="postinteract mt-2 flex justify-between">
                <div className="like items-center gap-2 flex">
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
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                  100 Likes
                </div>
                <div className="Comment flex items-center gap-2">
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
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                  100 Comments
                </div>
              </div>
            </div>
          </div>

          {/* Feed right */}
          <div className="feedRight flex flex-col items-center w-full md:w-[50%]">
            <div className="FriendReq hidden md:block mt-12 w-[250px] h-[210px] py-9 px-7 rounded-md bg-white">
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

                <div className="follow  rounded-full">
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
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
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

                <div className="follow  rounded-full">
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
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="FriendReq hidden md:block mt-10 w-[250px] h-[210px] py-9 px-7 rounded-md bg-white">
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

                <div className="follow  rounded-full">
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

                <div className="follow   rounded-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
