


// document.getElementById("para").textContent = 'UWAHHHHHHHH';

// let result = document.getElementById('para');
// result.textContent = "is this going to work?";




let result = '';
let gonChoice = '';
let userChoice = '';

const rockBtn = document.querySelector("#rockButton");

rockBtn.addEventListener("click", rock () {
    userChoice = "rock";
    console.log('user picked rock');
}, false);


const paperBtn = document.getElementById("paperButton");
paperBtn.addEventListener("click", paper())

const scissorBtn = document.getElementById("scissorButton");
scissorBtn.addEventListener("click", scissor())


function paper(){
    userChoice = 'paper';
    console.log('user picked paper');
}

function scissor(){
    userChoice = 'scissor';
    console.log('user picked scissor');
}

//the function will generate a random choice between rock, paper, or scissor
function gonPlay(){
    //pc choice = gon choice
    //random choice between 0 = (rock), 1 = (paper), 2 = (scissor)
    let gonNum = Math.floor(Math.random() * 3);


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
}





function check() {

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

}