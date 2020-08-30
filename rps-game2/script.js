playerScore = document.getElementById('playerScore')
computerScore = document.getElementById('computerScore')

businessRules = {
    rock: { name: 'rock', defeats: ['scissors', 'lizard']},
    paper: { name: 'paper', defeats: ['rock', 'spock']},
    scissors: {name: 'scissors', defeats: ['paper', 'lizard']},
    lizard: {name: 'lizard', defeats: ['paper', 'spock']},
    spock: {name: 'spock', defeats: ['scissors', 'rock']}
}

function select(choice) {
    if(businessRules[choice].defeats.indexOf('scissors') > -1) {
        console.log('existe um vencedor')
    } else {
        console.log('ainda não existe um vencedor')
    }
}

function cumputerChoice() {
    computerChoiceRandom = Math.random()
    computerFinalChoice = ''
    if(computerChoiceRandom <= 0.2) {
        computerFinalChoice = 'rock'
        console.log(computerFinalChoice)
    } 
    else if(computerChoiceRandom <= 0.4) {
        computerFinalChoice = 'paper'
        console.log(computerFinalChoice)
    }
    else if(computerChoiceRandom <= 0.6) {
        computerFinalChoice = 'scissors'
        console.log(computerFinalChoice)
    } else if(computerChoiceRandom <= 0.8) {
        computerFinalChoice = 'lizard'
        console.log(computerFinalChoice)
    } else {
        computerFinalChoice = 'spock'
        console.log(computerFinalChoice)    
    }
}  
cumputerChoice()