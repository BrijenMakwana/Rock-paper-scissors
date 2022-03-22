const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

const buttons = document.querySelectorAll("button");
const posibbleAnswers = ["rock", "paper", "scissors"];

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    const randomNumber = Math.floor(Math.random() * posibbleAnswers.length);
    console.log(randomNumber);
    const computerChoice = posibbleAnswers[randomNumber];
    computerChoiceDisplay.innerText = computerChoice;

    if (userChoice === computerChoice) {
      result.innerText = "It's a draw";
    } else if (userChoice === "rock" && computerChoice === "paper") {
      result.innerText = "You lose";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      result.innerText = "You win";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      result.innerText = "You win";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      result.innerText = "You lose";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      result.innerText = "You lose";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      result.innerText = "You win";
    }
  })
);
