'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '60';

// document.querySelector('.guess').value = 23;
// document.querySelector('.guess').value;



const secretNumber  = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.secretNumber').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function ()  {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 🤷‍♂️';

  }  else if (guess === secretNumber)  {
    document.querySelector('.message').textContent = '😎 correct number!';
    highScore = highScore + 10;
    document.querySelector('.highscore').textContent = highScore;

  }  else if (guess > secretNumber)  {
      if (score > 1)  {
        document.querySelector('.message').textContent = "😱 Too high!";
        score--;
        score = document.querySelector('.score').textContent = score; 
      }  else {
        document.querySelector('.message').textContent = '🧨 You lost the game.';
      }
    
  }   else if (guess < secretNumber)  {
    document.querySelector('.message').textContent = "🙄 Too low!";
    score--;
    score = document.querySelector('.score').textContent = score;
    if (score > 1)  {
      document.querySelector('.message').textContent = "😱 Too low!";
      score--;
      score = document.querySelector('.score').textContent = score; 
    }  else {
      document.querySelector('.message').textContent = '🧨 You lost the game.';
    }
  }  
});

