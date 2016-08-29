var prompt = require('prompt-sync')();

var bankroll = 100;
while (bankroll > 0) {
  var randNum = Math.floor(Math.random()*10); 
  var bet = parseInt(prompt("Place a bet between $5 and $10"));
  var guess = prompt("Guess a number between 1 and 10"); 
  if (guess == randNum) {
    bankroll += bet;
    console.log("Correct! You now have $" + bankroll + " in your bankroll!");
  } else if (guess == randNum+1 || guess == randNum-1) {
    console.log("Close... but not quite");
  } else {
    bankroll -= bet; 
    if (bankroll <= 0) {
      console.log("Sorry, you lost the game!!! :(")
    } else {
      console.log("Wrrrongggg, you now have $" + bankroll +" in your bankroll...");
    };
  };
};
