import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';
import {ques} from './data.js';
import QuizRes from './QuizRes';

function App() {
  const [currentQue,setCurrentQue]=useState(0);
  const [clicked,setClicked]=useState("");
  const [score,setScore]=useState(0);
 const [showResult,setShowResult]=useState(false);
  //console.log(ques[0].que);
  const handleNext=()=>{
    if(clicked===ques[currentQue].correct){
      setScore(score+1);
      console.log(score)
    }
    if(currentQue<ques.length-1){
    setCurrentQue(currentQue+1);
    setClicked("");
  
    }
    else{
     
      setShowResult(true);

    }
  }
  const resetAll=()=>{
    setShowResult(false);
    setScore(0);
    setClicked("");
    setCurrentQue(0);

  }
 
  return (
  
    <div className="main-cont">
   
      <div className="box">
      {showResult ? (
        <QuizRes score={score} totalScore={ques.length} tryAgain={resetAll}/>
        
      ):(
        <>
        <div className="que">
          <h1>{ques[currentQue].que}</h1>
        </div>
        <div className={`option ${(clicked==='a')? "a":""}`} onClick={()=>setClicked("a")}>
          <h3>{ques[currentQue].a}</h3>
        </div>
        <div className={`option ${(clicked==='b')? "b":""}`} onClick={()=>setClicked("b")}>
          <h3>{ques[currentQue].b}</h3>
        </div>
        <div className={`option ${(clicked==='c')? "c":""}`} onClick={()=>setClicked("c")}>
          <h3>{ques[currentQue].c}</h3>
        </div>
        <div className={`option ${(clicked==='d')? "d":""}`} onClick={()=>setClicked("d")}>
          <h3>{ques[currentQue].d}</h3>
        </div>
        <button className="btn" onClick={handleNext}>Next</button>
        </>
        )}
      </div>
      
     
    </div>
  );
}

export default App;
