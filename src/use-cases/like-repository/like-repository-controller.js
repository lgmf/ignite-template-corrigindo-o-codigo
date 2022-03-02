const likeRepositoryUseCase = require("./like-repository-use-case");

class LikeRepositoryController {
  handle(request, response) {
    const { id } = request.params;
    const repository = likeRepositoryUseCase.execute(id);
    return response.json(repository);
  }
}

module.exports = new LikeRepositoryController();
