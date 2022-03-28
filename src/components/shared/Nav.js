import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/books'>Books</NavLink>
    <NavLink to='/create-book'>Create Book</NavLink>
  </nav>
)

export default Nav