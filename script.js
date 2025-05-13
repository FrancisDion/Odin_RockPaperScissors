// Get Human's Choice
let getHumanChoice = () => {
    let humanChoice = (prompt("Rock, Paper, Scissors?").toLowerCase());
    console.log(humanChoice);
}

// Get Computer's choice
let getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            return computerChoice;
    }
    console.log(computerChoice);
}

// Check who win's

let findWinner = () => {
    if (humanChoice === "rock") {

        switch (computerChoice) {
            case "rock":
                console.log("It's a tie!");
                break;
            case "paper":
                console.log("You loose!");
                break;
            case "scissors":
                console.log("You win!");
                break;
        }
    } else if (humanChoice === "paper") {

        switch (computerChoice) {
            case "rock":
                console.log("You win!");
                break;
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                console.log("You loose!");
                break;
        } 
    } else {

        switch (computerChoice) {
            case "rock":
                console.log("You loose!");
                break;
            case "paper":
                console.log("You win!");
                break;
            case "scissors":
                console.log("It's a tie!");
                break;
        }        
    }
}

getHumanChoice();
getComputerChoice();
findWinner();