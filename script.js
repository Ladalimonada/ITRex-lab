let signUpBlock = document.querySelector('.container__sign-up');
let signInBlock = document.querySelector('.container__sign-in');
let restorePassBlock = document.querySelector('.container__restore-password');
let restoredPassBlock = document.querySelector('.container__restored-password');

let signInButton = document.querySelector('.button-sign-in');
let signUpButton = document.querySelector('.button-sign-up');
let forgotPassButton = document.querySelector('.button-forgot');
let resetButton = document.querySelector('.button-reset');

let backRestoreButton = document.querySelector('.back-restore');
let backRestoredButton = document.querySelector('.back-restored');


let blockSetter = function (event) {
    if (event.currentTarget == signInButton) {
        signUpBlock.style.display = "none";
        signInBlock.style.display = "block";
    } else if (event.currentTarget == signUpButton) {
        signUpBlock.style.display = "block";
        signInBlock.style.display = "none";
    } else if (event.currentTarget == forgotPassButton) {
        signUpBlock.style.display = "none";
        signInBlock.style.display = "none";
        restorePassBlock.style.display = "block";
    } else if (event.currentTarget == resetButton) {
        signUpBlock.style.display = "none";
        signInBlock.style.display = "none";
        restorePassBlock.style.display = "none";
        restoredPassBlock.style.display = "block";
    } else if (event.currentTarget == backRestoreButton) {
        restorePassBlock.style.display = "none";
        signInBlock.style.display = "block";
    } else if (event.currentTarget == backRestoredButton) {
        restoredPassBlock.style.display = "none";
        signInBlock.style.display = "block";
    }
}

signInButton.addEventListener("click", blockSetter);
signUpButton.addEventListener("click", blockSetter);
forgotPassButton.addEventListener("click", blockSetter);
resetButton.addEventListener("click", blockSetter);

backRestoredButton.addEventListener("click", blockSetter);
backRestoreButton.addEventListener("click", blockSetter);