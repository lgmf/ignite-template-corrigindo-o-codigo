const repositoriesRepository = require("../repositories/repositories");

class RemoveRepositoryUseCase {
  execute(id) {
    repositoriesRepository.remove(id);
  }
}

module.exports = new RemoveRepositoryUseCase();
