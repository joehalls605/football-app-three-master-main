import React, { useState } from 'react';
import footballersData from './Data/FootballerData'; // Import footballers data
import { GameProvider } from './Context/GameContext'; // Import the GameProvider from the context
import Question from './Components/Question';
import Timer from './Components/Timer';
import Homepage from './Pages/Homepage';
import Score from './Components/Score';
import Game from './Pages/Game';

const App = () => {
  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState(false);

  // Function to handle user's answer to a question
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Function to restart the game
  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setSelectedLeague(''); // Reset selectedLeague when restarting the game
    setAnswerCorrect(false); // Reset answerCorrect when restarting the game
  };

  // Function called when the timer finishes
  const handleTimerFinish = () => {
    setGameOver(true);
  };

  // Function to start the game with a selected league
  const handleStartGame = (league) => {
    setSelectedLeague(league);
    return <Game/> // This line seems to be unnecessary
  };

  // Function to render different game screens based on conditions
  const renderGame = () => {
    // Show homepage if no league is selected
    if (!selectedLeague) {
      return <Homepage setGameStarted={handleStartGame}/>;
      console.log("Hi"); // This line won't be executed due to the previous return statement
    }

    // Show end-game screen if the game is over
    if (gameOver) {
      return (
        <div>
          {/* Header for the end-game screen */}
          <header className='bg-gray-900 text-white p-4 flex justify-between items-center'>
            <div>
              <h1 className='text-xl py-2 font-mono'>Football Player Quiz</h1>
            </div>
            <nav>
              <ul className='flex items-center space-x-4'>
                <li className='ml-2 font-mono' >Scoreboard</li>
              </ul>
            </nav>
          </header>

          {/* Content for the end-game screen */}
          <div className="flex flex-col items-center font-mono">
            <h2 className="text-3xl pt-10">Time is up!</h2>
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
                Main Menu
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Filter footballers data based on the selected league
    const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);

    // Check if all questions have been answered
    if (currentQuestionIndex >= filteredFootballersData.length) {
      setGameOver(true);
      return null;
    }

    // Get the current question data
    const currentQuestion = filteredFootballersData[currentQuestionIndex];

    return (
      <div>
        {/* Header for the main game */}
        <header className='bg-gray-100 text-white p-4 flex justify-between items-center'>
          <div>
            {/* Content for the header */}
          </div>
          <nav>
            <ul className='flex items-center space-x-4'>
              {/* Content for the navigation */}
            </ul>
          </nav>
        </header>

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

  // Render the App component
  return <div>{renderGame()}</div>;
};

export default App;
