import React, { useState } from 'react';

export default function App() {
  // Define an array of questions and their answer options
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Function to handle the click of an answer button
  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect) {
      // If the answer is correct, increment the score
      setScore(score + 1);
    }

    if (nextQuestion < questions.length) {
      // If there are more questions, move to the next question
      setCurrentQuestion(nextQuestion);
    } else {
      // If there are no more questions, show the final score
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        // Display the score when all questions have been answered
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              {/* Display the current question number */}
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>

          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              // Map over answer options and create buttons for each option
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
