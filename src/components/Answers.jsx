import React from 'react'
import './Answers.scss'
import { FaMinus} from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

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
                    <div>
                        <p> Author:  </p>
                        <p id='name'> javed (308) </p>
                    </div>
                    <p> Answered: Dec 9 '19 at 8:20 </p>
                </div>
                <div className="btn">
                    <p id='minus'> <FaMinus/> </p>
                    <p id='num'> 25 </p>
                    <p id='plus'> <FiPlus/> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Answers