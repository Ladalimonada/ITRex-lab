import { validateForm } from "../../../utils/validation.js";

export default class RestorePassword {
    validate() {
        const form = document.getElementsByTagName('form');
        form[0].addEventListener('submit', e => {
            e.preventDefault();
        })
        validateForm();
    }
    getHtml() {
        return `
            <div class="container container__restore-password">
                <div class="title-container">
                    <a href="#sign-in">
                        <img src='./source/img/angle-left-b.png'>
                    </a>
                    <h2 class="title title__restore-password">Restore Password</h2>
                </div>
                <p class="text__restore-password">Please use your email address, and we’ll send you the link to reset your
                    password</p>
                <form class="form-restore">
                    <input class="input_email" type="text" name="email" placeholder="Email" required>
                    <p class="error-message" id="email-error">Email contains unsupported characters</p>
                </form>
                <div>
                    <a href="#restored-password">
                        <button class="form-button button-reset">
                            <span>Sent Reset Link</span>
                        </button>
                    </a>
                </div>
            </div>
 `
    }
}


