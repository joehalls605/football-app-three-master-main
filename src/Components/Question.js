// Question.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Hint from './Hint';
import Button from './Button';
import Score from './Score';
import useFootballerButtons from '../Hooks/useFootballerButtons';
import useTimer from '../Hooks/useTimer';

// Question component
const Question = ({ questionData, handleAnswer, footballersData, selectedLeague, answerCorrect, setAnswerCorrect }) => {
  // Use custom hook to manage footballer buttons and correct footballer info
  const { correctFootballer, footballerButtons } = useFootballerButtons(footballersData, selectedLeague, questionData);

  // State for score and game over
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // This function will be called when the timer finishes
  const handleTimerFinish = () => {
    setGameOver(true);
  };

  // useTimer hook will handle the timer and call the handleTimerFinish function when it's done
  const secondsLeft = useTimer(30, handleTimerFinish);

  // Function to render the game content
  const renderGame = () => {
    if (gameOver) {
      return (
        // Game over screen
        <div className="flex flex-col items-center">
          <h2 className="text-3xl p-5">Game Over!</h2>
          <p className="text-3xl p-5">You scored: {score}</p>
          {/* Implement your restart game logic */}
        </div>
      );
    }

    // Main game content
    return (
      <div>
        <div className="flex flex-col items-center ">
          {correctFootballer && (
            // Hint component
            <Hint
              nationality={correctFootballer.nationality}
              position={correctFootballer.position}
              club={correctFootballer.club}
            />
          )}
          <div className="grid grid-cols-2 gap-10 p-4">
            {/* Map through footballer buttons */}
            {footballerButtons.map((footballer, index) => (
              // Button component
              <Button
                key={index}
                name={footballer.name}
                correctAnswer={correctFootballer.name}
                setScore={setScore}
                score={score}
                handleAnswer={handleAnswer}
                setAnswerCorrect={setAnswerCorrect}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render the Question component
  return <div>{renderGame()}</div>;
};

export default Question;
