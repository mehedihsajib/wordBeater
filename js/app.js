window.addEventListener('load', init)

// Globals
let time = 5;
let score = 0;
let isPlaying;

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
}

// To change level
const currentLevel = levels.easy;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const seconds = document.querySelector('#seconds');
const message = document.querySelector('#message');

// Random words
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];


// Initialize game
function init() {
  // Show the second by level
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start Matching 
  wordInput.addEventListener('input', startMatch);
  // Count the time
  setInterval(countdown, 1000);
  // Game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if(matchWord()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;

  } 
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match word input
function matchWord() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}


// Pick and show random word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  // Output the random word as a current word
  currentWord.innerHTML = words[randIndex];
}


// Countdown timer
function countdown() {
  if(time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  };
  // Show time to the timeDisplay
  timeDisplay.innerHTML = time;
}


// Check game status
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game is Over!';
    score = -1;
  }
}