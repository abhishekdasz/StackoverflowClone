import React from 'react'
import Questions from './Questions'
import Answers from './Answers'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <Questions/>
      <br />
      <Answers/>
    </div>
  )
}

export default HeroSection