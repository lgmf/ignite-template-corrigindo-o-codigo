const updateRepositoryUseCased = require("./update-repository-use-case");

class UpdateRepositoryController {
  handle(request, response) {
    const { id } = request.params;
    const { title, url, techs } = request.body;
    const repository = updateRepositoryUseCased.execute(id, {
      title,
      url,
      techs,
    });
    return response.json(repository);
  }
}

module.exports = new UpdateRepositoryController();
