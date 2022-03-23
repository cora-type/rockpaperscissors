let items = ["Rock", "Paper", "Scissors"];

let computerPlay = () => items[Math.floor(Math.random() * items.length)];

let playRound = (playerSelection, computerSelection) => {
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

  if (p === "rock" && c === "scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (p === "paper" && c === "rock") {
    return "You win! Paper beats Scissors!";
  } else if (p === "scissors" && c === "paper") {
    return "You win! Scissors beats Paper!";
  } else
    return "You lose! " + computerSelection + " beats " + playerSelection + ".";
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
