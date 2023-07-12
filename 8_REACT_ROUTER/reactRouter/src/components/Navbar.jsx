import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

// 1 Links com react-router
const Navbar = () => {
  return (
    <nav>
      {/*
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>
  */}
        {/** NavLink */}
        <NavLink to='/'
        //</nav> className={({isActive}) => (isActive ? 'esta-ativo':'nao-ativo')}
        >Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
    </nav>
  )
}

export default Navbar