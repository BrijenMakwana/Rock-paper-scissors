const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

const images = document.querySelectorAll("img");
const posibbleAnswers = ["rock", "paper", "scissors"];

images.forEach((image) =>
  image.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.setAttribute("src", `images/${userChoice}.png`);
    const randomNumber = Math.floor(Math.random() * posibbleAnswers.length);
    const computerChoice = posibbleAnswers[randomNumber];
    computerChoiceDisplay.setAttribute("src", `images/${computerChoice}.png`);

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
