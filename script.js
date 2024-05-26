
// BASIC ROOM SELECTION
const bPlus = document.querySelector('#bplus');
const bMinus = document.querySelector('#bminus');
let bRate = document.querySelector('.brate');
let bRoom = document.querySelector('#broom');
let thanks = document.querySelector('#bthanks');
const bSignup = document.querySelector('#signup-basic');


let bRoomNumber = 1;

bPlus.addEventListener("click", () => {
    if (bRoomNumber < 10) {
        bRoomNumber += 1;
        bRate.innerHTML = 199 * bRoomNumber;
        bRoom.innerHTML = bRoomNumber + " Room";     
    }
});

bMinus.addEventListener("click", () => {
    if (bRoomNumber > 1) {
        bRoomNumber -= 1;
        bRate.innerHTML = 199 * bRoomNumber;
        bRoom.innerHTML = bRoomNumber + " Room";
    }
});

// Sign Up Button click for BASIC
bSignup.addEventListener("click", () =>{
    bthanks.style.display = 'block';
    bthanks.innerHTML= "Thanks for Selecting BASIC " + bRoomNumber +" room";
})

// PRO ROOM SELECTION

const pPlus = document.querySelector('#pplus');
const pMinus = document.querySelector('#pminus');
let pRate = document.querySelector('.prate');
let pRoom = document.querySelector('#proom');
let pthanks = document.querySelector('#pthanks');
const pSignup = document.querySelector('#signup-pro');


let pRoomNumber = 1;

pPlus.addEventListener("click", () => {
    if (pRoomNumber < 10) {
        pRoomNumber += 1;
        pRate.innerHTML = 249 * pRoomNumber;
        pRoom.innerHTML = pRoomNumber + " Room";
        
    }
});

pMinus.addEventListener("click", () => {
    if (pRoomNumber > 1) {
        pRoomNumber -= 1;
        pRate.innerHTML = 249 * pRoomNumber;
        pRoom.innerHTML = pRoomNumber + " Room";
    }
});

// Sign Up Button click for PRO
pSignup.addEventListener("click", () =>{
    pthanks.style.display = 'block';
    pthanks.innerHTML= "Thanks for Selecting PRO " + pRoomNumber +" room";
})


