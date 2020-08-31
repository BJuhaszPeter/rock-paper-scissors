// Rock, Paper, Scissors game

let userInput = '';
// make the input all lowercase
userInput = userInput.toLowerCase();

// validation of the input
const getUserChoice = (userInput) => {
  if (userInput === 'rock' || 'paper' || 'scissors') {
    return userInput;
  } else {
    console.log('Please choice rock, paper or scissors!');
  }
};

// get a computer choice
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  }else {
    return 'scissors';
  }
};

// determine the user and the computer choices and choice the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'computer won.';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'computer won.';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'computer won.';
  } else {
    return 'player won.';
  }
};

// main function
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
