const repositoriesRepository = require("../repositories/repositories");

module.exports = (req, res, next) => {
  const { context } = req;
  const { id } = req.params;

  const repository = repositoriesRepository.findById(id);

  if (!repository) {
    return res.status(404).json({ error: "Repository not found" });
  }

  context.set("repository", repository);
  next();
};
