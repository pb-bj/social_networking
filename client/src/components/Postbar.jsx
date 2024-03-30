import React, { useState } from "react";
import Profile1 from "../assets/profile/profile1.jpg";
import PostPanel from "./PostPanel";

const Postbar = () => {
  const [showPostPanel, setShowPostPanel] = useState(false);

  const handelOnClose = () => setShowPostPanel(false);

  return (
    <div className="shareWrapper   flex flex-col bg-white px-8 py-8     rounded-md ">
      <div className="sharetop flex items-center mb-4 gap-5">
        <img
          className=" object-cover rounded-full w-10 h-10"
          src={Profile1}
          alt=""
        />

        <button
          onClick={() => setShowPostPanel(true)}
          className="bg-slate-200 py-3 px-8 text-left text-gray-500 hover:bg-slate-100 hover:ring-1 ring-sky-600 w-[93%] rounded-full"
        >
          How are you feeling..
        </button>

        {/* <input
                type="text"
                placeholder="How are you feeling.."
                className="bg-slate-200  rounded-full pl-5 pr-5 w-[93%] focus:outline-none focus:ring-1 focus:ring-gray-400 "
              /> */}
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
        <div className="Attachmenticon flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-6"
          >
            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
          </svg>
          Audio
        </div>
        {/* <button className="bg-sky-400 text-white py-1 px-3 rounded-full ">
          Post
        </button> */}
      </div>
      <PostPanel onClose={handelOnClose} visible={showPostPanel} />
    </div>
  );
};

export default Postbar;
