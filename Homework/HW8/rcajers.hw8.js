let grade = prompt("What is your current grade in this class?");
let letterGrade = '';
let reward = '';

//A
if( 90 <= grade <= 100){
    letterGrade = 'A';
    reward = 'Candy';
}
//B
else if(80 <= grade <= 89){
    letterGrade = 'B';
    reward = 'Apple';
}
//C
else if(70 <= grade <= 79){
    letterGrade = 'C';
    reward = 'Mint';
}
//D
else if(60 <= grade <= 69){
    letterGrade = 'D';
    reward = 'Pencil';
}
//F
else if(grade < 60){
    letterGrade = 'F';
    reward = 'Awkward conversation with parents';
}
else{
    letterGrade = 'NO GRADE AVAILABLE';
    reward = 'No applicable reward';
    console.log('Please try again. Enter grade for this class between 0 & 100');
}

let outputGrade = `Grade: ${grade}`;
console.log(outputGrade);

let outputLetterGrade = `Letter grade: ${letterGrade}`;
console.log(outputLetterGrade);

let outputReward = `Reward: ${reward}`;
console.log(outputReward);
