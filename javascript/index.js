function addClassById (elementId){
    const fristSection = document.getElementById(elementId);
    fristSection.classList.add('hidden')
}


function removeClassById (elementId){
    const scondSection = document.getElementById(elementId);
     scondSection.classList.remove('hidden')
}

function geteRandomNumber(){
    const simpleString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = simpleString.split('');
    const randomNumber = Math.random()* 25;
    const finalIndex = Math.round(randomNumber);
    const alphabet = alphabets[finalIndex];
    return alphabet;
}