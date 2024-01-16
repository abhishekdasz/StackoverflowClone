import React from 'react'
import Questions from './Questions/Questions'
import Answers from './Answers/Answers'
import LeftSideBar from '../Lefside/LeftSideBar'
import Rightside from '../Righside/Rightside'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="left-sidebar">
        <LeftSideBar/>
      </div>
      <div className="quest-ans-rightSidebar">
        <div className="quest-ans">
          <Questions/>
          <br />
          <Answers/>
        </div>
        <div className="right-sidebar">
          <Rightside/>
        </div>
      </div>

    </div>
  )
}

export default HeroSection