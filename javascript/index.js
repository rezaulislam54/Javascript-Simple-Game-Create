//  Add class list
function addClassById (elementId){
    const fristSection = document.getElementById(elementId);
    fristSection.classList.add('hidden')
}


// remove class list
function removeClassById (elementId){
    const scondSection = document.getElementById(elementId);
     scondSection.classList.remove('hidden')
}

// current alphabet text gete

function geteElementTextById(data){
    const element = document.getElementById(data);
    const text = element.innerText;
    return text;
}

// score and life inner text get
function geteTextElementValuById(elementId){
    const elementValu = document.getElementById(elementId);
    const elementValuText = elementValu.innerText;
    const valu = parseInt(elementValuText);
    return valu;
}

// score and life value set
function setTextElementValuById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// key bacground color set
function setBacground (elementId){
    const bgId = document.getElementById(elementId);
    bgId.classList.add('bg-orange-400');
}

// key bacground color remove
function removeBacground(elementId){
    const bgId = document.getElementById(elementId);
    bgId.classList.remove('bg-orange-400');
}


// gete random number
function geteRandomNumber(){
    const simpleString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = simpleString.split('');
    const randomNumber = Math.random()* 25;
    const finalIndex = Math.round(randomNumber);
    const alphabet = alphabets[finalIndex];
    return alphabet;
}