import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <h1 className="nav-logo">Caleb Taylor</h1>

        <div className="nav-right">
          <a href="https://www.youtube.com/">Home</a>
          <a href="https://www.youtube.com/">About</a>
          <a href="https://www.youtube.com/">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;