
// keyboard pressed pleyar

function keyBoardKeyUpEvent(event){
    const playerPressed = event.key;

    // stop the game Esc button click
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const alphabetDisplay = document.getElementById('display-alphabet');
    const currentAlphabet = alphabetDisplay.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    if(playerPressed === expectedAlphabet){
        const currentScore = geteTextElementValuById('current-score');
        const newScore = currentScore + 1;
        setTextElementValuById('current-score', newScore);

        removeBacground(playerPressed);
        continueGame();
    }
    else{
        const currentLife = geteTextElementValuById('current-life');
        const newLife = currentLife - 1;
        setTextElementValuById('current-life', newLife);
        if(newLife === 0){
            gameOver();
        }
    }   
}

document.addEventListener('keyup', keyBoardKeyUpEvent);


function continueGame(){
    const alphabet = geteRandomNumber();
    const alphabetDisplay = document.getElementById('display-alphabet');
    alphabetDisplay.innerText = alphabet;
    setBacground(alphabet);
}


function playGame(){
    addClassById('frist-home');
    addClassById('final-score');
    removeClassById('scond-home-screen');

    setTextElementValuById('current-score', 0);
    setTextElementValuById('current-life', 5);

    continueGame();
}

function gameOver(){
    addClassById('scond-home-screen');
    removeClassById('final-score');
    const lastScore = geteTextElementValuById('current-score');
    setTextElementValuById('game-score', lastScore);
    const currentalphabet = geteElementTextById('display-alphabet');
    removeBacground(currentalphabet);
}