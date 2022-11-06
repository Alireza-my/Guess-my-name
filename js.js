"strict mode";

const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const secretNumber = document.querySelector(".number");
const again = document.querySelector(".again");
const highscore = document.querySelector(".label-highscore");

// logic

let number = Math.trunc(Math.random() * 20 + 1);
// secretNumber.textContent = number;
let yourScore = 20;

check.addEventListener("click", cac);
function cac() {
  let myGs = guess.value;
  // no number
  if (!myGs) {
    message.textContent = "No number❗";
  }
  // equal number
  else if (myGs == number) {
    message.textContent = "Correct number🏆";
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
