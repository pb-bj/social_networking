import React from "react";
import Profile1 from "../assets/profile/profile1.jpg";
import Postbar from "./Postbar";
import Post from "./Post";
import EditProfile from "./EditProfile";
import FriendReq from "./FriendReq";
import FriendsCount from "./FriendsCount";
import PostPanel from "./PostPanel";

const Feed = () => {
  return (
    <div>
      <div className="feedContainer w-full bg-slate-100 px-8 grid gird-cols-0 md:grid-cols-3 md:gap-3   ">
        <div className="feedLeft mt-6 ">
          <EditProfile />
          <FriendReq />
          <FriendsCount />
        </div>
        <div className="feedCenter mt-6 md:col-span-2">
          <Postbar />
          <Post />
          <Post />
        </div>
     
      </div>
    </div>
  );
};

export default Feed;
