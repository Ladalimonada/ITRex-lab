import { validateForm } from "../../../utils/validation.js";
import { togglePasswordVisibility } from "../../../utils/passwordVisibility.js"

export default class SignIn {
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
        <div class="container container__sign-in">
            <h2 class="title">Sign In</h2>
            <form class="form-sign-up">
                <input class="input_email" type="text" name="email" placeholder="Email" required>
                <p class="error-message" id="email-error">Email contains unsupported characters</p>
                <div class="form-container">
                    <input class="input_password" type="text" name="password" placeholder="Password" required>
                    <button class="show-hide-pass">
                        <img src="./source/img/eye-slash.png">
                    </button>
                    <p class="error-message" id="password-error">Password contains unsupported characters</p>
                </div>
            </form>
            <div>
            <a href="#patients">
            <button class="form-button form-button-sign-in">
                    <span>Sign In</span>
                </button>
                </a>
            </div>
            <a class="form-button-back button-forgot" href="#restore-password">
                <span>Forgot Password?</span>
            </a>
            <div class="footer footer-sign-in">
                <p>Dont have an account?</p>
                <a class="button-sign-up" href="#sign-up">Sign up</a>
            </div>
`
    }
}


