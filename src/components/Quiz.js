import React,{useState} from "react"
import "../css/style.css"
import {QuizData} from "./Quizdata"

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore,setShowScore] = useState(false);
    const [score,setScore] = useState(0);

    const handleAnswer = (isCorrect) =>
    {
    if(isCorrect){
        setScore(score+1);
    }
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QuizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
        }
    };
    return (
        <div className="app">
         <div className="navbar">
        <span>View Highscore </span><i className="fas fa-hand-point-left fa-lg"></i>
        </div>
        {showScore ? (
            <div className="scoresection">
              You scored {score} out of {QuizData.length}
            </div>
        ):(
        <>
        <div className="quesbox">
           <div className="quescount">
             <span>Question {currentQuestion + 1}</span>/{QuizData.length}
           </div>
           <div className="questext">
            {QuizData[currentQuestion].question}
           </div>
           <div className="answers">
               {QuizData[currentQuestion].options.map((options)=>(
                   <button onClick={()=> handleAnswer(options.isCorrect)}> {options.answerText}</button>
               ))}
           </div>
        </div>
        </>)}
        </div>
    )
}

export default Quiz
