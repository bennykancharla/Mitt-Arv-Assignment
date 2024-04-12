
import React from 'react'
import {useHistory} from "react-router"
import "./index.css"

const Navbar =() => {
  // const history = useHistory()
  const onLogout = () => {
  //  history.push("/login")
  console.log("Logged Out")

  }

  return (
    <nav className='nav-container'>
        <h1 className='navbar-heading'>
            Recipes
        </h1>
        <button type='button' className='logout-btn' onClick={onLogout}>
            Logout
        </button>
    </nav>      
  )
}

export default Navbar