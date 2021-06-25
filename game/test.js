function getUserChoice(){
    var userInput = prompt('Rock, paper or scissors?');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('That\'s no good bro');  
    }
  }
  
  function getComputerChoice(){
    Math.floor(Math.random() * 3);
   switch(getComputerChoice) {
     case 0:
       return 'rock';
     case 1:
       return 'paper';
     case 2:
       return 'scissors';
               } 
  }
  
  function determineWinner(userChoice, computerChoice){
   if (userChoice === computerChoice) {
       return 'It\'s a tie!';
       }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return 'The Computer won!';
      } else { 
        return 'The Human won!';
      }
    }
    if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The Computer won!';
      } else {
        return 'The Human won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer won!';
      } else {
        return 'The Human won!';
      }
    } 
  }
  
  function playGame(){
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();
    console.log('You threw:' + getUserChoice);
    console.log('The Computer threw:' + getComputerChoice);
    console.log( determineWinner(userChoice, computerChoice));
  }
  playGame();