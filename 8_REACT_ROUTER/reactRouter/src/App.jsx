
import './App.css'

// 1 config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'


//Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'



function App() {

  return (
    <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          {/** 9 - Search */}
          <SearchForm />
          <Routes>
            {/** Links com react-router */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/**Rota dinamica */}
            <Route path='/products/:id' element={<Product />} />
            <Route path='/products/:id/info' element={<Info />} />
            {/* 9 - Search */}
            <Route path='/search' element={<Search />} />
            {/** 10- Redirect */}
            <Route path='/company' element={<Navigate to="/about"/>} />
            {/** 7 - no match route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
