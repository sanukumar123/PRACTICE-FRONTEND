let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw! Play Again"
  msg.style.backgroundColor = "black";
}


const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
  }
  else {
    comScore++;
    compScorePara.innerText = comScore;
    // console.log("you Lose");
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  //Now we have to generate computer choices
  const compChoice = genCompChoice();
  console.log("Computer Choice = ", compChoice);

  if(userChoice === compChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if(userChoice === "rock") {
      //paper, Scissors
      userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    }
    else {
      //Rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice) => {
  // console.log(choices);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
