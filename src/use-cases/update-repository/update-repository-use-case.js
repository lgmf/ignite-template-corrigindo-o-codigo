const repositoriesRepository = require("../../repositories/repositories");

class UpdateRepositoryUseCase {
  execute(id, { title, url, techs }) {
    const repository = repositoriesRepository.update(id, { title, url, techs });
    return repository;
  }
}

module.exports = new UpdateRepositoryUseCase();
