import { VALIDATION_TEMPLATE } from "./constants.js";

export const validateInput = (el, regex) => {
    el.onblur = function () {
        if (!regex.test(el.value)) {
            el.classList.add('input-error');
            const errorBlock = document.getElementById(`${el.name}-error`);
            errorBlock.style = "display: block";
        }
    }
    el.onfocus = function () {
        if (el.classList.contains('input-error')) {
            el.classList.remove('input-error');
            el.closest("p").style = "display: none"
        }
    }
}

export const validateForm = () => {

    const input = [...document.getElementsByTagName('input')];

    input.forEach(el => {
        if (el.name === "firstName" || el.name === "lastName") {
            validateInput(el, VALIDATION_TEMPLATE.NAME);
        }

        if (el.name === "email") {
            validateInput(el, VALIDATION_TEMPLATE.EMAIL);
        }

        if (el.name === "password" || el.name === "passwordConfirm") {
            validateInput(el, VALIDATION_TEMPLATE.PASSWORD);
        }

        if (el.name === "passwordConfirm") {
            const errorMessage = document.getElementById('passwordConfirm-error');
            const password = document.getElementById('password')
        }
    })
}