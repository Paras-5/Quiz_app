import React,{useState} from "react"
import "../css/style.css"
import Quizdata, { QuizData } from "./Quizdata"

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState("0");
    const [showScore,setShowScore] = useState("");
    const [score,setScore] = useState("0");

    const handleAnswer = (isCorrect) =>
    {
    if(isCorrect){
        setScore(score+1)
    }
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QuizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
        }
    };
    return (
        <>
        <div className="navbar">
        <span>View Highscore </span><i className="fas fa-hand-point-left fa-lg"></i>
        </div>
        <div className="quesbox">
           <div className="questext">
            {Quizdata[1].question}
           </div>
           <div className="answers">
               {QuizData[1].options.map((options)=>(
                   <button onClick={()=> handleAnswer(options.isCorrect)}> {options.answerText}</button>
               ))}
           </div>
        </div>
        </>
    )
}

export default Quiz
