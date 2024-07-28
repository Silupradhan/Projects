import React, { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      ansoption: [
        { text: "Paris", isCorrect: true },
        { text: "London", isCorrect: false },
        { text: "Berlin", isCorrect: false },
        { text: "Delhi", isCorrect: false },
      ],
    },
    {
      question: "What is the capital of Germany?",
      ansoption: [
        { text: "Berlin", isCorrect: true },
        { text: "Paris", isCorrect: false },
        { text: "London", isCorrect: false },
        { text: "Rome", isCorrect: false },
      ],
    },
    {
      question: "What is the capital of Italy?",
      ansoption: [
        { text: "Rome", isCorrect: true },
        { text: "Paris", isCorrect: false },
        { text: "Berlin", isCorrect: false },
        { text: "London", isCorrect: false },
      ],
    },
    {
      question: "What is the capital of Spain?",
      ansoption: [
        { text: "Madrid", isCorrect: true },
        { text: "Paris", isCorrect: false },
        { text: "Berlin", isCorrect: false },
        { text: "London", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handelClick = (isCorrect) => {
   if(isCorrect === true){
    setScore(score +1)
   }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
  };

  return (
    <>
      <div className="container">
        {showScore ? (<div className="showScore">Congratulation! you have score {score} out of {questions.length}</div>) : (
       <div className="quiz-container">
           
       <span>question {currentQuestion + 1}</span>/{questions.length}
       <div className="qustion-section">
         <p>{questions[currentQuestion].question}</p>
       </div>
       <div className="ans-section">
         {questions[currentQuestion].ansoption.map((ans, index) => {
           return (
             <button key={index} onClick={() =>handelClick(ans.isCorrect)}>
               {ans.text}
             </button>
           );
         })}
         
       </div>
        
     </div>
        )}
        
   
      </div>
    </>
  );
};

export default Quiz;
