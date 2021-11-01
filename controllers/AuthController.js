export default class AuthController {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
    displayPage () {
        const path = window.location.hash.substring(1);
        return this.view.getHtml(path);
      }

    onRender() {
        this.view.onRender();
    }
}
