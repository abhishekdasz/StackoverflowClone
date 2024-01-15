import React from 'react'
import authorImg from '../assets/author.jpg'
import saveImg from '../assets/save-tag.png'
import shareImg from '../assets/share.png'
import commentImg from '../assets/comment.png'

const Questions = () => {
  return (
    <div className='questions-section'>
        <div className="questions-container">



            <div className="questions-heading">
                <div className="question-title">
                    <h3> Visual studio code cmd error: Cannot be loaded because running scripts is disabled on this system </h3>
                    <div className="numbers">
                        <div className="number">
                            <p id='minus'> - </p>
                            <p id='num'> 103 </p>
                            <p id='plus'> + </p>
                        </div>
                    </div>
                </div>

                <div className="question-author-details">
                    <div className="author-desc">
                        <img src={authorImg} alt="authorImg" />
                        <p> Richardo Rocha </p>
                        <div>
                            <p> 9038 </p>
                        </div>
                    </div>
                    <div className="question-asked-time">
                        <pre> Asked 2years 1month ago | Active 21 days ago | Viewed 123k times </pre>
                    </div>
                </div>
            </div>


            <div className="questions-description">
                <p> Inside of visual studio code, I'm trying to execute a script.bat from the command line, but I'm getting the following error. </p>
                <div className="compiler">
                    <p> File C:\Theses_Repo\train-cnn\environment\Scripts\activate.psl cannot be loaded because running scripts is disabled on this system. </p>
                </div>
                <p> After reading <a href="/"> this</a> I tried to run the visual studio code in administrator mode, thinking that the problem was a matter of privileges. But the error is throwing anyway. </p>
            </div>
            

            <div className="question-footer">
                <div className="save-ques">
                    <img src={saveImg} alt="saveImg" />
                    <p> 20 </p>
                </div>
                <div className="share-comment">
                    <img src={shareImg} alt="shareImg" />
                    <img src={commentImg} alt="commentImg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions