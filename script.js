
// BASIC ROOM SELECTION
const bPlus = document.querySelector('#bplus');
const bMinus = document.querySelector('#bminus');
let bRate = document.querySelector('.brate');
let bRoom = document.querySelector('#broom');
let thanks = document.querySelector('#bthanks');


let broom = 1;

bPlus.addEventListener("click", () => {
    if (broom < 10) {
        broom += 1;
        bRate.innerHTML = 199 * broom;
        bRoom.innerHTML = broom + " Room";
        bthanks.style.display = 'block';
        bthanks.innerHTML= "Thanks for Selecting BASIC " + broom +" room"; 
    }
});

bMinus.addEventListener("click", () => {
    if (broom > 1) {
        broom -= 1;
        bRate.innerHTML = 199 * broom;
        bRoom.innerHTML = broom + " Room";
        bthanks.innerHTML = "Thank you for choosing us!"; 
    }
});

// PRO ROOM SELECTION

const pPlus = document.querySelector('#pplus');
const pMinus = document.querySelector('#pminus');
let pRate = document.querySelector('.prate');
let pRoom = document.querySelector('#proom');
let pthanks = document.querySelector('#pthanks');


let proom = 1;

pPlus.addEventListener("click", () => {
    if (proom < 10) {
        proom += 1;
        pRate.innerHTML = 249 * proom;
        pRoom.innerHTML = proom + " Room";
        pthanks.style.display = 'block';
        pthanks.innerHTML= "Thanks for Selecting PRO " + proom +" room"; 
    }
});

pMinus.addEventListener("click", () => {
    if (proom > 1) {
        proom -= 1;
        pRate.innerHTML = 249 * proom;
        pRoom.innerHTML = proom + " Room";
        pthanks.innerHTML = "Thank you for choosing us!"; 
    }
});

