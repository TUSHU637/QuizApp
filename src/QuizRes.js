import React from 'react'

function QuizRes(props) {
    console.log(props.score)
  return (
    <div className='new-box'>
    Your Score:{props.score}<br/>
    Total Score:{props.totalScore}
    <button className='btn' onClick={props.tryAgain}>Try Again</button>
  </div>
  )
}

export default QuizRes