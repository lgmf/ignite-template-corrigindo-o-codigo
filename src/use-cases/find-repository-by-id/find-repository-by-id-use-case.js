const repositoriesRepository = require("../../repositories/repositories");

class FindRepositoryByIdUseCase {
  execute(id) {
    const repository = repositoriesRepository.findById(id);

    if (!repository) {
      throw new Error("Repository not found");
    }

    return repository;
  }
}

module.exports = new FindRepositoryByIdUseCase();
