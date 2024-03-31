// import { useContext, createContext, useEffect, useState } from "react";
// import { userDetails } from "../services/api";
// import { useAuth } from "./AuthContext";
// import { jwtDecode } from "jwt-decode";
// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const { token } = useAuth();
//     const [usersInfo, setUsersInfo] = useState([]);
//     // console.log(usersInfo)
//     useEffect(() => {
//     const getUserInfo = async () => {
//         try {
//             if (token) {
//                 const decodedToken = jwtDecode(token);
//                 const id = decodedToken._id;

//                 const detail = await userDetails(id);
//                 if (detail) {
//                     setUsersInfo(detail)
//                 } else {
//                     console.log('error')
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//         getUserInfo()
//     }, [token])

//     return <UserContext.Provider value={{ getUserInfo, usersInfo }}>{children}</UserContext.Provider>
// };

// export const useUserDetails = () => {
//     return useContext(UserContext);
// }

// export default UserProvider;

import { useContext, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import statement
import { userDetails } from "../services/api";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const { token } = useAuth();
    const [usersInfo, setUsersInfo] = useState([]);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                if (token) {
                    const decodedToken = jwtDecode(token);
                    const id = decodedToken._id;

                    const detail = await userDetails(id);
                    if (detail) {
                        setUsersInfo(detail);
                    } else {
                        console.log('error');
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        getUserInfo(); // Call getUserInfo immediately after token changes

    }, [token]);

    return <UserContext.Provider value={{ usersInfo }}>{children}</UserContext.Provider>;
};

export const useUserDetails = () => {
    return useContext(UserContext);
};

export default UserProvider;
