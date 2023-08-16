// Button.js
import React, { useState, useEffect } from 'react';

const Button = ({ name, correctAnswer, handleAnswer, setAnswerCorrect }) => {
  const [isSelected, setSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (isSelected) {
      const isCorrectAnswer = name === correctAnswer;
      setIsCorrect(isCorrectAnswer);
      setTimeout(() => {
        handleAnswer(isCorrectAnswer);
        setAnswerCorrect(isCorrectAnswer);
        setSelected(false);
      }, 800); // Wait for 1 second and then move to the next question
    }
  }, [isSelected, name, correctAnswer, handleAnswer, setAnswerCorrect]);

  const handleClick = () => {
    setSelected(true);
  };

  const buttonClass = `bg-gray-900 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700 ${
    isSelected ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : ''
  }`;

  


  return (
    <div>
      <button className={`${buttonClass} w-60 h-40 text-lg`} onClick={handleClick} disabled={isSelected}>
        {name}
      </button>
    </div>
  );
};

export default Button;
