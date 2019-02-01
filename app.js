//Get all the pieces
let begin = document.getElementById("begin");
let higherButton = document.getElementById("higher");
let lowerButton = document.getElementById("lower");
let correctButton = document.getElementById("correct");
let game = document.getElementById("game");
let guessNumber = document.getElementById("guess");
let titleText = document.getElementById("title");

//Variables
let max = 1000;
let min = 1;
let guess = Math.floor(Math.random() * max) + min;

//Functions
function higher() {
  min = guess;
  guess = calculate(min, max);
  guessNumber.innerHTML = guess;
}
function lower() {
  max = guess;
  guess = calculate(min, max);
  guessNumber.innerHTML = guess;
}
function correct() {
  begin.style.display = "inline";
  game.style.display = "none";
  begin.innerHTML = "Play Again";
  titleText.innerHTML = "Look's like I am a genius... Play again?";
  min = 1;
  max = 1000;
  guess = calculate(min, max);
}
function startGame() {
  begin.style.display = "none";
  game.style.display = "block";
  guessNumber.innerHTML = guess;
  titleText.innerHTML = "Okay, Let's Play...";
}
function calculate(min, max) {
  return Math.floor((min + max) / 2);
}
