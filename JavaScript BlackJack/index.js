let cards = []
let buyIn = 0
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")



  let player = {
   name: "Andrejs",
   chips: 145
} 




//Player chip & buy-in
/* let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "£" + player.chips
let buyIn = document.getElementById("buy-in")
buyIn.textContent = "Buy in is £5" */


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1) {
      return 11
    } else if(randomNumber >= 11) {
      return 10
    } else {
      return randomNumber
    }
}

console.log(getRandomCard())


function startGame() {
  cards = []
  isAlive = true
  hasBlackJack = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards.push([firstCard], [secondCard])
  sum = firstCard + secondCard
  renderGame()
}


function renderGame() {
  cardsEl.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "WooHoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  } 
  messageEl.textContent = message
}




function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}



















































/* let randomNumber = Math.floor(Math.random() * 6) + 1

console.log(randomNumber) */

/* function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

let diceRoll = rollDice()

console.log(diceRoll) */



/* let likesDocumentaries = true
let likesStartups = false

if( likesDocumentaries === true || likesStartups === true) {
  return recommendMovie()
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
} */














































/* let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time
  } else if (player2Time < player1Time) {
    return player2Time
  } else {
    return player1Time && player2Time
  }
} */

/* let fastestRace = getFastestRaceTime()
console.log(getFastestRaceTime()) */

/* function totalRaceTime() {
  return player1Time + player2Time
}

let totalTime = totalRaceTime()

console.log(totalTime)
 */