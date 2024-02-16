function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
  const element=document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}




function getARandomAlphabet()
{ 
    //get and create alphabet
const alphabetString='abcdefghijklmnopqrstuvwxyz'
const alphabets=alphabetString.split('');

//get a random index between 0 to 25  

const randomNumber=Math.random()*25;
const index=Math.round(randomNumber);


const alphabet=alphabets[index];
//console.log(index , alphabet);
return alphabet;
}