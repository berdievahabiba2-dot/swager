
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import ico from '../Companent/logo.png'

const Layout = () => {
  return (
    <div>
      <header>
        <nav className="menu">
          <img src={ico} alt="" />
          <Link to="/">About Us</Link>
          <Link to="/services">Courses</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>

          <div className='bb'>
            <button className='but'>Get consultation</button>
            <button className='but1'>Log in / Register</button>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
