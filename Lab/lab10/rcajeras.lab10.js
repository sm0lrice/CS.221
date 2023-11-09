let gonChoice = ''; // pc choice 
let userChoice = ''; 

const rockBtn = document.querySelector("#rockButton");
rockBtn.addEventListener("click",rock);

const paperBtn = document.querySelector("#paperButton");
paperBtn.addEventListener("click", paper);

const scissorBtn = document.querySelector("#scissorButton");
scissorBtn.addEventListener("click", scissor);

function rock(){
    userChoice = 'rock';
    gonPlay();
    outcome();
}

function paper(){
    userChoice = 'paper';
    gonPlay();
    outcome();
}

function scissor(){
    userChoice = 'scissor';

    gonPlay();
    outcome();
}

/*
//the function will generate a random choice between rock, paper, or scissor
//random choice between 0 = (rock), 1 = (paper), 2 = (scissor)
*/
function gonPlay(){

    let gonNum = Math.floor(Math.random() * 3);

    //randomized gon choices, and turn it into a move
    if (gonNum === 0) {gonChoice = 'rock';}
    else if (gonNum === 1) {gonChoice = 'paper';}
    else if (gonNum === 2) {gonChoice = 'scissor';}
}

/*
    the function checks if the user ties with gon or wins, else the user loses and displays in the bottom div.
    Most of the emojis work i promise just use firefox!!!! 
*/
function outcome(){
    if (userChoice === gonChoice) { document.querySelector("#result").textContent = 'It is a tie👔!!'; } //tie

    else if (userChoice === 'rock' && gonChoice === 'scissor') { document.querySelector("#result").textContent = '🙌🏾User wins!!🙌🏾'; }

    else if (userChoice === 'paper' && gonChoice === 'rock') { document.querySelector("#result").textContent = '🙌🏾User wins!!🙌🏾'; }

    else if (userChoice === 'scissor' && gonChoice === 'paper') { document.querySelector("#result").textContent = '🙌🏾User wins!!🙌🏾'; }

    else {document.querySelector("#result").textContent = '😐 User lost! 😐' ; }    
}

