import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
     <div>
        <nav>
          <div className='logo'>
            <img src="./images/brand_logo.png"></img>
          </div>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
          </ul>

          <button className='btn'>Login</button>
        </nav>
      </div> 
    </>
  )
}

export default Navbar
