import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// css
import './App.css'
// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"



function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App