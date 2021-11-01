export default class AuthController {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
    displayPage () {
        const URL = window.location.hash.substring(1);
        return this.view.getHtml(URL);
      }

    onRender() {
        this.view.onRender();
    }
}
