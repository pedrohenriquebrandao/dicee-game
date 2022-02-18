const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

const title = document.querySelector('h1');

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg1 = "images/dice" + randomNumber1 + ".png";

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

img1.setAttribute('src', randomDiceImg1);
img2.setAttribute('src', randomDiceImg2);
    
if(randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 wins!";
} else if(randomNumber2 > randomNumber1) {
    title.innerHTML = "Player 2 wins!";
} else {
    title.innerHTML = "Draw!";
}




