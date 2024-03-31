import React from "react";
import EditProfilePanel from "./EditProfilePanel";
import FriendReq from "./FriendReq";
import FriendsCount from "./FriendsCount";
import Postbar from "./Postbar";
import Post from "./Post";

const LoggedProfile = () => {
  return (
    <div>
      <div className="feedContainer w-full bg-slate-100 px-8 grid gird-cols-0 md:grid-cols-3 md:gap-3   ">
        <div className="feedLeft mt-6 ">
          <EditProfilePanel />
          <FriendReq />
          <FriendsCount />
        </div>
        <div className="feedCenter mt-1 md:col-span-2">
        
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default LoggedProfile;
