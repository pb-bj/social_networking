import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState( localStorage.getItem('token') || null );

    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem();
    };

    return <AuthContext.Provider value={ { login, token, logout } }>{ children}</AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;