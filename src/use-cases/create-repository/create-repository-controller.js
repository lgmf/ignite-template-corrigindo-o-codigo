const createRepositoryUseCase = require("./create-repository-use-case");

class CreateRepositoryController {
  handle(request, response) {
    const { title, url, techs } = request.body;
    const repository = createRepositoryUseCase.execute({ title, url, techs });
    return response.status(201).json(repository);
  }
}

module.exports = new CreateRepositoryController();
