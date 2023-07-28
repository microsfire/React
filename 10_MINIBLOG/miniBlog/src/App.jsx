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
import Dashbord from "./pages/dashboard/Dashboard"
import CreatePost from "./pages/post/CreatePost"
// context
import { AuthProvider } from "./context/AuthContext"

// hooks
import { useState, useEffect } from "react"
import { useAuthetication } from "./hooks/useAuthentication"

// firebase
import { onAuthStateChanged } from "firebase/auth"




function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthetication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div>
        <AuthProvider value = {{user}}>
          <BrowserRouter>
            <Navbar />
            <div className="container">
             <Routes>
               <Route path="/" element={ <Home /> } />
               <Route path="/about" element={<About />} />
               <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
               <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
               <Route path="/dashboard" element={user ? <Dashbord /> : <Navigate to="/login" />} />
               <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
             </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default App