let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let randomNumber = Math.floor(Math.random() *10);
  return randomNumber;
};

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const absNumHuman = Math.abs(secretNumber - humanGuess);
  const absComputer = Math.abs(secretNumber - computerGuess);
  return absHuman <= absComputer;
};

const updateScore = string => {
  if (string === 'human') {
    humanScore++;
  } else if (string === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;

