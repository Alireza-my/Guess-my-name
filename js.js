"strict mode";

const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const secretNumber = document.querySelector(".number");
const again = document.querySelector(".again");
const highscore = document.querySelector(".highscore");

// logic

check.addEventListener("click", cac);
let number = Math.trunc(Math.random() * 20 + 1);
let yourScore = 20;
function cac() {
  let myGs = guess.value;
  // no number
  if (!myGs) {
    message.textContent = "No number❗";
  }
  // equal number
  else if (myGs == number) {
    message.textContent = "Correct number🏆";
    document.querySelector("body").style.backgroundColor = "#60b347";
    secretNumber.style.width = "30rem";
    secretNumber.textContent = number;

    // highscore

    let yourHighscore = 0;
    if (yourScore > yourHighscore) {
      yourHighscore = yourScore;
      highscore.textContent = yourHighscore;
    }
  }
  // higher number
  else if (myGs > number) {
    if (yourScore > 1) {
      message.textContent = "To high📈";
      yourScore--;
      score.textContent = yourScore;
    } else {
      message.textContent = "You lost the game!💣";
      score.textContent = 0;
    }
  }
  // lower number
  else if (myGs < number) {
    if (yourScore > 1) {
      message.textContent = "To low📉";
      yourScore--;
      score.textContent = yourScore;
    } else {
      message.textContent = "You lost the game!💣";
      score.textContent = 0;
    }
  }
}

// reset

again.addEventListener("click", reset);

function reset() {
  guess.value = "";
  yourScore = 20;
  score.textContent = 20;
  highscore.value = yourScore;
  document.querySelector("body").style.backgroundColor = "#333";
  secretNumber.style.width = "15rem";
  secretNumber.textContent = "?";
  message.textContent = "Start guessing...";
  number = Math.trunc(Math.random() * 20 + 1);
}
