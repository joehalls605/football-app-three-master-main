// Question.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Hint from './Hint';
import Button from './Button';
import Score from './Score';
import useFootballerButtons from '../Hooks/useFootballerButtons';
import useTimer from '../Hooks/useTimer';

const Question = ({ questionData, handleAnswer, footballersData, selectedLeague, answerCorrect, setAnswerCorrect }) => {
  const { correctFootballer, footballerButtons } = useFootballerButtons(footballersData, selectedLeague, questionData);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // This function will be called when the timer finishes
  const handleTimerFinish = () => {
    setGameOver(true);
  };

  // useTimer hook will handle the timer and call the handleTimerFinish function when it's done
  const secondsLeft = useTimer(30, handleTimerFinish);

  const renderGame = () => {
    if (gameOver) {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl p-5">Game Over!</h2>
          <p className="text-3xl p-5">You scored: {score}</p>
          {/* Implement your restart game logic */}
        </div>
      );
    }

    return (
      <div>
      <div className="flex flex-col items-center ">
        {correctFootballer && (
          <Hint
            nationality={correctFootballer.nationality}
            position={correctFootballer.position}
            club={correctFootballer.club}
          />
        )}
        <div className="grid grid-cols-2 gap-10 p-4">
          {footballerButtons.map((footballer, index) => (
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
        {/* <ScorePopup score={score} /> Render the ScorePopup component */}

        </div>
      </div>
      </div>
    );
  };

  return <div>{renderGame()}</div>;
};

export default Question;
