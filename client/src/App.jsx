import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
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
      
            {/* <Route path="/" element={<Layout/>} >  */}
            <Route path="/login" element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/resetPassword" element={<ResetPassword/>}/>



            
      {/* Profile page goes here */}
            <Route path="/" element={<Home/>}/>
            <Route path="/profile/:id?" element={<Profile/>}/>

      {/* </Route>
 */}
    </Routes>

    </BrowserRouter>
  )
}

export default App