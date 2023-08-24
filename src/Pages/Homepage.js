import React, { useState } from 'react';
import Game from './Game';

// Homepage component
const Homepage = ({ setGameStarted }) => {
  // Function to start the game with a selected league
  const handleStartGame = (league) => {
    setGameStarted(league);
  };

  return (
    <div className='flex flex-col min-h-screen'>

      {/* Header section */}
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

      {/* Main content section */}
      <main className='flex-grow flex flex-col items-center p-10'>
        <h2 className='text-xl py-6 font-mono'>Choose your league</h2>
        <div className='flex space-x-4'>

          {/* Button for Premier League */}
          <button onClick={() => handleStartGame('Premier League')} className='bg-blue-500 font-mono text-white px-5 py-2 rounded transition-colors duration-300 hover:bg-blue-600 my-2'>
  Premier League
  <img src='./public/Images/Premier.png' alt='Premier League' />
</button>

<button onClick={() => handleStartGame('Championship')} className='bg-blue-500 font-mono text-white px-5 py-2 rounded transition-colors duration-300 hover:bg-blue-600 my-2'>
  Ipswich
  <img src='./public/Images/championship.png' alt='Championship' />
</button>
        </div>
      </main>

      {/* Footer section */}
      <footer className='bg-gray-900 text-white p-4 text-center font-mono'>
        <p className='text-xs'>&copy; {new Date().getFullYear()} Football Player Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
