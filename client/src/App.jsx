import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Layout from "./Layout"

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
  )
}

export default App