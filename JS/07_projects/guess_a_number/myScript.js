let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const playA = document.querySelector('#playA');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remain');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      validateGuess(guess);
    }
  });
}

function validateGuess(guess) {
    displayGuess(guess);
    if (guess === randomNumber) {
      lowOrHi.innerHTML = `You guessed it right in ${numGuess} attempts`
      endGame();
    }else if(numGuess === 10){
      lowOrHi.innerHTML = `Game Over. Random number was ${randomNumber}`
      endGame();
    } else if (guess < randomNumber) {
      lowOrHi.innerHTML = "Number is TOOO low"
      console.log("h");
      
    } else if (guess > randomNumber) {
      lowOrHi.innerHTML = "Number is TOOO High"
    }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  playA.style.display = "block";
  submit.style.display = 'none';
  playGame = false;
  newGame();
}

function newGame() {
  playA.addEventListener('click', function (e) {
    playA.style.display = "none";
    submit.style.display = "block";
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
