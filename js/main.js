  /*----- constants -----*/
const wordChoices = [
    'basketball', 'score', 'coach', 'halfcourt', 'court', 'block', 
    'guard', 'press', 'point', 'backcourt', 'player', 'center', 'shooter', 
    'hoop', 'net',
]
const maxGuesses = 10

/*----- state variables -----*/
let wrongGuesses // container for wrong guesses
let correctLetters  //container for correct guesses

/*----- cached elements  -----*/
const keyboardEl = document.querySelector('.keyboard-selector')
const basketballManImageEl = document.querySelector('.basketballman-box img')
const wordDisplayEl = document.querySelector('.word-display')
const guessesEl = document.querySelector('.guesses-text b')
const gameMenu = document.querySelector('.game-menu')
const playAgainBtn = document.querySelector('.play-again')

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', renderRandomWord)

/*----- initial game state -----*/
basketballManImageEl.style.opacity = 1

/*----- functions -----*/
init()

function init() {
    render()
    
}

function gameOver(isVictory) {
    setTimeout(() => {
        //adjust post-game menu to reflect current game info
        const gameMenuText = isVictory ? `You guessed the word: ` : `The correct word was: `
        gameMenu.querySelector('h4').innerText = `${isVictory ? 'You Win!' : 'Game Over'}`
        gameMenu.querySelector('p').innerHTML = `${gameMenuText} <b>${randomWordEl}</b>`
        gameMenu.classList.add('show')
    }, 300)
}

function initGame(button, clickedLetter) {
    //is the clickedLetter within the randomly selected word
    if(randomWordEl.includes(clickedLetter)) {
        //show correct letters on the word display
        [...randomWordEl].forEach((letter, idx) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter)
                wordDisplayEl.querySelectorAll('li')[idx].innerText = letter
                wordDisplayEl.querySelectorAll('li')[idx].classList.add('guessed')
            }
        })
    } else {
        // update wrongGuesses when something is guessed incorrectly, dimenish img opacity .1 per wrong guess
        wrongGuesses++
        console.log(parseFloat(basketballManImageEl.style.opacity))
        basketballManImageEl.style.opacity = parseFloat(basketballManImageEl.style.opacity) - .1
    }
    button.disabled = true
    guessesEl.innerText = `${wrongGuesses} / ${maxGuesses}`
    // ends game if either of the conditions are met
    if(wrongGuesses === maxGuesses) return gameOver(false)
    if(correctLetters.length === randomWordEl.length) return gameOver(true)
}

function render() {
    renderRandomWord()
    renderKeyboard()
}

function renderKeyboard() {
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement('button')
        button.innerText = String.fromCharCode(i)
        keyboardEl.appendChild(button)
        button.addEventListener('click', evt => initGame(evt.target, String.fromCharCode(i)))
    }
}

function renderRandomWord() {
    randomWordEl = wordChoices[Math.floor(Math.random() * wordChoices.length)]
    console.log(randomWordEl)
    resetGame()
}

function resetGame() {
    //resetting game and all variables
    correctLetters = []
    wrongGuesses = 0
    guessesEl.innerText = `${wrongGuesses} / ${maxGuesses}`
    keyboardEl.querySelectorAll('button').forEach((btn) => btn.disabled = false)
    wordDisplayEl.innerHTML = randomWordEl.split('').map(() => '<li class="letter"></li>').join('')
    gameMenu.classList.remove('show')
}