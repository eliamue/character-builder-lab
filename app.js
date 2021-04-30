// import functions and grab DOM elements
import {
    getLawfulImage,
    getNeutralImage,
    getChaoticImage,    
} from './utils.js';
// initialize state

// set event listeners to update state and DOM

//change name
const nameInput = document.getElementById('name');
const nButton = document.getElementById('nameButton');
const nameDisplay = document.getElementById('ndisplay');
nButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
});

//change gender
const genderInput = document.getElementById('gender');
const genderButton = document.getElementById('genderButton');
const genderDisplay = document.getElementById('gdisplay');
genderButton.addEventListener('click', () => {
    genderDisplay.textContent = genderInput.value;
});

//change race
const raceDropdown = document.getElementById('race-dropdown');
const raceButton = document.getElementById('raceButton');
const raceDisplay = document.getElementById('rdisplay');
raceButton.addEventListener('click', () => {
    raceDisplay.textContent = raceDropdown.value;
});

//change class
const classDropdown = document.getElementById('class-dropdown');
const classButton = document.getElementById('classButton');
const classDisplay = document.getElementById('cdisplay');
classButton.addEventListener('click', () => {
    classDisplay.textContent = classDropdown.value;
});

// lawfulgood pic display button
//function showPicture() {
 //   var img = document.getElementById('lgpic');
  //  img.src = './assets/lawfulgood.jpg';
   // img.style.display = 'block';
//}
//const lgButton = document.getElementById('lawful-good-button');
//lgButton.addEventListener('click', () => {
 //   showPicture();
//});

// lawful
const lawfulInput = document.getElementById ('lawful-input');
const lawButton = document.getElementById ('lawful-button');
const lawfulImage = document.getElementById('lawful-image');
//neutral
const neutralInput = document.getElementById ('neutral-input');
const neuButton = document.getElementById ('neutral-button');
const neutralImage = document.getElementById('neutral-image');
//chaotic
const chaoticInput = document.getElementById ('chaotic-input');
const chaButton = document.getElementById ('chaotic-button');
const chaoticImage = document.getElementById('chaotic-image');


//set event listeners to update state & DOM

//lawful
lawButton.addEventListener('click', () => {
    const lawfulLevel = lawfulInput.value;
    const lawfulUrl = getLawfulImage(lawfulLevel);
    lawfulImage.src = lawfulUrl;
});
//neutral
neuButton.addEventListener('click', () => {
    const neutralLevel = neutralInput.value;
    const neutralUrl = getNeutralImage(neutralLevel);
    neutralImage.src = neutralUrl;
});
//chaotic
chaButton.addEventListener('click', () => {
    const chaoticLevel = chaoticInput.value;
    const chaoticUrl = getChaoticImage(chaoticLevel);
    chaoticImage.src = chaoticUrl;
});