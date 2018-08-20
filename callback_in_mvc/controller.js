const Model = require('./model');
const View = require('./view');

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  index() {
    this.model.readData(this.view.readDataErr, this.view.readDataSuccess);
  }

  addData(name) {
    this.model.addData(name, this.cbReadDataErr);
  }

  cbReadDataErr(err) {
    this.view.readDataErr(err);
  }

  cbReadDataSuccess(data) {
    this.view.readDataSuccess(data, null);
  }
}

const controller = new Controller();
// controller.index();
controller.addData('budi');