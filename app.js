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
let guess = randomNumber();
let guessCount = 0;

/* Function */

//Calculate the guess
function calculate(min, max) {
  return Math.floor((min + max) / 2);
}
//What happens when the guess is right
function correct() {
  begin.style.display = "inline";
  game.style.display = "none";
  begin.innerHTML = "Play Again";
  winPhrase(guessCount);
}
//What happens when the guess is too low
function higher() {
  min = guess;
  newGuess();
}
//What happens when the guess is too high
function lower() {
  max = guess;
  newGuess();
}
//Guess again
function newGuess() {
  guess = calculate(min, max);
  guessCount++;
  guessNumber.innerHTML = guess;
}
//Generate random number within the given range
function randomNumber() {
  return Math.floor(Math.random() * max) + min;
}
//What happens when the play button is pressed
function startGame() {
  begin.style.display = "none";
  game.style.display = "block";
  guessNumber.innerHTML = guess;
  titleText.innerHTML = "Okay, Let's Play...";
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
