let targetNumber = document.getElementById("target-number");
let computerScore = document.getElementById("computer-score");
let computerNumber = document.getElementById("computer-number");
const userScore = document.getElementById("user-score");
const userNumber = document.getElementById("user-number");

const targetChoice = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    targetNumber = randomNumber;
    if(targetNumber === true) {
        console.log(targetNumber);
    }
};

const computerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    computerNumber = randomNumber;
    console.log(computerNumber);
};

computerChoice();







