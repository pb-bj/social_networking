import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Toaster } from 'react-hot-toast';
import AuthProvider from "./contexts/AuthContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Toaster/>
     <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
