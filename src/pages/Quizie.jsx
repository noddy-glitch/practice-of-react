import React, { useState } from "react";
import "./Quizie.css";

const Quizie = () => {
  const questions = [
    {
      question: "What is React?",
      options: ["A database", "A JavaScript library", "A compiler", "A browser"],
      answer: "A JavaScript library",
    },
    {
      question: "Which hook is used to manage state?",
      options: ["useState", "useEffect", "useProps", "useStore"],
      answer: "useState",
    },
    {
      question: "React was developed by ___?",
      options: ["Google", "Microsoft", "Facebook", "Twitter"],
      answer: "Facebook",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="container">
      {!finished ? (
        <div className="quiz-box">
          <h2 className="question">{questions[index].question}</h2>

          <div className="options">
            {questions[index].options.map((opt, i) => (
              <button key={i} onClick={() => checkAnswer(opt)} className="option-btn">
                {opt}
              </button>
            ))}
          </div>

          <p className="progress">
            {index + 1} of {questions.length}
          </p>
        </div>
      ) : (
        <div className="result-box">
          <h1>🎉 Quiz Completed!</h1>
          <p className="score">
            You scored <b>{score}</b> / {questions.length}
          </p>
          <button className="restart-btn" onClick={() => (window.location.reload())}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizie;
