'use strict';
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
var newNumber = Math.trunc(Math.random() * 20 + 1);
const secretNumber = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const guessPrompt = document.querySelector('.guess');
let score = 20;

function scoreDecreaseHandler() {
  score--;
  scoreDisplay.innerText = score;
}
function gameOverConfigs() {
  againBtn.style.display = 'block';
  checkBtn.style.display = 'none';
}

function gameStartConfigs() {
  secretNumber.textContent = '?';
  againBtn.style.display = 'block';
  checkBtn.style.display = 'block';
  newNumber = Math.trunc(Math.random() * 20 + 1);
  guessPrompt.value = '';
  message.innerText = 'Start guessing ...';
  score = 20;
  scoreDisplay.innerText = score;
  document.querySelector('body').style.backgroundColor = '#222';
}
function correctGuessConfigs() {
  document.querySelector('body').style.backgroundColor = 'green';
  document.querySelector('.number').style.width = '350px';
}

function clickHandler() {
  againBtn.style.display = 'none';
  let guess = Number(guessPrompt.value);

  //agar guess correct hai
  if (guess > 0 && guess <= 20) {
    if (score > 1) {
      if (guess === newNumber) {
        secretNumber.textContent = newNumber;

        message.innerText = 'Numbers Match ! CORRECT Guess!!🤠📍';
        scoreDecreaseHandler();
        correctGuessConfigs();
        if (score > highScore.innerText) {
          highScore.innerText = score;
        }
        gameOverConfigs();
      }

      //agar guess BADA hai
      else if (guess > newNumber) {
        message.innerText = 'Guess too high!';
        scoreDecreaseHandler();
      }

      //agar guess chota hai
      else if (guess < newNumber) {
        message.innerText = 'Guess too low!';
        scoreDecreaseHandler();
      }
    } else {
      scoreDecreaseHandler();
      if (guess === newNumber) {
        message.innerText = `You Lost..
          Although it was a correct guess !!
          Better luck next time 😴📍`;
      } else {
        message.innerText = `You Lost..
          Allowed Guessess are over !!
          Better luck next time 😴📍`;
      }

      gameOverConfigs();
    }
  } else {
    message.innerText = `Please guess a valid number !!!! 
    (Between 1 to 20) `;
  }
}

function clickHandlerAgain() {
  gameStartConfigs();
}

checkBtn.addEventListener('click', clickHandler);
againBtn.addEventListener('click', clickHandlerAgain);
