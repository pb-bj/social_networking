import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import Layout from "./Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResetPassword from "./pages/ResetPassword"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <BrowserRouter>
  
    <Routes>
{/* register and log in here  */}
      <Route path="/" element={<Layout/>} > 
{/* Profile page goes here */}
      <Route path="/" element={<Home/>}/>

      </Route>

    </Routes>

    </BrowserRouter>
  );
};

export default App;
