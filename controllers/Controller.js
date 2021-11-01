export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
    displayPage () {
        return this.view.getHtml(this.model.listOfPatients);
      }

}

