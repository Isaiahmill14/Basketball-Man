  /*----- constants -----*/
const wordChoices = [
    'basketball', 'score', 'coach', 'halfcourt', 'court', 'block', 
    'guard', 'press', 'point', 'backcourt', 'player', 'center', 'shooter', 
    'hoop', 'net',
]
/*----- state variables -----*/
let winner // guessed correctly/incorrectly

/*----- cached elements  -----*/
const keyboardEl = document.querySelector('.keyboard-selector')
const playAgainBtn = document.querySelector('.play-again')
const wordDisplayEl = document.querySelector('.word-display')
const randomWordEl = wordChoices[Math.floor(Math.random() * wordChoices.length)]
console.log(keyboardEl)
/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init)
/*----- functions -----*/
init()

function init() {
    render()
}

function renderRandomWord() {
    wordDisplayEl.innerHTML = randomWordEl.split('').map(() => '<li class="letter"></li>').join('')
    console.log(randomWordEl)
}

function initGame(button, clickedLetter) {
    //is the clickedLetter within the randomly selected word
    if(randomWordEl.includes(clickedLetter)) {
        //show correct letters on the word display
        [...randomWordEl].forEach((letter, idx) => {
            if (letter === clickedLetter) {
                wordDisplayEl.querySelectorAll('li')[idx].innerText = letter
                wordDisplayEl.querySelectorAll('li')[idx].classList.add('guessed')
            }
        })
        console.log(clickedLetter, 'does exist in the word')
    } else {
        
        console.log(clickedLetter, 'does not exist in the word')
    }
}

function renderKeyboard() {
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement('button')
        button.innerText = String.fromCharCode(i)
        keyboardEl.appendChild(button)
        button.addEventListener('click', evt => initGame(evt.target, String.fromCharCode(i)))
    }
}

function render() {
    renderRandomWord()
    renderKeyboard()
}


/*----- unknown filing -----*/

