// This is our little game Rock Paper Scissors!


const playerSelection = "rock";
const computerSelection = getComputerChoice();

// This function randomly picks "Rock, Paper, or Scissors" 
//and also returns the string in lower case

function getComputerChoice() {
  const choices =['Rock', 'Paper', 'Scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let compChoice = choices[randomNum];
  let lowerCaseChoice = compChoice.toLowerCase();
  return lowerCaseChoice;
} 

// Now we have to write a function that plays one round and declares a winner of that
// round by saying : "paper beats rock" or whatever!

function playRound(playerSelection,computerSelection) {
  if(playerSelection === computerSelection){
    return "Tie! neither side gets points"
  }else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return `You win!  ${playerSelection}  beats ${computerSelection}` 
  }else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return `You win!  ${playerSelection}  beats ${computerSelection}` 
  }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return `You win!  ${playerSelection}  beats ${computerSelection}` 
  }else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return `You loose!  ${computerSelection}  beats ${playerSelection}` 
  }else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return `You win!  ${computerSelection}  beats ${playerSelection}` 
  }else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return `You win!  ${computerSelection}  beats ${playerSelection}` 
  }
}




console.log("Player chose : " + playerSelection);
console.log("Computer chose : " + computerSelection);
console.log(playRound(playerSelection,computerSelection));

 

