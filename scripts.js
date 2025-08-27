let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3)
    return choices[choice]
}
let getHumanChoice = () => {
    let userChoice = prompt("Enter your choice!")
    return userChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    let humanChoiceNormal = humanChoice.toLowerCase()
    console.log(`Human chose: ${humanChoiceNormal}`)
    console.log(`Computer chose: ${computerChoice}`)
    if ((humanChoiceNormal === "rock" && computerChoice === "paper") ||
        (humanChoiceNormal === "paper" && computerChoice === "scissors") ||
        (humanChoiceNormal === "scissors" && computerChoice === "rock")
    ) {
        console.log("Computer wins")
        computerScore++
    } else if (humanChoiceNormal === computerChoice) {
        console.log("Draws")
    } else {
        console.log("Human wins!")
        humanScore++
    }

    console.log(`Current points\nHuman: ${humanScore}\nComputer: ${computerScore}`)

}

for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
}

if (humanScore > computerScore) {
    console.log("After 5 rounds, human wins!")
} else if (humanScore < computerScore) {
    console.log("After 5 rounds, computer wins!")
} else {
    console.log("After 5 rounds, no one wins!")
}
