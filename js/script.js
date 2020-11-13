function add(x,y){
    return x+y;
  }
function subtract(x,y){
    return x-y;
  }
function multiply(x,y){
    return x*y;
  }
function divide(x,y){
    return x/y;
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (playerSelection == "Rock"){
      if (computerSelection == "Rock") {
        return "Tie Game...Rock"
        }
      else if (computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
        }
      else {
      return "You Win! Rock beats Scissors"
      }
    else {
      if (computerSelection == "Paper") {
        return "Tie Game...Paper"
        }
      else if (computerSelection == "Scissors") {
        return "You Lose! Scissors beat Paper"
        }
      else {
      return "You Win! Paper beat Rock"
      }
    }
  }

  function game(){
    for (i = 0; i< 5; i++)
    {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerSelection, computerPlay()));
    }
  }
