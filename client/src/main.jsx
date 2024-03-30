import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Toaster } from 'react-hot-toast';
import AuthProvider from "./contexts/AuthContext";
import UserProvider from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Toaster/>
     <AuthProvider>
      <UserProvider>
        <App />
        </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)
