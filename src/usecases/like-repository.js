const repositoriesRepository = require("../repositories/repositories");
const findRepositoryById = require("./find-repository-by-id");

class LikeRepositoryUseCase {
  execute(id) {
    const repository = findRepositoryById.execute(id);
    repository.likes += 1;

    const updated = repositoriesRepository.update(id, repository);

    return updated;
  }
}

module.exports = new LikeRepositoryUseCase();
