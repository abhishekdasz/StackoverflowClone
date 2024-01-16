import React from 'react'
import { AiOutlineHome, AiOutlineGlobal, AiOutlineTeam, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi2";
import './LeftSideBar.scss'


const LeftSideBar = () => {
  return (
    <div className='leftSidebar-section'>
      <div className="leftSidebar-container">
        <div className="left-navbar">
          <a href="/"> <AiOutlineHome size={20} /> <p> Home </p> </a>
          <a href="/"> <AiOutlineGlobal size={20} /> <p> Public </p> </a>
          <a href="/"> <AiOutlineTeam size={20} /> <p> Collectives </p> </a>
          <a href="/"> <HiOutlineBriefcase size={20} /> <p> Jobs </p> </a>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar