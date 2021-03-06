//BBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//RED MESSAGING

//select HTML elements
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const submit = document.querySelector('.submit-btn')
const redMessage = document.querySelector('.red-message')
const submitText = document.querySelector('.submit-text')
const check = document.querySelector('#check-icon')

//Displaying the error message
submit.addEventListener("click", submitClick)
function submitClick() {
    if (email.value === "" || name.value === "" || number.value === "" || message.value === "") {
        redMessage.style.display = "block"
        submitText.textContent = "Submit";
        submit.style.width = "80px";
        check.style.display = "none";
    }
    else {
        redMessage.style.display = "none"
        submitText.textContent = "Submitted";
        submit.style.width = "120px";
        check.style.display = "block";
        check.style.padding="5px";
    }
}


//Answering the riddle

//Select HTML element
const riddleBtn = document.querySelector('#our-founder-riddle-toggle')
console.log("Button answer riddle =", riddleBtn)
const answer = document.querySelector('.answer-riddle')
console.log("answer=", answer)

//Displaying the answer
riddleBtn.addEventListener("click", submitClickTwo)
function submitClickTwo() {
    answer.classList.add("show-answer-riddle");
}


//SHOPPING CLASSES

//Selecting HTML elements
const plus=document.querySelectorAll(".plus");
console.log("plus =",plus)
const greenMessage=document.querySelector(".classes-message-background");
console.log("message =",greenMessage)
const quant=document.querySelector(".quant");
console.log("quantity=",quant)

//Incrementing quantity
function incrementation(){
    while(quant<3){
        quant.value++
    }
}
    for( let i=0; i < plus.length; i++){
    plus[i].addEventListener('click', incrementation)
    function incrementation(){
        quant.value++
        plus[i].style.opacity="0.5"
        plus[i].removeEventListener('click',incrementation)
        }
    }

    