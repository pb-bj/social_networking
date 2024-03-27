import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
// import Layout from "./Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* register and log in here  */}
        {/* <Route path="/" element={<Layout/>} >  */}
        {/* Profile page goes here */}
        <Route path="/" element={<Home />} />

        {/* </Route> */}
        <Route path="footer" element={<Footer />} />
        {/* <Route path="/Myprofile" element={<MyProfile />}>
          <Route path="/Navbar" element={<Navbar />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
