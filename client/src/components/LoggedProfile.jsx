import { useEffect, useState } from 'react';
import EditProfilePanel from "./EditProfilePanel";

import Profile from "./Profile";


import { getUserPostsRequest } from '../services/postApi';
import { useAuth } from '../contexts/AuthContext';
import { jwtDecode } from 'jwt-decode';


const LoggedProfile = () => {
  const { token } = useAuth();
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const fetchUserposts = async () => {
      try {
        if (token) {
          const decodedToken = jwtDecode(token);
          const id = decodedToken._id;
          const result = await getUserPostsRequest(id);
          console.log(result);
          setUserPosts(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserposts();
  }, [])
  return (
    <div>
      <div className="feedContainer w-full bg-slate-100 px-8 grid gird-cols-0 md:grid-cols-3 md:gap-3   ">
        <div className="feedLeft mt-6 ">
          <EditProfilePanel />


        </div>
        <div className="feedCenter mt-1 md:col-span-2">
          <Profile posts={userPosts} />


        </div>
      </div>
    </div>
  );
};

export default LoggedProfile;
