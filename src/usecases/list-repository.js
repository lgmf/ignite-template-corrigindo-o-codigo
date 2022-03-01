const repositoriesRepository = require("../repositories/repositories");

class ListRepositoryUseCase {
  execute() {
    const repositories = repositoriesRepository.list();
    return repositories;
  }
}

module.exports = new ListRepositoryUseCase();
