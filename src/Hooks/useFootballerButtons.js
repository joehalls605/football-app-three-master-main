// useFootballerButtons.js
import { useEffect, useState } from 'react';

// Custom hook to generate footballer buttons for a given question
const useFootballerButtons = (footballersData, selectedLeague, questionData) => {
  // State to store the correct footballer and the list of footballer buttons
  const [correctFootballer, setCorrectFootballer] = useState(null);
  const [footballerButtons, setFootballerButtons] = useState([]);

  // This useEffect hook runs when the component using this custom hook mounts or when its dependencies change.
  useEffect(() => {
    const generateFootballerButtons = () => {
      // Filter footballers from the provided data that belong to the selected league
      const filteredFootballersData = footballersData.filter((footballer) => footballer.league === selectedLeague);
      // Randomly select an index to pick the correct footballer from the filtered data
      const randomIndex = Math.floor(Math.random() * filteredFootballersData.length);
      // Get the correct footballer based on the random index
      const correctFootballer = filteredFootballersData[randomIndex];
      // Filter out the correct footballer and the question's footballer from the list and shuffle the remaining footballers
      const shuffledFootballers = filteredFootballersData
        .filter(
          (footballer) =>
            footballer.name !== questionData.name &&
            footballer.name !== correctFootballer.name
        )
        .sort(() => Math.random() - 0.5);
      // Combine the correct footballer with three shuffled footballers to form the buttons list
      const selectedFootballers = [correctFootballer, ...shuffledFootballers.slice(0, 3)];
      // Shuffle the selected footballers again to randomize the order of buttons
      const randomisedSelectedFootballers = shuffleArray(selectedFootballers);
      // Set the correct footballer and footballer buttons state
      setCorrectFootballer(correctFootballer);
      setFootballerButtons(randomisedSelectedFootballers);
    };

    // Call the generateFootballerButtons function when the component mounts or the dependencies change
    generateFootballerButtons();
  }, [footballersData, selectedLeague, questionData]);

  // Function to shuffle an array using the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  // Return the correctFootballer and footballerButtons as the outputs of the custom hook
  return { correctFootballer, footballerButtons };
};

export default useFootballerButtons;
