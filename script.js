'use strict';

// let guessedNumber = document.querySelector('.number');
// let finlaScore = document.querySelector('score');

// let numberCheck = document.querySelector('.guess');
// let clickCheck = document.querySelector('.check');

// const numberCheckFunc = () => {
//   console.log(numberCheck.value);
// };

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = () => {
  document.querySelector('.score').textContent = score;
};

const changeColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No numbers entered');
  } else if (guess === number) {
    displayMessage('Correct Answer!');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    changeColor('#60b347');
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      //   document.querySelector('.message').textContent =
      //     guess > number ? 'Too High!' : 'Too Low!';
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      displayScore();
    } else {
      displayMessage('You Lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing!');
  displayScore();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //   document.querySelector('body').style.backgroundColor = '#222';
  changeColor('#222');
});
