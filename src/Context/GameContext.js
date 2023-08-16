import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleTimerFinish = () => {
    setGameOver(true);
  };

  const handleStartGame = (league) => {
    setSelectedLeague(league);
  };

  return (
    <GameContext.Provider
      value={{
        currentQuestionIndex,
        handleAnswer,
        setGameOver,
        gameOver,
        score,
        selectedLeague,
        answerCorrect,
        setAnswerCorrect,
        handleTimerFinish,
        handleStartGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
