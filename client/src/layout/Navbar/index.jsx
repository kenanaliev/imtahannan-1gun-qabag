import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="heading">
            <h2>Coacher</h2>
        </div>

        <div className="list-button">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li>Help For You</li>
                <li>About Me</li>
                <li>Courses</li>
                <li>Stories</li>
                <li>Webinars</li>
                <li>Contact</li>
                <li><NavLink to={"/Add"}>Add</NavLink></li>
            </ul>
           
           <button>Meet Me</button>
        </div>
    </nav>
  )
}

export default Navbar