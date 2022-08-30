


function getComputerChoice() {
    const compchoice = ['rock', 'paper', 'scissors'];
    let answer = Math.floor(Math.random() * compchoice.length) + 1
    if (answer == 1) {
        return 'rock';
    } else if (answer == 2) {
        return'paper';
    } else {
        return 'scissors';
    }
}

function computerChoice() {
    return getComputerChoice();
}

function getPlayerChoice() {
    let answer = (window.prompt('Enter your choice!')).toLowerCase();
    if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
        return answer;
    } else {
        alert('Please enter a valid option!');
    }
}

function playerChoice() {
    return getPlayerChoice();
}


function playRound(getPlayerChoices, getComputerChoices) {

  
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
  
    if (playerChoice === null || playerChoice === undefined)  {
        alert('Please enter a valid option!')
    }
      else if (playerChoice === computerChoice) {
       return console.log ('Tie game!');
    } else if (playerChoice === 'rock' || computerChoice === 'paper') {
       return console.log ('You Lose! Paper beats rock.');
    } else if (playerChoice === 'rock' || computerChoice === 'scissors') {
       return console.log ('You Win! Rock beats paper.');
    } else if (playerChoice === 'paper' || computerChoice === 'rock') {
       return console.log ('You Win! Rock beats paper.');
    } else if (playerChoice === 'paper' || computerChoice === 'scissors') {
       return console.log ('You Lose! Scissors beats paper.');
    } else if (playerChoice === 'scissors' || computerChoice === 'rock') {
       return console.log ('You Lose! Rock beats scissors.');
    } else if (playerChoice === 'scissors' || computerChoice === 'paper'){
       return console.log ('You Win! Scissors beats paper.');
    }
}

let results = [];

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
}