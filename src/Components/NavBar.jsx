/* eslint-disable react/prop-types */
// import React from 'react'
import '../Styles/Navbar.css'

function NavBar(props) {
  return (
    <div className='navbar'>

    
    <button className='nav-btn'> General News </button>
    <button className='nav-btn' onClick={()=> props.setNewsCategory("technology")} > Tech News </button>
    <button className='nav-btn' onClick={()=> props.setNewsCategory("health")} > Health News </button>
    <button className='nav-btn' onClick={()=> props.setNewsCategory("science")} > Science News </button>
    <button className='nav-btn' onClick={()=> props.setNewsCategory("sports")} > Sports News </button>

      <div className='contact'>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default NavBar