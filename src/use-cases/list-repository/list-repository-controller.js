const listRepositoryUseCase = require("./list-repository-use-case");

class ListRepositoryController {
  handle(request, response) {
    const repositories = listRepositoryUseCase.execute();
    return response.json(repositories);
  }
}

module.exports = new ListRepositoryController();
