import React, { useEffect } from 'react';
import { useGameContext } from '../Context/GameContext';
import Question from '../Components/Question';
import Timer from '../Components/Timer';
import footballersData from '../Data/FootballerData';
import Score from '../Components/Score';
import 'tailwindcss/tailwind.css';

const Game = () => {
  const {
    currentQuestionIndex,
    handleAnswer,
    setGameOver,
    gameOver,
    score,
    selectedLeague,
    handleTimerFinish
  } = useGameContext();

  useEffect(() => {
    // Implement your logic here when the component mounts or the context values change
  }, [currentQuestionIndex, gameOver, score, selectedLeague]);

  // Get the current question based on the currentQuestionIndex
  const currentQuestion = footballersData[currentQuestionIndex];

  return (
    <div className="p-2">
      <h1 className="p-4">Guess the footballer</h1>
      {/* Container div with padding for the Score component */}
      <div className="p-4">
        <Score score={score} />
      </div>
      {/* Container div with padding for the Question component */}
      <div className="p-4">
        <Question
          selectedLeague={selectedLeague} // holds value, premier league or championship
          questionData={currentQuestion}
          handleAnswer={handleAnswer}
          footballersData={footballersData}
        />
      </div>
      {/* Container div with padding for the Timer component */}
      <div className="p-4">
        <Timer setGameOver={setGameOver} gameOver={gameOver} handleTimerFinish={handleTimerFinish} />
      </div>
    </div>
  );
};

export default Game;
