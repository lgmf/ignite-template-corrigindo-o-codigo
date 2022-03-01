const { v4: uuid } = require("uuid");

class BaseModel {
  constructor() {
    this.id = uuid();
  }
}

module.exports = BaseModel;
