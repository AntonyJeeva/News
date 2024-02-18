import React from 'react'
import '../Styles/Navbar.css'

function NavBar() {
  return (
    <div className='navbar'>

    
    <button className='nav-btn'> General News </button>
    <button className='nav-btn'> Breaking News </button>

      <div className='contact'>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default NavBar