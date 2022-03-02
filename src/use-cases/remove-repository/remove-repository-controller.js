const removeRepositoryUseCase = require("./remove-repository-use-case");

class RemoveRepositoryController {
  handle(request, response) {
    const { id } = request.params;
    removeRepositoryUseCase.execute(id);
    return response.status(204).send();
  }
}

module.exports = new RemoveRepositoryController();
