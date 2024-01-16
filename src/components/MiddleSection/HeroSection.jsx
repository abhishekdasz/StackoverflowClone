import React from 'react'
import Questions from './Questions/Questions'
import Answers from './Answers/Answers'
import SideBar from '../Lefside/SideBar'
import Rightside from '../Righside/Rightside'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="left-sidebar">
        <SideBar/>
      </div>
      <div className="quest-ans">
        <Questions/>
        <br />
        <Answers/>
      </div>
      <div className="right-sidebar">
        <Rightside/>
      </div>
    </div>
  )
}

export default HeroSection