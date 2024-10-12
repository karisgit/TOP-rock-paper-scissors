//pseudocode for the rock paper scissors game


// 1. Define function getComputerChoice:
//    - Generate a random number between 0 and 2
//   - If number is 0, return "rock"
//     - If number is 1, return "paper"
//       - If number is 2, return "scissors" 

// 2. Define function getHumanChoice:
//    - Prompt user to enter "rock", "paper", or "scissors"
//     - If input is valid, return it
//       - Otherwise, ask user to try again

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


//logic to get the computer's choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  return "scissors";
}

//logic to get the human player's choice
function getHumanChoice() {
  while (true) {
    const playerChoice = prompt('Enter rock, paper, or scissors').toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
      return playerChoice;
    }
    alert('Invalid choice. Please try again.');
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    playRound(playerChoice, computerChoice);

    console.log(`Score after round ${round} - You: ${humanScore}, Computer: ${computerScore}\n`);
  }

  console.log("Game Over!");
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Play the game
playGame();