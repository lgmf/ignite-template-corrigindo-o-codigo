const { v4: uuid } = require("uuid");

const repositoryMap = new Map();

class RepositoriesDb {
  list() {
    return Array.from(repositoryMap.values());
  }

  findById(id) {
    return repositoryMap.get(id);
  }

  create(repository) {
    const id = uuid();

    const newRepository = {
      ...repository,
      id,
      likes: 0,
    };

    repositoryMap.set(id, newRepository);

    return newRepository;
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

module.exports = new RepositoriesDb();
