import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import './Navbar.css'

export default function Navbar() {

  return (
    <header>
      <nav className='container-nav'>
        <Link to='/'>Filmes</Link>
      </nav>
    </header>
  )
}
