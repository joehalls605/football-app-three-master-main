import React, { useState } from 'react';
import footballersData from './Data/FootballerData';
import { GameProvider } from './Context/GameContext'; // Import the GameProvider

import Question from './Components/Question';
import Timer from './Components/Timer';
import Homepage from './Pages/Homepage';
import Score from './Components/Score';
import Game from './Pages/Game';

const App = () => {
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

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setSelectedLeague(''); // Reset selectedLeague when restarting the game
    setAnswerCorrect(false); // Reset answerCorrect when restarting the game
  };

  const handleTimerFinish = () => {
    setGameOver(true);
  };

  const handleStartGame = (league) => {
    setSelectedLeague(league);
    return <Game/>
  };

  const renderGame = () => {
    if (!selectedLeague) {
      return <Homepage setGameStarted={handleStartGame}/>;
      console.log("Hi")
    }

    if (gameOver) {
      return (
        <div className="flex flex-col items-center font-mono">
          <h2 className="text-3xl p-5">Time is up!</h2>
          <p className="text-3xl p-5 align-center">You scored:</p>
          <p className="text-3xl p-5 align-center">{score}</p>
          <div className='pt-10 flex flex-col items-center p-4 '>
          <button
            className="bg-gray-800 text-white px-4 py-2 mb-3 rounded transition-colors duration-300 hover:bg-blue-600 w-32"
            onClick={restartGame}
          >
            Restart
          </button>
          
          <button
            className="bg-gray-800 text-white px-4 py-2  mb-3 rounded transition-colors duration-300 hover:bg-blue-600 w-32"
            onClick={restartGame}
          >
            Home
          </button>
          </div>
        </div>
      );
    }

    const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);

    if (currentQuestionIndex >= filteredFootballersData.length) {
      setGameOver(true);
      return null;
    }

    const currentQuestion = filteredFootballersData[currentQuestionIndex];

    return (
      <div>
        {/* Wrap your renderGame content with GameProvider */}
        <GameProvider>
          {/* Pass down the currentQuestionIndex and score as props */}
          <Question
            questionData={currentQuestion}
            handleAnswer={handleAnswer}
            footballersData={filteredFootballersData}
            selectedLeague={selectedLeague}
            answerCorrect={answerCorrect}
            setAnswerCorrect={setAnswerCorrect}
          />
          {answerCorrect && (
            <div className='flex flex-col items-center'>
              {/* Content for when the answer is correct */}
            </div>
          )}
          <Score score={score} />
          <Timer setGameOver={setGameOver} gameOver={gameOver} />
        </GameProvider>
      </div>
    );
  };

  return <div>{renderGame()}</div>;
};

export default App;
