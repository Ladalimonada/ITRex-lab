import { validateForm } from "../../utils/validation.js";
import { togglePasswordVisibility } from "../..//utils/passwordVisibility.js"

export default class SignUp {
    validate() {
        const form = document.getElementsByTagName('form');
        form[0].addEventListener('submit', e => {
            e.preventDefault();
        })
        validateForm();
    }
    togglePasswordVisibility() {
        const buttons = [...document.getElementsByClassName('show-hide-pass')];
        buttons.forEach(button => button.addEventListener('click', togglePasswordVisibility));
    }
   getHtml() {
    return `
        <div class="container">
            <h2 class="title">Sign Up</h2>
            <form class="form-sign-up" id="form" name="registration-form">
                <input class="input_first-name" type="text" name="firstName" placeholder="First Name" required>
                <p class="error-message" id="firstName-error">Name can't contain numbers</p>
                <input class="input_last-name" type="text" name="lastName" placeholder="Last Name" required>
                <p class="error-message" id="lastName-error">Name can't contain numbers</p>
                <input class="input_email" type="text" name="email" placeholder="Email" required>
                <p class="error-message" id="email-error">Email contains unsupported characters</p>
                <div class="form-container">
                    <input class="input_password" type="password" name="password" placeholder="Password" required>
                    <button class="show-hide-pass">
                        <img src="./source/img/eye-slash.png">
                    </button>
                    <p class="error-message" id="password-error">Password contains unsupported characters</p>
                </div>
                <div class="form-container">
                    <input class="input_password-confirm" type="password" name="passwordConfirm"
                        placeholder="Confirm Password" required>
                    <button class="show-hide-pass" >
                        <img src="./source/img/eye-slash.png">
                    </button>
                    <p class="error-message" id="passwordConfirm-error">Password contains unsupported character</p>
                </div>
                <div>
                <a href="#sign-in">
                <button type="submit" class="form-button form-button-sign-up">
                    <span>Sign Up</span>
                </button>
                </a>
            </div>
            </form>
            <div class="footer footer-sign-up">
                <p>Already have an account?</p>
                <a class="button-sign-in" href="#sign-in">Sign in</a>
            </div>
        </div>
`
   } 
}
