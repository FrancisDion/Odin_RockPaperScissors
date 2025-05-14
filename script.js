let playGame = () => {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    findWinner(humanChoice, computerChoice);
}

let getHumanChoice = () => {
    let humanChoice = (prompt("Rock, Paper, Scissors").toLowerCase());
    console.log("Human choice: " + humanChoice);
    return humanChoice;
}

let getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);

        switch (computerChoice) {
            case 0:
                console.log("Computer: Rock")
                return "rock";
            case 1:
                console.log("Computer: Paper")
                return "paper";
            case 2:
                console.log("Computer: Scissors")
                return "scissors"
            default:
                return "";
        }
}

let findWinner = (humanChoice, computerChoice) => {
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
                console.log("Its a tie!");
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

playGame();