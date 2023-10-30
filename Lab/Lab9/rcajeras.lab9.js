
let result = '';
let userChoice = '';

ask();

function ask() {
    //user choice
    userChoice = prompt("Please enter rock, paper, or scissor");
    userChoice.toLowerCase();
    runIt();
}

function runIt() {
    //pc choice
    //random choice between 0 = (rock), 1 = (paper), 2 = (scissor)
    //gon = computer
    let gonNum = Math.floor(Math.random() * 3);
    let gonChoice = '';

    //randomized gon choices, and turn it into a move
    if (gonNum === 0) {
        gonChoice = 'rock';
    }
    else if (gonNum === 1) {
        gonChoice = 'paper';
    }
    else if (gonNum === 2) {
        gonChoice = 'scissor';
    }


    //determine the winner
    //tie
    if (userChoice === gonChoice) {
        result = "It's a tie!\n";
    }

    //user wins
    //rock
    else if (userChoice === 'rock' && gonChoice === 'scissor') {
        result = "🎆User wins!!🎆\n";
    }
    //paper
    else if (userChoice === 'paper' && gonChoice === 'rock') {
        result = "🎆User wins!!🎆\n";
    }
    //scissor
    else if (userChoice === 'scissor' && gonChoice === 'paper') {
        result = "🎆User wins!!🎆\n";
    }

    //user loses
    //scissor
    else if (userChoice === 'scissor' && gonChoice === 'rock') {
        result = "User loses!!😐\n";
    }
    //rock
    else if (userChoice === 'rock' && gonChoice === 'paper') {
        result = "User loses!!😐\n";
    }
    //paper
    else if (userChoice === 'paper' && gonChoice === 'scissor') {
        result = "User loses!!😐\n";
    }

    
    
    //this checks if the result is empty. If true,and the userInput is not valid -> we ask the user to enter one of the 3 choices. It will prompt until the input is correct
 
    if (result === "") {
        alert("Please try again!!!");
        ask();
    }


    //output
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer's choice: ${gonChoice}`);
    console.log(result);
}