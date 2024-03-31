import React, { useState } from "react";
import PostEdit from "./PostEdit";
import nopost from "../assets/images/nopost.png";

const Post = ({ posts }) => {
  const orderPosts = posts?.slice().sort((a, b) => {
    const postA = new Date(a.createdAt);
    const postB = new Date(b.createdAt);
    return postB - postA;
  });

  return (
    <>
      {orderPosts && orderPosts.length >= 0 ? (
        orderPosts.map((post) => (
          <div key={post._id}>
            <div className="posts mt-5 flex flex-col py-10 px-7 bg-white">
              <div className="posttop flex justify-between items-center">
                <div className="posttopin flex gap-4">
                  <img
                    className=" object-cover rounded-full w-10 h-10"
                    // src={post.userId.image}
                    // src={usersInfo?.user?.image ? `${import.meta.env.VITE_BASE_URL}/${usersInfo?.user?.image}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                    src={post.userId.image ? `${import.meta.env.VITE_BASE_URL}/${post.userId.image}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                    alt=""
                  />
                  <div className=" text-bold">
                    <span className="font-bold">
                      {post.userId.firstName} {post.userId.lastName}
                    </span>{" "}
                    <p className="text-[14px]">{post.userId.work}</p>
                  </div>
                </div>
                <div className="right flex gap-2">
                  {/* <div className="Options items-center py-2 px-2 bg-slate-200 hover:cursor-pointer hover:bg-sky-200 rounded-full">
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
                  </div> */}
                </div>
              </div>
              <div className="postdesc mt-2 md:text-[14px] text-[12px]">
                {post.content}
              </div>
              <div className="postcontent mt-2">
                <img
                  className="mx-auto"
                  src={`${import.meta.env.VITE_BASE_URL}/${post.image}`}
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
        ))
      ) : (
        <img className="bg-white mt-3 px-32 py-10 " src={nopost} />
      )}
    </>
  );
};

export default Post;
