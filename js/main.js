  /*----- constants -----*/
const wordChoices = [
    'basketball', 'score', 'coach', 'halfcourt', 'court', 'block', 
    'guard', 'press', 'point', 'backcourt', 'player', 'center', 'shooter', 
    'hoop', 'net', ''
]
// console.log(wordChoices)
  /*----- state variables -----*/
let winner // guessed correctly/incorrectly
    
  /*----- cached elements  -----*/
const keyboardEl = document.querySelector('.keyboard-selector')
const playAgainBtn = document.querySelector('.play-again')
const wordDisplayEl = document.querySelector('.word-display')
/*----- event listeners -----*/

playAgainBtn.addEventListener('click', init)
/*----- functions -----*/
init()
  
function init() {
      render()
}
    
function renderRandomWord() {
        const randomWordEl = wordChoices[Math.floor(Math.random() * wordChoices.length)]
        wordDisplayEl.innerHTML = randomWordEl.split('').map(() => '<li class="letter"></li>').join('')
        console.log(randomWordEl)
}
    
function renderKeyboard() {
        for (let i = 97; i <= 122; i++) {
            const button = document.createElement('button')
            button.innerText = String.fromCharCode(i)
            keyboardEl.appendChild(button)
        }
}
  
function render() {
    renderRandomWord()
    renderKeyboard()
}


/*----- unknown filing -----*/

