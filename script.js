'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '60';

// document.querySelector('.guess').value = 23;
// document.querySelector('.guess').value;



const secretNumber  = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function ()  {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //  When no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 🤷‍♂️';

    // When guess correct
  }  else if (guess === secretNumber)  {
    document.querySelector('.message').textContent = '😎 correct number!';
    
    //  displays secret number
    document.querySelector('.secretNumber').textContent = secretNumber;

    //  adds 10 to high score
    highScore = highScore + 10;
    document.querySelector('.highscore').textContent = highScore;

    //  styles when correct number is guessed
    document.querySelector('body').style.backgroundColor = '#03fc03';
    document.querySelector('.secretNumber').style.width = '30rem';

    
    
    
    // When guess too high
  }  else if (guess > secretNumber)  {
      if (score > 1)  {
        document.querySelector('.message').textContent = "😱 Too high!";
        score--;
        score = document.querySelector('.score').textContent = score; 
      }  else {
        document.querySelector('.message').textContent = '🧨 You lost the game.';
      }
    
    // When guess too low
  }   else if (guess < secretNumber)  {
    score = document.querySelector('.score').textContent = score;

  } if (score > 1)  {
      document.querySelector('.message').textContent = "😱 Too low!";
      score--;
      score = document.querySelector('.score').textContent = score; 
    }  else {
      document.querySelector('.message').textContent = '🧨 You lost the game.';
    }
    
  });    

// Select the element with the 'again' class and attach a click event handler
    //  In the handler function, restore initial values of the score and secretNumber variables
    document.querySelector('.again').addEventListener('click', function()  {
      Number(document.querySelector('.guess').value);
      console.log(guess, typeof guess);

      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.secretNumber').style.width = '15rem';  
      
    });

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler

2. 
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/