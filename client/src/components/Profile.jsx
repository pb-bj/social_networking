import { useUserDetails } from "../contexts/UserContext";
import nopostImg from "../assets/images/nopost.png";
import EditProfilePanel from "./EditProfilePanel";
import { useState, useEffect } from "react";
import PostEdit from "./PostEdit";
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast'
import { deletePostRequest } from '../services/postApi'

const Profile = ({ posts }) => {
  console.log(posts)
  const { usersInfo } = useUserDetails();
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);
  const { token } = useAuth();
  const [userPost, setUserPost] = useState(posts);

  useEffect(() => {
    setUserPost(posts);
  }, [posts]);

  const orderPosts = userPost.slice().sort((a, b) => {
    const postA = new Date(a.createdAt);
    const postB = new Date(b.createdAt);
    return postB - postA;
  });

  const handleDeletePost = async (postId) => {
    try {
      const result = await deletePostRequest(postId, token);
      if (result) {
        setUserPost(userPost.filter(post => post._id !== postId))
        toast.success('Post Deleted');
      } else {
        toast.error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className=" px-[10%] m-auto ">
      {/* upper profile */}
      {usersInfo && usersInfo.user ? (
        <div
          className="md:grid md:grid-cols-9 mt-2 py-5 px-5 rounded-sm gap-1"
          style={{
            background: "linear-gradient(to top, white 50%, #38BDF8 50%)",
          }}
        >
          <div className="leftside  col-span-2 ">
            <div className="inner flex flex-col items-center gap-3 py-3">
            <img
              className=" object-cover rounded-full md:w-40 md:h-40 w-20 h-20"
              // src={usersInfo?.user?.image}
              src={
                usersInfo?.user?.image
                  ? `${import.meta.env.VITE_BASE_URL}/${usersInfo?.user?.image}`
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
            <button
              onClick={() => setShowEdit(!showEdit)}
              className="bg-slate-200  hover:bg-slate-300 rounded-full text-[12px]  flex items-center gap-2 py-1 px-3  md:py-2 md:px-5"
            >
              Edit Profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" md:w-5 md:h-6 w-3 h-3"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </button>
            </div>
          </div>

          <div className="rightside col-span-7 ">
            <div className="">
              {" "}
              {/* Change profile btn */}
              <div className="top md:pt-12  md:text-[50px] text-sky-500 text-[20px] font-bold md:text-white ">
                {usersInfo.user.firstName} {usersInfo.user.lastName}
              </div>
              <div className="bottom  ">
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  {usersInfo.user.email}
                </div>
                <div className="flex gap-1 items-center">
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
                  {usersInfo.user.work}
                </div>
                <div className="flex gap-1 items-center">
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
                  {usersInfo.user.address}
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="800"
                    fill="#000"
                    className="w-4 h-5"
                    version="1.1"
                    viewBox="0 0 247.582 247.582"
                    xmlSpace="preserve"
                  >
                    <path d="M196.666 93.047V76.445h10v-21h-10v-15h-25v15h-11v21h11v16.424c-29 5.64-51.581 31.564-51.581 62.617 0 35.162 28.69 63.769 63.852 63.769 35.163 0 63.645-28.606 63.645-63.769 0-30.717-21.916-56.427-50.916-62.439zm-12.645 101.207c-21.377 0-38.769-17.392-38.769-38.769 0-21.378 17.392-38.77 38.769-38.77 21.378 0 38.77 17.392 38.77 38.77-.001 21.378-17.392 38.769-38.77 38.769zM127.581 91.404c0-35.162-28.523-63.769-63.686-63.769S0 56.242 0 91.404c0 31.068 22.666 57.003 51.666 62.625v27.99l-8.184-7.057-13.471 16.039 34.295 28.945 35.335-28.831-13.437-16.268-9.537 7.658v-28.674c28.999-6.027 50.914-31.726 50.914-62.427zm-102.373 0c0-21.377 17.392-38.769 38.77-38.769s38.77 17.392 38.77 38.769c0 21.378-17.392 38.77-38.77 38.77s-38.77-17.392-38.77-38.77z"></path>
                  </svg>
                  male
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Null</p>
      )}

      {/* lower profile */}
      {orderPosts.length > 0 ? (
        orderPosts.map((post) => (
          <div key={post._id}>
            {showEditPost && <PostEdit setShowEditPost={setShowEditPost} posts={posts} postId={post._id} />}
            <div className="posts mt-5 flex flex-col   py-10 px-7 bg-white">
              <div className="posttop flex justify-between items-center">
                <div className="posttopin flex gap-4">
                  <img
                    className=" object-cover rounded-full w-10 h-10"
                    // src={post.userId.image}
                    src={
                      post.userId.image
                        ? `${import.meta.env.VITE_BASE_URL}/${post.userId.image}`
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt=""
                  />
                  <div className=" text-bold">
                    <span className="font-bold">
                      {post?.userId?.firstName} {post.userId.lastName}
                    </span>{" "}
                    <p className="text-[14px]">{post.userId.work}</p>
                  </div>
                </div>
                <div className="right flex gap-2">
                  <div className="Options items-center py-2 px-2 bg-slate-200 hover:cursor-pointer hover:bg-red-200 rounded-full" onClick={() => handleDeletePost(post._id)}>
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                  {/* edit post */}
                  <div
                    onClick={() => setShowEditPost(!showEditPost)}
                    className="Options items-center py-2 px-2 bg-slate-200 hover:cursor-pointer hover:bg-yellow-200 rounded-full"
                  >
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </div>
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
        <img className="bg-white mt-3 px-32 py-10 " src={nopostImg} />
      )}
      {showEdit && <EditProfilePanel setShowEditProfile={setShowEdit} />}
    </div>
    // </div>
  );
};

export default Profile;
