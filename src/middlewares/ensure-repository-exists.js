const findRepositoryById = require("../usecases/find-repository-by-id");

module.exports = (req, res, next) => {
  const {
    context,
    params: { id },
  } = req;

  try {
    const repository = findRepositoryById.execute(id);
    context.set("repository", repository);
    next();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
