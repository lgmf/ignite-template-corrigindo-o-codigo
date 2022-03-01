const BaseModel = require("./base");

class RepositoryModel extends BaseModel {
  constructor({ title, url, techs }) {
    super();

    this.title = title;
    this.url = url;
    this.techs = techs;
    this.likes = 0;
  }
}

module.exports = RepositoryModel;
