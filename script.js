let items = ["Rock", "Paper", "Scissors"];

let win = 0;
let lose = 0;

let computerPlay = () => items[Math.floor(Math.random() * items.length)];

let playRound = (playerSelection, computerSelection) => {
  //takes player input and uses computerPlay as opponent input
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

  if (p === "rock" && c === "scissors") {
    win = win + 1;
    return "You Win! Rock beats Scissors!";
  } else if (p === "paper" && c === "rock") {
    win = win + 1;
    return "You win! Paper beats Scissors!";
  } else if (p === "scissors" && c === "paper") {
    win = win + 1;
    return "You win! Scissors beats Paper!";
  } else if (p === c) {
    return "It's a draw!";
  } else lose = lose + 1;
  return "You lose! " + computerSelection + " beats " + playerSelection + ".";
};

let result = window.prompt("Rock, paper, scissors says shoot!");

let game = (userinput) => {
  for (let i = 0; i < 5; i++) {
    playRound(result, computerPlay);
  }

  if (win > lose) {
    return "You won!";
  } else if (win < lose) {
    return "You lost!";
  } else return "It's a draw!";
};

console.log(game(result));

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
