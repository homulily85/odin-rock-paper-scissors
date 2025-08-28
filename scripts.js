let humanScore = 0
let computerScore = 0
let numberOfPlayedRound = 0
let isEnded = false

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3)
    return choices[choice]
}
const getHumanChoice = (button) => {
    return button.innerText.toLowerCase()
}

const restartGame = () => {
    humanScore = 0
    computerScore = 0
    numberOfPlayedRound = 0
    isEnded = false

    let oldResultContainer = document.querySelector("#result")
    if (oldResultContainer) oldResultContainer.remove()

    let oldFinalResult = document.querySelector("#final-result")
    if (oldFinalResult) oldFinalResult.remove()

    let restartButton = document.querySelector("#restart")
    if (restartButton) restartButton.remove()
}

const playRound = (humanChoice, computerChoice) => {
    let winner = "No one"

    if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        winner = "Computer"
        computerScore++
    } else if (humanChoice === computerChoice) {
    } else {
        winner = "Human"
        humanScore++
    }

    container = document.querySelector("#container")

    let oldResultContainer = container.querySelector("#result")
    if (oldResultContainer) {
        container.removeChild(oldResultContainer)
    }

    let newResultContainer = document.createElement("div")
    newResultContainer.setAttribute("id", "result")
    newResultContainer.innerText = `Round ${++numberOfPlayedRound}\n
                                Human chose: ${humanChoice}\n
                                Computer chose: ${computerChoice}
                                \n${winner} won\n
                                Current point: Human ${humanScore} - ${computerScore} Computer`
    container.append(newResultContainer)
}

humanChoiceButtons = document.querySelectorAll(".human-choice")
if (humanChoiceButtons.length > 0) {
    humanChoiceButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (isEnded) {
                return
            }
            if (computerScore < 5 && humanScore < 5) {
                playRound(getHumanChoice(button), getComputerChoice())
            }

            if (computerScore === 5 || humanScore === 5) {
                let finalWinner = humanScore > computerScore ? "human" : "computer"
                let container = document.querySelector("#container")

                let finalResult = document.createElement("p")
                finalResult.innerText = `After ${numberOfPlayedRound} rounds, ${finalWinner} won the game!`
                finalResult.setAttribute("id", "final-result")
                container.append(finalResult)

                let restartButton = document.createElement("button")
                restartButton.innerText = "New game"
                restartButton.setAttribute("id", "restart")
                restartButton.addEventListener("click", restartGame)
                container.append(restartButton)
                isEnded = true
            }
        })
    });
}