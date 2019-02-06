//Get all the pieces
let begin = document.getElementById("begin");
let higherButton = document.getElementById("higher");
let lowerButton = document.getElementById("lower");
let correctButton = document.getElementById("correct");
let game = document.getElementById("game");
let guessNumber = document.getElementById("guess");
let titleText = document.getElementById("title");

let minInput = document.getElementById("min");
let maxInput = document.getElementById("max");

//Variables
let max;
let min;
let guess;
let guessCount;

/* Function */

//Calculate the guess
function calculate(lower, higher) {
  return Math.floor((lower + higher) / 2);
}
//What happens when the guess is right
function correct() {
  begin.style.display = "inline";
  minInput.style.display = "block";
  minInput.value = "";
  maxInput.value = "";
  maxInput.style.display = "block";
  game.style.display = "none";
  begin.innerHTML = "Play Again";
  winPhrase(guessCount);
}
//What happens when the guess is too low
function higher() {
  min = guess;
  newGuess(min, max);
}
//What happens when the guess is too high
function lower() {
  max = guess;
  newGuess(min, max);
}
//Guess again
function newGuess() {
  guess = calculate(min, max);
  guessCount++;
  guessNumber.innerHTML = guess;
}
//Generate random number within the given range
function randomNumber(lower, higher) {
  lower = Math.ceil(lower);
  higher = Math.floor(higher);
  return Math.floor(Math.random() * (higher - lower)) + lower;
}
//What happens when the play button is pressed
function startGame() {
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  guess = randomNumber(min, max);
  begin.style.display = "none";
  minInput.style.display = "none";
  maxInput.style.display = "none";
  game.style.display = "block";
  guessNumber.innerHTML = guess;
  titleText.innerHTML = `You chose a number between ${min} and ${max}`;
  max += 1;
  guessCount = 0;
}
//Generate a phrase for winning based on how many times the game had to guess.
function winPhrase(guessCount) {
  min = 1;
  max = 1000;
  guess = randomNumber();
  if (guessCount === 0) {
    return (titleText.innerHTML = `I'm in your head... I got it right on my first try... Play again?`);
  } else if (guessCount === 1) {
    return (titleText.innerHTML = `It only took me one try... Easy.... Play again?`);
  } else {
    return (titleText.innerHTML = `I'm a genius! It only took me ${guessCount} tries! Play again?`);
  }
}
