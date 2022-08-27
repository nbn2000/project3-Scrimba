var yourname = window.prompt("Enter your name: ");
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//created objects
let player = {
    name: yourname,
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards) //for starting from "null"
// function for rendom numbers
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        randomCard = 11
    } else if (randomCard > 10) {
        randomCard = 10
    }
    return randomCard

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


// for printing array
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    //for printing words to the screen
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
// function for new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

function sampleFunction() {
    location.reload();
}