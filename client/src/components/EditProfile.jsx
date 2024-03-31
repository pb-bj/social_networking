import { Link } from "react-router-dom";
import { useUserDetails } from "../contexts/UserContext";


const EditProfile = () => {
  const { usersInfo } = useUserDetails();
  return (
    <div className="profile rounded-lg  md:w-[400px]   py-10 px-7 bg-white md:fixed overflow-y-auto ">
      <div className="profileinfotop flex justify-between ">
        <div className="profileInfo flex gap-3">
          <img
            className=" object-cover rounded-full w-10 h-10"
            // src={usersInfo?.user?.image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
            src={usersInfo?.user?.image ? `${import.meta.env.VITE_BASE_URL}/${usersInfo?.user?.image}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
            alt=""
          />
          <h6 className="">
            {usersInfo.user?.firstName} {usersInfo.user?.lastName}<p className=" text-[12px]">2 Friends</p>
          </h6>
        </div>
        <Link to="/profile">
          <button className="bg-slate-200 py-1 px-4 rounded-full">Edit</button>
        </Link>
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
        <p>{usersInfo?.user?.address}</p>
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
        <p>{usersInfo.user?.work}</p>
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
  );
};

export default EditProfile;
