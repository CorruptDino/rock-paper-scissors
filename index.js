


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


let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(getPlayerChoices, getComputerChoices) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
  
    if (playerChoice === null || playerChoice === undefined)  {
        alert('Please enter a valid option!')
    }
        if (playerChoice === computerChoice) {
       return roundWinner = 'Tie';
        }

        if ( 
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
         
        (playerChoice === 'paper' && computerChoice === 'rock') ||
         
        (playerChoice === 'scissors' && computerChoice === 'paper') 
        ) {
            console.log('You win!')
            playerScore++;
        }
        
        if ( 
            (computerChoice === 'rock' && playerChoice === 'scissors') ||
             
            (computerChoice === 'paper' && playerChoice === 'rock') ||
             
            (computerChoice === 'scissors' && playerChoice === 'paper') 
        ) {
            console.log('You lose!')
            computerScore++;
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        alert('You won!')
    } else {
        alert('You lost')
    }
}