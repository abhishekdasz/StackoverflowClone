import React from 'react'
import './Navbar.scss'
import stackLogo from '../assets/logo.svg'
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className='navbar'>
        <section className="navbar_wrapper">
        <div className="navbar">
          <div className="logo">
            <img src={stackLogo} alt="stack-overflow-logo" />
          </div>
          <div className="search_wrapper">
            <AiOutlineSearch className="search_icon" size={20} />
            <input
              className="search_input"
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="menu">
            <a href="/">About</a>
            <a href="/">Product</a>
            <a href="/">For teams</a>
          </div>
          <AiOutlineMenu className="menu_bar" size={20}/>
        </div>
      </section>
    </div>
  )
}

export default NavBar