import React, { useEffect, useState } from "react";
import Postbar from "./Postbar";
import Post from "./Post";
import EditProfile from "./EditProfile";
import FriendReq from "./FriendReq";
import FriendsCount from "./FriendsCount";
import { getFeedPostsRequest } from "../services/postApi";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    feedPosts();
  }, []);

  const feedPosts = async () => {
    try {
      const result = await getFeedPostsRequest();
      setPosts(result);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="feedContainer w-full  bg-slate-100 px-8 grid gird-cols-0 md:grid-cols-3 md:gap-3   ">
        <div className="feedLeft mt-6 ">
          <EditProfile />
          {/* <FriendReq />
          <FriendsCount /> */}
        </div>
        <div className="feedCenter mt-6 md:col-span-2 ">
          <Postbar />
          <div className="scroll mt-3 ">
            <Post posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
