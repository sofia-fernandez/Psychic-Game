/* Instructions =====================================
1.0 Make a game. 
   1.1 app randomly picks a letter
   1.2 user has to guess which letter the app chose
   1.3 app will run in the browser
   1.4 feature dynamically updated HTML powered by JavaScript code
2.0 Put the following text on your page: 
   2.1 Guess what letter I'm thinking of
   2.2 Wins: (# of times the user has guessed the letter correctly)
   2.3 Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
   2.4 Guesses Left: (# of guesses left. This will update)
   2.5 Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
3.0 When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
4.0. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
======================================================*/

//DECLARE VARIABLES ==================================
//This is the application that will randomly pick a letter
var app;
//This is the user that will guess the letter
var user;
//This is the application selected letter
var appLetter;
//This is the user selected letter on click
var userLetter;
//This is the letter options in an array
//code reference source: https://www.w3schools.com/js/js_arrays.asp
var letterOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Guesses so far in an empty array
var guesses = [];
//Guesses left
var guessesLeft = 9;
//Wins
var wins = 0;
//Losses;
var losses = 0;


//PSEUDO CODE ==================================
//1. App randomly picks a letter (do not show)
//code reference source: https://www.w3schools.com/js/js_functions.asp
//code reference source: https://www.w3schools.com/jsref/jsref_random.asp
function appSelection() {
 appLetter = letterOptions[Math.floor(Math.random() * letterOptions.length)];
}
appSelection();
//code reference source: https://www.w3schools.com/js/js_output.asp
  console.log('App Selection: ' + appLetter);

//2. User selects a letter (to guess app randomly selected letter)
//code reference source: https://www.w3schools.com/jsref/event_onkeyup.asp
document.onkeyup = function(event) {
  userLetter = event.key;
  console.log('User Selection: ' + userLetter); 

/*Future Release: As a user, I want to be notified if I selected a letter
that I have already selected before, so that I don't waste my "Guesses Left" quota
for the same letter selected. */

//===============================================
//If the user selected letter is not listed in the array, do not show.
for (i = 0; i < letterOptions.length; i++) {
    if (userLetter === letterOptions[i]) {
      matchLetters();
    }
  }


//3. Check if App letter matches User selected letter
  function matchLetters() {

//If App letter match:
  if (appLetter === userLetter) {
// 1. Add point to Wins.
//code reference source: https://www.w3schools.com/jsref/met_document_queryselector.asp
    wins++;
    document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
// 2. Reset Guesses Left to 9
    guessesLeft = 9;
    document.querySelector('#guess_Left').innerHTML = 'Guesses Left: ' + guessesLeft;
// 3. Reset Your Guesses so far
    guesses = [];
     document.querySelector('#guesses_so_far').innerHTML = 'Your Guesses so far: ';
// 4. Have App select another letter
    appSelection();
    console.log('App Selection: ' + appLetter);
  }

//If app letter does not match and guesses left is more than 0:
  else if (appLetter !== userLetter && guessesLeft > 0) {
// 1. Remove value on Guesses Left
    guessesLeft--;
    document.querySelector('#guess_Left').innerHTML = 'Guesses Left: ' + guessesLeft;
// 2. Add selected letter in Your Guesses so far  
    guesses.push(userLetter);
    document.querySelector('#guesses_so_far').innerHTML = 'Your Guesses so far: ' + guesses;

  }
//If App letter does not match and guesses left = 0:
  else if (appLetter !== userLetter && guessesLeft === 0) {
// 1. Then add +1 on Losses
    losses++;
    document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
// 2. Reset Guesses Left to 9
    guessesLeft = 9;
// 3. Reset Your Guesses so far
    guesses = [];
    document.querySelector('#guesses_so_far').innerHTML = 'Your Guesses so far: ';
// 4. Have App select another letter
    appSelection();
    console.log('App Selection: ' + appLetter);
    }
  }
//  matchLetters();

}


