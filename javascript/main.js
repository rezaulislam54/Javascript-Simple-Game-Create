
// keyboard pressed pleyar

function keyBoardKeyUpEvent(event){
    const playerPressed = event.key;
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
    removeClassById('scond-home-screen');
    continueGame();
}