function continuePlay(){
    const alphabet = geteRandomNumber();
    const alphabetDisplay = document.getElementById('display-alphabet');
    alphabetDisplay.innerText = alphabet;
}


function playGame(){
    addClassById('frist-home');
    removeClassById('scond-home-screen');
    continuePlay();
}