import React from 'react'

const Questions = () => {
  return (
    <div className='questions-section'>
        <div className="questions-container">
            <div className="questions-heading">
                <div className="question-title">
                    <h3> How to scroll (move screen up/down while cursor remains fixed at same screen position) in Vim </h3>
                    <p> - 103 + </p>
                </div>

                <div className="question-author-details">
                    <div className="author-desc">
                        <img src="/author.jpg" alt="a" />
                        <p> Richardo Rocha </p>
                        <div>
                            <p> 9038 </p>
                        </div>
                    </div>
                    <div className="question-asked-time">
                        <p> Asked 2years 1month ago | Active 21 days ago | Viewed 123k times </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions