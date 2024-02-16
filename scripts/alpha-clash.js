// function play(){
//     //hide the home screen. to hide the screen add the class hidden to the home section.
// const homeSection= document. getElementById('home-screen');
// homeSection.classList.add('hidden');
//     //show playground

//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

// function continueGame(){
//     //step-1: generate a random table 

// }
function continueGame(){
   //step-1: generate a random alphabet

   const alphabet= getARandomAlphabet();
   console.log('your random alphabet',alphabet);

// set randomly generated alphabet to the screen(show it)

const currentAlphabetElement= document.getElementById('current-alphabet');
currentAlphabetElement.innerText=alphabet;

 //set background color
setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('');
}