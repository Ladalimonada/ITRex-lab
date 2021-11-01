import SignIn from "../components/SignIn.js";
import SignUp from "../components/SignUp.js";
import RestorePassword from "../components/RestorePassword.js";
import RestoredPassword from "../components/RestoredPassword.js";


const authComponents = {
    "sign-in": SignIn,
    "sign-up": SignUp,
    "restore-password": RestorePassword,
    "restored-password": RestoredPassword
}

export default class AuthLayout {
    setComponent(path) {
        const Component = new authComponents[path];
        this.Component = Component;
    }
    displayAuthComponent() {
        return this.Component.getHtml();
    }
    getHtml(path) {
        this.setComponent(path)
        return `
        <div class="wrapper">
        ${this.displayAuthComponent()}
        </div>
    `;
    }
    onRender() {
        this.Component.validate && this.Component.validate();
        this.Component.togglePasswordVisibility && this.Component.togglePasswordVisibility();

    }
}