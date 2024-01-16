import React from 'react'
import './Answers.scss'

const Answers = () => {
  return (
    <div className='answers-section'>
        <div className="answers-container">
            <div className="ans-nav">
                <p> 20 Answers </p>
                <div className="nav">
                    <div id='active'> <p> Votes </p> <span>  </span> </div>
                    <p> Oldest </p>
                    <p> Active </p>
                </div>
            </div>

            <div className="ans-author-details">
                <div className="auth-det">
                    <p> Author:  </p>
                    <p> javed (308) </p>
                    <p> Answered: Dec 9 '19 at 8:20 </p>
                </div>
                <div className="btn">
                    <p id='minus'> - </p>
                    <p id='num'> 103 </p>
                    <p id='plus'> + </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Answers