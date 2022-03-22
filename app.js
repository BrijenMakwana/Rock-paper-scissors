const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

let userChoice;

// voice commands
var alanBtnInstance = alanBtn({
  key: "12c79fbc6d5bc7eb71c40ba04c28d2c42e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    if (commandData.command === "chooseRock") {
      //call client code that will react on the received command
      userChoice = "rock";
      userChoiceDisplay.setAttribute("src", `images/${userChoice}.png`);
      computerPlayTime();
    } else if (commandData.command === "choosePaper") {
      //call client code that will react on the received command
      userChoice = "paper";
      userChoiceDisplay.setAttribute("src", `images/${userChoice}.png`);
      computerPlayTime();
    } else if (commandData.command === "chooseScissors") {
      //call client code that will react on the received command
      userChoice = "scissors";
      userChoiceDisplay.setAttribute("src", `images/${userChoice}.png`);
      computerPlayTime();
    }
  },

  rootEl: document.getElementById("alan-btn"),
});

const images = document.querySelectorAll("img");
const posibbleAnswers = ["rock", "paper", "scissors"];

images.forEach((image) =>
  image.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.setAttribute("src", `images/${userChoice}.png`);
    computerPlayTime();
  })
);

// computer choice
function computerPlayTime() {
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
}
