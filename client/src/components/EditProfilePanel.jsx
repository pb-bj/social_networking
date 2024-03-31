import { useState, useEffect } from 'react';
import { updateUserDetails } from '../services/api';
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { useUserDetails } from "../contexts/UserContext";
import { jwtDecode } from 'jwt-decode';

const EditProfilePanel = ({ setShowEditProfile }) => {
  const { token } = useAuth();
  const { usersInfo } = useUserDetails();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    address: '',
    work: '',
    image: null
  });

  useEffect(() => {
    // Set user details in state when usersInfo changes
    if (usersInfo) {
      setUserData({
        firstName: usersInfo.user.firstName,
        lastName: usersInfo.user.lastName,
        email: usersInfo.user.email,
        gender: usersInfo.user.gender,
        address: usersInfo.user.address,
        work: usersInfo.user.work,
        image: usersInfo.user.image
      });
    }
  }, [usersInfo]);


  const handleChange = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const fileName = selectedImage.name;

    setUserData(prev => ({
      ...prev,
      image: selectedImage
    }));
    document.getElementById("fileName").textContent = fileName;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        userData.firstName &&
        userData.lastName &&
        userData.email &&
        userData.gender &&
        userData.address &&
        userData.work &&
        userData.image
      ) {
        const formData = new FormData();
        formData.append("firstName", userData.firstName);
        formData.append("lastName", userData.lastName);
        formData.append("email", userData.email);
        formData.append("gender", userData.gender);
        formData.append("address", userData.address);
        formData.append("work", userData.work);
        // formData.append("image", userData.image);
        if (userData.image) {
          formData.append("image", userData.image);
        }

        const decodedToken = jwtDecode(token);
        const id = decodedToken._id;

        if (id && formData && token) {
          console.log(userData)
          await updateUserDetails(id, formData, token);
          setShowEditProfile(false);
          toast.success("Profile updated");
        } else {
          toast.error("Failed to update profile");
        }
      } else {
        toast.error("Please fill in all fields");
      }
    } catch (error) {
      console.error("Failed to update profile", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div  >
      <div className="fixed inset-0 bg-slate-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center  px-7 py-10 ">
        <div className="image rounded-md bg-white px-5 py-7 flex flex-col items-center ">
          <div className="  bg-sky-50 w-[359px] py-4   rounded-md flex flex-col  items-center">
            <label
              htmlFor="fileInput"
              className="mt-3 bg-sky-200 px-10 py-3 rounded-md text-sm  cursor-pointer hover:bg-white hover:ring-1 hover:ring-sky-400 hover:shadow-lg text-slate-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-200"
            >
              <span id="fileName">Change Profile</span>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <form className="flex flex-col mt-3 gap-2" onSubmit={handleSubmit}>
            <div className="div flex gap-2">
              {" "}
              <input
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                type="text"
                className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200  w-44 bg-slate-200 py-1 px-2 rounded-sm "
              />
              <input
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                type="text"
                className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200  w-44 bg-slate-200 py-1 px-2 rounded-sm "
              />
            </div>

            <input
              name="address"
              value={userData.address}
              onChange={handleChange}
              placeholder="Address "
              type="text"
              className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200   bg-slate-200 py-1 px-2 rounded-sm "
            />
            <input
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              type="text"
              className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200   bg-slate-200 py-1 px-2 rounded-sm "
            />

            <div className="div flex gap-2">
              <input
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                placeholder="Gender"
                type="text"
                className="   focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200 w-44 bg-slate-200 py-1 px-2 rounded-sm "
              />
              <input
                name="work" value={userData.work} onChange={handleChange}
                placeholder="Working as"
                type="text"
                className="  focus:ring-2 focus:bg-white focus:outline-none foucs:ring-sky-200  w-44 bg-slate-200 py-1 px-2 rounded-sm "
              />
            </div>

            <div className="buttons grid sm:gird-cols-1 md:grid-cols-2 gap-2">
              {" "}
              <button type='submit' className="bg-sky-400 text-white rounded-sm px-9 py-2">
                Save Changes
              </button>
              <button
                onClick={() => setShowEditProfile(false)}
                className="ring-2 ring-sky-300 text-sky-400 rounded-sm px-9 py-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePanel;
