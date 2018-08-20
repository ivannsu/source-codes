const fs = require('fs');

class Model {
  constructor() {
    this.filename = './data.json';
  }

  addData(name, cbError) {
    let objOption = {
      newData: {
        name: name
      },
      filename: this.filename
    }
    this.readData(cbError, this.writeData, objOption);
  }

  readData(cbError, cbSuccess, objOption) {
    fs.readFile(this.filename, (err, data) => {
      if(err) {
        cbError(err);
      } else {
        cbSuccess(JSON.parse(data), objOption);
      }
    });
  }

  writeData(data, objOption) {
    data.push(objOption.newData);

    fs.writeFile(objOption.filename, JSON.stringify(data, null, ' '), (err) => {
      if(err) {
        console.log(err, '<== ERROR WRITE DATA');
      }
    });
  }

}

module.exports = Model;