const Repository = require("../models/repository");

const repositoryMap = new Map();

class RepositoriesRepository {
  list() {
    return Array.from(repositoryMap.values());
  }

  findById(id) {
    return repositoryMap.get(id);
  }

  create({ title, url, techs }) {
    const repositoryModel = new Repository({ title, url, techs });
    repositoryMap.set(repositoryModel.id, repositoryModel);
    return repositoryModel;
  }

  update(id, updatePatch) {
    const repository = this.findById(id);

    if (!repository) {
      return;
    }

    const updated = {
      ...repository,
      ...updatePatch,
    };

    repositoryMap.set(id, updated);

    return updated;
  }

  remove(id) {
    repositoryMap.delete(id);
  }
}

module.exports = new RepositoriesRepository();
