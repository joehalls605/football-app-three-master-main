import { useEffect, useState } from 'react';

const useTimer = (initialSeconds, gameOverCallback) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  // The useEffect hook is used to start the timer and update the secondsLeft state every second.
  // It also handles the cleanup by clearing the interval when the component unmounts.
  useEffect(() => {
    let intervalId = null;

    // If there are seconds left on the timer, start the interval to decrement the secondsLeft state every second.
    if (secondsLeft > 0) {
      intervalId = setInterval(() => {
        // Use the functional form of setSecondsLeft to update the state based on the previous state value.
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      // If the timer reaches 0, clear the interval and call the gameOverCallback function.
      clearInterval(intervalId);
      gameOverCallback();
    }

    // The return statement of useEffect is used for cleanup. It clears the interval when the component unmounts.
    return () => {
      clearInterval(intervalId);
    };
  }, [secondsLeft, gameOverCallback]);

  // Return the remaining seconds on the timer to be used in the component.
  return secondsLeft;
};

export default useTimer;
