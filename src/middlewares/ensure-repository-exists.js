const repositoriesDb = require("../db/repositories.db");

module.exports = (req, res, next) => {
  const { context } = req;
  const { id } = req.params;

  const repository = repositoriesDb.findById(id);

  if (!repository) {
    return res.status(404).json({ error: "Repository not found" });
  }

  context.set("repository", repository);
  next();
};
