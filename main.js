// This is our little game Rock Paper Scissors!
// We shall begin with declaring some
// variables!!!

let  playerScore = 0;

let computerScore = 0;
 





// This function randomly picks "Rock, Paper, or Scissors" 
//and also returns the string in lower case

function getComputerChoice() {
  const choices =['Rock', 'Paper', 'Scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let compChoice = choices[randomNum];
  let lowerCaseChoice = compChoice.toLowerCase();
  return lowerCaseChoice;
} 

// This function asks player to choose one of 3 "Rock, Paper or Scissors"
// and returns lower case strings
function playerSelection() {
  let choose = prompt("Please chose one of: Paper, Rock or Scissors")
  let lowerChose = choose.toLocaleLowerCase();
  return lowerChose;
}



// Now we have to write a function that plays one round and declares a winner of that
// round by saying : "paper beats rock" or whatever!

function playRound(playerSelect,computerSelection) {
  console.log("Player chose : " + playerSelect);

  console.log("Computer chose : " + computerSelection);

  if(playerSelect === computerSelection){
    return "Tie! neither side gets points"
  }else if (playerSelect == 'rock' && computerSelection == 'scissors') {
    playerScore++
    return `You win!  ${playerSelect}  beats ${computerSelection}` 
     
  }else if (playerSelect == 'paper' && computerSelection == 'rock') {
    playerScore++
    return `You win!  ${playerSelect}  beats ${computerSelection}` 
     
  }else if (playerSelect == 'scissors' && computerSelection == 'paper') {
    playerScore++
    return `You win!  ${playerSelect}  beats ${computerSelection}` 
     
  }else if (playerSelect == 'rock' && computerSelection == 'paper') {
    computerScore++
    return `You loose!  ${computerSelection}  beats ${playerSelect}` 
     
  }else if (playerSelect == 'paper' && computerSelection == 'scissors') {
    computerScore++
    return `You loose!  ${computerSelection}  beats ${playerSelect}` 
     
  }else if (playerSelect == 'scissors' && computerSelection == 'rock') {
    computerScore++
    return `You loose!  ${computerSelection}  beats ${playerSelect}` 
  }else if (playerSelect !== 'scissors' || playerSelect !== 'paper' || playerSelect !== 'rock') {
    
    return "You have to chose: Paper Rock or Scissors. Please start again!"
  }
  

  
}






// Now we have to create a function in
// which game will play 5 rounds and 
// declares the final winner of the game

function game() {
  for (let i = 0; i < 5; i++) {
    
    const playerSelect = playerSelection();
    const computerSelection = getComputerChoice();
    playRound(playerSelect,computerSelection);
    console.log('player score is : ' + playerScore);
    console.log('computer score is : ' + computerScore);
    
    
  }
  if (playerScore > computerScore) {
    return "You won"
  }else if (computerScore > playerScore) {
    return "Computer won"
  }else{
    return "It is tie, nobody won"
  }
}
console.log(game());


