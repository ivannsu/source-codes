class View {
  constructor() {

  }

  readDataErr(err) {
    throw err;
  }

  readDataSuccess(data) {
    data.forEach((obj) => {
      console.log(`- ${obj.name}`);
    });
  }
}

module.exports = View;