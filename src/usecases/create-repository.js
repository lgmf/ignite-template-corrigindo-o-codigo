const repositoriesRepository = require("../repositories/repositories");

class CreateRepositoryUseCase {
  execute({ title, url, techs }) {
    const repository = repositoriesRepository.create({ title, url, techs });
    return repository;
  }
}

module.exports = new CreateRepositoryUseCase();
