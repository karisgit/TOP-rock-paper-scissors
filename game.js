//pseudocode for the rock paper scissors game

// 1. Define function getPlayerChoice:
//    - Prompt user to enter "rock", "paper", or "scissors"
//   - Convert input to lowercase
//     - If input is valid, return it
//       - Otherwise, ask user to try again

// 2. Define function getComputerChoice:
//    - Generate a random number between 0 and 2
//   - If number is 0, return "rock"
//     - If number is 1, return "paper"
//       - If number is 2, return "scissors"


// 3. Define function determineWinner(playerChoice, computerChoice):
//    - If choices are the same, return "It's a tie!"
//   - If player wins, return "You win!"
//     - If computer wins, return "Computer wins!"

// 4. Define function playGame:
//    - Get computer's choice
//   - Get player's choice
//     - Determine the winner
//       - Display the choices and the result

// 5. Call playGame function

function getPlayerChoice() {
  while (true) {
    const playerChoice = prompt('Enter rock, paper, or scissors');
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
      return playerChoice;
    }
    alert('Invalid choice. Please try again.');
  }
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  return "scissors";
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

function playGame() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  console.log(`You chose ${playerChoice}.`);
  console.log(`The computer chose ${computerChoice}.`);
  console.log(` ${result}`);
}

playGame();