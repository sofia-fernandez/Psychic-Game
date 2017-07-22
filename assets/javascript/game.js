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
var guessesLeft;
//Wins
var wins;
//Losses;
var losses;


//PSEUDO CODE ==================================
//1. App randomly picks a letter (do not show)
//code reference source: https://www.w3schools.com/js/js_functions.asp
//code reference source: https://www.w3schools.com/jsref/jsref_random.asp
app = letterOptions[Math.floor(Math.random() * letterOptions.length)];

//code reference source: https://www.w3schools.com/js/js_output.asp
  console.log('App Selection: ' + app);

//2. User selects a letter (to guess app randomly selected letter)
document.onkeyup = function(event) {
  userLetter = event.key;
  console.log('User Selection: ' + userLetter); 

//3. Check if App letter matches User selected letter
  if (userLetter === app) {
    alert('you win!');
  }
}


   



/*If App letter match:
  1. Add point to Win.
  2. Reset Guesses Left to 9
  3. Reset Your Guesses so far
*/

/*If App letter does not match:
  1.0  Check if the Guesses Left value = 0
  1.1. If value is 0, then add +1 on Losses
  1.2  If value is not 0, then:
         add selected letter in Your Guesses so far
         subtract a value on Guesses Left
 
*/

//